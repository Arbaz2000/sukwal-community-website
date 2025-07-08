import { Calendar, User, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

interface News {
  id: number
  title: string
  excerpt: string
  date: string
  category: string
  image: string
  author: string
  readTime: string
  featured: boolean
}

interface NewsCardProps {
  news: News
  featured: boolean
}

export default function NewsCard({ news, featured }: NewsCardProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Infrastructure":
        return "bg-blue-100 text-blue-800"
      case "Events":
        return "bg-purple-100 text-purple-800"
      case "Education":
        return "bg-green-100 text-green-800"
      case "Youth":
        return "bg-yellow-100 text-yellow-800"
      case "Health":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  if (featured) {
    return (
      <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img
              src={news.image || "/placeholder.svg"}
              alt={news.title}
              className="w-full h-64 md:h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8">
            <div className="flex items-center justify-between mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(news.category)}`}>
                {news.category}
              </span>
              <span className="px-3 py-1 bg-[#f75101] text-white rounded-full text-xs font-semibold">Featured</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{news.title}</h3>
            <p className="text-gray-600 mb-6 line-clamp-3">{news.excerpt}</p>

            <div className="flex items-center text-gray-500 text-sm mb-6 space-x-4">
              <div className="flex items-center">
                <Calendar size={14} className="mr-1" />
                {new Date(news.date).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <User size={14} className="mr-1" />
                {news.author}
              </div>
              <div className="flex items-center">
                <Clock size={14} className="mr-1" />
                {news.readTime}
              </div>
            </div>

            <Button className="bg-[#f75101] hover:bg-[#e64100] text-white">Read Full Article</Button>
          </div>
        </div>
      </article>
    )
  }

  return (
    <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <img src={news.image || "/placeholder.svg"} alt={news.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(news.category)}`}>
            {news.category}
          </span>
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar size={14} className="mr-1" />
            {new Date(news.date).toLocaleDateString()}
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{news.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{news.excerpt}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-500 text-sm space-x-3">
            <div className="flex items-center">
              <User size={14} className="mr-1" />
              {news.author}
            </div>
            <div className="flex items-center">
              <Clock size={14} className="mr-1" />
              {news.readTime}
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="border-[#f75101] text-[#f75101] hover:bg-[#f75101] hover:text-white bg-transparent"
          >
            Read More
          </Button>
        </div>
      </div>
    </article>
  )
}
