import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Casa Nancy - Auténtico Sabor Salvadoreño en Barcelona",
  description:
    "Pupusería Casa Nancy en Santa Coloma de Gramenet. Comida salvadoreña auténtica, pupusas caseras y ambiente familiar. ¡Ven a disfrutar del verdadero sabor de El Salvador!",
  generator: "v0.app",
  keywords:
    "Casa Nancy, pupusería, comida salvadoreña, Barcelona, Santa Coloma de Gramenet, pupusas, restaurante salvadoreño",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
