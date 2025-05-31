"use client"

import Image from "next/image"
import { useState } from "react"

const projectImages = [
  {
    src: "/projects/brama-czolczyn.webp",
    alt: "Brama Czołczyn",
  },
  {
    src: "/projects/ogrodzenie-lamelowe-grafitowe-pionowe.webp",
    alt: "Ogrodzenie lamelowe grafitowe pionowe",
  },
  {
    src: "/projects/ogrodzenie-lamelowe-grafitowe.webp",
    alt: "Ogrodzenie lamelowe grafitowe",
  },
  {
    src: "/projects/ogrodzenie-lamelowe-szare.webp",
    alt: "Ogrodzenie lamelowe szare",
  },
  {
    src: "/projects/ogrodzenia-montaz.webp",
    alt: "Montaż ogrodzeń",
  },
  {
    src: "/projects/1746193660381.webp",
    alt: "Nowoczesna brama",
  },
  {
    src: "/projects/1746193799687.webp",
    alt: "Ogrodzenie lamelowe",
  },
  {
    src: "/projects/1746193838253.webp",
    alt: "Ogrodzenie lamelowe",
  },
  {
    src: "/projects/1746193892251.webp",
    alt: "Ogrodzenie lamelowe",
  },
  {
    src: "/projects/1746193969268.webp",
    alt: "Ogrodzenie lamelowe",
  },
  {
    src: "/projects/1746194014649.webp",
    alt: "Ogrodzenie lamelowe",
  },
  {
    src: "/projects/1746194097869.webp",
    alt: "Ogrodzenie lamelowe",
  },
  {
    src: "/projects/1746194228980.webp",
    alt: "Ogrodzenie lamelowe",
  },
  {
    src: "/projects/1746194286503.webp",
    alt: "Ogrodzenie lamelowe",
  },
  {
    src: "/projects/1746194375771.webp",
    alt: "Ogrodzenie lamelowe",
  },
  {
    src: "/projects/1746194643049.webp",
    alt: "Ogrodzenie lamelowe",
  },
  {
    src: "/projects/1746194865346.webp",
    alt: "Ogrodzenie lamelowe",
  }
]

export default function ProjectsGallery() {
  const [modalOpen, setModalOpen] = useState(false)
  const [currentIdx, setCurrentIdx] = useState(0)

  const openModal = (idx: number) => {
    setCurrentIdx(idx)
    setModalOpen(true)
  }
  const closeModal = () => setModalOpen(false)
  const prevImg = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    setCurrentIdx((idx) => (idx - 1 + projectImages.length) % projectImages.length)
  }
  const nextImg = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    setCurrentIdx((idx) => (idx + 1) % projectImages.length)
  }

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
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Nasze Projekty</h1>
            <p className="mt-4 text-xl text-white max-w-3xl mx-auto">
              Poznaj nasze portfolio przykładowych zrealizowanych instalacji bram i ogrodzeń w Konstantynowie Łódzkim, Pabianicach, Lutomiersku, Łodzi, Zgierzu, Aleksandrowie Łódzkim, Poddębicach i okolicach
            </p>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {projectImages.map((img, idx) => (
              <button
                key={img.src}
                className="relative group aspect-[4/3] overflow-hidden rounded-lg shadow hover:scale-[1.03] transition-transform"
                onClick={() => openModal(idx)}
                aria-label={`Powiększ zdjęcie: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover w-full h-full group-hover:brightness-90"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Modal Overlay */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold bg-black/60 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/80 transition"
            onClick={closeModal}
            aria-label="Zamknij podgląd"
          >
            ×
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl font-bold bg-black/60 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/80 transition"
            onClick={prevImg}
            aria-label="Poprzednie zdjęcie"
          >
            ‹
          </button>
          <div className="relative w-[90vw] max-w-3xl aspect-[4/3] flex items-center justify-center">
            <Image
              src={projectImages[currentIdx].src}
              alt={projectImages[currentIdx].alt}
              fill
              className="object-contain rounded-lg shadow-lg"
              sizes="90vw"
            />
          </div>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl font-bold bg-black/60 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/80 transition"
            onClick={nextImg}
            aria-label="Następne zdjęcie"
          >
            ›
          </button>
        </div>
      )}
    </main>
  )
}
