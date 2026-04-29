"use client"

import { 
  Ban, 
  ShieldAlert, 
  AlertTriangle,
  Dog,
  Flame,
  Scissors,
  Wine,
  Pill,
  Lock,
  Eye,
  Shirt
} from "lucide-react"
import { ScrollAnimation, StaggerContainer } from "@/components/scroll-animation"

const restricciones = [
  { icon: Dog, text: "No ingresar con mascotas" },
  { icon: Flame, text: "No tanques de gas" },
  { icon: Scissors, text: "No objetos punzocortantes" },
  { icon: Wine, text: "No envases de vidrio" },
  { icon: Pill, text: "No sustancias prohibidas (drogas)" },
]

export function Reglamento() {
  return (
    <section id="reglamento" className="py-24 bg-[#6B3D2E]">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollAnimation animation="fade-up" className="text-center mb-16">
          <span className="inline-block rounded-full bg-[#ffffff]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#FFD100] mb-4">
            Importante
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-[#ffffff] sm:text-4xl md:text-5xl text-balance">
            Reglamento y Seguridad
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#ffffff]/80 font-serif">
            Para tu seguridad y la de todos, te pedimos respetar las siguientes normas.
          </p>
        </ScrollAnimation>

        <StaggerContainer 
          className="grid gap-8 lg:grid-cols-3"
          staggerDelay={150}
          animation="scale-up"
        >
          {/* Restricciones */}
          <div className="rounded-2xl bg-[#ffffff] p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ef4444]/10">
                <Ban className="h-6 w-6 text-[#ef4444]" />
              </div>
              <h3 className="text-xl font-bold text-[#6B3D2E]">Restricciones</h3>
            </div>
            <ul className="space-y-4">
              {restricciones.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ef4444]/10">
                    <item.icon className="h-4 w-4 text-[#ef4444]" />
                  </div>
                  <span className="text-sm text-[#6B3D2E]/80 font-serif">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Medidas de Seguridad */}
          <div className="rounded-2xl bg-[#ffffff] p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ED8B00]/10">
                <ShieldAlert className="h-6 w-6 text-[#ED8B00]" />
              </div>
              <h3 className="text-xl font-bold text-[#6B3D2E]">Medidas de seguridad</h3>
            </div>
            <div className="space-y-4">
              <p className="text-sm text-[#6B3D2E]/80 font-serif leading-relaxed">
                Estimado visitante, se les hace las siguientes recomendaciones como medida de prevención:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Lock className="h-4 w-4 shrink-0 text-[#ED8B00] mt-1" />
                  <span className="text-sm text-[#6B3D2E]/80 font-serif">
                    No dejar objetos de valor dentro de las casas de campana ni en palapas
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Lock className="h-4 w-4 shrink-0 text-[#ED8B00] mt-1" />
                  <span className="text-sm text-[#6B3D2E]/80 font-serif">
                    Hacer uso de lockers para resguardar sus pertenencias
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Eye className="h-4 w-4 shrink-0 text-[#ED8B00] mt-1" />
                  <span className="text-sm text-[#6B3D2E]/80 font-serif">
                    Mantenga vigilada su casa de campaña y sus pertenencias en todo momento
                  </span>
                </li>
              </ul>
              <div className="mt-4 rounded-lg bg-[#ED8B00]/10 p-4 border border-[#ED8B00]/30">
                <p className="text-xs text-[#6B3D2E]/70 font-serif">
                  <span className="font-semibold text-[#ED8B00]">Aviso:</span> La empresa no se hace responsable en caso de perdida, sustracción, robo o extravio, siendo su guarda y custodia exclusiva responsabilidad de los titulares.
                </p>
              </div>
            </div>
          </div>

          {/* Recomendaciones Toboganes */}
          <div className="rounded-2xl bg-[#ffffff] p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#62B5E5]/10">
                <AlertTriangle className="h-6 w-6 text-[#62B5E5]" />
              </div>
              <h3 className="text-xl font-bold text-[#6B3D2E]">Recomendaciones</h3>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-[#62B5E5]/10 p-4 border border-[#62B5E5]/30">
                <p className="text-sm font-semibold text-[#6B3D2E] mb-2">
                  Área de toboganes
                </p>
                <p className="text-sm text-[#6B3D2E]/80 font-serif leading-relaxed">
                  Queda estrictamente prohibido ingresar al área de toboganes con:
                </p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#62B5E5]/10">
                    <Shirt className="h-4 w-4 text-[#62B5E5]" />
                  </div>
                  <span className="text-sm text-[#6B3D2E]/80 font-serif">Playeras y sandalias</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#62B5E5]/10">
                    <svg className="h-4 w-4 text-[#62B5E5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="3"/>
                      <path d="M12 2v4m0 12v4M2 12h4m12 0h4"/>
                    </svg>
                  </div>
                  <span className="text-sm text-[#6B3D2E]/80 font-serif">Objetos colgantes y pulseras</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#62B5E5]/10">
                    <svg className="h-4 w-4 text-[#62B5E5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  </div>
                  <span className="text-sm text-[#6B3D2E]/80 font-serif">Anillos y llaves</span>
                </li>
              </ul>
              <div className="mt-4 rounded-lg bg-[#ef4444]/10 p-4 border border-[#ef4444]/30">
                <p className="text-xs text-[#6B3D2E]/70 font-serif">
                  <span className="font-semibold text-[#ef4444]">Importante:</span> No se permitirá el acceso a los toboganes si no cumple con estas indicaciones.
                </p>
              </div>
            </div>
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}
