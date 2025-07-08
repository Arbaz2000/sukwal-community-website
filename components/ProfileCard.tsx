import { MapPin, GraduationCap, Briefcase, Heart, MessageCircle, Shield, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Profile {
  id: number
  name: string
  age: number
  profession: string
  education: string
  location: string
  height: string
  interests: string[]
  image: string
  verified: boolean
  premium: boolean
  description: string
}

interface ProfileCardProps {
  profile: Profile
}

export default function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
        profile.premium ? "ring-2 ring-yellow-400" : ""
      }`}
    >
      <div className="relative">
        <img src={profile.image || "/placeholder.svg"} alt={profile.name} className="w-full h-64 object-cover" />
        <div className="absolute top-4 left-4 flex gap-2">
          {profile.verified && (
            <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
              <Shield size={12} className="mr-1" />
              Verified
            </div>
          )}
          {profile.premium && (
            <div className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
              <Star size={12} className="mr-1" />
              Premium
            </div>
          )}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900">{profile.name}</h3>
          <span className="text-lg font-semibold text-[#f75101]">{profile.age} years</span>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600 text-sm">
            <Briefcase size={14} className="mr-2 text-[#f75101]" />
            {profile.profession}
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <GraduationCap size={14} className="mr-2 text-[#f75101]" />
            {profile.education}
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin size={14} className="mr-2 text-[#f75101]" />
            {profile.location}
          </div>
        </div>

        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-700 mb-2">Height: {profile.height}</p>
          <div className="flex flex-wrap gap-1">
            {profile.interests.slice(0, 3).map((interest, index) => (
              <span key={index} className="px-2 py-1 bg-[#f75101]/10 text-[#f75101] rounded-full text-xs">
                {interest}
              </span>
            ))}
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{profile.description}</p>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 border-[#f75101] text-[#f75101] hover:bg-[#f75101] hover:text-white bg-transparent"
          >
            <Heart size={16} className="mr-1" />
            Interest
          </Button>
          <Button size="sm" className="flex-1 bg-[#f75101] hover:bg-[#e64100] text-white">
            <MessageCircle size={16} className="mr-1" />
            Message
          </Button>
        </div>
      </div>
    </div>
  )
}
