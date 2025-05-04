import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BRAMY-PRO - Bramy i Ogrodzenia",
  description: "Profesjonalny montaż bram i ogrodzeń. Palisadowe, panelowe, furtki, bramy, automatyka. Skontaktuj się: 783 796 032",
  openGraph: {
    title: "BRAMY-PRO - Bramy i Ogrodzenia",
    description: "Profesjonalny montaż bram i ogrodzeń. Palisadowe, panelowe, furtki, bramy, automatyka. Skontaktuj się: 783 796 032",
    url: "https://bramypro.pl",
    type: "website",
    images: [
      {
        url: "/bramypro-logo-og.png",
        width: 1200,
        height: 630,
        alt: "BRAMY-PRO - Bramy i Ogrodzenia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BRAMY-PRO - Bramy i Ogrodzenia",
    description: "Profesjonalny montaż bram i ogrodzeń. Palisadowe, panelowe, furtki, bramy, automatyka. Skontaktuj się: 783 796 032",
    images: ["/bramypro-logo-og.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
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
