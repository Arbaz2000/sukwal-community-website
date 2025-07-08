import { Calendar, MapPin, Clock, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Job {
  id: number
  title: string
  company: string
  location: string
  type: string
  experience: string
  salary: string
  description: string
  requirements: string[]
  postedDate: string
  deadline: string
  category: string
  featured: boolean
}

interface JobCardProps {
  job: Job
  featured: boolean
}

export default function JobCard({ job, featured }: JobCardProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "Full-time":
        return "bg-green-100 text-green-800"
      case "Part-time":
        return "bg-blue-100 text-blue-800"
      case "Contract":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Administration":
        return "bg-purple-100 text-purple-800"
      case "Program Management":
        return "bg-indigo-100 text-indigo-800"
      case "Finance":
        return "bg-green-100 text-green-800"
      case "Education":
        return "bg-blue-100 text-blue-800"
      case "Technology":
        return "bg-gray-100 text-gray-800"
      case "Social Service":
        return "bg-red-100 text-red-800"
      default:
        return "bg-orange-100 text-orange-800"
    }
  }

  if (featured) {
    return (
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-[#f75101]/20">
        <div className="p-8">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center mb-2">
                <h3 className="text-2xl font-bold text-gray-900 mr-3">{job.title}</h3>
                <Star className="text-[#f75101] fill-current" size={20} />
              </div>
              <p className="text-lg text-gray-600 mb-2">{job.company}</p>
            </div>
            <span className="px-3 py-1 bg-[#f75101] text-white rounded-full text-sm font-semibold">Featured</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-4">
            <div className="flex items-center text-gray-500">
              <MapPin size={16} className="mr-1 text-[#f75101]" />
              {job.location}
            </div>
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getTypeColor(job.type)}`}>{job.type}</span>
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(job.category)}`}>
              {job.category}
            </span>
          </div>

          <p className="text-gray-600 mb-4">{job.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <span className="text-sm font-semibold text-gray-700">Experience:</span>
              <p className="text-gray-600">{job.experience}</p>
            </div>
            <div>
              <span className="text-sm font-semibold text-gray-700">Salary:</span>
              <p className="text-gray-600">{job.salary}</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-500 text-sm space-x-4">
              <div className="flex items-center">
                <Calendar size={14} className="mr-1" />
                Posted {new Date(job.postedDate).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <Clock size={14} className="mr-1" />
                Apply by {new Date(job.deadline).toLocaleDateString()}
              </div>
            </div>
            <Button className="bg-[#f75101] hover:bg-[#e64100] text-white px-6">Apply Now</Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-[#f75101]">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h3>
          <p className="text-gray-600 mb-2">{job.company}</p>
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <div className="flex items-center text-gray-500 text-sm">
              <MapPin size={14} className="mr-1 text-[#f75101]" />
              {job.location}
            </div>
            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getTypeColor(job.type)}`}>{job.type}</span>
            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryColor(job.category)}`}>
              {job.category}
            </span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-[#f75101]">{job.salary}</p>
          <p className="text-sm text-gray-500">{job.experience}</p>
        </div>
      </div>

      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{job.description}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center text-gray-500 text-sm space-x-4">
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            {new Date(job.postedDate).toLocaleDateString()}
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            Apply by {new Date(job.deadline).toLocaleDateString()}
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="border-[#f75101] text-[#f75101] hover:bg-[#f75101] hover:text-white bg-transparent"
          >
            View Details
          </Button>
          <Button size="sm" className="bg-[#f75101] hover:bg-[#e64100] text-white">
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  )
}
