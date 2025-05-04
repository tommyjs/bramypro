"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

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
            {(() => {
              const pathname = usePathname();
              return (
                <>
                  <Link
                    href="/"
                    className={`text-base font-medium transition-colors ${pathname === "/" ? "text-primary font-bold underline" : "text-gray-900 hover:text-primary"}`}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className={`text-base font-medium transition-colors ${pathname === "/about" ? "text-primary font-bold underline" : "text-gray-900 hover:text-primary"}`}
                  >
                    O Nas
                  </Link>
                  <Link
                    href="/projects"
                    className={`text-base font-medium transition-colors ${pathname === "/projects" ? "text-primary font-bold underline" : "text-gray-900 hover:text-primary"}`}
                  >
                    Nasze Projekty
                  </Link>
                  <Link
                    href="/contact"
                    className={`text-base font-medium transition-colors ${pathname === "/contact" ? "text-primary font-bold underline" : "text-gray-900 hover:text-primary"}`}
                  >
                    Kontakt
                  </Link>
                </>
              );
            })()}
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
                O Nas
              </Link>
              <Link
                href="/projects"
                className="text-base font-medium text-gray-900 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Nasze Projekty
              </Link>
              <Link
                href="/contact"
                className="text-base font-medium text-gray-900 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
