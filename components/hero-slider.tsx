"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface SlideImage {
  url: string
  alt: string
}

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const slides: SlideImage[] = [
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ogrodzenie-lamelowe-grafitowe-pionowe-iP9zYJmmdbcbHnCvJtsZY7vYZSHA8z.webp",
      alt: "Modern vertical slat fence in graphite color with greenery",
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brama-czolczyn-7RucnavVoYQaUbfTcohN85wfzzfd3g.webp",
      alt: "Elegant sliding gate with vertical slats in dark gray",
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ogrodzenie-lamelowe-grafitowe.webp-icFqdC8zOFiRdKioZHsskPmhqVnjOS.jpeg",
      alt: "Horizontal slat fence in graphite color along property line",
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ogrodzenie-lamelowe-szare.webp-4nYUUa0WOhXGzRhfyQXz5zgBuk2HcE.jpeg",
      alt: "Light gray horizontal slat fence with landscaping",
    },
  ]

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
      }, 5000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [autoplay, slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    setAutoplay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    setAutoplay(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setAutoplay(false)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      nextSlide()
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      prevSlide()
    }
  }

  return (
    <div
      className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.url || "/placeholder.svg"}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-4xl mx-auto bg-black/30 backdrop-blur-sm p-6 md:p-8 rounded-lg">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white mb-4">
              Bramy i Ogrodzenia
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Profesjonalna instalacja, indywidualne projekty dla nieruchomości mieszkalnych i komercyjnych.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-white shadow transition-colors hover:bg-orange-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Darmowa Wycena
              </Link>
              <Link
                href="/projects"
                className="inline-flex h-12 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium text-white shadow transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Zobacz Nasze Projekty
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white w-8" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
