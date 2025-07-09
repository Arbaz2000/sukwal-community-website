import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Image, 
  FileText, 
  Calendar, 
  Users, 
  Upload,
  Plus 
} from "lucide-react"
import Link from "next/link"

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions)
  
  // Get statistics
  const [imageCount, newsCount, eventCount, circularCount] = await Promise.all([
    prisma.image.count(),
    prisma.news.count(),
    prisma.event.count(),
    prisma.circular.count(),
  ])

  const stats = [
    {
      title: "Total Images",
      value: imageCount,
      icon: Image,
      href: "/admin/gallery",
    },
    {
      title: "News Articles",
      value: newsCount,
      icon: FileText,
      href: "/admin/news",
    },
    {
      title: "Events",
      value: eventCount,
      icon: Calendar,
      href: "/admin/events",
    },
    {
      title: "Circulars",
      value: circularCount,
      icon: FileText,
      href: "/admin/circulars",
    },
  ]

  const quickActions = [
    {
      title: "Upload Image",
      description: "Add new images to the gallery",
      icon: Upload,
      href: "/admin/upload",
    },
    {
      title: "Create News",
      description: "Publish a new article",
      icon: Plus,
      href: "/admin/news/new",
    },
    {
      title: "Add Event",
      description: "Schedule a new event",
      icon: Calendar,
      href: "/admin/events/new",
    },
    {
      title: "Upload Circular",
      description: "Add a new circular",
      icon: FileText,
      href: "/admin/circulars/new",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">
          Welcome back, {session?.user?.name || session?.user?.email}
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <Link href={stat.href} className="text-xs text-muted-foreground hover:underline">
                View all →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action) => (
            <Card key={action.title} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <action.icon className="h-5 w-5 text-blue-600" />
                  <CardTitle className="text-lg">{action.title}</CardTitle>
                </div>
                <CardDescription>{action.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href={action.href}>
                    {action.title}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
        <Card>
          <CardHeader>
            <CardTitle>Latest Uploads</CardTitle>
            <CardDescription>
              Recently uploaded images and content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* This would be populated with actual recent activity */}
              <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                <Image className="h-8 w-8 text-gray-400" />
                <div>
                  <p className="font-medium">New image uploaded</p>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                <FileText className="h-8 w-8 text-gray-400" />
                <div>
                  <p className="font-medium">News article published</p>
                  <p className="text-sm text-gray-500">1 day ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 