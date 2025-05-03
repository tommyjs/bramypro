"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock, ExternalLink } from "lucide-react"


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[300px]">
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Kontakt</h1>
            <p className="mt-4 text-xl text-white/90 max-w-3xl mx-auto">
              Skontaktuj się ze mną, aby uzyskać bezpłatną konsultację i wycenę
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Skontaktuj się ze mną</h2>
              <p className="text-lg text-gray-600 mb-8">
                Masz pytania dotyczące naszych rozwiązań ogrodzeniowych? Potrzebujesz wyceny dla swojego projektu?
                Nasz zespół jest tutaj, aby pomóc. Skontaktuj się z nami, korzystając z poniższych informacji lub
                napisz maila lub zadzwoń.
              </p>

              <div className="grid gap-8">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary mr-4 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">Adres</h3>
                    <p className="text-gray-600">
                      ul. Marszałka Józefa Piłsudskiego 14
                      <br />
                      95-050 Konstantynów Łódzki
                      <br />
                      NIP 831-145-12-00
                    </p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-blue-800 mt-2 text-sm"
                    >
                      Znajdź na Google Maps <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary mr-4 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">Telefon</h3>
                    <p className="text-gray-600">
                      <a href="tel:+48783796032" className="hover:text-primary transition-colors">
                        +48 783 796 032
                      </a>
                    </p>
                    <p className="text-sm text-gray-500 mt-1">Available Monday-Friday, 8:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary mr-4 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@bramypro.com" className="hover:text-primary transition-colors">
                        info@bramypro.com
                      </a>
                    </p>
                    <p className="text-sm text-gray-500 mt-1">We typically respond within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <Clock className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Godziny otwarcia</h3>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="font-medium">Poniedziałek - Piątek</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    8:00 - 18:00
                  </span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="font-medium">Sobota</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    9:00 - 15:00
                  </span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="font-medium">Niedziela</span>
                  <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">Zamknięte</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h4 className="font-semibold text-blue-800 mb-2">Zamów bezpłatną konsultację</h4>
                <p className="text-blue-700 text-sm mb-3">
                  Aby uzyskać najlepsze rezultaty, zalecamy umówienie się na konsultację.
                </p>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-700 mr-2" />
                  <a href="tel:+48783796032" className="text-blue-700 font-medium hover:underline">
                    +48 783 796 032
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center mb-12">Znajdź nas</h2>
          <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2470.145386370252!2d19.327587076740596!3d51.748664993049424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a4af0c9241a8b%3A0xc55de05ec7ed457e!2zUGnFgnN1ZHNraWVnbyAxNCwgOTUtMDUwIEtvbnN0YW50eW7Ds3cgxYHDs2R6a2k!5e0!3m2!1spl!2spl!4v1746204287695!5m2!1spl!2spl"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '0.75rem' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full rounded-xl"
              title="Mapa dojazdu BramyPro"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
