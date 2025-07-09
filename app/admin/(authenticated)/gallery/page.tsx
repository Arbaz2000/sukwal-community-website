import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Image, 
  Trash2, 
  Download,
  Calendar,
  User
} from "lucide-react"
import Link from "next/link"
import ImageActions from "@/components/admin/ImageActions"

export default async function AdminGallery() {
  const session = await getServerSession(authOptions)
  
  const images = await prisma.image.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

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
          <h1 className="text-3xl font-bold text-gray-900">Gallery Management</h1>
          <p className="text-gray-600">
            Manage uploaded images ({images.length} total)
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/upload">
            <Image className="mr-2 h-4 w-4" />
            Upload Images
          </Link>
        </Button>
      </div>

      {images.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Image className="h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No images uploaded</h3>
            <p className="text-gray-500 mb-4">Get started by uploading your first image</p>
            <Button asChild>
              <Link href="/admin/upload">Upload Images</Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image) => (
            <Card key={image.id} className="overflow-hidden">
              <div className="aspect-square relative">
                <img
                  src={image.path}
                  alt={image.originalName}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2">
                  <ImageActions imageId={image.id} />
                </div>
              </div>
              <CardContent className="p-4">
                <div className="space-y-2">
                  <div>
                    <h3 className="font-medium text-sm truncate" title={image.originalName}>
                      {image.originalName}
                    </h3>
                    {image.description && (
                      <p className="text-xs text-gray-500 truncate" title={image.description}>
                        {image.description}
                      </p>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {image.category && (
                      <Badge variant="secondary" className="text-xs">
                        {image.category}
                      </Badge>
                    )}
                    <Badge variant="outline" className="text-xs">
                      {formatFileSize(image.size)}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {image.uploadedBy}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {formatDate(image.createdAt)}
                    </div>
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