import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Attractions } from "@/components/attractions"
import { Services } from "@/components/services"
import { Stats } from "@/components/stats"
import { Pricing } from "@/components/pricing"
import { RentalEquipment } from "@/components/rental-equipment"
import { Restaurante } from "@/components/restaurante"
import { CafeteriaAncla } from "@/components/cafeteria-ancla"
import { AbismoBar } from "@/components/abismo-bar"
import { Reglamento } from "@/components/reglamento"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Attractions />
      <Services />
      <Stats />
      <Pricing />
      <RentalEquipment />
      <Restaurante />
      <CafeteriaAncla />
      <AbismoBar />
      <Reglamento />
      <Contact />
      <Footer />
    </main>
  )
}
