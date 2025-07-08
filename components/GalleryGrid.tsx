"use client"

import { useState } from "react"
import { Heart, Eye, Calendar, Download, Share2, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GalleryImage {
  id: number
  src: string
  title: string
  category: string
  date: string
  likes: number
  views: number
  description: string
}

interface GalleryGridProps {
  images: GalleryImage[]
  viewMode: string
}

export default function GalleryGrid({ images, viewMode }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [likedImages, setLikedImages] = useState<Set<number>>(new Set())

  const handleLike = (imageId: number) => {
    setLikedImages((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(imageId)) {
        newSet.delete(imageId)
      } else {
        newSet.add(imageId)
      }
      return newSet
    })
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Festivals":
        return "bg-purple-100 text-purple-800"
      case "Cultural":
        return "bg-blue-100 text-blue-800"
      case "Spiritual":
        return "bg-green-100 text-green-800"
      case "Social":
        return "bg-yellow-100 text-yellow-800"
      case "Youth":
        return "bg-pink-100 text-pink-800"
      case "Service":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  if (viewMode === "list") {
    return (
      <div className="space-y-6">
        {images.map((image) => (
          <div
            key={image.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.title}
                  className="w-full h-64 md:h-full object-cover cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                />
              </div>
              <div className="md:w-2/3 p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(image.category)}`}>
                    {image.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {new Date(image.date).toLocaleDateString()}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{image.title}</h3>
                <p className="text-gray-600 mb-4">{image.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-gray-500">
                    <button
                      onClick={() => handleLike(image.id)}
                      className={`flex items-center space-x-1 transition-colors ${
                        likedImages.has(image.id) ? "text-red-500" : "hover:text-red-500"
                      }`}
                    >
                      <Heart size={16} className={likedImages.has(image.id) ? "fill-current" : ""} />
                      <span>{image.likes + (likedImages.has(image.id) ? 1 : 0)}</span>
                    </button>
                    <div className="flex items-center space-x-1">
                      <Eye size={16} />
                      <span>{image.views}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#f75101] text-[#f75101] hover:bg-[#f75101] hover:text-white bg-transparent"
                    >
                      <Share2 size={14} className="mr-1" />
                      Share
                    </Button>
                    <Button size="sm" className="bg-[#f75101] hover:bg-[#e64100] text-white">
                      <Download size={14} className="mr-1" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${
              index % 7 === 0 ? "sm:col-span-2 lg:col-span-1" : index % 5 === 0 ? "lg:col-span-2" : ""
            }`}
            onClick={() => setSelectedImage(image)}
            style={{
              animationDelay: `${index * 50}ms`,
            }}
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              style={{ minHeight: "250px" }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryColor(image.category)} bg-opacity-90`}
                  >
                    {image.category}
                  </span>
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="flex items-center">
                      <Heart size={14} className="mr-1" />
                      {image.likes}
                    </div>
                    <div className="flex items-center">
                      <Eye size={14} className="mr-1" />
                      {image.views}
                    </div>
                  </div>
                </div>
                <h3 className="font-bold text-sm">{image.title}</h3>
                <p className="text-xs text-white/80">{new Date(image.date).toLocaleDateString()}</p>
              </div>
            </div>

            {/* Hover effect border */}
            <div className="absolute inset-0 border-4 border-[#f75101] rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-colors"
            >
              <X size={24} />
            </button>

            <img
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white rounded-b-lg">
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(selectedImage.category)}`}
                >
                  {selectedImage.category}
                </span>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleLike(selectedImage.id)}
                    className={`flex items-center space-x-1 transition-colors ${
                      likedImages.has(selectedImage.id) ? "text-red-500" : "hover:text-red-500"
                    }`}
                  >
                    <Heart size={20} className={likedImages.has(selectedImage.id) ? "fill-current" : ""} />
                    <span>{selectedImage.likes + (likedImages.has(selectedImage.id) ? 1 : 0)}</span>
                  </button>
                  <div className="flex items-center space-x-1">
                    <Eye size={20} />
                    <span>{selectedImage.views}</span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-white/90 mb-3">{selectedImage.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/70">{new Date(selectedImage.date).toLocaleDateString()}</span>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                  >
                    <Share2 size={16} className="mr-1" />
                    Share
                  </Button>
                  <Button size="sm" className="bg-[#f75101] hover:bg-[#e64100] text-white">
                    <Download size={16} className="mr-1" />
                    Download
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
