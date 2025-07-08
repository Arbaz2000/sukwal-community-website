import PageHeader from "@/components/PageHeader"
import EventCard from "@/components/EventCard"

const events = [
  {
    id: 1,
    title: "Diwali Celebration 2024",
    date: "2024-11-12",
    time: "6:00 PM",
    location: "Community Hall, Mumbai",
    category: "Cultural",
    image: "/placeholder.svg?height=200&width=300",
    description:
      "Join us for a grand Diwali celebration with traditional performances, delicious food, and community bonding. Experience the joy of lights, colors, and togetherness as we celebrate this auspicious festival.",
    price: "Free",
    organizer: "Cultural Committee",
  },
  {
    id: 2,
    title: "Spiritual Discourse",
    date: "2024-11-15",
    time: "7:00 PM",
    location: "Temple Premises",
    category: "Spiritual",
    image: "/placeholder.svg?height=200&width=300",
    description:
      "Weekly spiritual discourse on ancient wisdom and modern living. Learn from our spiritual leaders about finding peace and purpose in today's fast-paced world.",
    price: "Free",
    organizer: "Spiritual Committee",
  },
  {
    id: 3,
    title: "Youth Cultural Program",
    date: "2024-11-20",
    time: "5:00 PM",
    location: "Community Center",
    category: "Cultural",
    image: "/placeholder.svg?height=200&width=300",
    description:
      "A vibrant cultural program showcasing the talents of our youth community. Witness amazing performances in dance, music, and drama by our young artists.",
    price: "₹100",
    organizer: "Youth Committee",
  },
  {
    id: 4,
    title: "Community Service Drive",
    date: "2024-11-25",
    time: "9:00 AM",
    location: "Various Locations",
    category: "Service",
    image: "/placeholder.svg?height=200&width=300",
    description:
      "Join hands in serving the community through various social service activities. Together, we can make a difference in the lives of those who need our support.",
    price: "Free",
    organizer: "Service Committee",
  },
  {
    id: 5,
    title: "Traditional Cooking Workshop",
    date: "2024-12-01",
    time: "10:00 AM",
    location: "Community Kitchen",
    category: "Cultural",
    image: "/placeholder.svg?height=200&width=300",
    description:
      "Learn traditional recipes and cooking techniques from our elders. Discover the secrets of authentic flavors and preserve our culinary heritage.",
    price: "₹200",
    organizer: "Cultural Committee",
  },
  {
    id: 6,
    title: "Annual General Meeting",
    date: "2024-12-05",
    time: "4:00 PM",
    location: "Main Hall",
    category: "Administrative",
    image: "/placeholder.svg?height=200&width=300",
    description:
      "Annual general meeting to discuss community matters, financial reports, and future plans. All members are encouraged to attend and participate.",
    price: "Free",
    organizer: "Executive Committee",
  },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Community Events"
        subtitle="Join us in celebrating culture, spirituality, and community bonding"
        backgroundImage="/placeholder.svg?height=300&width=1200"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  )
}
