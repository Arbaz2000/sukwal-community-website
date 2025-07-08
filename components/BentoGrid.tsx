import Link from "next/link"
import { Calendar, Newspaper, FileText, Briefcase, Heart, Building, Users, Camera } from "lucide-react"

const sections = [
  {
    title: "Events",
    subtitle: "Culture & Spiritual",
    description: "Join our vibrant cultural celebrations and spiritual gatherings",
    icon: Calendar,
    href: "/events",
    color: "from-purple-500 to-pink-500",
    size: "lg",
  },
  {
    title: "News",
    subtitle: "Community Updates",
    description: "Stay updated with latest community news",
    icon: Newspaper,
    href: "/news",
    color: "from-blue-500 to-cyan-500",
    size: "md",
  },
  {
    title: "Circulars",
    subtitle: "Important Notices",
    description: "Official announcements and circulars",
    icon: FileText,
    href: "/circulars",
    color: "from-green-500 to-emerald-500",
    size: "md",
  },
  {
    title: "Careers",
    subtitle: "Job Opportunities",
    description: "Find career opportunities within our community",
    icon: Briefcase,
    href: "/careers",
    color: "from-orange-500 to-red-500",
    size: "md",
  },
  {
    title: "Matrimony",
    subtitle: "Find Your Match",
    description: "Connect with potential life partners",
    icon: Heart,
    href: "/matrimony",
    color: "from-rose-500 to-pink-500",
    size: "lg",
  },
  {
    title: "Business Directory",
    subtitle: "Community Businesses",
    description: "Discover businesses owned by community members",
    icon: Building,
    href: "/business",
    color: "from-indigo-500 to-purple-500",
    size: "md",
  },
  {
    title: "Member Directory",
    subtitle: "Connect with Members",
    description: "Find and connect with community members",
    icon: Users,
    href: "/members",
    color: "from-teal-500 to-green-500",
    size: "md",
  },
  {
    title: "Photo Gallery",
    subtitle: "Memories & Moments",
    description: "Browse through our community photo collection",
    icon: Camera,
    href: "/gallery",
    color: "from-yellow-500 to-orange-500",
    size: "lg",
  },
]

export default function BentoGrid() {
  return (
    <section className="py-24 px-6 sm:px-8 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Explore Our Community</h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover all the ways to connect, engage, and grow with the Sukwal community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-fr">
          {sections.map((section, index) => {
            const Icon = section.icon
            const isLarge = section.size === "lg"

            return (
              <Link
                key={section.title}
                href={section.href}
                className={`group relative overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  isLarge ? "md:col-span-2 lg:col-span-2" : ""
                } bg-gradient-to-br ${section.color} text-white`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <Icon size={isLarge ? 56 : 40} className="text-white/90" />
                    <div className="w-3 h-3 bg-white/50 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold mb-3">{section.title}</h3>
                  <p className="text-white/80 font-medium mb-4 text-lg">{section.subtitle}</p>
                  <p className="text-white/70 leading-relaxed flex-grow">{section.description}</p>

                  <div className="mt-6 flex items-center text-white/80 group-hover:text-white transition-colors">
                    <span className="font-medium">Explore</span>
                    <svg
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full transform -translate-x-12 translate-y-12 group-hover:scale-150 transition-transform duration-500 delay-100"></div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
