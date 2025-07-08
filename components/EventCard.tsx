import { Calendar, Clock, MapPin, User } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Event {
  id: number
  title: string
  date: string
  time: string
  location: string
  category: string
  image: string
  description: string
  price: string
  organizer: string
}

interface EventCardProps {
  event: Event
}

export default function EventCard({ event }: EventCardProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Cultural":
        return "bg-purple-100 text-purple-800"
      case "Spiritual":
        return "bg-blue-100 text-blue-800"
      case "Service":
        return "bg-green-100 text-green-800"
      case "Administrative":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-orange-100 text-orange-800"
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative">
        <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-48 object-cover" />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(event.category)}`}>
            {event.category}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-[#f75101] text-white rounded-full text-xs font-semibold">{event.price}</span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{event.description}</p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar size={16} className="mr-2 text-[#f75101]" />
            {new Date(event.date).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <Clock size={16} className="mr-2 text-[#f75101]" />
            {event.time}
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <MapPin size={16} className="mr-2 text-[#f75101]" />
            {event.location}
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <User size={16} className="mr-2 text-[#f75101]" />
            {event.organizer}
          </div>
        </div>

        <Button className="w-full bg-[#f75101] hover:bg-[#e64100] text-white">Register Now</Button>
      </div>
    </div>
  )
}
