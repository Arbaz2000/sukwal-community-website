import PageHeader from "@/components/PageHeader"
import NewsCard from "@/components/NewsCard"
import { Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"

const newsData = [
  {
    id: 1,
    title: "Community Center Renovation Complete",
    excerpt:
      "Our community center has been beautifully renovated with modern facilities while preserving traditional aesthetics. The new space includes updated meeting rooms, a modern kitchen, and enhanced accessibility features.",
    content:
      "After months of careful planning and construction, we're thrilled to announce the completion of our community center renovation...",
    date: "2024-11-10",
    category: "Infrastructure",
    image: "/placeholder.svg?height=300&width=500&text=Renovated+Community+Center",
    author: "Admin Team",
    readTime: "3 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Annual Cultural Festival Announcement",
    excerpt:
      "Save the date for our biggest cultural celebration of the year featuring performances, food, and community bonding. This year's theme celebrates our rich heritage and traditions.",
    content: "We are excited to announce our Annual Cultural Festival scheduled for December 15-17, 2024...",
    date: "2024-11-08",
    category: "Events",
    image: "/placeholder.svg?height=300&width=500&text=Cultural+Festival",
    author: "Cultural Committee",
    readTime: "2 min read",
    featured: true,
  },
  {
    id: 3,
    title: "New Educational Scholarship Program",
    excerpt:
      "Introducing scholarships for deserving students from our community to pursue higher education. Applications are now open for the 2024-25 academic year.",
    content: "The Sukwal Community Education Foundation is proud to launch a new scholarship program...",
    date: "2024-11-05",
    category: "Education",
    image: "/placeholder.svg?height=300&width=500&text=Scholarship+Program",
    author: "Education Committee",
    readTime: "4 min read",
    featured: false,
  },
  {
    id: 4,
    title: "Youth Leadership Program Launch",
    excerpt:
      "Empowering the next generation through leadership training and community service opportunities. Registration opens this month for interested youth members.",
    content: "Our new Youth Leadership Program aims to develop leadership skills among young community members...",
    date: "2024-11-03",
    category: "Youth",
    image: "/placeholder.svg?height=300&width=500&text=Youth+Leadership",
    author: "Youth Committee",
    readTime: "3 min read",
    featured: false,
  },
  {
    id: 5,
    title: "Community Health Initiative",
    excerpt:
      "Free health checkups and wellness programs for all community members. Schedule your appointment for comprehensive health screening.",
    content: "In partnership with local healthcare providers, we're organizing monthly health camps...",
    date: "2024-11-01",
    category: "Health",
    image: "/placeholder.svg?height=300&width=500&text=Health+Initiative",
    author: "Health Committee",
    readTime: "2 min read",
    featured: false,
  },
  {
    id: 6,
    title: "Digital Literacy Workshop Success",
    excerpt:
      "Over 100 community members participated in our digital literacy workshops, learning essential computer and internet skills for the modern world.",
    content: "The recent digital literacy workshops have been a tremendous success...",
    date: "2024-10-28",
    category: "Education",
    image: "/placeholder.svg?height=300&width=500&text=Digital+Workshop",
    author: "Education Committee",
    readTime: "3 min read",
    featured: false,
  },
]

export default function NewsPage() {
  const featuredNews = newsData.filter((news) => news.featured)
  const regularNews = newsData.filter((news) => !news.featured)

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Community News"
        subtitle="Stay updated with the latest happenings in our community"
        backgroundImage="/placeholder.svg?height=400&width=1200&text=Community+News"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search news..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f75101] focus:border-transparent"
            />
          </div>
          <Button
            variant="outline"
            className="border-[#f75101] text-[#f75101] hover:bg-[#f75101] hover:text-white bg-transparent"
          >
            <Filter size={20} className="mr-2" />
            Filter by Category
          </Button>
        </div>

        {/* Featured News */}
        {featuredNews.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured News</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.map((news) => (
                <NewsCard key={news.id} news={news} featured={true} />
              ))}
            </div>
          </div>
        )}

        {/* Regular News */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularNews.map((news) => (
              <NewsCard key={news.id} news={news} featured={false} />
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button className="bg-[#f75101] hover:bg-[#e64100] text-white px-8 py-3">Load More News</Button>
        </div>
      </div>
    </div>
  )
}
