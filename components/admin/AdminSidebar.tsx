"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  Home, 
  Image, 
  FileText, 
  Calendar, 
  Users, 
  Settings,
  Upload
} from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Dashboard", href: "/admin", icon: Home },
  { name: "Image Upload", href: "/admin/upload", icon: Upload },
  { name: "Gallery", href: "/admin/gallery", icon: Image },
  { name: "News", href: "/admin/news", icon: FileText },
  { name: "Events", href: "/admin/events", icon: Calendar },
  { name: "Circulars", href: "/admin/circulars", icon: FileText },
  { name: "Members", href: "/admin/members", icon: Users },
  { name: "Settings", href: "/admin/settings", icon: Settings },
]

export default function AdminSidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-white shadow-lg min-h-screen">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
      </div>
      <nav className="mt-6">
        <div className="px-3">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "group flex items-center px-3 py-2 text-sm font-medium rounded-md mb-1",
                  isActive
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <item.icon
                  className={cn(
                    "mr-3 h-5 w-5",
                    isActive ? "text-blue-500" : "text-gray-400 group-hover:text-gray-500"
                  )}
                />
                {item.name}
              </Link>
            )
          })}
        </div>
      </nav>
    </div>
  )
} 