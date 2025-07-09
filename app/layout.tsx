import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import SessionProvider from "@/components/providers/SessionProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sukhwal Community - Connecting Culture & Spirituality",
  description:
    "Join the vibrant Sukhwal community for cultural events, spiritual gatherings, and meaningful connections.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <SessionProvider>
          <Navbar />
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  )
}
