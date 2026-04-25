"use client"

import { Umbrella, Table, StretchHorizontal, Tent, BedSingle, Flame, Package } from "lucide-react"
import { ScrollAnimation, StaggerContainer } from "@/components/scroll-animation"

const items = [
  { icon: Umbrella, name: "Sombrillas", price: "$110.00" },
  { icon: Table, name: "Mesas", price: "$80.00" },
  { icon: StretchHorizontal, name: "Mesa Larga", price: "$210.00" },
  { icon: Tent, name: "Carpa 5x5 mts", price: "$800.00" },
  { icon: Tent, name: "Carpa 8x5 mts", price: "$1,700.00" },
  { icon: BedSingle, name: "Camastros", price: "$90.00" },
  { icon: Flame, name: "Asadores", price: "$300.00" },
  { icon: Package, name: "Equipo Completo", price: "$300.00", note: "1 sombrilla, 1 mesa, 4 sillas" },
]

export function RentalEquipment() {
  return (
    <section id="renta" className="py-24 bg-[#f5f7f9]">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollAnimation animation="fade-up" className="text-center mb-16">
          <span className="inline-block rounded-full bg-[#ED8B00]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#ED8B00] mb-4">
            Renta de Equipo
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-[#6B3D2E] sm:text-4xl md:text-5xl text-balance">
            Mobiliario Disponible
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#6B3D2E]/70 font-serif">
            Renta el equipo que necesites para disfrutar tu dia con toda la comodidad.
          </p>
        </ScrollAnimation>

        <div className="mx-auto max-w-4xl">
          <StaggerContainer 
            className="grid gap-3 sm:grid-cols-2"
            staggerDelay={80}
            animation="fade-left"
          >
            {items.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between rounded-xl border border-[#d1d7dc] bg-[#ffffff] p-5 transition-all hover:shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#ED8B00]/10">
                    <item.icon className="h-5 w-5 text-[#ED8B00]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#6B3D2E]">{item.name}</p>
                    {item.note && (
                      <p className="text-xs text-[#6B3D2E]/70 font-serif">{item.note}</p>
                    )}
                  </div>
                </div>
                <span className="text-lg font-bold text-[#ED8B00]">{item.price}</span>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
