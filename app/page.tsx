import { ImageSlider } from "@/components/image-slider"
import { ServicesOverview } from "@/components/services-overview"
import { AboutPreview } from "@/components/about-preview"
import { AudioPlayer } from "@/components/audio-player"
import { Advertisement } from "@/components/advertisement"
import { Sidebar } from "@/components/sidebar"

export default function HomePage() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex-1">
        {/* Hero Section with Slider */}
        <section className="relative">
          <ImageSlider />
        </section>

        {/* Advertisement */}
        <section className="py-8">
          <Advertisement />
        </section>

        {/* About Preview */}
        <section className="py-16 bg-gray-50">
          <AboutPreview />
        </section>

        {/* Services Overview */}
        <section className="py-16">
          <ServicesOverview />
        </section>

        {/* Audio Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Relaxation Audio</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Listen to calming sounds while you wait for your appointment or during your visit.
              </p>
            </div>
            <AudioPlayer />
          </div>
        </section>
      </div>

      {/* Sidebar */}
      <aside className="lg:w-80">
        <Sidebar />
      </aside>
    </div>
  )
}
