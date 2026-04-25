import { Anchor, Clock, Coffee, Cookie } from "lucide-react"

export function CafeteriaAncla() {
  return (
    <section id="cafeteria" className="py-24 bg-[#62B5E5]/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-[#62B5E5]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#62B5E5] mb-4">
            Cafeteria
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-[#6B3D2E] sm:text-4xl md:text-5xl text-balance">
            {"Cafeteria \"El Ancla\""}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#6B3D2E]/70 font-serif">
            El lugar perfecto para comenzar tu dia con un delicioso desayuno o disfrutar de un snack.
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl border border-[#62B5E5] bg-[#ffffff] p-8 shadow-lg">
            <div className="flex flex-col items-center text-center">
              {/* Icono */}
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#62B5E5] mb-6">
                <Anchor className="h-10 w-10 text-[#ffffff]" />
              </div>

              {/* Titulo */}
              <h3 className="text-2xl font-bold text-[#6B3D2E] mb-2">El Ancla</h3>
              <p className="text-[#6B3D2E]/70 font-serif mb-8">Tu parada favorita en el balneario</p>

              {/* Que ofrecen */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 rounded-full bg-[#62B5E5]/10 px-4 py-2">
                  <Coffee className="h-5 w-5 text-[#62B5E5]" />
                  <span className="font-semibold text-[#6B3D2E]">Desayunos</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-[#62B5E5]/10 px-4 py-2">
                  <Cookie className="h-5 w-5 text-[#62B5E5]" />
                  <span className="font-semibold text-[#6B3D2E]">Snacks</span>
                </div>
              </div>

              {/* Horario y dias */}
              <div className="w-full rounded-xl bg-[#62B5E5]/10 p-6">
                <div className="flex items-center justify-center gap-2 mb-4 text-[#62B5E5]">
                  <Clock className="h-5 w-5" />
                  <span className="font-bold">Horario de Servicio</span>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <div className="rounded-lg bg-[#ffffff] px-6 py-3 border border-[#62B5E5]/30">
                    <p className="text-sm font-semibold text-[#6B3D2E]">Viernes, Sabado y Domingo</p>
                  </div>
                  <div className="rounded-lg bg-[#62B5E5] px-6 py-3">
                    <p className="text-lg font-bold text-[#ffffff]">09:00 am - 5:00 pm</p>
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
