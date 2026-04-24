import { UtensilsCrossed, Clock, Check } from "lucide-react"

const menuItems = [
  "Desayuno y comida a la carta",
  "Menu del dia (comida tres tiempos)",
  "Snacks",
  "Desayuno y comida buffet (preguntar por el servicio)",
]

export function Restaurante() {
  return (
    <section id="restaurante" className="py-24 bg-[#ED8B00]/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-[#ED8B00]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#ED8B00] mb-4">
            Gastronomia
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-[#6B3D2E] sm:text-4xl md:text-5xl text-balance">
            Restaurante
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#6B3D2E]/70 font-serif">
            Disfruta de nuestra deliciosa oferta gastronomica con platillos para todos los gustos.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-[#ED8B00] bg-[#ffffff] p-8 shadow-lg">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              {/* Menu */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#ED8B00]">
                    <UtensilsCrossed className="h-8 w-8 text-[#ffffff]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#6B3D2E]">Nuestro Menu</h3>
                    <p className="text-sm text-[#6B3D2E]/70 font-serif">Comida casera y deliciosa</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {menuItems.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[#6B3D2E]">
                      <Check className="h-5 w-5 shrink-0 text-[#00843D]" />
                      <span className="font-serif">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Horarios */}
              <div className="lg:w-64 rounded-xl bg-[#ED8B00]/10 p-6">
                <div className="flex items-center gap-2 mb-4 text-[#ED8B00]">
                  <Clock className="h-5 w-5" />
                  <span className="font-bold">Horarios de Servicio</span>
                </div>
                <div className="space-y-3">
                  <div className="rounded-lg bg-[#ffffff] p-3 border border-[#ED8B00]/30">
                    <p className="text-sm font-semibold text-[#6B3D2E]">Domingo a Jueves</p>
                    <p className="text-lg font-bold text-[#ED8B00]">8:30 - 16:30</p>
                  </div>
                  <div className="rounded-lg bg-[#ffffff] p-3 border border-[#ED8B00]/30">
                    <p className="text-sm font-semibold text-[#6B3D2E]">Viernes y Sabado</p>
                    <p className="text-lg font-bold text-[#ED8B00]">8:30 - 22:30</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
