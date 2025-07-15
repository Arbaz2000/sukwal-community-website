import { prisma } from "@/lib/prisma"
import { getImageUrl } from "@/lib/image-utils"

export default async function TestImagesPage() {
  const images = await prisma.image.findMany({
    take: 10,
    orderBy: {
      createdAt: 'desc'
    }
  })

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Image Test Page</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <div key={image.id} className="border rounded-lg p-4">
            <img
              src={getImageUrl(image.filename)}
              alt={image.originalName}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="font-semibold">{image.originalName}</h3>
            <p className="text-sm text-gray-600">Filename: {image.filename}</p>
            <p className="text-sm text-gray-600">Path: {image.path}</p>
            <p className="text-sm text-gray-600">URL: {getImageUrl(image.filename)}</p>
          </div>
        ))}
      </div>
      
      {images.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">No images found in database</p>
        </div>
      )}
    </div>
  )
} 