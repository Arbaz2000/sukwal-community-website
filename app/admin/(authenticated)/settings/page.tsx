import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { 
  Settings, 
  Save,
  Database,
  Shield,
  Mail,
  Globe
} from "lucide-react"

export default async function AdminSettings() {
  const session = await getServerSession(authOptions)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600">
          Manage your admin panel settings
        </p>
      </div>

      <div className="grid gap-6">
        {/* General Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Globe className="mr-2 h-5 w-5" />
              General Settings
            </CardTitle>
            <CardDescription>
              Configure basic website settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="siteName">Site Name</Label>
              <Input 
                id="siteName" 
                defaultValue="Sukwal Community" 
                placeholder="Enter site name"
              />
            </div>
            <div>
              <Label htmlFor="siteDescription">Site Description</Label>
              <Textarea 
                id="siteDescription" 
                defaultValue="Connecting Culture & Spirituality"
                placeholder="Enter site description"
                rows={3}
              />
            </div>
            <div>
              <Label htmlFor="contactEmail">Contact Email</Label>
              <Input 
                id="contactEmail" 
                type="email"
                defaultValue="contact@sukwal.com"
                placeholder="Enter contact email"
              />
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="mr-2 h-5 w-5" />
              Security Settings
            </CardTitle>
            <CardDescription>
              Configure security and authentication settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="twoFactor">Two-Factor Authentication</Label>
                <p className="text-sm text-gray-500">Require 2FA for admin access</p>
              </div>
              <Switch id="twoFactor" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="sessionTimeout">Session Timeout</Label>
                <p className="text-sm text-gray-500">Auto-logout after inactivity</p>
              </div>
              <Switch id="sessionTimeout" defaultChecked />
            </div>
            <div>
              <Label htmlFor="sessionDuration">Session Duration (hours)</Label>
              <Input 
                id="sessionDuration" 
                type="number"
                defaultValue="24"
                min="1"
                max="168"
              />
            </div>
          </CardContent>
        </Card>

        {/* Email Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Mail className="mr-2 h-5 w-5" />
              Email Settings
            </CardTitle>
            <CardDescription>
              Configure email notifications and SMTP settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="emailNotifications">Email Notifications</Label>
                <p className="text-sm text-gray-500">Send notifications for new content</p>
              </div>
              <Switch id="emailNotifications" defaultChecked />
            </div>
            <div>
              <Label htmlFor="smtpHost">SMTP Host</Label>
              <Input 
                id="smtpHost" 
                defaultValue="smtp.gmail.com"
                placeholder="Enter SMTP host"
              />
            </div>
            <div>
              <Label htmlFor="smtpPort">SMTP Port</Label>
              <Input 
                id="smtpPort" 
                type="number"
                defaultValue="587"
                placeholder="Enter SMTP port"
              />
            </div>
          </CardContent>
        </Card>

        {/* Database Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Database className="mr-2 h-5 w-5" />
              Database Settings
            </CardTitle>
            <CardDescription>
              Database configuration and maintenance
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="dbBackup">Auto Backup</Label>
              <p className="text-sm text-gray-500 mb-2">Automatically backup database daily</p>
              <Switch id="dbBackup" defaultChecked />
            </div>
            <div>
              <Label htmlFor="backupRetention">Backup Retention (days)</Label>
              <Input 
                id="backupRetention" 
                type="number"
                defaultValue="30"
                min="1"
                max="365"
              />
            </div>
            <div className="flex space-x-2">
              <Button variant="outline">
                <Database className="mr-2 h-4 w-4" />
                Backup Now
              </Button>
              <Button variant="outline">
                <Settings className="mr-2 h-4 w-4" />
                Optimize Database
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button className="w-full sm:w-auto">
            <Save className="mr-2 h-4 w-4" />
            Save Settings
          </Button>
        </div>
      </div>
    </div>
  )
} 