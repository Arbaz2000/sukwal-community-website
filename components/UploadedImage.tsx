"use client"

import { getImageUrl } from "@/lib/client-image-utils"
import Image from "next/image"

interface UploadedImageProps {
  filename: string
  alt?: string
  className?: string
  width?: number
  height?: number
  fill?: boolean
  priority?: boolean
}

export default function UploadedImage({
  filename,
  alt = "Uploaded image",
  className = "",
  width,
  height,
  fill = false,
  priority = false,
}: UploadedImageProps) {
  const imageUrl = getImageUrl(filename)

  if (fill) {
    return (
      <div className={`relative ${className}`}>
        <Image
          src={imageUrl}
          alt={alt}
          fill
          className="object-cover"
          priority={priority}
        />
      </div>
    )
  }

  return (
    <Image
      src={imageUrl}
      alt={alt}
      width={width || 400}
      height={height || 300}
      className={className}
      priority={priority}
    />
  )
} 