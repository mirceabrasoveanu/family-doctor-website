import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Users, Clock } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Dr. Maria Popescu</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Dedicated to providing exceptional family healthcare with compassion, expertise, and personalized attention.
        </p>
      </div>

      {/* Doctor's Photo */}
      <div className="flex justify-center mb-12">
        <div className="relative">
          <img
            src="/images/dr-maria-popescu.png"
            alt="Dr. Maria Popescu - Board Certified Family Medicine Physician"
            className="rounded-lg shadow-xl w-80 h-96 object-cover"
          />
          <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-3 rounded-lg shadow-lg">
            <p className="text-sm font-medium">15+ Years Experience</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Professional Background</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Dr. Maria Popescu is a board-certified family medicine physician with over 15 years of experience
                providing comprehensive healthcare to patients of all ages. She is committed to building lasting
                relationships with her patients and their families, focusing on preventive care and health education.
              </p>
              <p className="text-gray-600">
                Dr. Popescu believes in a patient-centered approach to medicine, taking the time to listen to her
                patients' concerns and working collaboratively to develop personalized treatment plans. She stays
                current with the latest medical advances and evidence-based practices to ensure her patients receive the
                highest quality care.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <GraduationCap className="h-5 w-5 text-blue-600" />
                <span>Education & Training</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold">Medical Degree</h4>
                <p className="text-gray-600">University of Medicine and Pharmacy "Carol Davila", Bucharest</p>
                <p className="text-sm text-gray-500">Graduated Magna Cum Laude, 2008</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold">Residency Training</h4>
                <p className="text-gray-600">Family Medicine Residency, Emergency University Hospital</p>
                <p className="text-sm text-gray-500">2008-2011</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold">Continuing Education</h4>
                <p className="text-gray-600">Regular participation in medical conferences and workshops</p>
                <p className="text-sm text-gray-500">Ongoing professional development</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Medical Philosophy</CardTitle>
            </CardHeader>
            <CardContent>
              <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-600">
                "I believe that the best medicine combines scientific excellence with genuine compassion. Every patient
                deserves to be heard, understood, and treated with dignity. My goal is not just to treat illness, but to
                promote overall wellness and help my patients live their healthiest, happiest lives."
              </blockquote>
              <p className="text-right text-sm text-gray-500 mt-4">- Dr. Maria Popescu</p>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Facts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium">15+ Years</p>
                  <p className="text-sm text-gray-600">Experience</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium">2000+</p>
                  <p className="text-sm text-gray-600">Patients Served</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium">Board Certified</p>
                  <p className="text-sm text-gray-600">Family Medicine</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Specializations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Preventive Care</Badge>
                <Badge variant="secondary">Chronic Disease</Badge>
                <Badge variant="secondary">Pediatrics</Badge>
                <Badge variant="secondary">Geriatrics</Badge>
                <Badge variant="secondary">Women's Health</Badge>
                <Badge variant="secondary">Mental Health</Badge>
                <Badge variant="secondary">Vaccinations</Badge>
                <Badge variant="secondary">Health Screenings</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Romanian</span>
                  <span className="text-sm text-gray-600">Native</span>
                </li>
                <li className="flex justify-between">
                  <span>English</span>
                  <span className="text-sm text-gray-600">Fluent</span>
                </li>
                <li className="flex justify-between">
                  <span>French</span>
                  <span className="text-sm text-gray-600">Conversational</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Professional Memberships</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Romanian College of Family Medicine</li>
                <li>• European Academy of Family Medicine</li>
                <li>• Romanian Medical Association</li>
                <li>• International Association of Family Medicine</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Video Section */}
      <Card>
        <CardHeader>
          <CardTitle>Meet Dr. Popescu - Video Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
            <video controls className="w-full h-full object-cover" poster="/placeholder.svg?height=400&width=600">
              <source src="/placeholder.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Watch Dr. Popescu discuss her approach to family medicine and commitment to patient care.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
