import PageHeader from "@/components/PageHeader"
import BusinessCard from "@/components/BusinessCard"
import { Search, MapPin, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const businessData = [
  {
    id: 1,
    name: "Sharma Electronics",
    category: "Electronics & Appliances",
    owner: "Rajesh Sharma",
    description:
      "Complete range of electronics, home appliances, and mobile accessories with best prices and warranty.",
    address: "Shop No. 15, Market Complex, Andheri West, Mumbai",
    phone: "+91 98765 43210",
    email: "sharma.electronics@email.com",
    website: "www.sharmaelectronics.com",
    image: "/placeholder.svg?height=200&width=300&text=Electronics+Store",
    rating: 4.5,
    reviews: 128,
    established: "2010",
    services: ["Home Delivery", "Installation", "Repair Service", "EMI Available"],
    featured: true,
  },
  {
    id: 2,
    name: "Patel Catering Services",
    category: "Food & Catering",
    owner: "Meera Patel",
    description:
      "Traditional and modern catering services for weddings, parties, and corporate events with authentic flavors.",
    address: "B-204, Residential Complex, Borivali East, Mumbai",
    phone: "+91 87654 32109",
    email: "patel.catering@email.com",
    website: "www.patelcatering.com",
    image: "/placeholder.svg?height=200&width=300&text=Catering+Service",
    rating: 4.8,
    reviews: 95,
    established: "2015",
    services: ["Wedding Catering", "Corporate Events", "Home Delivery", "Custom Menus"],
    featured: true,
  },
  {
    id: 3,
    name: "Gupta Medical Store",
    category: "Healthcare & Pharmacy",
    owner: "Dr. Amit Gupta",
    description: "24/7 pharmacy with wide range of medicines, health supplements, and medical equipment.",
    address: "Ground Floor, Health Plaza, Malad West, Mumbai",
    phone: "+91 76543 21098",
    email: "gupta.medical@email.com",
    website: "www.guptamedical.com",
    image: "/placeholder.svg?height=200&width=300&text=Medical+Store",
    rating: 4.6,
    reviews: 156,
    established: "2008",
    services: ["24/7 Service", "Home Delivery", "Health Checkups", "Insurance Claims"],
    featured: false,
  },
  {
    id: 4,
    name: "Singh Automobile Workshop",
    category: "Automotive Services",
    owner: "Harpreet Singh",
    description:
      "Complete automobile repair and maintenance services for all types of vehicles with genuine spare parts.",
    address: "Plot No. 45, Industrial Area, Kandivali East, Mumbai",
    phone: "+91 65432 10987",
    email: "singh.auto@email.com",
    website: "www.singhautomobile.com",
    image: "/placeholder.svg?height=200&width=300&text=Auto+Workshop",
    rating: 4.3,
    reviews: 89,
    established: "2012",
    services: ["Car Repair", "Bike Service", "Insurance Work", "Towing Service"],
    featured: false,
  },
  {
    id: 5,
    name: "Reddy Fashion Boutique",
    category: "Fashion & Clothing",
    owner: "Priya Reddy",
    description: "Designer clothing, traditional wear, and custom tailoring services for men, women, and children.",
    address: "Shop No. 8, Fashion Street, Bandra West, Mumbai",
    phone: "+91 54321 09876",
    email: "reddy.fashion@email.com",
    website: "www.reddyfashion.com",
    image: "/placeholder.svg?height=200&width=300&text=Fashion+Boutique",
    rating: 4.7,
    reviews: 112,
    established: "2018",
    services: ["Custom Tailoring", "Designer Wear", "Alterations", "Bridal Collection"],
    featured: false,
  },
  {
    id: 6,
    name: "Mehta Construction",
    category: "Construction & Real Estate",
    owner: "Suresh Mehta",
    description: "Residential and commercial construction services with quality materials and timely completion.",
    address: "Office No. 301, Business Center, Goregaon West, Mumbai",
    phone: "+91 43210 98765",
    email: "mehta.construction@email.com",
    website: "www.mehtaconstruction.com",
    image: "/placeholder.svg?height=200&width=300&text=Construction+Company",
    rating: 4.4,
    reviews: 67,
    established: "2005",
    services: ["Residential Construction", "Commercial Projects", "Interior Design", "Property Consultation"],
    featured: false,
  },
]

export default function BusinessPage() {
  const featuredBusinesses = businessData.filter((business) => business.featured)
  const regularBusinesses = businessData.filter((business) => !business.featured)

  const categories = [...new Set(businessData.map((business) => business.category))]

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Business Directory"
        subtitle="Discover and support businesses owned by our community members"
        backgroundImage="/placeholder.svg?height=400&width=1200&text=Business+Directory"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search and Filter */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search businesses..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f75101] focus:border-transparent"
              />
            </div>
            <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f75101] focus:border-transparent">
              <option>All Categories</option>
              {categories.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </select>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Location"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f75101] focus:border-transparent"
              />
            </div>
            <Button className="bg-[#f75101] hover:bg-[#e64100] text-white">
              <Search size={20} className="mr-2" />
              Search
            </Button>
          </div>
        </div>

        {/* Featured Businesses */}
        {featuredBusinesses.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Star className="text-yellow-500 mr-3" size={32} />
              Featured Businesses
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredBusinesses.map((business) => (
                <BusinessCard key={business.id} business={business} featured={true} />
              ))}
            </div>
          </div>
        )}

        {/* All Businesses */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">All Businesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularBusinesses.map((business) => (
              <BusinessCard key={business.id} business={business} featured={false} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#f75101] to-[#e64100] rounded-2xl p-8 mt-16 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Want to list your business?</h3>
          <p className="text-lg mb-6">
            Join our business directory and connect with community members who want to support local businesses.
          </p>
          <Button className="bg-white text-[#f75101] hover:bg-gray-100 font-semibold px-8 py-3">
            List Your Business
          </Button>
        </div>
      </div>
    </div>
  )
}
