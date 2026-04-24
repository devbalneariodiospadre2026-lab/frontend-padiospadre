import Image from "next/image"
import { Tent } from "lucide-react"

export function CampingHero() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-20">
      <Image
        src="/images/ACAMPAR.png"
        alt="Zona de acampar del Parque Acuatico Dios Padre"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-[#6B3D2E]/60" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#00843D]/20 backdrop-blur-sm">
          <Tent className="h-8 w-8 text-[#ffffff]" />
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-[#ffffff] sm:text-5xl md:text-6xl text-balance">
          Zona de Acampar
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-[#ffffff]/80 font-serif leading-relaxed">
          Vive la experiencia completa en Dios Padre. Acampa bajo las estrellas
          con todas las comodidades: vigilancia, alumbrado, sanitarios y
          regaderas las 24 horas del dia.
        </p>
      </div>
    </section>
  )
}
