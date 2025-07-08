import PageHeader from "@/components/PageHeader"
import ProfileCard from "@/components/ProfileCard"
import { Search, Heart, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const profilesData = [
  {
    id: 1,
    name: "Priya Sharma",
    age: 26,
    profession: "Software Engineer",
    education: "B.Tech Computer Science",
    location: "Mumbai, Maharashtra",
    height: "5'4\"",
    interests: ["Classical Dance", "Reading", "Cooking"],
    image: "/placeholder.svg?height=300&width=250&text=Profile+Photo",
    verified: true,
    premium: true,
    description:
      "Looking for a caring and understanding life partner who values family traditions and modern thinking.",
  },
  {
    id: 2,
    name: "Rahul Patel",
    age: 29,
    profession: "Business Analyst",
    education: "MBA Finance",
    location: "Pune, Maharashtra",
    height: "5'8\"",
    interests: ["Cricket", "Travel", "Music"],
    image: "/placeholder.svg?height=300&width=250&text=Profile+Photo",
    verified: true,
    premium: false,
    description:
      "Family-oriented person seeking a life partner who shares similar values and aspirations for the future.",
  },
  {
    id: 3,
    name: "Anjali Gupta",
    age: 24,
    profession: "Teacher",
    education: "M.Ed",
    location: "Delhi, NCR",
    height: "5'3\"",
    interests: ["Painting", "Yoga", "Gardening"],
    image: "/placeholder.svg?height=300&width=250&text=Profile+Photo",
    verified: true,
    premium: true,
    description:
      "Passionate about education and community service. Looking for someone who appreciates simple joys of life.",
  },
  {
    id: 4,
    name: "Vikram Singh",
    age: 31,
    profession: "Doctor",
    education: "MBBS, MD",
    location: "Jaipur, Rajasthan",
    height: "5'10\"",
    interests: ["Photography", "Trekking", "Social Work"],
    image: "/placeholder.svg?height=300&width=250&text=Profile+Photo",
    verified: true,
    premium: false,
    description: "Dedicated healthcare professional looking for a supportive and understanding life partner.",
  },
  {
    id: 5,
    name: "Kavya Reddy",
    age: 27,
    profession: "Marketing Manager",
    education: "MBA Marketing",
    location: "Bangalore, Karnataka",
    height: "5'5\"",
    interests: ["Dancing", "Fitness", "Movies"],
    image: "/placeholder.svg?height=300&width=250&text=Profile+Photo",
    verified: false,
    premium: true,
    description: "Creative and ambitious professional seeking a partner who values both career and family equally.",
  },
  {
    id: 6,
    name: "Arjun Mehta",
    age: 28,
    profession: "Chartered Accountant",
    education: "CA, B.Com",
    location: "Ahmedabad, Gujarat",
    height: "5'7\"",
    interests: ["Chess", "Reading", "Cooking"],
    image: "/placeholder.svg?height=300&width=250&text=Profile+Photo",
    verified: true,
    premium: false,
    description:
      "Detail-oriented professional with strong family values looking for a life partner to share life's journey.",
  },
]

export default function MatrimonyPage() {
  const premiumProfiles = profilesData.filter((profile) => profile.premium)
  const regularProfiles = profilesData.filter((profile) => !profile.premium)

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Matrimony Services"
        subtitle="Find your perfect life partner within our trusted community"
        backgroundImage="/placeholder.svg?height=400&width=1200&text=Matrimony+Services"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <Users className="w-12 h-12 text-[#f75101] mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
            <p className="text-gray-600">Active Profiles</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <Heart className="w-12 h-12 text-[#f75101] mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 mb-2">150+</h3>
            <p className="text-gray-600">Successful Matches</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <Users className="w-12 h-12 text-[#f75101] mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 mb-2">95%</h3>
            <p className="text-gray-600">Satisfaction Rate</p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search profiles..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f75101] focus:border-transparent"
              />
            </div>
            <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f75101] focus:border-transparent">
              <option>Age Range</option>
              <option>22-25</option>
              <option>26-30</option>
              <option>31-35</option>
            </select>
            <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f75101] focus:border-transparent">
              <option>Profession</option>
              <option>Engineer</option>
              <option>Doctor</option>
              <option>Teacher</option>
              <option>Business</option>
            </select>
            <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f75101] focus:border-transparent">
              <option>Location</option>
              <option>Mumbai</option>
              <option>Delhi</option>
              <option>Bangalore</option>
              <option>Pune</option>
            </select>
            <Button className="bg-[#f75101] hover:bg-[#e64100] text-white">
              <Search size={20} className="mr-2" />
              Search
            </Button>
          </div>
        </div>

        {/* Premium Profiles */}
        {premiumProfiles.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></span>
              Premium Profiles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {premiumProfiles.map((profile) => (
                <ProfileCard key={profile.id} profile={profile} />
              ))}
            </div>
          </div>
        )}

        {/* All Profiles */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">All Profiles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularProfiles.map((profile) => (
              <ProfileCard key={profile.id} profile={profile} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#f75101] to-[#e64100] rounded-2xl p-8 mt-16 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to find your life partner?</h3>
          <p className="text-lg mb-6">
            Join our matrimony service and connect with compatible matches from our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#f75101] hover:bg-gray-100 font-semibold px-8 py-3">
              Create Your Profile
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#f75101] bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
