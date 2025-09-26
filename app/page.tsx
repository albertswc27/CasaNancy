import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { MenuSection } from "@/components/menu-section"
import { SaturdaySpecialsSection } from "@/components/saturday-specials-section"
import { DessertsBeveragesSection } from "@/components/desserts-beverages-section"
import { HoursSection } from "@/components/hours-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <SaturdaySpecialsSection />
        <DessertsBeveragesSection />
        <HoursSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
