import { Clock, CalendarDays, Cross, Coffee, Anchor } from "lucide-react"

export function Schedule() {
  return (
    <section id="horarios" className="py-24 bg-[#62B5E5]/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-[#62B5E5]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#62B5E5] mb-4">
            Horarios
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-[#6B3D2E] sm:text-4xl md:text-5xl text-balance">
            Planifica Tu Visita
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#6B3D2E]/70 font-serif">
            Consulta nuestros horarios de servicio para que planifiques un dia perfecto en el balneario.
          </p>
        </div>

        <div className="mx-auto max-w-4xl grid gap-5">
          {/* Horario general */}
          <div className="flex flex-col gap-4 rounded-xl border border-[#62B5E5] bg-[#ffffff] p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#62B5E5]/10">
                <CalendarDays className="h-6 w-6 text-[#62B5E5]" />
              </div>
              <div>
                <p className="font-bold text-[#6B3D2E]">Balneario - Lunes a Domingo</p>
                <p className="text-sm text-[#6B3D2E]/70 font-serif">Horario general del parque</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[#62B5E5]">
              <Clock className="h-5 w-5" />
              <span className="text-lg font-semibold">06:00 - 16:30</span>
            </div>
          </div>

          {/* Enfermeria */}
          <div className="flex flex-col gap-4 rounded-xl border border-[#d1d7dc] bg-[#ffffff] p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#00843D]/10">
                <Cross className="h-6 w-6 text-[#00843D]" />
              </div>
              <div>
                <p className="font-bold text-[#6B3D2E]">Servicio de Enfermeria</p>
                <p className="text-sm text-[#6B3D2E]/70 font-serif">MOD 1 Alberca Olimpica - MOD 2 Playa Sirena</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[#00843D]">
              <Clock className="h-5 w-5" />
              <span className="text-lg font-semibold">08:00 - 18:00</span>
            </div>
          </div>

          {/* Restaurante */}
          <div className="flex flex-col gap-4 rounded-xl border border-[#d1d7dc] bg-[#ffffff] p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#ED8B00]/20">
                <Coffee className="h-6 w-6 text-[#ED8B00]" />
              </div>
              <div>
                <p className="font-bold text-[#6B3D2E]">Restaurante</p>
                <p className="text-sm text-[#6B3D2E]/70 font-serif">Desayuno, comida a la carta, menu del dia y buffet</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2 text-[#6B3D2E] justify-end">
                <Clock className="h-4 w-4 text-[#6B3D2E]/70" />
                <span className="text-sm font-semibold">Dom - Jue: 8:30 - 16:30</span>
              </div>
              <div className="flex items-center gap-2 text-[#6B3D2E] justify-end mt-1">
                <Clock className="h-4 w-4 text-[#6B3D2E]/70" />
                <span className="text-sm font-semibold">Vie - Sab: 8:30 - 22:30</span>
              </div>
            </div>
          </div>

          {/* Cafeteria El Ancla */}
          <div className="flex flex-col gap-4 rounded-xl border border-[#d1d7dc] bg-[#ffffff] p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#62B5E5]/10">
                <Anchor className="h-6 w-6 text-[#62B5E5]" />
              </div>
              <div>
                <p className="font-bold text-[#6B3D2E]">{"Cafeteria \"El Ancla\""}</p>
                <p className="text-sm text-[#6B3D2E]/70 font-serif">Desayunos y snacks - Viernes, sabado y domingo</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[#62B5E5]">
              <Clock className="h-5 w-5" />
              <span className="text-lg font-semibold">09:00 - 17:00</span>
            </div>
          </div>
        </div>

        {/* Notas importantes */}
        <div className="mx-auto max-w-4xl mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-[#FFD100] bg-[#FFD100]/20 p-6">
            <p className="font-semibold text-[#6B3D2E]">Acceso de Alimentos</p>
            <p className="mt-1 text-sm text-[#6B3D2E]/70 font-serif">
              El ingreso de alimentos, bebidas y abarrotes se permite unicamente en su primer acceso al parque.
            </p>
          </div>
          <div className="rounded-xl border border-[#FFD100] bg-[#FFD100]/20 p-6">
            <p className="font-semibold text-[#6B3D2E]">Salida y Reingreso</p>
            <p className="mt-1 text-sm text-[#6B3D2E]/70 font-serif">
              Pueden salir de las instalaciones portando su brazalete, unicamente por cosas de uso personal.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
