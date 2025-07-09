"use client";

import Loader from "@/components/ui/not-found"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <Loader />
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>
        
        <p className="text-gray-600 mb-8 text-lg">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-[#f75101] hover:bg-[#e64100] text-white">
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Link>
          </Button>
          
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  )
} 