import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function Hero() {

  // ============================================
  // RUTAS DE IMAGENES RESPONSIVAS
  // Reemplaza estas rutas con tus imagenes optimizadas para cada tamaño
  // ============================================
  const heroImages = {
    // Mobile: hasta 768px (recomendado: 768x1024 o similar vertical/cuadrado)
    mobile: "/images/hero-mobile.png",

    // Tablet: 768px a 1280px (recomendado: 1280x720 o 1024x768)
    tablet: "/images/hero-tablet.PNG",

    // Desktop: mayor a 1280px (recomendado: 1920x1080 o mayor)
    desktop: "/images/hero-descktop.jpg",
  }
  // ============================================

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen Mobile - visible hasta 768px */}
      <Image
        src={heroImages.mobile}
        alt="Vista del balneario Dios Padre - Mobile"
        fill
        className="object-cover md:hidden"
        priority
        sizes="100vw"
      />

      {/* Imagen Tablet - visible de 768px a 1280px */}
      <Image
        src={heroImages.tablet}
        alt="Vista del balneario Dios Padre - Tablet"
        fill
        className="object-cover hidden md:block xl:hidden"
        priority
        sizes="100vw"
      />

      {/* Imagen Desktop - visible mayor a 1280px */}
      <Image
        src={heroImages.desktop}
        alt="Vista aerea del balneario Dios Padre - Desktop"
        fill
        className="object-cover hidden xl:block"
        priority
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-[#6B3D2E]/35" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <span className="inline-block rounded-full bg-[#FFD100] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#6B3D2E] mb-6">
          El plan perfecto para toda la familia, los 365 días del año
        </span>
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-[#ffffff] sm:text-5xl md:text-7xl text-balance">
          Parque Acuático{" "}
          <span className="text-[#FFD100]">Dios Padre</span>
        </h1>



        <p className="mx-auto mt-6 max-w-2xl text-lg text-[#ffffff]/80 font-serif font-black">
          Somos el #ParqueMásPadre de Ixmiquilpan, Hidalgo
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-[#ffffff]/80 font-serif font-black">
          Vive un día inolvidable entre aguas termales, toboganes y alberca de olas, con restaurante, hotel, masajes y bar con karaoke… todo en un mismo lugar
        </p>


        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" asChild className="text-base px-8 bg-[#62B5E5] text-[#ffffff] hover:bg-[#4DA3D3]">
            <Link href="#precios">Ver precios</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="text-base px-8 bg-[#ffffff]/10 text-[#ffffff] border-[#ffffff]/30 hover:bg-[#ffffff]/20 hover:text-[#ffffff]">
            <Link href="#atracciones">Ver atracciones</Link>
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
