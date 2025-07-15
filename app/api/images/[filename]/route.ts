import { NextRequest, NextResponse } from "next/server"
import { readFile } from "fs/promises"
import { join } from "path"
import { existsSync } from "fs"

export async function GET(
  request: NextRequest,
  { params }: { params: { filename: string } }
) {
  try {
    const { filename } = params
    
    // Construct the file path
    const filepath = join(process.cwd(), "public", "uploads", filename)
    
    // Check if file exists
    if (!existsSync(filepath)) {
      return NextResponse.json({ error: "Image not found" }, { status: 404 })
    }
    
    // Read the file
    const fileBuffer = await readFile(filepath)
    
    // Determine content type based on file extension
    const extension = filename.split('.').pop()?.toLowerCase()
    let contentType = 'image/jpeg' // default
    
    switch (extension) {
      case 'png':
        contentType = 'image/png'
        break
      case 'gif':
        contentType = 'image/gif'
        break
      case 'webp':
        contentType = 'image/webp'
        break
      case 'svg':
        contentType = 'image/svg+xml'
        break
    }
    
    // Return the image with proper headers
    return new Response(new Uint8Array(fileBuffer), {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable', // Cache for 1 year
      },
    })
  } catch (error) {
    console.error("Image serving error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
} 