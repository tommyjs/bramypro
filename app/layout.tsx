import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bramy-Pro - Bramy i Ogrodzenia",
  description: "Profesjonalna instalacja, indywidualne projekty dla nieruchomości mieszkalnych i komercyjnych.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="BRAMY-PRO - Bramy i Ogrodzenia" />
        <meta property="og:description" content="Profesjonalny montaż bram i ogrodzeń. Palisadowe, panelowe, furtki, bramy, automatyka. Skontaktuj się: 783 796 032" />
        <meta property="og:image" content="/bramypro-logo-og.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bramypro.pl" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
