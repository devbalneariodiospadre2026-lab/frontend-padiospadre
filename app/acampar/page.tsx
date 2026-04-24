import { Metadata } from "next"
import { CampingNavbar } from "@/components/camping-navbar"
import { CampingHero } from "@/components/camping-hero"
import { CampingInfo } from "@/components/camping-info"
import { CampingPricing } from "@/components/camping-pricing"
import { CampingRules } from "@/components/camping-rules"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Zona de Acampar - Parque Acuatico Dios Padre",
  description:
    "Disfruta de la zona de acampar del Parque Acuatico Dios Padre. Lotes de 5x5 metros con vigilancia, alumbrado, sanitarios y regaderas las 24 horas.",
}

export default function AcamparPage() {
  return (
    <main>
      <CampingNavbar />
      <CampingHero />
      <CampingInfo />
      <CampingPricing />
      <CampingRules />
      <Footer />
    </main>
  )
}
