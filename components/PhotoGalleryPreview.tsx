"use client"

import { useState } from "react"
import { Camera, Eye, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const galleryImages = [
  {
    id: 1,
    src: "/images/DSC06046.JPG",
    title: "Community Gathering 2024",
    category: "Social",
    likes: 45,
    views: 120,
  },
  {
    id: 2,
    src: "/images/DSC06049.JPG",
    title: "Cultural Celebration",
    category: "Cultural",
    likes: 32,
    views: 89,
  },
  {
    id: 3,
    src: "/images/DSC06055.JPG",
    title: "Youth Program Event",
    category: "Youth",
    likes: 67,
    views: 156,
  },
  {
    id: 4,
    src: "/images/DSC06065.JPG",
    title: "Spiritual Discourse",
    category: "Spiritual",
    likes: 28,
    views: 78,
  },
  {
    id: 5,
    src: "/images/DSC06066.JPG",
    title: "Traditional Dance Performance",
    category: "Cultural",
    likes: 89,
    views: 234,
  },
  {
    id: 6,
    src: "/images/DSC06078.JPG",
    title: "Community Service Drive",
    category: "Service",
    likes: 56,
    views: 145,
  },
]

export default function PhotoGalleryPreview() {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null)
  const router = useRouter()
  return (
    <section className="py-24 px-6 sm:px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Camera size={40} className="text-[#f75101] mr-4" />
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Photo Gallery</h2>
          </div>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Capturing precious moments and memories from our community events and gatherings
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${
                index === 0 ? "sm:col-span-2 lg:col-span-1" : index === 3 ? "lg:col-span-2" : ""
              }`}
              onMouseEnter={() => setHoveredImage(image.id)}
              onMouseLeave={() => setHoveredImage(null)}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                style={{ minHeight: "280px" }}
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 ${
                  hoveredImage === image.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-4 py-2 bg-[#f75101] rounded-full text-sm font-semibold">{image.category}</span>
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center">
                        <Heart size={18} className="mr-2" />
                        {image.likes}
                      </div>
                      <div className="flex items-center">
                        <Eye size={18} className="mr-2" />
                        {image.views}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                </div>
              </div>

              {/* Hover effect border */}
              <div
                className={`absolute inset-0 border-4 border-[#f75101] rounded-3xl transition-opacity duration-300 ${
                  hoveredImage === image.id ? "opacity-100" : "opacity-0"
                }`}
              ></div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-[#f75101] hover:bg-[#e64100] text-white px-10 py-4 text-lg font-semibold" onClick={() => router.push('/gallery')}>
            View Complete Gallery
          </Button>
        </div>
      </div>
    </section>
  )
}
