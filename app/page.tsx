import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[500px]">
        <Image
          src="/placeholder.svg?height=500&width=1920"
          alt="Modern gate and fence installation"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Quality Gates & Fencing Solutions
            </h1>
            <p className="mt-4 text-xl text-white max-w-3xl mx-auto">
              Professional installation and custom designs for residential and commercial properties
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/projects"
                className="inline-flex h-12 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium text-white shadow transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                View Our Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              <span className="text-primary">BRAMY PRO</span> BRAMY I OGRODZENIA
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We are a dynamically developing company created with customers in mind, valuing reliability, honesty, and
              professionalism. We specialize in the sale and installation of gates and fences. Our offer includes modern
              gates, slatted fences, concrete fences, substructures, fence panels, mesh fences, aluminum gates, gate and
              fence accessories, and automation.
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              We approach each customer individually. Every order is a challenge for us, and our goal is a satisfied
              customer who will enjoy their gate and fence for many years.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">We offer, among others:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02]">
              <div className="relative h-64">
                <Image src="/placeholder.svg?height=300&width=400" alt="Modern gate" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Modern Gates</h3>
                <p className="text-gray-600 mb-4">
                  Contemporary designs that combine aesthetics with functionality for a sleek look.
                </p>
                <Link href="/products/modern" className="inline-flex items-center text-primary hover:text-blue-800">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02]">
              <div className="relative h-64">
                <Image src="/placeholder.svg?height=300&width=400" alt="Slatted fence" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Slatted Fences</h3>
                <p className="text-gray-600 mb-4">
                  Elegant horizontal or vertical slat designs that provide privacy while maintaining style.
                </p>
                <Link href="/products/slatted" className="inline-flex items-center text-primary hover:text-blue-800">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02]">
              <div className="relative h-64">
                <Image src="/placeholder.svg?height=300&width=400" alt="Automatic gate" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Gate Automation</h3>
                <p className="text-gray-600 mb-4">
                  Advanced automation systems for convenient and secure access to your property.
                </p>
                <Link href="/products/automation" className="inline-flex items-center text-primary hover:text-blue-800">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">Ready to enhance your property?</h2>
          <p className="mt-4 text-xl text-white/90 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Our team of experts is ready to help you find the
            perfect gate and fencing solution.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </main>
  )
}
