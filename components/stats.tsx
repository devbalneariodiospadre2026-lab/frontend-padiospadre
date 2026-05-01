"use client"

import { Waves, Sun, Star, Tent } from "lucide-react"
import { StaggerContainer } from "@/components/scroll-animation"

const stats = [
  { icon: Waves, value: "8", label: "Atracciones acuáticas" },
  { icon: Tent, value: "11", label: "Servicios disponibles" },
  { icon: Sun, value: "365", label: "Días abiertos al año" },
  { icon: Star, value: "4.4", label: "Calificación promedio" },
]

export function Stats() {
  return (
    <section className="py-20 bg-[#62B5E5]">
      <div className="mx-auto max-w-7xl px-6">
        <StaggerContainer 
          className="grid grid-cols-2 gap-8 lg:grid-cols-4"
          staggerDelay={150}
          animation="fade-up"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#ffffff]/20">
                <stat.icon className="h-7 w-7 text-[#ffffff]" />
              </div>
              <p className="text-3xl font-extrabold text-[#ffffff] sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-medium text-[#ffffff]/70 font-serif">
                {stat.label}
              </p>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
