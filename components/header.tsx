"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-12 w-48">
              <div className="flex items-center">
                <span className="text-3xl font-bold">
                  <span className="text-primary">BRAMY</span> PRO
                </span>
              </div>
              <span className="block text-sm text-gray-600 mt-[-5px]">BRAMY I OGRODZENIA</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <Link href="/" className="text-base font-medium text-gray-900 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-base font-medium text-gray-900 hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/projects" className="text-base font-medium text-gray-900 hover:text-primary transition-colors">
              Our Projects
            </Link>
            <Link href="/contact" className="text-base font-medium text-gray-900 hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6 text-gray-900" /> : <Menu className="h-6 w-6 text-gray-900" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-base font-medium text-gray-900 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-base font-medium text-gray-900 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/projects"
                className="text-base font-medium text-gray-900 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Projects
              </Link>
              <Link
                href="/contact"
                className="text-base font-medium text-gray-900 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
