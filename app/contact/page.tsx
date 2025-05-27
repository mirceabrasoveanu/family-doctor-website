import { ContactForm } from "@/components/contact-form"
import { LocationMap } from "@/components/location-map"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get in touch with our medical practice. We're here to help with your healthcare needs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600">+40 21 123 4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">contact@drpopescu.ro</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-600">
                    Str. Medicilor 123
                    <br />
                    Sector 1, Bucharest, Romania
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium">Office Hours</p>
                  <div className="text-gray-600 text-sm">
                    <p>Monday - Friday: 8:00 - 18:00</p>
                    <p>Saturday: 9:00 - 14:00</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Emergency Contact */}
          <Card className="bg-red-50 border-red-200">
            <CardHeader>
              <CardTitle className="text-red-700">Emergency Contact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-red-600 font-medium">For medical emergencies, call: +40 21 999 8888</p>
              <p className="text-red-600 text-sm mt-2">Available 24/7 for urgent medical situations</p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div>
          <ContactForm />
        </div>
      </div>

      {/* Location Map */}
      <div className="mt-12">
        <LocationMap />
      </div>
    </div>
  )
}
