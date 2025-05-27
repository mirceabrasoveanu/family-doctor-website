import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Stethoscope, Heart, Shield, Users, Calendar, Pill } from "lucide-react"

const services = [
  {
    icon: Stethoscope,
    title: "General Consultations",
    description: "Comprehensive medical examinations and health assessments for all family members.",
  },
  {
    icon: Heart,
    title: "Preventive Care",
    description: "Regular check-ups and screenings to prevent illness and maintain optimal health.",
  },
  {
    icon: Shield,
    title: "Chronic Disease Management",
    description: "Ongoing care and monitoring for diabetes, hypertension, and other chronic conditions.",
  },
  {
    icon: Users,
    title: "Family Medicine",
    description: "Specialized care for patients of all ages, from infants to elderly adults.",
  },
  {
    icon: Calendar,
    title: "Health Screenings",
    description: "Regular health screenings and diagnostic tests for early disease detection.",
  },
  {
    icon: Pill,
    title: "Medication Management",
    description: "Expert guidance on medications, dosages, and potential interactions.",
  },
]

export function ServicesOverview() {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Medical Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We provide comprehensive healthcare services to meet all your family's medical needs with personalized care
          and attention.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
