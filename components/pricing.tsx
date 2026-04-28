"use client"

import Link from "next/link"
import { useState } from "react"
import { Users, Baby, Clock, ShoppingBag, RotateCcw, CreditCard, Building2, AlertCircle, Copy, CheckCircle2, MessageCircle, Ticket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation, StaggerContainer } from "@/components/scroll-animation"

export function Pricing() {
  const [copied, setCopied] = useState(false)
  const clabe = "002298700434124086"

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(clabe)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Error al copiar:", err)
    }
  }

  return (
    <section id="precios" className="py-24 bg-[#f5f7f9]">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollAnimation animation="fade-up" className="text-center mb-16">
          <span className="inline-block rounded-full bg-[#62B5E5]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#62B5E5] mb-4">
            Precios
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-[#6B3D2E] sm:text-4xl md:text-5xl text-balance">
            Nuestras Entradas
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#6B3D2E]/70 font-serif">
            Acceso completo a todas las atracciones del parque.
          </p>
        </ScrollAnimation>

        {/* Horario del balneario */}
        <ScrollAnimation animation="scale-up" delay={100} className="mx-auto max-w-2xl mb-10">
          <div className="flex flex-col gap-4 rounded-xl border-2 border-[#62B5E5] bg-[#62B5E5]/10 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#62B5E5]">
                <Clock className="h-6 w-6 text-[#ffffff]" />
              </div>
              <div>
                <p className="font-bold text-[#6B3D2E]">Horario del Parque</p>
                <p className="text-sm text-[#6B3D2E]/70 font-serif">Lunes a Domingo</p>
              </div>
            </div>
            <div className="text-2xl font-bold text-[#62B5E5]">
              06:00 am - 8:00 pm
            </div>
          </div>
        </ScrollAnimation>

        <div className="mx-auto max-w-4xl flex flex-col items-center gap-10">
          {/* Tarjetas de precio */}
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-4xl" staggerDelay={150} animation="scale-up">
            {/* Entrada General */}
            <div className="relative flex flex-col items-center rounded-xl border border-[#62B5E5] bg-[#ffffff] p-8 shadow-md">
              <span className="absolute -top-3 rounded-full bg-[#FFD100] px-4 py-1 text-xs font-semibold text-[#6B3D2E]">
                Acceso Total
              </span>
              <h3 className="text-lg font-bold text-[#6B3D2E] mb-1">Entrada General</h3>
              <p className="text-sm text-[#6B3D2E]/70 font-serif mb-5 text-center">
                Disfruta de todo el parque sin limites
              </p>
              <div className="mb-6 flex-1 flex items-center">
                <span className="text-5xl font-extrabold text-[#6B3D2E]">$220</span>
                <span className="ml-2 text-sm text-[#6B3D2E]/70 font-serif">por persona</span>
              </div>
              <div className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#6B3D2E]/10 py-3 px-4 mt-auto">
                <Ticket className="h-4 w-4 text-[#6B3D2E]" />
                <span className="text-sm font-medium text-[#6B3D2E]">Boletos solo en taquilla</span>
              </div>
            </div>

            {/* Adultos Mayores INAPAM */}
            <div className="relative flex flex-col items-center rounded-xl border border-[#d1d7dc] bg-[#ffffff] p-8 shadow-sm">
              <span className="absolute -top-3 rounded-full bg-[#00843D] px-4 py-1 text-xs font-semibold text-[#ffffff]">
                INAPAM
              </span>
              <h3 className="text-lg font-bold text-[#6B3D2E] mb-1">Adultos Mayores</h3>
              <p className="text-sm text-[#6B3D2E]/70 font-serif mb-5 text-center">
                Con credencial vigente del INAPAM
              </p>
              <div className="mb-6 flex-1 flex items-center">
                <span className="text-5xl font-extrabold text-[#6B3D2E]">$150</span>
                <span className="ml-2 text-sm text-[#6B3D2E]/70 font-serif">por persona</span>
              </div>
              <div className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#6B3D2E]/10 py-3 px-4 mt-auto">
                <Ticket className="h-4 w-4 text-[#6B3D2E]" />
                <span className="text-sm font-medium text-[#6B3D2E]">Boletos solo en taquilla</span>
              </div>
            </div>

            {/* Grupos de 20+ Personas */}
            <div className="relative flex flex-col items-center rounded-xl border-2 border-[#ED8B00] bg-[#ffffff] p-8 shadow-md sm:col-span-2 lg:col-span-1">
              <span className="absolute -top-3 rounded-full bg-[#ED8B00] px-4 py-1 text-xs font-semibold text-[#ffffff]">
                Descuento Especial
              </span>
              <h3 className="text-lg font-bold text-[#6B3D2E] mb-1">Grupos 20+ Personas</h3>
              <p className="text-sm text-[#6B3D2E]/70 font-serif mb-5 text-center">
                Excursiones, escuelas y empresas
              </p>
              <div className="mb-6 text-center flex-1 flex flex-col justify-center">
                <span className="text-3xl font-extrabold text-[#ED8B00]">Precio Especial</span>
                <p className="text-sm text-[#6B3D2E]/70 font-serif">Cotizacion personalizada</p>
              </div>
              <Button asChild className="w-full bg-[#00843D] text-[#ffffff] hover:bg-[#006B31] mt-auto">
                <Link
                  href="https://wa.me/527721294597?text=Hola,%20me%20interesa%20informacion%20sobre%20descuentos%20para%20grupos%20de%2020%20o%20mas%20personas"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Informes y reservaciones
                </Link>
              </Button>
            </div>
          </StaggerContainer>

          {/* Nota ninos gratis */}
          <div className="w-full max-w-2xl">
            <div className="flex items-center gap-4 rounded-lg border border-[#d1d7dc] bg-[#ffffff] p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#62B5E5]/10">
                <Baby className="h-5 w-5 text-[#62B5E5]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#6B3D2E]">Niños menores de 1 metro</p>
                <p className="text-xs text-[#6B3D2E]/70 font-serif">Entran completamente gratis</p>
              </div>
            </div>
          </div>

          {/* Notas de acceso de alimentos y reingreso */}
          <div className="grid gap-4 sm:grid-cols-2 w-full max-w-2xl">
            <div className="rounded-xl border border-[#FFD100] bg-[#FFD100]/20 p-6">
              <div className="flex items-center gap-3 mb-2">
                <ShoppingBag className="h-5 w-5 text-[#ED8B00]" />
                <p className="font-semibold text-[#6B3D2E]">Acceso de Alimentos</p>
              </div>
              <p className="text-sm text-[#6B3D2E]/70 font-serif">
                El ingreso de alimentos, bebidas y abarrotes se permite unicamente en su primer acceso al parque.
              </p>
            </div>
            <div className="rounded-xl border border-[#FFD100] bg-[#FFD100]/20 p-6">
              <div className="flex items-center gap-3 mb-2">
                <RotateCcw className="h-5 w-5 text-[#ED8B00]" />
                <p className="font-semibold text-[#6B3D2E]">Salida y Reingreso</p>
              </div>
              <p className="text-sm text-[#6B3D2E]/70 font-serif">
                Pueden salir de las instalaciones portando su brazalete, unicamente por cosas de uso personal.
              </p>
            </div>
          </div>

          {/* Metodos de pago */}
          <div className="w-full max-w-2xl mt-6">
            <div className="rounded-xl border border-[#00843D] bg-[#00843D]/10 p-6">
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="h-6 w-6 text-[#00843D]" />
                <h3 className="font-bold text-[#6B3D2E] text-lg">Metodos de Pago</h3>
              </div>
              <p className="text-sm text-[#6B3D2E]/80 font-serif mb-4">
                Aceptamos pagos con tarjeta en taquilla y establecimientos dentro del parque.
              </p>
              <p className="text-sm text-[#6B3D2E]/80 font-serif">
                Para realizar reservaciones de su grupo o excursion, los organizadores podran realizar deposito o transferencia.
              </p>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}
