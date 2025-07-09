import PageHeader from "@/components/PageHeader"
import MemberCard from "@/components/MemberCard"
import { Search, Users, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"

const membersData = [
  {
    id: 1,
    name: "Rajesh Kumar Sharma",
    profession: "Software Engineer",
    company: "Tech Solutions Pvt Ltd",
    location: "Udaipur, Rajasthan",
    joinedYear: "2018",
    interests: ["Technology", "Cricket", "Photography"],
    image: "/placeholder.svg?height=200&width=200&text=Member+Photo",
    verified: true,
    committee: "Technology Committee",
    phone: "+91 98765 43210",
    email: "rajesh.sharma@email.com",
    bio: "Passionate about technology and community service. Active member contributing to digital initiatives.",
  },
  {
    id: 2,
    name: "Priya Patel",
    profession: "Doctor",
    company: "City Hospital",
    location: "Udaipur, Rajasthan",
    joinedYear: "2020",
    interests: ["Healthcare", "Yoga", "Classical Music"],
    image: "/placeholder.svg?height=200&width=200&text=Member+Photo",
    verified: true,
    committee: "Health Committee",
    phone: "+91 87654 32109",
    email: "priya.patel@email.com",
    bio: "Healthcare professional dedicated to community wellness and traditional healing practices.",
  },
  {
    id: 3,
    name: "Amit Gupta",
    profession: "Business Owner",
    company: "Gupta Enterprises",
    location: "Udaipur, Rajasthan",
    joinedYear: "2015",
    interests: ["Business", "Travel", "Cooking"],
    image: "/placeholder.svg?height=200&width=200&text=Member+Photo",
    verified: true,
    committee: "Executive Committee",
    phone: "+91 76543 21098",
    email: "amit.gupta@email.com",
    bio: "Entrepreneur and community leader working towards economic development of our community.",
  },
  {
    id: 4,
    name: "Sunita Singh",
    profession: "Teacher",
    company: "Modern Public School",
    location: "Udaipur, Rajasthan",
    joinedYear: "2019",
    interests: ["Education", "Literature", "Dance"],
    image: "/placeholder.svg?height=200&width=200&text=Member+Photo",
    verified: true,
    committee: "Education Committee",
    phone: "+91 65432 10987",
    email: "sunita.singh@email.com",
    bio: "Dedicated educator passionate about preserving cultural values and promoting quality education.",
  },
  {
    id: 5,
    name: "Vikram Reddy",
    profession: "Chartered Accountant",
    company: "Financial Consultants",
    location: "Udaipur, Rajasthan",
    joinedYear: "2021",
    interests: ["Finance", "Chess", "Gardening"],
    image: "/placeholder.svg?height=200&width=200&text=Member+Photo",
    verified: false,
    committee: "Finance Committee",
    phone: "+91 54321 09876",
    email: "vikram.reddy@email.com",
    bio: "Financial expert helping community members with investment planning and financial literacy.",
  },
  {
    id: 6,
    name: "Kavya Mehta",
    profession: "Artist",
    company: "Freelance",
    location: "Udaipur, Rajasthan",
    joinedYear: "2022",
    interests: ["Art", "Culture", "Social Work"],
    image: "/placeholder.svg?height=200&width=200&text=Member+Photo",
    verified: true,
    committee: "Cultural Committee",
    phone: "+91 43210 98765",
    email: "kavya.mehta@email.com",
    bio: "Professional artist promoting traditional art forms and organizing cultural workshops for community.",
  },
  {
    id: 7,
    name: "Harish Joshi",
    profession: "Engineer",
    company: "Construction Corp",
    location: "Udaipur, Rajasthan",
    joinedYear: "2017",
    interests: ["Engineering", "Sports", "Music"],
    image: "/placeholder.svg?height=200&width=200&text=Member+Photo",
    verified: true,
    committee: "Infrastructure Committee",
    phone: "+91 32109 87654",
    email: "harish.joshi@email.com",
    bio: "Civil engineer contributing to community infrastructure development and maintenance projects.",
  },
  {
    id: 8,
    name: "Meera Agarwal",
    profession: "Social Worker",
    company: "NGO Seva Foundation",
    location: "Udaipur, Rajasthan",
    joinedYear: "2016",
    interests: ["Social Service", "Environment", "Spirituality"],
    image: "/placeholder.svg?height=200&width=200&text=Member+Photo",
    verified: true,
    committee: "Service Committee",
    phone: "+91 21098 76543",
    email: "meera.agarwal@email.com",
    bio: "Dedicated social worker organizing community service initiatives and environmental awareness programs.",
  },
]

export default function MembersPage() {
  const committees = [...new Set(membersData.map((member) => member.committee))]

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Member Directory"
        subtitle="Connect with fellow community members and build lasting relationships"
        backgroundImage="/placeholder.svg?height=400&width=1200&text=Member+Directory"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <Users className="w-12 h-12 text-[#f75101] mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
            <p className="text-gray-600">Total Members</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <UserPlus className="w-12 h-12 text-[#f75101] mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 mb-2">25</h3>
            <p className="text-gray-600">New This Month</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <Users className="w-12 h-12 text-[#f75101] mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 mb-2">8</h3>
            <p className="text-gray-600">Active Committees</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <Users className="w-12 h-12 text-[#f75101] mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 mb-2">15</h3>
            <p className="text-gray-600">Cities Represented</p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search members..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f75101] focus:border-transparent"
              />
            </div>
            <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f75101] focus:border-transparent">
              <option>All Committees</option>
              {committees.map((committee) => (
                <option key={committee}>{committee}</option>
              ))}
            </select>
            <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f75101] focus:border-transparent">
              <option>All Locations</option>
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

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {membersData.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button className="bg-[#f75101] hover:bg-[#e64100] text-white px-8 py-3">Load More Members</Button>
        </div>

        {/* Join Community CTA */}
        <div className="bg-gradient-to-r from-[#f75101] to-[#e64100] rounded-2xl p-8 mt-16 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Want to join our community?</h3>
          <p className="text-lg mb-6">
            Become a member and connect with like-minded individuals who share your values and interests.
          </p>
          <Button className="bg-white text-[#f75101] hover:bg-gray-100 font-semibold px-8 py-3">
            Apply for Membership
          </Button>
        </div>
      </div>
    </div>
  )
}
