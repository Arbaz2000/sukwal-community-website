import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions)
    if (!session || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const formData = await request.formData()
    const file = formData.get("file") as File
    const category = formData.get("category") as string
    const description = formData.get("description") as string

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    // Validate file type
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif", "image/webp"]
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: "Invalid file type" }, { status: 400 })
    }

    // Validate file size (5MB limit)
    const maxSize = 5 * 1024 * 1024 // 5MB
    if (file.size > maxSize) {
      return NextResponse.json({ error: "File too large" }, { status: 400 })
    }

    // For now, just save to database without file system
    // This will help us identify if the issue is with file system or database
    const timestamp = Date.now()
    const randomString = Math.random().toString(36).substring(2, 15)
    const extension = file.name.split(".").pop() || "jpg"
    const filename = `${timestamp}-${randomString}.${extension}`

    // Save to database only
    const image = await prisma.image.create({
      data: {
        filename,
        originalName: file.name,
        path: `/uploads/${filename}`,
        size: file.size,
        mimeType: file.type,
        uploadedBy: session.user.email || "admin",
        category: category || null,
        description: description || null,
      },
    })

    return NextResponse.json({
      success: true,
      image: {
        id: image.id,
        filename: image.filename,
        path: `/api/images/${image.filename}`,
        note: "File metadata saved, but file not written to disk due to potential permission issues"
      },
    })
  } catch (error) {
    console.error("Upload error:", error)
    return NextResponse.json(
      { 
        error: "Internal server error",
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    )
  }
} 