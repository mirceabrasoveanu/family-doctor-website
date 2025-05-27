import { AppointmentForm } from "@/components/appointment-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, Phone, AlertCircle } from "lucide-react"

export default function AppointmentsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Book an Appointment</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Schedule your visit with Dr. Maria Popescu. We offer flexible scheduling to accommodate your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Appointment Form */}
        <div className="lg:col-span-2">
          <AppointmentForm />
        </div>

        {/* Sidebar Information */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-blue-600" />
                <span>Office Hours</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span className="font-medium">8:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span className="font-medium">9:00 - 14:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span className="font-medium">Closed</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-blue-600" />
                <span>Appointment Types</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="font-medium">Regular Consultation</p>
                <p className="text-sm text-gray-600">30-45 minutes</p>
              </div>
              <div>
                <p className="font-medium">Annual Check-up</p>
                <p className="text-sm text-gray-600">45-60 minutes</p>
              </div>
              <div>
                <p className="font-medium">Follow-up Visit</p>
                <p className="text-sm text-gray-600">15-30 minutes</p>
              </div>
              <div>
                <p className="font-medium">Urgent Care</p>
                <p className="text-sm text-gray-600">Same day availability</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-600" />
                <span>Need Help?</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-3">
                If you need assistance with booking or have questions about your appointment:
              </p>
              <div className="space-y-2">
                <p className="font-medium">📞 +40 21 123 4567</p>
                <p className="font-medium">✉️ contact@drpopescu.ro</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-amber-50 border-amber-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-amber-800">
                <AlertCircle className="h-5 w-5" />
                <span>Important Notes</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-amber-800 text-sm space-y-2">
              <p>• Please arrive 15 minutes before your appointment</p>
              <p>• Bring your ID and insurance card</p>
              <p>• Cancel at least 24 hours in advance</p>
              <p>• For emergencies, call +40 21 999 8888</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
