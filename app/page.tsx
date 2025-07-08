import Hero from "@/components/Hero"
import BentoGrid from "@/components/BentoGrid"
import UpcomingEvents from "@/components/UpcomingEvents"
import NewsCirculars from "@/components/NewsCirculars"
import PhotoGalleryPreview from "@/components/PhotoGalleryPreview"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <BentoGrid />
      <UpcomingEvents />
      <NewsCirculars />
      <PhotoGalleryPreview />
    </main>
  )
}
