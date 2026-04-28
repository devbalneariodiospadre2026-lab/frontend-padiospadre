import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/images/KRAKEN-HERO.png"
        alt="Vista aerea del balneario Dios Padre"
        fill
        className="object-cover object-top"
        priority
      />
      <div className="absolute inset-0 bg-[#6B3D2E]/50" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <span className="inline-block rounded-full bg-[#FFD100] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#6B3D2E] mb-6">
          El plan perfecto para toda la familia, los 365 días del año
        </span>
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-[#ffffff] sm:text-5xl md:text-7xl text-balance">
          Parque Acuático{" "}
          <span className="text-[#FFD100]">Dios Padre</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-[#ffffff]/80 font-serif">
          Somos el #ParqueMásPadre de Ixmiquilpan Hidalgo
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-[#ffffff]/80 font-serif">
          Vive un día lleno de diversión con aguas termales, toboganes, alberca de olas, restaurante, hotel, masajes y bar karaoke
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" asChild className="text-base px-8 bg-[#62B5E5] text-[#ffffff] hover:bg-[#4DA3D3]">
            <Link href="#precios">Ver Precios</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="text-base px-8 bg-[#ffffff]/10 text-[#ffffff] border-[#ffffff]/30 hover:bg-[#ffffff]/20 hover:text-[#ffffff]">
            <Link href="#atracciones">Ver Atracciones</Link>
          </Button>
        </div>
      </div>

      <Link
        href="#atracciones"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce"
        aria-label="Desplazarse hacia abajo"
      >
        <ChevronDown className="h-8 w-8 text-[#ffffff]/70" />
      </Link>
    </section>
  )
}
