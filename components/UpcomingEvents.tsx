"use client"

import { useState } from "react"
import { Calendar, MapPin, Clock, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const events = [
  {
    id: 1,
    title: "Diwali Celebration 2024",
    date: "2024-11-12",
    time: "6:00 PM",
    location: "Community Hall, Mumbai",
    category: "Cultural",
    image: "/placeholder.svg?height=200&width=300",
    description:
      "Join us for a grand Diwali celebration with traditional performances, delicious food, and community bonding.",
  },
  {
    id: 2,
    title: "Spiritual Discourse",
    date: "2024-11-15",
    time: "7:00 PM",
    location: "Temple Premises",
    category: "Spiritual",
    image: "/placeholder.svg?height=200&width=300",
    description: "Weekly spiritual discourse on ancient wisdom and modern living.",
  },
  {
    id: 3,
    title: "Youth Cultural Program",
    date: "2024-11-20",
    time: "5:00 PM",
    location: "Community Center",
    category: "Cultural",
    image: "/placeholder.svg?height=200&width=300",
    description: "A vibrant cultural program showcasing the talents of our youth community.",
  },
  {
    id: 4,
    title: "Community Service Drive",
    date: "2024-11-25",
    time: "9:00 AM",
    location: "Various Locations",
    category: "Service",
    image: "/placeholder.svg?height=200&width=300",
    description: "Join hands in serving the community through various social service activities.",
  },
  {
    id: 5,
    title: "Traditional Cooking Workshop",
    date: "2024-12-01",
    time: "10:00 AM",
    location: "Community Kitchen",
    category: "Cultural",
    image: "/placeholder.svg?height=200&width=300",
    description: "Learn traditional recipes and cooking techniques from our elders.",
  },
]

export default function UpcomingEvents() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, events.length - 2))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, events.length - 2)) % Math.max(1, events.length - 2))
  }

  return (
    <section className="py-24 px-6 sm:px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-16">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
            <p className="text-xl lg:text-2xl text-gray-600">Don't miss out on our exciting community events</p>
          </div>

          <div className="hidden md:flex space-x-3">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full border-[#f75101] text-[#f75101] hover:bg-[#f75101] hover:text-white bg-transparent w-12 h-12"
            >
              <ChevronLeft size={24} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full border-[#f75101] text-[#f75101] hover:bg-[#f75101] hover:text-white bg-transparent w-12 h-12"
            >
              <ChevronRight size={24} />
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-8"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {events.map((event) => (
              <div key={event.id} className="w-full md:w-1/3 flex-shrink-0">
                <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="relative">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-56 object-cover"
                    />
                    <div className="absolute top-6 left-6">
                      <span
                        className={`px-4 py-2 rounded-full text-sm font-semibold ${
                          event.category === "Cultural"
                            ? "bg-purple-100 text-purple-800"
                            : event.category === "Spiritual"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-green-100 text-green-800"
                        }`}
                      >
                        {event.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{event.title}</h3>
                    <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed">{event.description}</p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-gray-500">
                        <Calendar size={18} className="mr-3 text-[#f75101]" />
                        {new Date(event.date).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                      <div className="flex items-center text-gray-500">
                        <Clock size={18} className="mr-3 text-[#f75101]" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-gray-500">
                        <MapPin size={18} className="mr-3 text-[#f75101]" />
                        {event.location}
                      </div>
                    </div>

                    <Button className="w-full bg-[#f75101] hover:bg-[#e64100] text-white py-3 text-lg font-semibold">
                      Register Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile navigation dots */}
        <div className="flex justify-center mt-12 md:hidden">
          {Array.from({ length: Math.max(1, events.length - 2) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full mx-2 transition-colors ${
                index === currentIndex ? "bg-[#f75101]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
