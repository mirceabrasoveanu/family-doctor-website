"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Phone, MapPin, Star } from "lucide-react"
import Link from "next/link"

export function Sidebar() {
  // Practice location in Bucharest, Romania
  const practiceLocation = {
    lat: 44.4268,
    lng: 26.1025,
    address: "Str. Medicilor 123, Sector 1, Bucharest, Romania",
  }

  const openInMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${practiceLocation.lat},${practiceLocation.lng}`
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const getDirections = () => {
    // Try to get user's location first
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude
          const userLng = position.coords.longitude
          const url = `https://www.google.com/maps/dir/${userLat},${userLng}/${practiceLocation.lat},${practiceLocation.lng}`
          window.open(url, "_blank", "noopener,noreferrer")
        },
        (error) => {
          // If geolocation fails, just open the location in maps
          console.log("Geolocation error:", error)
          openInMaps()
        },
      )
    } else {
      // If geolocation is not supported, just open the location in maps
      openInMaps()
    }
  }

  return (
    <div className="space-y-6 p-6 bg-gray-50 min-h-screen">
      {/* Quick Appointment */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-blue-600" />
            <span>Quick Appointment</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-gray-600">Book your appointment online or call us directly.</p>
          <Button className="w-full" asChild>
            <Link href="/appointments">Book Online</Link>
          </Button>
          <div className="flex items-center space-x-2 text-sm">
            <Phone className="h-4 w-4 text-blue-600" />
            <span>+40 21 123 4567</span>
          </div>
        </CardContent>
      </Card>

      {/* Office Hours */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-blue-600" />
            <span>Office Hours</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Mon - Fri:</span>
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
        </CardContent>
      </Card>

      {/* Location */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-blue-600" />
            <span>Location</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 mb-3">
            Str. Medicilor 123
            <br />
            Sector 1, Bucharest
            <br />
            Romania
          </p>
          <Button variant="outline" size="sm" className="w-full" onClick={getDirections}>
            Get Directions
          </Button>
        </CardContent>
      </Card>

      {/* Patient Reviews */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Star className="h-5 w-5 text-blue-600" />
            <span>Patient Reviews</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border-l-4 border-blue-600 pl-4">
            <p className="text-sm text-gray-600 italic">"Dr. Popescu is amazing! Very thorough and caring."</p>
            <p className="text-xs text-gray-500 mt-1">- Maria S.</p>
          </div>
          <div className="border-l-4 border-blue-600 pl-4">
            <p className="text-sm text-gray-600 italic">"Excellent family doctor. Highly recommended!"</p>
            <p className="text-xs text-gray-500 mt-1">- Ion P.</p>
          </div>
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-sm text-gray-600 ml-2">4.9/5</span>
          </div>
        </CardContent>
      </Card>

      {/* Health Tips */}
      <Card>
        <CardHeader>
          <CardTitle>Health Tip of the Day</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">
            💧 Remember to drink at least 8 glasses of water daily to stay hydrated and maintain optimal health.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
