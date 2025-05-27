import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AboutPreview() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Dr. Maria Popescu</h2>
          <p className="text-gray-600 mb-6">
            With over 15 years of experience in family medicine, Dr. Maria Popescu is dedicated to providing
            comprehensive, compassionate healthcare to patients of all ages. She believes in building long-term
            relationships with her patients and their families.
          </p>
          <p className="text-gray-600 mb-6">
            Dr. Popescu graduated from the University of Medicine and Pharmacy "Carol Davila" in Bucharest and completed
            her residency in Family Medicine. She is board-certified and continues to stay current with the latest
            medical advances.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-gray-700">Board Certified Family Medicine</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-gray-700">15+ Years Experience</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-gray-700">Fluent in Romanian and English</span>
            </div>
          </div>
          <Button asChild className="mt-8">
            <Link href="/about">Learn More About Dr. Popescu</Link>
          </Button>
        </div>
        <div className="relative">
          <img
            src="/images/dr-maria-popescu.png"
            alt="Dr. Maria Popescu - Family Medicine Physician"
            className="rounded-lg shadow-lg w-full h-[500px] object-cover"
          />
        </div>
      </div>
    </div>
  )
}
