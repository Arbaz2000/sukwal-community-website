import PageHeader from "@/components/PageHeader"
import CircularCard from "@/components/CircularCard"
import { Search, Download, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"

const circularsData = [
  {
    id: 1,
    title: "Updated Community Guidelines 2024",
    description:
      "Important updates to community guidelines and code of conduct for all members. Please review the new policies regarding facility usage, event organization, and member responsibilities.",
    date: "2024-11-12",
    type: "Guidelines",
    urgent: true,
    downloadUrl: "#",
    issuer: "Executive Committee",
    validUntil: "2025-11-12",
  },
  {
    id: 2,
    title: "Annual Membership Fee Structure",
    description:
      "Details about the annual membership fees and payment procedures for 2024-25. New payment methods and installment options are now available.",
    date: "2024-11-10",
    type: "Financial",
    urgent: false,
    downloadUrl: "#",
    issuer: "Finance Committee",
    validUntil: "2024-12-31",
  },
  {
    id: 3,
    title: "Committee Election Notice",
    description:
      "Notice for upcoming committee elections and nomination procedures. All eligible members are encouraged to participate in the democratic process.",
    date: "2024-11-08",
    type: "Elections",
    urgent: true,
    downloadUrl: "#",
    issuer: "Election Committee",
    validUntil: "2024-12-15",
  },
  {
    id: 4,
    title: "Facility Booking Procedures",
    description:
      "Updated procedures for booking community facilities for events and gatherings. New online booking system and revised pricing structure.",
    date: "2024-11-05",
    type: "Procedures",
    urgent: false,
    downloadUrl: "#",
    issuer: "Facility Management",
    validUntil: "2025-06-30",
  },
  {
    id: 5,
    title: "COVID-19 Safety Protocols",
    description:
      "Updated safety protocols for community events and gatherings. Health and safety measures to ensure everyone's wellbeing during community activities.",
    date: "2024-11-03",
    type: "Health & Safety",
    urgent: false,
    downloadUrl: "#",
    issuer: "Health Committee",
    validUntil: "2025-03-31",
  },
  {
    id: 6,
    title: "Annual General Meeting Agenda",
    description:
      "Detailed agenda for the upcoming Annual General Meeting including financial reports, committee updates, and proposed resolutions.",
    date: "2024-11-01",
    type: "Meetings",
    urgent: true,
    downloadUrl: "#",
    issuer: "Executive Committee",
    validUntil: "2024-12-05",
  },
]

export default function CircularsPage() {
  const urgentCirculars = circularsData.filter((circular) => circular.urgent)
  const regularCirculars = circularsData.filter((circular) => !circular.urgent)

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Official Circulars"
        subtitle="Important announcements and official communications"
        backgroundImage="/placeholder.svg?height=400&width=1200&text=Official+Circulars"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search circulars..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f75101] focus:border-transparent"
            />
          </div>
          <Button
            variant="outline"
            className="border-[#f75101] text-[#f75101] hover:bg-[#f75101] hover:text-white bg-transparent"
          >
            <Filter size={20} className="mr-2" />
            Filter by Type
          </Button>
          <Button className="bg-[#f75101] hover:bg-[#e64100] text-white">
            <Download size={20} className="mr-2" />
            Download All
          </Button>
        </div>

        {/* Urgent Circulars */}
        {urgentCirculars.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-pulse"></span>
              Urgent Circulars
            </h2>
            <div className="space-y-6">
              {urgentCirculars.map((circular) => (
                <CircularCard key={circular.id} circular={circular} />
              ))}
            </div>
          </div>
        )}

        {/* Regular Circulars */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">All Circulars</h2>
          <div className="space-y-6">
            {regularCirculars.map((circular) => (
              <CircularCard key={circular.id} circular={circular} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
