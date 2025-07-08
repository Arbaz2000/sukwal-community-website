import { MapPin, Briefcase, Calendar, Shield, Mail, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Member {
  id: number
  name: string
  profession: string
  company: string
  location: string
  joinedYear: string
  interests: string[]
  image: string
  verified: boolean
  committee: string
  phone: string
  email: string
  bio: string
}

interface MemberCardProps {
  member: Member
}

export default function MemberCard({ member }: MemberCardProps) {
  const getCommitteeColor = (committee: string) => {
    switch (committee) {
      case "Technology Committee":
        return "bg-blue-100 text-blue-800"
      case "Health Committee":
        return "bg-green-100 text-green-800"
      case "Executive Committee":
        return "bg-purple-100 text-purple-800"
      case "Education Committee":
        return "bg-yellow-100 text-yellow-800"
      case "Finance Committee":
        return "bg-indigo-100 text-indigo-800"
      case "Cultural Committee":
        return "bg-pink-100 text-pink-800"
      case "Infrastructure Committee":
        return "bg-gray-100 text-gray-800"
      case "Service Committee":
        return "bg-red-100 text-red-800"
      default:
        return "bg-orange-100 text-orange-800"
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative">
        <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-48 object-cover" />
        {member.verified && (
          <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
            <Shield size={12} className="mr-1" />
            Verified
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{member.name}</h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600 text-sm">
            <Briefcase size={14} className="mr-2 text-[#f75101]" />
            <span className="font-medium">{member.profession}</span>
          </div>
          <div className="text-gray-500 text-sm ml-6">{member.company}</div>
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin size={14} className="mr-2 text-[#f75101]" />
            {member.location}
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <Calendar size={14} className="mr-2 text-[#f75101]" />
            Member since {member.joinedYear}
          </div>
        </div>

        <div className="mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCommitteeColor(member.committee)}`}>
            {member.committee}
          </span>
        </div>

        <div className="mb-4">
          <p className="text-gray-600 text-sm line-clamp-2">{member.bio}</p>
        </div>

        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {member.interests.slice(0, 3).map((interest, index) => (
              <span key={index} className="px-2 py-1 bg-[#f75101]/10 text-[#f75101] rounded text-xs">
                {interest}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 border-[#f75101] text-[#f75101] hover:bg-[#f75101] hover:text-white bg-transparent"
          >
            <Mail size={14} className="mr-1" />
            Email
          </Button>
          <Button size="sm" className="flex-1 bg-[#f75101] hover:bg-[#e64100] text-white">
            <MessageCircle size={14} className="mr-1" />
            Connect
          </Button>
        </div>
      </div>
    </div>
  )
}
