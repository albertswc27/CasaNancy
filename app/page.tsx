import { AnnouncementBar } from "@/components/announcement-bar"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { MilestoneSection } from "@/components/milestone-section"
import { AboutSection } from "@/components/about-section"
import { MenuSection } from "@/components/menu-section"
import { BreakfastSpecialSection } from "@/components/breakfast"
import { SaturdaySpecialsSection } from "@/components/saturday-specials-section"
import { DessertsBeveragesSection } from "@/components/desserts-beverages-section"
import { HoursSection } from "@/components/hours-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Header />
      <main>
        <HeroSection />
        <MilestoneSection />
        <AboutSection />
        <MenuSection />
        <BreakfastSpecialSection />
        <SaturdaySpecialsSection />
        <DessertsBeveragesSection />
        <HoursSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
