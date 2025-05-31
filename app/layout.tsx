import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BRAMY-PRO - Bramy i Ogrodzenia | Konstantynów Łódzki, Pabianice, Lutomiersk, Łódź, Zgierz, Aleksandrów Łódzki, Poddębice",
  description: "Profesjonalny montaż bram i ogrodzeń w Konstantynowie Łódzkim, Pabianicach, Lutomiersku, Łodzi, Zgierzu, Aleksandrowie Łódzkim, Poddębicach i okolicach. Palisadowe, panelowe, furtki, bramy, automatyka. Skontaktuj się: 783 796 032",
  keywords: [
    "bramy", "ogrodzenia", "montaż bram", "montaż ogrodzeń", 
    "Konstantynów Łódzki", "Pabianice", "Lutomiersk", "Łódź", "Zgierz", "Aleksandrów Łódzki", "Poddębice",
    "ogrodzenia palisadowe", "ogrodzenia panelowe", "ogrodzenia lamelowe",
    "bramy automatyczne", "furtki", "automatyka bram",
    "bramy-pro", "montaż ogrodzeń łódź", "bramy łódź", "ogrodzenia łódź"
  ],
  openGraph: {
    title: "BRAMY-PRO - Bramy i Ogrodzenia | Konstantynów Łódzki, Pabianice, Lutomiersk, Łódź, Zgierz, Aleksandrów Łódzki, Poddębice",
    description: "Profesjonalny montaż bram i ogrodzeń w Konstantynowie Łódzkim, Pabianicach, Lutomiersku, Łodzi, Zgierzu, Aleksandrowie Łódzkim, Poddębicach i okolicach. Palisadowe, panelowe, furtki, bramy, automatyka. Skontaktuj się: 783 796 032",
    url: "https://bramypro.pl",
    type: "website",
    images: [
      {
        url: "https://bramypro.pl/bramypro-logo-og.png",
        width: 1200,
        height: 630,
        alt: "BRAMY-PRO - Bramy i Ogrodzenia Konstantynów Łódzki, Łódź",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BRAMY-PRO - Bramy i Ogrodzenia | Konstantynów Łódzki, Pabianice, Lutomiersk, Łódź, Zgierz, Aleksandrów Łódzki, Poddębice",
    description: "Profesjonalny montaż bram i ogrodzeń w Konstantynowie Łódzkim, Pabianicach, Lutomiersku, Łodzi, Zgierzu, Aleksandrowie Łódzkim, Poddębicach i okolicach. Palisadowe, panelowe, furtki, bramy, automatyka. Skontaktuj się: 783 796 032",
    images: ["https://bramypro.pl/bramypro-logo-og.png"],
  },
  alternates: {
    canonical: "https://bramypro.pl/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  themeColor: "#1A2233",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://bramypro.pl"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1A2233" />
        <link rel="canonical" href="https://bramypro.pl/" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
