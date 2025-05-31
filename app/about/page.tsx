import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[300px]">
        <Image
          src="/projects/ogrodzenia-montaz.webp"
          alt="Montaż ogrodzeń - Bramy-Pro"
          fill
          className="object-cover object-[0_30%] brightness-[0.85]"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">O Nas</h1>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Nasza Historia</h2>
              <p className="text-lg text-gray-600 mb-4">
                <span className="font-semibold text-primary">BRAMY-PRO</span> to dynamicznie rozwijająca się firma
                stworzona z myślą o klientach, ceniąca niezawodność, uczciwość i profesjonalizm.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Od momentu powstania jesteśmy zaangażowani w dostarczanie najwyższej jakości rozwiązań w zakresie bram i
                ogrodzeń naszym klientom. Wierzymy, że bramy i ogrodzenia to nie tylko elementy wyznaczające granice,
                ale ważne elementy estetyki i bezpieczeństwa Twojej posesji.
              </p>
              <p className="text-lg text-gray-600">
                Podchodzimy do każdego klienta indywidualnie. Każde ogrodzenie staramy się wykonać profesjonalnie, aby przez długi czas służyło naszemu klientowi w Konstantynowie Łódzkim, Łodzi i okolicach.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <div className="text-center">
                  <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-6">
                    <Image src="/slawek.JPG" alt="Sławomir Gajtka - profil" fill className="object-cover object-[-50%_100%]" />
                  </div>
                  <h3 className="text-xl font-bold">Sławomir Gajtka</h3>
                  <p className="text-primary mb-3">Założyciel</p>
                  <p className="text-gray-600">
                    Z ponad 20-letnim doświadczeniem w branży bram i ogrodzeń, Sławomir montuje bramy i ogrodzenia z pasją i profesjonalizmem w Konstantynowie Łódzkim, Pabianicach, Lutomiersku, Łodzi, Zgierzu, Aleksandrowie Łódzkim, Poddębicach i okolicach.
                  </p>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center mb-12">Nasze Wartości</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6">
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
              <h3 className="text-xl font-bold mb-3">Jakość</h3>
              <p className="text-gray-600">
                Używamy tylko najwyższej jakości materiałów i zatrudniamy wykwalifikowanych rzemieślników, aby zapewnić,
                że każda brama i ogrodzenie, które instalujemy w Konstantynowie Łódzkim, Łodzi i okolicach, spełniają nasze wymagające standardy.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6">
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
              <h3 className="text-xl font-bold mb-3">Orientacja na Klienta</h3>
              <p className="text-gray-600">
                Wierzymy w budowanie trwałych relacji z naszymi klientami poprzez uczciwą komunikację, niezawodną
                obsługę i ciągłe wsparcie.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6">
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
              <h3 className="text-xl font-bold mb-3">Innowacja</h3>
              <p className="text-gray-600">
                Nieustannie sprawdzamy nowe materiały, projekty i techniki montażu, aby oferować naszym klientom najnowocześniejsze i najskuteczniejsze rozwiązania w zakresie bram i ogrodzeń.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
