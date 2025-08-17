import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Kupanda Coaching - Leadership & Performance Coaching",
  description:
    "Unlock your potential through executive leadership and performance coaching. Seeding Success, Growing Together.",
  generator: "Next.js",
  keywords: "leadership coaching, performance coaching, executive coaching, career development, personal development",
  authors: [{ name: "Kupanda Coaching" }],
  creator: "Kupanda Coaching",
  publisher: "Kupanda Coaching",
  openGraph: {
    title: "Kupanda Coaching - Leadership & Performance Coaching",
    description:
      "Unlock your potential through executive leadership and performance coaching. Seeding Success, Growing Together.",
    url: "https://kupandacoaching.com",
    siteName: "Kupanda Coaching",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kupanda Coaching - Leadership & Performance Coaching",
    description:
      "Unlock your potential through executive leadership and performance coaching. Seeding Success, Growing Together.",
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
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
