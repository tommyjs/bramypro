import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[300px]">
        <Image
          src="/placeholder.svg?height=300&width=1920"
          alt="About Bramy Pro"
          fill
          className="object-cover brightness-[0.85]"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">About Us</h1>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                <span className="font-semibold text-primary">BRAMY PRO</span> is a dynamically developing company
                created with customers in mind, valuing reliability, honesty, and professionalism.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Since our founding, we have been dedicated to providing the highest quality gate and fencing solutions
                to our customers. We believe that gates and fences are not just boundary markers, but important elements
                of your property's aesthetics and security.
              </p>
              <p className="text-lg text-gray-600">
                We approach each customer individually. Every order is a challenge for us, and our goal is a satisfied
                customer who will enjoy their gate and fence for many years.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/placeholder.svg?height=400&width=600" alt="Our team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Quality</h3>
              <p className="text-gray-600">
                We use only the highest quality materials and employ skilled craftsmen to ensure that every gate and
                fence we install meets our exacting standards.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                We believe in building lasting relationships with our customers through honest communication, reliable
                service, and exceeding expectations.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M2 12h20" />
                  <path d="M12 2v20" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously research new materials, designs, and installation techniques to offer our customers the
                most modern and effective gate and fencing solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center mb-12">Our Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-6">
                <Image src="/placeholder.svg?height=300&width=300" alt="Team member" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">Jan Kowalski</h3>
              <p className="text-primary mb-3">Founder & CEO</p>
              <p className="text-gray-600">
                With over 20 years of experience in the gate and fencing industry, Jan leads our team with passion and
                expertise.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-6">
                <Image src="/placeholder.svg?height=300&width=300" alt="Team member" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">Anna Nowak</h3>
              <p className="text-primary mb-3">Design Specialist</p>
              <p className="text-gray-600">
                Anna brings creativity and technical knowledge to help customers find the perfect gate and fence design
                for their property.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-6">
                <Image src="/placeholder.svg?height=300&width=300" alt="Team member" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">Piotr Wiśniewski</h3>
              <p className="text-primary mb-3">Installation Manager</p>
              <p className="text-gray-600">
                Piotr oversees all installation projects, ensuring they are completed to the highest standards and on
                schedule.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
