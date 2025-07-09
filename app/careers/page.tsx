import PageHeader from "@/components/PageHeader"
import JobCard from "@/components/JobCard"
import { Search, MapPin, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"

const jobsData = [
  {
    id: 1,
    title: "Community Event Coordinator",
    company: "Sukhwal Community Center",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    experience: "2-4 years",
    salary: "₹3,00,000 - ₹4,50,000",
    description:
      "We are looking for an enthusiastic Event Coordinator to organize and manage community events, cultural programs, and social gatherings.",
    requirements: [
      "Bachelor's degree in Event Management or related field",
      "2+ years of event planning experience",
      "Strong organizational and communication skills",
      "Knowledge of local culture and traditions",
      "Proficiency in Hindi and English",
    ],
    postedDate: "2024-11-10",
    deadline: "2024-12-10",
    category: "Administration",
    featured: true,
  },
  {
    id: 2,
    title: "Youth Program Manager",
    company: "Sukhwal Youth Committee",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    experience: "3-5 years",
    salary: "₹4,00,000 - ₹6,00,000",
    description:
      "Lead and develop youth programs, mentorship initiatives, and educational workshops for community members aged 16-30.",
    requirements: [
      "Master's degree in Social Work or Education",
      "Experience working with youth programs",
      "Leadership and mentoring skills",
      "Passion for community development",
      "Excellent interpersonal skills",
    ],
    postedDate: "2024-11-08",
    deadline: "2024-12-08",
    category: "Program Management",
    featured: true,
  },
  {
    id: 3,
    title: "Finance Assistant",
    company: "Sukhwal Community Trust",
    location: "Mumbai, Maharashtra",
    type: "Part-time",
    experience: "1-3 years",
    salary: "₹2,00,000 - ₹3,00,000",
    description:
      "Assist with financial record keeping, membership fee collection, and budget management for community activities.",
    requirements: [
      "Bachelor's degree in Commerce or Accounting",
      "Basic knowledge of accounting software",
      "Attention to detail and accuracy",
      "Good mathematical skills",
      "Trustworthy and reliable",
    ],
    postedDate: "2024-11-05",
    deadline: "2024-12-05",
    category: "Finance",
    featured: false,
  },
  {
    id: 4,
    title: "Cultural Program Instructor",
    company: "Sukhwal Cultural Academy",
    location: "Mumbai, Maharashtra",
    type: "Contract",
    experience: "5+ years",
    salary: "₹500 - ₹1,000 per session",
    description:
      "Teach traditional dance, music, or art forms to community members of all ages. Multiple positions available for different cultural disciplines.",
    requirements: [
      "Expert level proficiency in traditional art form",
      "Teaching or training experience",
      "Patience and ability to work with diverse age groups",
      "Commitment to preserving cultural heritage",
      "Flexible schedule availability",
    ],
    postedDate: "2024-11-03",
    deadline: "2024-12-03",
    category: "Education",
    featured: false,
  },
  {
    id: 5,
    title: "IT Support Specialist",
    company: "Sukhwal Community Center",
    location: "Mumbai, Maharashtra",
    type: "Part-time",
    experience: "2-4 years",
    salary: "₹25,000 - ₹35,000 per month",
    description:
      "Provide technical support for community center operations, maintain website, and assist with digital initiatives.",
    requirements: [
      "Diploma or degree in Computer Science/IT",
      "Experience with website maintenance",
      "Knowledge of basic networking",
      "Problem-solving skills",
      "Ability to train non-technical users",
    ],
    postedDate: "2024-11-01",
    deadline: "2024-12-01",
    category: "Technology",
    featured: false,
  },
  {
    id: 6,
    title: "Community Outreach Volunteer Coordinator",
    company: "Sukhwal Service Committee",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    experience: "1-3 years",
    salary: "₹2,50,000 - ₹3,50,000",
    description:
      "Coordinate volunteer activities, community service projects, and outreach programs to serve the broader community.",
    requirements: [
      "Bachelor's degree in Social Work or related field",
      "Experience in volunteer management",
      "Strong communication and organizational skills",
      "Passion for social service",
      "Ability to work with diverse groups",
    ],
    postedDate: "2024-10-28",
    deadline: "2024-11-28",
    category: "Social Service",
    featured: false,
  },
]

export default function CareersPage() {
  const featuredJobs = jobsData.filter((job) => job.featured)
  const regularJobs = jobsData.filter((job) => !job.featured)

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Career Opportunities"
        subtitle="Join our team and make a difference in the community"
        backgroundImage="/placeholder.svg?height=400&width=1200&text=Career+Opportunities"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search and Filter */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Job title or keyword"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f75101] focus:border-transparent"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f75101] focus:border-transparent appearance-none">
                <option>All Locations</option>
                <option>Mumbai</option>
                <option>Remote</option>
              </select>
            </div>
            <div className="relative">
              <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f75101] focus:border-transparent appearance-none">
                <option>Job Type</option>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Contract</option>
              </select>
            </div>
            <Button className="bg-[#f75101] hover:bg-[#e64100] text-white">
              <Search size={20} className="mr-2" />
              Search Jobs
            </Button>
          </div>
        </div>

        {/* Featured Jobs */}
        {featuredJobs.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Opportunities</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredJobs.map((job) => (
                <JobCard key={job.id} job={job} featured={true} />
              ))}
            </div>
          </div>
        )}

        {/* All Jobs */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">All Opportunities</h2>
          <div className="space-y-6">
            {regularJobs.map((job) => (
              <JobCard key={job.id} job={job} featured={false} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#f75101] to-[#e64100] rounded-2xl p-8 mt-16 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Don't see the right opportunity?</h3>
          <p className="text-lg mb-6">Send us your resume and we'll keep you in mind for future openings.</p>
          <Button className="bg-white text-[#f75101] hover:bg-gray-100 font-semibold px-8 py-3">
            Submit Your Resume
          </Button>
        </div>
      </div>
    </div>
  )
}
