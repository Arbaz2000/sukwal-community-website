import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  FileText, 
  Plus,
  Calendar,
  Eye,
  Edit,
  Trash2
} from "lucide-react"
import Link from "next/link"

export default async function AdminNews() {
  const session = await getServerSession(authOptions)
  
  const news = await prisma.news.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">News Management</h1>
          <p className="text-gray-600">
            Manage news articles ({news.length} total)
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/news/new">
            <Plus className="mr-2 h-4 w-4" />
            Create News
          </Link>
        </Button>
      </div>

      {news.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <FileText className="h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No news articles</h3>
            <p className="text-gray-500 mb-4">Get started by creating your first news article</p>
            <Button asChild>
              <Link href="/admin/news/new">Create News</Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6">
          {news.map((article) => (
            <Card key={article.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <CardTitle className="text-xl">{article.title}</CardTitle>
                    <CardDescription className="mt-2">
                      {article.content.length > 150 
                        ? `${article.content.substring(0, 150)}...` 
                        : article.content
                      }
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <Badge variant={article.published ? "default" : "secondary"}>
                      {article.published ? "Published" : "Draft"}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(article.createdAt)}
                    </div>
                    {article.publishedAt && (
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        Published: {formatDate(article.publishedAt)}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                      <Trash2 className="h-4 w-4 mr-1" />
                      Delete
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
} 