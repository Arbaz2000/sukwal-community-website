import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { join } from "path"
import { existsSync } from "fs"

export async function GET(request: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions)
    if (!session || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const diagnostics = {
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV,
      cwd: process.cwd(),
      uploadsDir: join(process.cwd(), "public", "uploads"),
      uploadsDirExists: existsSync(join(process.cwd(), "public", "uploads")),
      database: {
        connected: false,
        error: null as string | null
      },
      fileSystem: {
        writable: false,
        error: null as string | null
      }
    }

    // Test database connection
    try {
      await prisma.$queryRaw`SELECT 1`
      diagnostics.database.connected = true
    } catch (dbError) {
      diagnostics.database.error = dbError instanceof Error ? dbError.message : String(dbError)
    }

    // Test file system write permissions
    try {
      const testDir = join(process.cwd(), "public", "uploads", "test")
      const { writeFile, mkdir, unlink } = await import("fs/promises")
      
      // Try to create test directory
      await mkdir(testDir, { recursive: true })
      
      // Try to write a test file
      const testFile = join(testDir, "test.txt")
      await writeFile(testFile, "test")
      
      // Try to delete the test file
      await unlink(testFile)
      
      diagnostics.fileSystem.writable = true
    } catch (fsError) {
      diagnostics.fileSystem.error = fsError instanceof Error ? fsError.message : String(fsError)
    }

    return NextResponse.json(diagnostics)
  } catch (error) {
    console.error("Debug error:", error)
    return NextResponse.json(
      { 
        error: "Debug failed",
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    )
  }
} 