"use client"

import { useState } from "react"
import PageHeader from "@/components/PageHeader"
import GalleryGrid from "@/components/GalleryGrid"
import { Search, Grid, List } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = ["All", "Festivals", "Cultural", "Spiritual", "Social", "Youth", "Service"]

const galleryImages = [
  {
    id: 1,
    src: "/images/DSC06046.JPG",
    title: "Community Gathering",
    category: "Social",
    date: "2024-01-15",
    likes: 45,
    views: 120,
    description: "Community members coming together for a special gathering and celebration",
  },
  {
    id: 2,
    src: "/images/DSC06049.JPG",
    title: "Cultural Celebration",
    category: "Cultural",
    date: "2024-01-10",
    likes: 32,
    views: 89,
    description: "Vibrant cultural celebration showcasing traditional customs and practices",
  },
  {
    id: 3,
    src: "/images/DSC06055.JPG",
    title: "Festival Preparations",
    category: "Festivals",
    date: "2024-01-05",
    likes: 67,
    views: 156,
    description: "Community members preparing for an upcoming festival celebration",
  },
  {
    id: 4,
    src: "/images/DSC06065.JPG",
    title: "Spiritual Gathering",
    category: "Spiritual",
    date: "2023-12-25",
    likes: 28,
    views: 78,
    description: "Peaceful spiritual gathering and prayer session with community members",
  },
  {
    id: 5,
    src: "/images/DSC06066.JPG",
    title: "Youth Program",
    category: "Youth",
    date: "2023-12-20",
    likes: 89,
    views: 234,
    description: "Engaging youth program fostering community spirit and cultural values",
  },
  {
    id: 6,
    src: "/images/DSC06078.JPG",
    title: "Community Service",
    category: "Service",
    date: "2023-12-15",
    likes: 56,
    views: 145,
    description: "Community service initiative bringing people together for a common cause",
  },
  {
    id: 7,
    src: "/images/DSC06082.JPG",
    title: "Traditional Ceremony",
    category: "Cultural",
    date: "2023-12-10",
    likes: 78,
    views: 198,
    description: "Beautiful traditional ceremony preserving cultural heritage and customs",
  },
  {
    id: 8,
    src: "/images/DSC06097.JPG",
    title: "Community Meeting",
    category: "Social",
    date: "2023-12-05",
    likes: 43,
    views: 112,
    description: "Regular community meeting discussing important matters and future plans",
  },
  {
    id: 9,
    src: "/images/DSC06111.JPG",
    title: "Cultural Performance",
    category: "Cultural",
    date: "2023-11-30",
    likes: 65,
    views: 167,
    description: "Captivating cultural performance showcasing artistic talents and traditions",
  },
  {
    id: 10,
    src: "/images/DSC06128.JPG",
    title: "Spiritual Discourse",
    category: "Spiritual",
    date: "2023-11-25",
    likes: 39,
    views: 95,
    description: "Enlightening spiritual discourse session with community members",
  },
  {
    id: 11,
    src: "/images/DSC06166.JPG",
    title: "Youth Activities",
    category: "Youth",
    date: "2023-11-20",
    likes: 52,
    views: 134,
    description: "Dynamic youth activities promoting leadership and community engagement",
  },
  {
    id: 12,
    src: "/images/IMG_0112.JPG",
    title: "Community Celebration",
    category: "Festivals",
    date: "2023-11-15",
    likes: 41,
    views: 108,
    description: "Joyful community celebration marking special occasions and achievements",
  },
  {
    id: 13,
    src: "/images/IMG_0114.JPG",
    title: "Cultural Workshop",
    category: "Cultural",
    date: "2023-11-10",
    likes: 38,
    views: 92,
    description: "Educational cultural workshop teaching traditional arts and crafts",
  },
  {
    id: 14,
    src: "/images/IMG_0125.JPG",
    title: "Community Outreach",
    category: "Service",
    date: "2023-11-05",
    likes: 47,
    views: 125,
    description: "Community outreach program helping those in need and building connections",
  },
  {
    id: 15,
    src: "/images/IMG_0198.JPG",
    title: "Traditional Festival",
    category: "Festivals",
    date: "2023-10-30",
    likes: 73,
    views: 189,
    description: "Traditional festival celebration with music, dance, and cultural activities",
  },
  {
    id: 16,
    src: "/images/IMG_0199.JPG",
    title: "Community Bonding",
    category: "Social",
    date: "2023-10-25",
    likes: 61,
    views: 147,
    description: "Strengthening community bonds through shared activities and celebrations",
  },
  {
    id: 17,
    src: "/images/IMG_0204.JPG",
    title: "Cultural Heritage",
    category: "Cultural",
    date: "2023-10-20",
    likes: 55,
    views: 133,
    description: "Preserving and celebrating our rich cultural heritage and traditions",
  },
  {
    id: 18,
    src: "/images/WhatsApp Image 2025-07-08 at 19.21.55_4519b822.jpg",
    title: "Shivling Darshan",
    category: "Spiritual",
    date: "2025-07-08",
    likes: 0,
    views: 0,
    description: "A sacred view of the beautifully adorned Shivling and Guru idol in the temple.",
  },
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [viewMode, setViewMode] = useState("grid")

  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((image) => image.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Photo Gallery"
        subtitle="Capturing precious moments and memories from our community"
        backgroundImage="/placeholder.svg?height=400&width=1200&text=Photo+Gallery"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mb-12">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[#f75101] text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-100 shadow-md"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search and View Controls */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search photos..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f75101] focus:border-transparent"
              />
            </div>
            <div className="flex bg-white rounded-lg shadow-md">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-l-lg transition-colors ${
                  viewMode === "grid" ? "bg-[#f75101] text-white" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-r-lg transition-colors ${
                  viewMode === "list" ? "bg-[#f75101] text-white" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <GalleryGrid images={filteredImages} viewMode={viewMode} />

        {/* Load More */}
        <div className="text-center mt-12">
          <Button className="bg-[#f75101] hover:bg-[#e64100] text-white px-8 py-3">Load More Photos</Button>
        </div>
      </div>
    </div>
  )
}
