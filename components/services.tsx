"use client"

import {
  Flame, Lock, Armchair, Hotel, UtensilsCrossed, Drumstick,
  Tent, Cross, Coffee, ShowerHead, GlassWater, Clock,
} from "lucide-react"
import { ScrollAnimation, StaggerContainer } from "@/components/scroll-animation"

const services = [
  { icon: Flame, label: "Asadores" },
  { icon: Lock, label: "Lockers" },
  { icon: Armchair, label: "Renta Mobiliario" },
  { icon: Hotel, label: "Hotel" },
  { icon: UtensilsCrossed, label: "Restaurante" },
  { icon: Drumstick, label: "Rosticeria" },
  { icon: Tent, label: "Zona Camping" },
  { icon: Coffee, label: "Cafeterias" },
  { icon: ShowerHead, label: "Regaderas y Vestidores" },
  { icon: GlassWater, label: "Barra de Bebidas" },
]

export function Services() {
  return (
    <section id="servicios" className="py-24 bg-[#00843D]/5">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollAnimation animation="fade-up" className="text-center mb-16">
          <span className="inline-block rounded-full bg-[#00843D]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#00843D] mb-4">
            Servicios
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-[#6B3D2E] sm:text-4xl md:text-5xl text-balance">
            Todo Lo Que Necesitas
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#6B3D2E]/70 font-serif">
            Contamos con todos los servicios para que tu visita sea comoda, segura y sin preocupaciones.
          </p>
        </ScrollAnimation>

        <StaggerContainer 
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
          staggerDelay={80}
          animation="scale-up"
        >
          {services.map((service) => (
            <div
              key={service.label}
              className="flex flex-col items-center gap-3 rounded-xl border border-[#d1d7dc] bg-[#ffffff] p-6 text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#00843D]/10">
                <service.icon className="h-7 w-7 text-[#00843D]" />
              </div>
              <p className="text-sm font-semibold text-[#6B3D2E]">{service.label}</p>
            </div>
          ))}
        </StaggerContainer>

        {/* Servicio de Enfermeria destacado */}
        <ScrollAnimation animation="fade-up" delay={400} className="mt-10 mx-auto max-w-2xl">
          <div className="flex flex-col gap-4 rounded-xl border-2 border-[#00843D] bg-[#ffffff] p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#00843D]">
                <Cross className="h-7 w-7 text-[#ffffff]" />
              </div>
              <div>
                <p className="font-bold text-[#6B3D2E] text-lg">Servicio de Enfermeria</p>
                <p className="text-sm text-[#6B3D2E]/70 font-serif">MOD 1 Alberca Olimpica - MOD 2 Playa Sirena</p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
