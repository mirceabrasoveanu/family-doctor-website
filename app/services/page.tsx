import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Stethoscope, Heart, Shield, Baby, UserCheck, Activity, Microscope, Syringe, ClipboardList } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Stethoscope,
    title: "General Consultations",
    description: "Comprehensive medical examinations and health assessments for all family members.",
    details: [
      "Complete physical examinations",
      "Health history review",
      "Symptom evaluation",
      "Treatment planning",
      "Follow-up care",
    ],
    duration: "30-45 minutes",
    price: "150 RON",
  },
  {
    icon: Heart,
    title: "Preventive Care",
    description: "Regular check-ups and screenings to prevent illness and maintain optimal health.",
    details: [
      "Annual wellness exams",
      "Health risk assessments",
      "Lifestyle counseling",
      "Nutrition guidance",
      "Exercise recommendations",
    ],
    duration: "45-60 minutes",
    price: "200 RON",
  },
  {
    icon: Shield,
    title: "Chronic Disease Management",
    description: "Ongoing care and monitoring for diabetes, hypertension, and other chronic conditions.",
    details: [
      "Diabetes management",
      "Hypertension monitoring",
      "Cholesterol management",
      "Medication adjustments",
      "Lifestyle modifications",
    ],
    duration: "30 minutes",
    price: "180 RON",
  },
  {
    icon: Baby,
    title: "Pediatric Care",
    description: "Specialized medical care for infants, children, and adolescents.",
    details: [
      "Well-child visits",
      "Growth monitoring",
      "Developmental assessments",
      "School physicals",
      "Sick child visits",
    ],
    duration: "30 minutes",
    price: "120 RON",
  },
  {
    icon: UserCheck,
    title: "Geriatric Care",
    description: "Comprehensive healthcare services tailored for elderly patients.",
    details: [
      "Age-related health issues",
      "Medication management",
      "Cognitive assessments",
      "Fall prevention",
      "Quality of life optimization",
    ],
    duration: "45 minutes",
    price: "200 RON",
  },
  {
    icon: Activity,
    title: "Health Screenings",
    description: "Regular health screenings and diagnostic tests for early disease detection.",
    details: [
      "Blood pressure monitoring",
      "Cholesterol testing",
      "Cancer screenings",
      "Bone density tests",
      "Vision and hearing tests",
    ],
    duration: "20-30 minutes",
    price: "100 RON",
  },
  {
    icon: Microscope,
    title: "Laboratory Services",
    description: "On-site laboratory testing for quick and accurate diagnostic results.",
    details: ["Blood tests", "Urine analysis", "Throat cultures", "Rapid diagnostic tests", "Allergy testing"],
    duration: "15 minutes",
    price: "80 RON",
  },
  {
    icon: Syringe,
    title: "Vaccinations",
    description: "Complete vaccination services for all ages according to recommended schedules.",
    details: ["Childhood immunizations", "Adult vaccines", "Travel vaccinations", "Flu shots", "COVID-19 vaccines"],
    duration: "15 minutes",
    price: "60 RON",
  },
  {
    icon: ClipboardList,
    title: "Health Certificates",
    description: "Medical certificates and documentation for various purposes.",
    details: [
      "Work fitness certificates",
      "Sports participation clearance",
      "Travel health certificates",
      "Disability assessments",
      "Insurance medical reports",
    ],
    duration: "20 minutes",
    price: "100 RON",
  },
]

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Medical Services</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We provide comprehensive healthcare services to meet all your family's medical needs with personalized care
          and attention.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {services.map((service, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-xl">{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                {service.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="text-sm text-gray-600 flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    {detail}
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center pt-4 border-t">
                <div>
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="font-medium">{service.duration}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Price</p>
                  <p className="font-medium text-blue-600">{service.price}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Schedule Your Appointment?</h2>
        <p className="text-gray-600 mb-6">
          Contact us today to book your consultation or learn more about our services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/appointments">Book Appointment</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>

      {/* Insurance Information */}
      <div className="mt-12">
        <Card>
          <CardHeader>
            <CardTitle>Insurance & Payment Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Accepted Insurance Plans</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Badge variant="outline">Casa de Sănătate</Badge>
                <Badge variant="outline">Regina Maria</Badge>
                <Badge variant="outline">Medicover</Badge>
                <Badge variant="outline">MedLife</Badge>
                <Badge variant="outline">Sanador</Badge>
                <Badge variant="outline">Euromedic</Badge>
                <Badge variant="outline">Private Pay</Badge>
                <Badge variant="outline">Corporate Plans</Badge>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2">Payment Methods</h4>
              <p className="text-gray-600 text-sm">
                We accept cash, credit cards, bank transfers, and direct insurance billing. Payment is due at the time
                of service unless prior arrangements have been made.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
