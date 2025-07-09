import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/DSC06066.JPG"
          alt="Sukhwal Community"
          className="w-full h-full object-cover"
        />
        {/* Simplified overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f75101]/15 via-[#f75101]/10 to-[#e64100]/10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/10"></div>
      </div>

      {/* Reduced floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-16 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-yellow-300/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto">
        {/* Main heading with more spacing */}
        <div className="mb-12">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 animate-fade-in leading-tight">
            Welcome to the
          </h1>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-yellow-200 mb-8 animate-fade-in-delay drop-shadow-lg leading-tight">
            Sukhwal Community
          </h2>
        </div>

        {/* Enhanced subtitle with more spacing */}
        <p className="text-xl sm:text-2xl lg:text-2xl text-white/95 mb-16 max-w-4xl mx-auto leading-relaxed animate-fade-in-delay font-light">
          Connecting hearts, preserving traditions, and building a stronger
          community through
          <span className="text-yellow-200 font-medium">
            {" "}
            culture and spirituality
          </span>
        </p>

        {/* Enhanced CTA buttons with more spacing */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center animate-fade-in-delay-2 mb-20">
          <Button
            asChild
            size="lg"
            className="bg-white text-[#f75101] hover:bg-yellow-50 font-bold px-12 py-5 text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl rounded-full min-w-[220px]"
          >
            <Link href="/members">Join Our Community</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-[#f75101] font-bold px-12 py-5 text-xl transition-all duration-300 transform hover:scale-105 bg-transparent backdrop-blur-sm rounded-full min-w-[220px]"
          >
            <Link href="/events">Explore Events</Link>
          </Button>
        </div>

        {/* Simplified community stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-3xl mx-auto text-white/90 animate-fade-in-delay-2">
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-200 mb-2">500+</div>
            <div className="text-base uppercase tracking-wide">
              Active Members
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-200 mb-2">50+</div>
            <div className="text-base uppercase tracking-wide">
              Annual Events
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-200 mb-2">25+</div>
            <div className="text-base uppercase tracking-wide">
              Years of Service
            </div>
          </div>
        </div>
      </div>

   
    </section>
  );
}
