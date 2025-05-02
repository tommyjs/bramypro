import Image from "next/image"

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[300px]">
        <Image
          src="/placeholder.svg?height=300&width=1920"
          alt="Our Projects"
          fill
          className="object-cover brightness-[0.85]"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Our Projects</h1>
            <p className="mt-4 text-xl text-white max-w-3xl mx-auto">
              Explore our portfolio of completed gate and fence installations
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Modern residential gate"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Modern Residential Gate</h3>
                <p className="text-gray-600 mb-2">Warsaw, Poland</p>
                <p className="text-gray-600">
                  A contemporary sliding gate installation for a modern home, providing security and style.
                </p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Commercial property fence"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Commercial Property Fence</h3>
                <p className="text-gray-600 mb-2">Krakow, Poland</p>
                <p className="text-gray-600">
                  Security fencing for a commercial property with automated gate system and access control.
                </p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Decorative garden gate"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Decorative Garden Gate</h3>
                <p className="text-gray-600 mb-2">Gdansk, Poland</p>
                <p className="text-gray-600">
                  A custom-designed decorative gate that enhances the beauty of a private garden while providing
                  security.
                </p>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Industrial gate"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Industrial Security Gate</h3>
                <p className="text-gray-600 mb-2">Wroclaw, Poland</p>
                <p className="text-gray-600">
                  High-security gate solution for an industrial facility with specialized access control systems.
                </p>
              </div>
            </div>

            {/* Project 5 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Residential privacy fence"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Residential Privacy Fence</h3>
                <p className="text-gray-600 mb-2">Poznan, Poland</p>
                <p className="text-gray-600">
                  A combination of concrete and metal elements creating a beautiful and private boundary for a family
                  home.
                </p>
              </div>
            </div>

            {/* Project 6 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Modern gate system"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Modern Gate System</h3>
                <p className="text-gray-600 mb-2">Lodz, Poland</p>
                <p className="text-gray-600">
                  An automated sliding gate with integrated access control for a modern residential complex.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-blue-700">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="inline-block">
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "The team at Bramy Pro did an outstanding job on our property. The gate looks beautiful, and the
                installation was quick and professional. Highly recommended!"
              </p>
              <div className="font-semibold">Marta K., Warsaw</div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-blue-700">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="inline-block">
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "We needed a secure gate for our commercial property, and Bramy Pro delivered exactly what we needed.
                The automated system works perfectly, and the gate provides the security we required."
              </p>
              <div className="font-semibold">Tomasz B., Krakow</div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-blue-700">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="inline-block">
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "The design consultation was incredibly helpful. They listened to our needs and suggested the perfect
                solution for our garden. The finished gate exceeded our expectations."
              </p>
              <div className="font-semibold">Agnieszka W., Gdansk</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
