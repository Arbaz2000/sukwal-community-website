import { Calendar, User, Download, Clock, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Circular {
  id: number
  title: string
  description: string
  date: string
  type: string
  urgent: boolean
  downloadUrl: string
  issuer: string
  validUntil: string
}

interface CircularCardProps {
  circular: Circular
}

export default function CircularCard({ circular }: CircularCardProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "Guidelines":
        return "bg-blue-100 text-blue-800"
      case "Financial":
        return "bg-green-100 text-green-800"
      case "Elections":
        return "bg-purple-100 text-purple-800"
      case "Procedures":
        return "bg-yellow-100 text-yellow-800"
      case "Health & Safety":
        return "bg-red-100 text-red-800"
      case "Meetings":
        return "bg-indigo-100 text-indigo-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div
      className={`bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-l-4 ${
        circular.urgent ? "border-red-500" : "border-[#f75101]"
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center mb-3">
            <h3 className="text-xl font-bold text-gray-900 mr-3">{circular.title}</h3>
            {circular.urgent && (
              <div className="flex items-center">
                <AlertTriangle size={16} className="text-red-500 mr-1" />
                <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-semibold">Urgent</span>
              </div>
            )}
          </div>
          <p className="text-gray-600 mb-4">{circular.description}</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(circular.type)}`}>
            {circular.type}
          </span>
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            {new Date(circular.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit"
            })}
          </div>
          <div className="flex items-center">
            <User size={14} className="mr-1" />
            {circular.issuer}
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            Valid until {new Date(circular.validUntil).toLocaleDateString("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit"
            })}
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
            <Download size={16} className="mr-1" />
            Download
          </Button>
        </div>
      </div>
    </div>
  )
}
