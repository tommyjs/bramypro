import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-orange-700">BRAMY</span>-PRO
            </h3>
            <p className="text-gray-300 mb-4">
              Profesjonalna instalacja, indywidualne projekty dla nieruchomości mieszkalnych i komercyjnych.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Przydatne linki</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Strona Główna
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  O Nas
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
                  Nasze Projekty
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-orange-700 mr-3 mt-0.5" />
                <a
                      href="https://www.google.com/maps/dir/?api=1&destination=ul.+Marsza%C5%82ka+J%C3%B3zefa+Pi%C5%82sudskiego+14,+95-050+Konstantyn%C3%B3w+%C5%81%C3%B3dzki"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white"
                    >
                      ul. Marszałka Józefa Piłsudskiego 14<br />
                      95-050 Konstantynów Łódzki<br />
                      NIP 831-145-12-00
                    </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-orange-700 mr-3" />
                <a href="tel:+48783796032" className="text-gray-300 hover:text-white transition-colors">
                  +48 783 796 032
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-orange-700 mr-3" />
                <a href="mailto:bramypro@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  bramypro@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Bramy-Pro. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  )
}
