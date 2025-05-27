"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"

const timeSlots = [
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
]

export function AppointmentForm() {
  const [date, setDate] = useState<Date>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Appointment request sent!",
      description: "We'll contact you within 24 hours to confirm your appointment.",
    })

    setIsSubmitting(false)

    // Reset form
    const form = e.target as HTMLFormElement
    form.reset()
    setDate(undefined)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Schedule Your Appointment</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input id="firstName" name="firstName" required aria-describedby="firstName-help" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input id="lastName" name="lastName" required aria-describedby="lastName-help" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" name="email" type="email" required aria-describedby="email-help" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+40 21 123 4567"
                  aria-describedby="phone-help"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="dateOfBirth">Date of Birth *</Label>
              <Input id="dateOfBirth" name="dateOfBirth" type="date" required aria-describedby="dob-help" />
            </div>
          </div>

          {/* Appointment Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Appointment Details</h3>

            <div className="space-y-2">
              <Label htmlFor="appointmentType">Appointment Type *</Label>
              <Select name="appointmentType" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select appointment type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="consultation">General Consultation</SelectItem>
                  <SelectItem value="checkup">Annual Check-up</SelectItem>
                  <SelectItem value="followup">Follow-up Visit</SelectItem>
                  <SelectItem value="urgent">Urgent Care</SelectItem>
                  <SelectItem value="vaccination">Vaccination</SelectItem>
                  <SelectItem value="screening">Health Screening</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Preferred Date *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) => date < new Date() || date.getDay() === 0}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label htmlFor="preferredTime">Preferred Time *</Label>
                <Select name="preferredTime" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="reason">Reason for Visit</Label>
              <Textarea
                id="reason"
                name="reason"
                rows={3}
                placeholder="Please describe the reason for your visit (optional)"
                aria-describedby="reason-help"
              />
            </div>
          </div>

          {/* Insurance Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Insurance Information</h3>

            <div className="space-y-2">
              <Label htmlFor="insurance">Insurance Provider</Label>
              <Select name="insurance">
                <SelectTrigger>
                  <SelectValue placeholder="Select your insurance provider" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="casa-sanatate">Casa de Sănătate</SelectItem>
                  <SelectItem value="regina-maria">Regina Maria</SelectItem>
                  <SelectItem value="medicover">Medicover</SelectItem>
                  <SelectItem value="medlife">MedLife</SelectItem>
                  <SelectItem value="sanador">Sanador</SelectItem>
                  <SelectItem value="private">Private Pay</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="policyNumber">Policy Number</Label>
              <Input
                id="policyNumber"
                name="policyNumber"
                placeholder="Enter your policy number"
                aria-describedby="policy-help"
              />
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Additional Information</h3>

            <div className="space-y-2">
              <Label htmlFor="medications">Current Medications</Label>
              <Textarea
                id="medications"
                name="medications"
                rows={2}
                placeholder="List any medications you are currently taking"
                aria-describedby="medications-help"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="allergies">Allergies</Label>
              <Textarea
                id="allergies"
                name="allergies"
                rows={2}
                placeholder="List any known allergies"
                aria-describedby="allergies-help"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea
                id="notes"
                name="notes"
                rows={3}
                placeholder="Any additional information you'd like to share"
                aria-describedby="notes-help"
              />
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Please note:</strong> This is an appointment request. We will contact you within 24 hours to
              confirm your appointment time. For urgent medical needs, please call +40 21 999 8888.
            </p>
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting} size="lg">
            {isSubmitting ? "Submitting Request..." : "Submit Appointment Request"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
