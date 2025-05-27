import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Practice Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Dr. Maria Popescu</h3>
            <p className="text-gray-300">
              Providing comprehensive family medical care with compassion and expertise for over 15 years.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+40 21 123 4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contact@drpopescu.ro</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Str. Medicilor 123, Bucharest</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Dr. Popescu
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Medical Services
                </Link>
              </li>
              <li>
                <Link href="/appointments" className="text-gray-300 hover:text-white transition-colors">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">General Consultations</li>
              <li className="text-gray-300">Preventive Care</li>
              <li className="text-gray-300">Chronic Disease Management</li>
              <li className="text-gray-300">Health Screenings</li>
              <li className="text-gray-300">Vaccinations</li>
            </ul>
          </div>

          {/* Office Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Office Hours</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>8:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span>9:00 - 14:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </div>
              <div className="mt-4 p-3 bg-red-600 rounded-lg">
                <p className="text-sm font-medium">Emergency: +40 21 999 8888</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <Button variant="ghost" size="icon" asChild aria-label="Follow us on Facebook">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild aria-label="Follow us on Twitter">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild aria-label="Follow us on Instagram">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild aria-label="Connect on LinkedIn">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
            <div className="text-center text-gray-400">
              <p>&copy; 2024 Dr. Maria Popescu Family Practice. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
