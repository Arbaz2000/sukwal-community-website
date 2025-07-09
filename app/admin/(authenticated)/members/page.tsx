import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Users, 
  Plus,
  Calendar,
  Mail,
  User,
  Edit,
  Trash2
} from "lucide-react"
import Link from "next/link"

export default async function AdminMembers() {
  const session = await getServerSession(authOptions)
  
  const users = await prisma.user.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Members Management</h1>
          <p className="text-gray-600">
            Manage community members ({users.length} total)
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/members/new">
            <Plus className="mr-2 h-4 w-4" />
            Add Member
          </Link>
        </Button>
      </div>

      {users.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Users className="h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No members registered</h3>
            <p className="text-gray-500 mb-4">Get started by adding your first member</p>
            <Button asChild>
              <Link href="/admin/members/new">Add Member</Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6">
          {users.map((user) => (
            <Card key={user.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <CardTitle className="text-xl">{user.name || 'Unnamed User'}</CardTitle>
                    <CardDescription className="mt-2">
                      {user.email}
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <Badge variant={user.role === "admin" ? "default" : "secondary"}>
                      {user.role}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      Joined: {formatDate(user.createdAt)}
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-1" />
                      {user.email}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      <User className="h-4 w-4 mr-1" />
                      Profile
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