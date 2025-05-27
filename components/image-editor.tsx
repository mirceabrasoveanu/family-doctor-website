"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Download, Upload, Crop } from "lucide-react"

export function ImageEditor() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [image, setImage] = useState<HTMLImageElement | null>(null)
  const [filters, setFilters] = useState({
    blur: 0,
    brightness: 100,
    contrast: 100,
    saturation: 100,
    rotation: 0,
    scale: 1,
  })

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const img = new Image()
        img.crossOrigin = "anonymous"
        img.onload = () => {
          setImage(img)
          drawImage(img, filters)
        }
        img.src = e.target?.result as string
      }
      reader.readAsDataURL(file)
    }
  }

  const drawImage = (img: HTMLImageElement, currentFilters: typeof filters) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    canvas.width = 400
    canvas.height = 300

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Save context state
    ctx.save()

    // Apply transformations
    ctx.translate(canvas.width / 2, canvas.height / 2)
    ctx.rotate((currentFilters.rotation * Math.PI) / 180)
    ctx.scale(currentFilters.scale, currentFilters.scale)

    // Apply filters
    ctx.filter = `
      blur(${currentFilters.blur}px)
      brightness(${currentFilters.brightness}%)
      contrast(${currentFilters.contrast}%)
      saturate(${currentFilters.saturation}%)
    `

    // Draw image
    const aspectRatio = img.width / img.height
    let drawWidth = canvas.width
    let drawHeight = canvas.height

    if (aspectRatio > canvas.width / canvas.height) {
      drawHeight = canvas.width / aspectRatio
    } else {
      drawWidth = canvas.height * aspectRatio
    }

    ctx.drawImage(img, -drawWidth / 2, -drawHeight / 2, drawWidth, drawHeight)

    // Restore context state
    ctx.restore()
  }

  useEffect(() => {
    if (image) {
      drawImage(image, filters)
    }
  }, [filters, image])

  const handleFilterChange = (filterName: keyof typeof filters, value: number) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: value,
    }))
  }

  const resetFilters = () => {
    setFilters({
      blur: 0,
      brightness: 100,
      contrast: 100,
      saturation: 100,
      rotation: 0,
      scale: 1,
    })
  }

  const downloadImage = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const link = document.createElement("a")
    link.download = "edited-image.png"
    link.href = canvas.toDataURL()
    link.click()
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Crop className="h-5 w-5 text-blue-600" />
          <span>Image Editor</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Upload Section */}
        <div className="text-center">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            aria-label="Upload image file"
          />
          <Button onClick={() => fileInputRef.current?.click()} variant="outline" className="mb-4">
            <Upload className="h-4 w-4 mr-2" />
            Upload Image
          </Button>
        </div>

        {/* Canvas */}
        <div className="flex justify-center">
          <canvas ref={canvasRef} className="border border-gray-300 rounded-lg max-w-full" width={400} height={300} />
        </div>

        {/* Controls */}
        {image && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Blur: {filters.blur}px</Label>
                <Slider
                  value={[filters.blur]}
                  onValueChange={(value) => handleFilterChange("blur", value[0])}
                  max={10}
                  step={0.5}
                  className="w-full"
                  aria-label="Blur intensity"
                />
              </div>

              <div className="space-y-2">
                <Label>Brightness: {filters.brightness}%</Label>
                <Slider
                  value={[filters.brightness]}
                  onValueChange={(value) => handleFilterChange("brightness", value[0])}
                  min={0}
                  max={200}
                  step={5}
                  className="w-full"
                  aria-label="Brightness level"
                />
              </div>

              <div className="space-y-2">
                <Label>Contrast: {filters.contrast}%</Label>
                <Slider
                  value={[filters.contrast]}
                  onValueChange={(value) => handleFilterChange("contrast", value[0])}
                  min={0}
                  max={200}
                  step={5}
                  className="w-full"
                  aria-label="Contrast level"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Saturation: {filters.saturation}%</Label>
                <Slider
                  value={[filters.saturation]}
                  onValueChange={(value) => handleFilterChange("saturation", value[0])}
                  min={0}
                  max={200}
                  step={5}
                  className="w-full"
                  aria-label="Saturation level"
                />
              </div>

              <div className="space-y-2">
                <Label>Rotation: {filters.rotation}°</Label>
                <Slider
                  value={[filters.rotation]}
                  onValueChange={(value) => handleFilterChange("rotation", value[0])}
                  min={-180}
                  max={180}
                  step={15}
                  className="w-full"
                  aria-label="Rotation angle"
                />
              </div>

              <div className="space-y-2">
                <Label>Scale: {filters.scale.toFixed(1)}x</Label>
                <Slider
                  value={[filters.scale]}
                  onValueChange={(value) => handleFilterChange("scale", value[0])}
                  min={0.5}
                  max={2}
                  step={0.1}
                  className="w-full"
                  aria-label="Scale factor"
                />
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        {image && (
          <div className="flex flex-wrap gap-4 justify-center">
            <Button onClick={resetFilters} variant="outline">
              Reset Filters
            </Button>
            <Button onClick={downloadImage}>
              <Download className="h-4 w-4 mr-2" />
              Download Image
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
