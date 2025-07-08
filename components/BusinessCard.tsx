import { MapPin, Phone, Star, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Business {
  id: number
  name: string
  category: string
  owner: string
  description: string
  address: string
  phone: string
  email: string
  website: string
  image: string
  rating: number
  reviews: number
  established: string
  services: string[]
  featured: boolean
}

interface BusinessCardProps {
  business: Business
  featured: boolean
}

export default function BusinessCard({ business, featured }: BusinessCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`${i < Math.floor(rating) ? "text-yellow-500 fill-current" : "text-gray-300"}`}
      />
    ))
  }

  if (featured) {
    return (
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-[#f75101]/20">
        <div className="md:flex">
          <div className="md:w-1/3">
            <img
              src={business.image || "/placeholder.svg"}
              alt={business.name}
              className="w-full h-64 md:h-full object-cover"
            />
          </div>
          <div className="md:w-2/3 p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{business.name}</h3>
                <p className="text-[#f75101] font-medium">{business.category}</p>
              </div>
              <span className="px-3 py-1 bg-[#f75101] text-white rounded-full text-sm font-semibold">Featured</span>
            </div>

            <div className="flex items-center mb-3">
              <div className="flex items-center mr-3">{renderStars(business.rating)}</div>
              <span className="text-sm text-gray-600">
                {business.rating} ({business.reviews} reviews)
              </span>
            </div>

            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{business.description}</p>

            <div className="space-y-2 mb-4">
              <div className="flex items-center text-gray-500 text-sm">
                <MapPin size={14} className="mr-2 text-[#f75101] flex-shrink-0" />
                <span className="line-clamp-1">{business.address}</span>
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <Phone size={14} className="mr-2 text-[#f75101]" />
                {business.phone}
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <Clock size={14} className="mr-2 text-[#f75101]" />
                Est. {business.established}
              </div>
            </div>

            <div className="flex flex-wrap gap-1 mb-4">
              {business.services.slice(0, 3).map((service, index) => (
                <span key={index} className="px-2 py-1 bg-[#f75101]/10 text-[#f75101] rounded text-xs">
                  {service}
                </span>
              ))}
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="flex-1 border-[#f75101] text-[#f75101] hover:bg-[#f75101] hover:text-white bg-transparent"
              >
                Contact
              </Button>
              <Button size="sm" className="flex-1 bg-[#f75101] hover:bg-[#e64100] text-white">
                View Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <img src={business.image || "/placeholder.svg"} alt={business.name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">{business.name}</h3>
            <p className="text-[#f75101] font-medium text-sm">{business.category}</p>
          </div>
        </div>

        <div className="flex items-center mb-3">
          <div className="flex items-center mr-2">{renderStars(business.rating)}</div>
          <span className="text-xs text-gray-600">
            {business.rating} ({business.reviews})
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{business.description}</p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-500 text-sm">
            <MapPin size={12} className="mr-2 text-[#f75101] flex-shrink-0" />
            <span className="line-clamp-1">{business.address}</span>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <Phone size={12} className="mr-2 text-[#f75101]" />
            {business.phone}
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {business.services.slice(0, 2).map((service, index) => (
            <span key={index} className="px-2 py-1 bg-[#f75101]/10 text-[#f75101] rounded text-xs">
              {service}
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 border-[#f75101] text-[#f75101] hover:bg-[#f75101] hover:text-white bg-transparent"
          >
            Contact
          </Button>
          <Button size="sm" className="flex-1 bg-[#f75101] hover:bg-[#e64100] text-white">
            Details
          </Button>
        </div>
      </div>
    </div>
  )
}
