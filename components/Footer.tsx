import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-[#f75101] rounded-full flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <span className="font-bold text-xl">Sukhwal Community</span>
            </div>
            <p className="text-gray-400 mb-6">
              Connecting hearts, preserving traditions, and building a stronger community through culture and
              spirituality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#f75101] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#f75101] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#f75101] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#f75101] transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/events" className="text-gray-400 hover:text-[#f75101] transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-400 hover:text-[#f75101] transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="/circulars" className="text-gray-400 hover:text-[#f75101] transition-colors">
                  Circulars
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-[#f75101] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/members" className="text-gray-400 hover:text-[#f75101] transition-colors">
                  Members
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-[#f75101] transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/matrimony" className="text-gray-400 hover:text-[#f75101] transition-colors">
                  Matrimony
                </Link>
              </li>
              <li>
                <Link href="/business" className="text-gray-400 hover:text-[#f75101] transition-colors">
                  Business Directory
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#f75101] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#f75101] transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin size={16} className="text-[#f75101] mr-3 flex-shrink-0" />
                <span className="text-gray-400 text-sm">123 Community Street, Mumbai, Maharashtra 400001</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="text-[#f75101] mr-3 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="text-[#f75101] mr-3 flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@Sukhwalcommunity.org</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Sukhwal Community. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-[#f75101] text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-[#f75101] text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
