import type React from "react"
import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { SITE_URL, business, schedule } from "@/lib/business"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Casa Nancy · Pupusería salvadoreña en Santa Coloma de Gramenet",
    template: "%s · Casa Nancy",
  },
  description:
    "Pupusería Casa Nancy en Santa Coloma de Gramenet (Barcelona). Pupusas hechas al momento, tamales, sopas y desayunos salvadoreños. 4,8★ con más de 500 reseñas en Google.",
  generator: "v0.app",
  keywords: [
    "Casa Nancy",
    "pupusería",
    "pupusas Barcelona",
    "comida salvadoreña",
    "restaurante salvadoreño",
    "Santa Coloma de Gramenet",
    "tamales",
    "sopa de pata",
  ],
  alternates: { canonical: "/" },
  icons: {
    icon: "/casa-nancy-logo.jpg",
    apple: "/casa-nancy-logo.jpg",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: "Casa Nancy",
    title: "Casa Nancy · Auténtico sabor salvadoreño en Barcelona",
    description:
      "Pupusas caseras, tamales y sopas tradicionales en Santa Coloma de Gramenet. Más de 500 reseñas en Google nos avalan.",
    images: [
      {
        url: "/authentic-salvadoran-pupusas-on-traditional-plate-.jpg",
        width: 1024,
        height: 1024,
        alt: "Pupusas tradicionales de Casa Nancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Casa Nancy · Auténtico sabor salvadoreño en Barcelona",
    description: "Pupusas caseras, tamales y sopas tradicionales en Santa Coloma de Gramenet.",
    images: ["/authentic-salvadoran-pupusas-on-traditional-plate-.jpg"],
  },
}

export const viewport: Viewport = {
  themeColor: "#1f2fcc",
  width: "device-width",
  initialScale: 1,
}

const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: business.fullName,
  alternateName: business.name,
  url: SITE_URL,
  image: `${SITE_URL}/authentic-salvadoran-pupusas-on-traditional-plate-.jpg`,
  logo: `${SITE_URL}/casa-nancy-logo.jpg`,
  telephone: "+34635446435",
  servesCuisine: ["Salvadoreña", "Centroamericana"],
  priceRange: "€",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    postalCode: business.address.postalCode,
    addressLocality: business.address.city,
    addressRegion: business.address.region,
    addressCountry: "ES",
  },
  sameAs: [business.instagram.url],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: business.rating.value,
    reviewCount: business.rating.count,
    bestRating: 5,
    worstRating: 1,
  },
  openingHoursSpecification: schedule
    .filter((d) => d.ranges.length > 0)
    .flatMap((d) =>
      d.ranges.map((r) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: DAY_NAMES[d.dayIndex],
        opens: r.start,
        closes: r.end,
      })),
    ),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT@0,9..144,400..700,0..100;1,9..144,400..700,0..100&display=swap"
        />
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
