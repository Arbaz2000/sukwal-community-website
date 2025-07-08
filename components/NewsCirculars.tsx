"use client"

import { useState } from "react"
import { Calendar, FileText, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const newsData = [
  {
    id: 1,
    title: "Community Center Renovation Complete",
    excerpt:
      "Our community center has been beautifully renovated with modern facilities while preserving traditional aesthetics.",
    date: "2024-11-10",
    category: "Infrastructure",
    image: "/placeholder.svg?height=150&width=250",
  },
  {
    id: 2,
    title: "Annual Cultural Festival Announcement",
    excerpt:
      "Save the date for our biggest cultural celebration of the year featuring performances, food, and community bonding.",
    date: "2024-11-08",
    category: "Events",
    image: "/placeholder.svg?height=150&width=250",
  },
  {
    id: 3,
    title: "New Educational Scholarship Program",
    excerpt: "Introducing scholarships for deserving students from our community to pursue higher education.",
    date: "2024-11-05",
    category: "Education",
    image: "/placeholder.svg?height=150&width=250",
  },
]

const circularsData = [
  {
    id: 1,
    title: "Updated Community Guidelines 2024",
    description: "Important updates to community guidelines and code of conduct for all members.",
    date: "2024-11-12",
    type: "Guidelines",
    urgent: true,
  },
  {
    id: 2,
    title: "Annual Membership Fee Structure",
    description: "Details about the annual membership fees and payment procedures for 2024-25.",
    date: "2024-11-10",
    type: "Financial",
    urgent: false,
  },
  {
    id: 3,
    title: "Committee Election Notice",
    description: "Notice for upcoming committee elections and nomination procedures.",
    date: "2024-11-08",
    type: "Elections",
    urgent: true,
  },
  {
    id: 4,
    title: "Facility Booking Procedures",
    description: "Updated procedures for booking community facilities for events and gatherings.",
    date: "2024-11-05",
    type: "Procedures",
    urgent: false,
  },
]

export default function NewsCirculars() {
  const [activeTab, setActiveTab] = useState("news")

  return (
    <section className="py-24 px-6 sm:px-8 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">News & Circulars</h2>
          <p className="text-xl lg:text-2xl text-gray-600">Stay informed with the latest updates and announcements</p>
        </div>

        {/* Tab Navigation with more spacing */}
        <div className="flex justify-center mb-16">
          <div className="bg-white rounded-full p-2 shadow-lg">
            <button
              onClick={() => setActiveTab("news")}
              className={`px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
                activeTab === "news" ? "bg-[#f75101] text-white shadow-lg" : "text-gray-600 hover:text-[#f75101]"
              }`}
            >
              Latest News
            </button>
            <button
              onClick={() => setActiveTab("circulars")}
              className={`px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
                activeTab === "circulars" ? "bg-[#f75101] text-white shadow-lg" : "text-gray-600 hover:text-[#f75101]"
              }`}
            >
              Circulars
            </button>
          </div>
        </div>

        {/* Content with increased spacing */}
        <div className="transition-all duration-500">
          {activeTab === "news" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {newsData.map((news) => (
                <article
                  key={news.id}
                  className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <img src={news.image || "/placeholder.svg"} alt={news.title} className="w-full h-56 object-cover" />
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-4 py-2 bg-[#f75101]/10 text-[#f75101] rounded-full text-sm font-semibold">
                        {news.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar size={16} className="mr-2" />
                        {new Date(news.date).toLocaleDateString()}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{news.title}</h3>
                    <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">{news.excerpt}</p>
                    <Button
                      variant="outline"
                      className="w-full border-[#f75101] text-[#f75101] hover:bg-[#f75101] hover:text-white bg-transparent py-3 font-semibold"
                    >
                      Read More
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="max-w-5xl mx-auto space-y-8">
              {circularsData.map((circular) => (
                <div
                  key={circular.id}
                  className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-[#f75101]"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <FileText size={24} className="text-[#f75101] mr-3" />
                        <h3 className="text-xl font-bold text-gray-900">{circular.title}</h3>
                        {circular.urgent && (
                          <span className="ml-4 px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-semibold">
                            Urgent
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 mb-6 leading-relaxed">{circular.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-500">
                          <Calendar size={16} className="mr-2" />
                          {new Date(circular.date).toLocaleDateString()}
                          <span className="ml-6 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                            {circular.type}
                          </span>
                        </div>
                        <Button variant="ghost" size="sm" className="text-[#f75101] hover:bg-[#f75101]/10">
                          <ExternalLink size={18} className="mr-2" />
                          View
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="text-center mt-16">
          <Button className="bg-[#f75101] hover:bg-[#e64100] text-white px-10 py-4 text-lg font-semibold">
            {activeTab === "news" ? "View All News" : "View All Circulars"}
          </Button>
        </div>
      </div>
    </section>
  )
}
