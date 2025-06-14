import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import HeroSlider from "@/components/hero-slider"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section with Slider for mobile/tablet, mosaic for desktop */}
      <div className="block md:hidden">
        <HeroSlider />
      </div>
      {/* Hero Section */}
      <section className="relative w-full h-[500px] hidden md:block">
        {/* Mosaic grid for desktop/tablet, single image for mobile */}
        <div className="absolute inset-0 w-full h-full grid grid-cols-2 grid-rows-2 gap-1
                        sm:grid-cols-2 sm:grid-rows-2
                        md:grid-cols-4 md:grid-rows-1">
          {/* Image 1: always visible */}
          <div className="col-span-2 row-span-2 md:col-span-1 md:row-span-1 relative h-full">
            <Image
              src="/projects/brama-czolczyn.webp"
              alt="Realizacja 1"
              fill
              className="object-cover w-full h-full"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
          {/* Image 2: visible from sm and up */}
          <div className="hidden sm:block col-span-1 row-span-1 md:col-span-1 md:row-span-1 relative h-full">
            <Image
              src="/projects/ogrodzenie-lamelowe-szare.webp"
              alt="Realizacja 2"
              fill
              className="object-cover w-full h-full"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </div>
          {/* Image 3: visible from md and up */}
          <div className="hidden md:block col-span-1 row-span-1 relative h-full">
            <Image
              src="/projects/ogrodzenie-lamelowe-grafitowe.webp"
              alt="Realizacja 3"
              fill
              className="object-cover w-full h-full"
              sizes="25vw"
            />
          </div>
          {/* Image 4: visible from md and up */}
          <div className="hidden md:block col-span-1 row-span-1 relative h-full">
            <Image
              src="/projects/ogrodzenie-lamelowe-grafitowe-pionowe.webp"
              alt="Realizacja 4"
              fill
              className="object-cover w-full h-full"
              sizes="25vw"
            />
          </div>
        </div>
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-4 md:px-6 text-center">
              <h1 className="inline-block px-4 py-2 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl drop-shadow-lg backdrop-blur-sm bg-black/40 rounded-xl">
                Bramy i Ogrodzenia
              </h1>
              <p className="mt-4 text-xl text-white max-w-3xl mx-auto drop-shadow-lg backdrop-blur-sm bg-black/40 rounded-xl w-auto p-3">
                Profesjonalna instalacja bram i ogrodzeń w Konstantynowie Łódzkim, Pabianicach, Lutomiersku, Łodzi, Zgierzu, Aleksandrowie Łódzkim, Poddębicach i okolicach. Indywidualne projekty dla nieruchomości mieszkalnych i komercyjnych.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-white shadow-lg drop-shadow-lg transition-colors hover:bg-orange-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  Darmowa Wycena
                </Link>
                <Link
                  href="/projects"
                  className="backdrop-blur-sm inline-flex h-12 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium text-white shadow-lg drop-shadow-lg transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Zobacz Nasze Projekty
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
              <span className="text-primary">BRAMY-PRO</span> BRAMY I OGRODZENIA
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Jesteśmy firmą stworzoną z myślą o klientach, ceniących niezawodność i profesjonalizm.
              Specjalizujemy się w sprzedaży i montażu bram oraz ogrodzeń.
              Nasza oferta obejmuje nowoczesne bramy, ogrodzenia palisadowe, lamelowe, sztachetowe, panelowe, siatki ogrodzeniowe, słupki multimedialne, furtki, akcesoria do bram i ogrodzeń oraz automatyka.
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Podchodzimy do każdego klienta indywidualnie. Każde ogrodzenie staramy się wykonać profesjonalnie, aby przez długi czas służyło naszemu klientowi w Konstantynowie Łódzkim, Łodzi i okolicach.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">Oferujemy między innymi:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02]">
              <div className="relative h-64">
                <Image src="/projects/1746193660381.webp" alt="Nowoczesna brama" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Nowoczesne Bramy</h3>
                <p className="text-gray-600 mb-4">
                  Współczesne projekty łączące estetykę z funkcjonalnością dla eleganckiego wyglądu.
                </p>
                <Link href="/contact" className="inline-flex items-center text-primary hover:text-orange-800">
                  Dowiedz się więcej <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02]">
              <div className="relative h-64">
                <Image src="/projects/1746193799687.webp" alt="Ogrodzenie lamelowe" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Ogrodzenia Palisadowe</h3>
                <p className="text-gray-600 mb-4">
                  Eleganckie poziome lub pionowe projekty lamelowe zapewniające prywatność przy zachowaniu stylu.
                </p>
                <Link href="/contact" className="inline-flex items-center text-primary hover:text-orange-800">
                  Dowiedz się więcej <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02]">
              <div className="relative h-64">
                <Image src="/projects/1746193892251.webp" alt="Automatyka bram" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Automatyka Bram</h3>
                <p className="text-gray-600 mb-4">
                  Zaawansowane systemy automatyki zapewniające wygodny i bezpieczny dostęp do Twojej posesji.
                </p>
                <Link href="/contact" className="inline-flex items-center text-primary hover:text-orange-800">
                  Dowiedz się więcej <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">Gotowy, aby ulepszyć swoją posesję?</h2>
          <p className="mt-4 text-xl text-white/90 max-w-2xl mx-auto">
            Skontaktuj się z nami już dziś, aby uzyskać bezpłatną konsultację i wycenę na bramy i ogrodzenia w Konstantynowie Łódzkim, Pabianicach, Lutomiersku, Łodzi, Zgierzu, Aleksandrowie Łódzkim, Poddębicach i okolicach. Jestem gotowy,
            aby pomóc Ci znaleźć idealne rozwiązanie dla Twojej bramy i ogrodzenia.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Skontaktuj się z Nami
          </Link>
        </div>
      </section>
    </main>
  )
}
