/**
 * Client-side utility functions for handling image URLs
 */

export function getImageUrl(filename: string): string {
  // Check if we're in a browser environment
  if (typeof window !== 'undefined') {
    // In development, we can serve from public/uploads directly
    // In production, we use the API route
    if (process.env.NODE_ENV === 'development') {
      return `/uploads/${filename}`
    }
    
    // In production, use the API route
    return `/api/images/${filename}`
  }
  
  // Fallback for SSR
  return `/api/images/${filename}`
}

export function getImageUrlFromPath(path: string): string {
  // Extract filename from path
  const filename = path.split('/').pop()
  if (!filename) {
    return '/placeholder.svg'
  }
  
  return getImageUrl(filename)
} 