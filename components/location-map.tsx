"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation } from "lucide-react"

export function LocationMap() {
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null)
  const [distance, setDistance] = useState<string>("")

  // Practice location in Bucharest, Romania
  const practiceLocation = {
    lat: 44.4268,
    lng: 26.1025,
    address: "Str. Medicilor 123, Sector 1, Bucharest, Romania",
  }

  useEffect(() => {
    // Get user's location for distance calculation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude
          const userLng = position.coords.longitude
          setUserLocation({ lat: userLat, lng: userLng })

          // Calculate distance using Haversine formula
          const distance = calculateDistance(userLat, userLng, practiceLocation.lat, practiceLocation.lng)
          setDistance(`${distance.toFixed(1)} km`)
        },
        (error) => {
          console.log("Geolocation error:", error)
        },
      )
    }
  }, [])

  const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number) => {
    const R = 6371 // Earth's radius in kilometers
    const dLat = ((lat2 - lat1) * Math.PI) / 180
    const dLng = ((lng2 - lng1) * Math.PI) / 180
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLng / 2) * Math.sin(dLng / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    return R * c
  }

  const openInMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${practiceLocation.lat},${practiceLocation.lng}`
    window.open(url, "_blank")
  }

  const getDirections = () => {
    if (userLocation) {
      const url = `https://www.google.com/maps/dir/${userLocation.lat},${userLocation.lng}/${practiceLocation.lat},${practiceLocation.lng}`
      window.open(url, "_blank")
    } else {
      openInMaps()
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <MapPin className="h-5 w-5 text-blue-600" />
          <span>Our Location</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Map placeholder */}
        <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-2" />
              <p className="text-gray-600 font-medium">Dr. Maria Popescu Practice</p>
              <p className="text-sm text-gray-500">{practiceLocation.address}</p>
              {distance && <p className="text-sm text-blue-600 mt-2">📍 {distance} from your location</p>}
            </div>
          </div>
          {/* Simulated map overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-green-100/50"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button onClick={openInMaps} variant="outline" className="w-full">
            <MapPin className="h-4 w-4 mr-2" />
            View on Map
          </Button>
          <Button onClick={getDirections} className="w-full">
            <Navigation className="h-4 w-4 mr-2" />
            Get Directions
          </Button>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-medium text-blue-900 mb-2">Transportation</h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>🚇 Metro: Piața Victoriei (5 min walk)</li>
            <li>🚌 Bus: Lines 131, 331 (Medicilor stop)</li>
            <li>🚗 Parking: Available on-site</li>
            <li>♿ Wheelchair accessible entrance</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
