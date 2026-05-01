"use client"

import { Wine, Music, Wifi, Clock } from "lucide-react"

const barServices = [
  {
    icon: Wine,
    name: "Billar",
    price: "$70.00",
    duration: "1 hora",
  },
  {
    icon: Music,
    name: "Karaoke",
    price: "$300.00",
    duration: "Consumo mínimo",
  },
  {
    icon: Wifi,
    name: "Zona WiFi",
    price: "$30.00",
    duration: "1 hora",
  },
]

export function AbismoBar() {
  return (
    <section id="bar" className="py-24 bg-[#1a1a1a]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-[#ED8B00]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#ED8B00] mb-4">
            Bar & Entretenimiento
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl text-balance">
            Bar "Abismo"
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#a0a0a0] font-serif text-lg">
            Cocteles nacionales e internacionales, preparados al momento para refrescarte y disfrutar.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
          {barServices.map((service) => (
            <div
              key={service.name}
              className="relative flex flex-col items-center rounded-xl border border-[#333333] bg-[#252525] p-8 transition-all duration-300 hover:border-[#ED8B00]/50 hover:shadow-lg hover:shadow-[#ED8B00]/10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ED8B00]/20 mb-4">
                <service.icon className="h-7 w-7 text-[#ED8B00]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{service.name}</h3>
              <p className="text-2xl font-extrabold text-[#FFD100] mb-1">{service.price}</p>
              <p className="text-sm text-[#a0a0a0] font-serif">{service.duration}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#333333] bg-[#252525] px-6 py-3">
            <Clock className="h-5 w-5 text-[#62B5E5]" />
            <span className="text-white font-medium">Horario de servicio:</span>
            <span className="text-[#FFD100] font-bold">9:00 am a 6:00 pm</span>
          </div>
        </div>
      </div>
    </section>
  )
}
