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
  Download,
  Eye,
  Edit,
  Trash2
} from "lucide-react"
import Link from "next/link"

export default async function AdminCirculars() {
  const session = await getServerSession(authOptions)
  
  const circulars = await prisma.circular.findMany({
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
          <h1 className="text-3xl font-bold text-gray-900">Circulars Management</h1>
          <p className="text-gray-600">
            Manage circular documents ({circulars.length} total)
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/circulars/new">
            <Plus className="mr-2 h-4 w-4" />
            Upload Circular
          </Link>
        </Button>
      </div>

      {circulars.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <FileText className="h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No circulars uploaded</h3>
            <p className="text-gray-500 mb-4">Get started by uploading your first circular</p>
            <Button asChild>
              <Link href="/admin/circulars/new">Upload Circular</Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6">
          {circulars.map((circular) => (
            <Card key={circular.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <CardTitle className="text-xl">{circular.title}</CardTitle>
                    <CardDescription className="mt-2">
                      {circular.content.length > 150 
                        ? `${circular.content.substring(0, 150)}...` 
                        : circular.content
                      }
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <Badge variant={circular.published ? "default" : "secondary"}>
                      {circular.published ? "Published" : "Draft"}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(circular.createdAt)}
                    </div>
                    {circular.publishedAt && (
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        Published: {formatDate(circular.publishedAt)}
                      </div>
                    )}
                    {circular.fileUrl && (
                      <div className="flex items-center">
                        <Download className="h-4 w-4 mr-1" />
                        File attached
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
                    {circular.fileUrl && (
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    )}
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