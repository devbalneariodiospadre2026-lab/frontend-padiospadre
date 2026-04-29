import { Users, Waves, Car, Tent, Flame } from "lucide-react"

export function CampingPricing() {
  return (
    <section id="precios" className="py-24 bg-[#62B5E5]/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-[#62B5E5]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#62B5E5] mb-4">
            Precios
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-[#6B3D2E] sm:text-4xl md:text-5xl text-balance">
            Zona de acampar
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#6B3D2E]/70 font-serif">
            Renta de lotes y casas de acampar. El costo no incluye el acceso al parque.
          </p>
        </div>

        {/* Renta de Lotes */}
        <div className="mb-16">
          <h3 className="text-center text-2xl font-bold text-[#6B3D2E] mb-8">Renta de Lotes</h3>
          <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
            {/* Lote 25m2 con auto */}
            <div className="relative flex flex-col items-center rounded-xl border border-[#62B5E5] bg-[#ffffff] p-8 shadow-md">
              <span className="absolute -top-3 rounded-full bg-[#62B5E5] px-4 py-1 text-xs font-semibold text-[#ffffff]">
                Con Auto
              </span>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#62B5E5]/10">
                <Car className="h-6 w-6 text-[#62B5E5]" />
              </div>
              <h3 className="text-lg font-bold text-[#6B3D2E]">Lote 25m²</h3>
              <div className="mt-4 mb-2">
                <span className="text-5xl font-extrabold text-[#6B3D2E]">$435</span>
              </div>
              <p className="text-sm text-[#6B3D2E]/70 font-serif mb-4">por noche</p>
              <div className="w-full rounded-lg bg-[#62B5E5]/5 p-4 text-sm text-[#6B3D2E]/70 font-serif leading-relaxed text-center">
                <p>Espacio amplio de 25m² con lugar para estacionar tu vehiculo.</p>
              </div>
            </div>

            {/* Lote 15m2 sin auto */}
            <div className="relative flex flex-col items-center rounded-xl border border-[#d1d7dc] bg-[#ffffff] p-8 shadow-sm">
              <span className="absolute -top-3 rounded-full bg-[#6B3D2E]/70 px-4 py-1 text-xs font-semibold text-[#ffffff]">
                Sin Auto
              </span>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#00843D]/10">
                <Tent className="h-6 w-6 text-[#00843D]" />
              </div>
              <h3 className="text-lg font-bold text-[#6B3D2E]">Lote 15m²</h3>
              <div className="mt-4 mb-2">
                <span className="text-5xl font-extrabold text-[#6B3D2E]">$350</span>
              </div>
              <p className="text-sm text-[#6B3D2E]/70 font-serif mb-4">por noche</p>
              <div className="w-full rounded-lg bg-[#00843D]/5 p-4 text-sm text-[#6B3D2E]/70 font-serif leading-relaxed text-center">
                <p>Espacio de 15m² ideal para tienda de campana.</p>
              </div>
            </div>
          </div>

          {/* Servicios incluidos en lotes */}
          <div className="mx-auto max-w-3xl mt-6 flex flex-wrap justify-center gap-4 text-sm text-[#6B3D2E]/70 font-serif">
            <span className="flex items-center gap-2 bg-[#ffffff] px-4 py-2 rounded-full border border-[#d1d7dc]">
              <span className="h-2 w-2 rounded-full bg-[#00843D]"></span>
              Vigilancia 24 hrs
            </span>
            <span className="flex items-center gap-2 bg-[#ffffff] px-4 py-2 rounded-full border border-[#d1d7dc]">
              <span className="h-2 w-2 rounded-full bg-[#00843D]"></span>
              Sanitarios
            </span>
            <span className="flex items-center gap-2 bg-[#ffffff] px-4 py-2 rounded-full border border-[#d1d7dc]">
              <span className="h-2 w-2 rounded-full bg-[#00843D]"></span>
              Regaderas
            </span>
          </div>
        </div>

        {/* Casas de Acampar */}
        <div className="mb-16">
          <h3 className="text-center text-2xl font-bold text-[#6B3D2E] mb-8">Renta de casas de acampar</h3>
          <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2 mb-6">
            {/* Casa 4 personas */}
            <div className="relative flex flex-col items-center rounded-xl border border-[#ED8B00] bg-[#ffffff] p-8 shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#ED8B00]/10">
                <Users className="h-6 w-6 text-[#ED8B00]" />
              </div>
              <h3 className="text-lg font-bold text-[#6B3D2E]">Casa 4 personas</h3>
              <div className="mt-4 mb-2">
                <span className="text-5xl font-extrabold text-[#6B3D2E]">$385</span>
              </div>
              <p className="text-sm text-[#6B3D2E]/70 font-serif mb-4">por noche</p>
            </div>

            {/* Casa 6 personas */}
            <div className="relative flex flex-col items-center rounded-xl border border-[#ED8B00] bg-[#ffffff] p-8 shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#ED8B00]/10">
                <Users className="h-6 w-6 text-[#ED8B00]" />
              </div>
              <h3 className="text-lg font-bold text-[#6B3D2E]">Casa 6 personas</h3>
              <div className="mt-4 mb-2">
                <span className="text-5xl font-extrabold text-[#6B3D2E]">$440</span>
              </div>
              <p className="text-sm text-[#6B3D2E]/70 font-serif mb-4">por noche</p>
            </div>
          </div>

          {/* Nota de deposito */}
          <div className="mx-auto max-w-3xl rounded-xl border border-[#ED8B00] bg-[#ED8B00]/10 p-5">
            <p className="text-sm text-[#6B3D2E] font-serif text-center">
              Cada casa de acampar requiere un depósito de <span className="font-bold">$500</span> + <span className="font-bold">identificacion oficial (INE)</span> como garantia.
              Se devuelve al entregar la casa en buenas condiciones.
            </p>
          </div>
        </div>

        {/* Extras */}
        <div className="mb-16">
          <h3 className="text-center text-2xl font-bold text-[#6B3D2E] mb-8">Extras</h3>
          <div className="mx-auto flex max-w-md justify-center gap-6">
            <div className="flex flex-col items-center rounded-xl border border-[#d1d7dc] bg-[#ffffff] p-6 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#ED8B00]/10">
                <Flame className="h-5 w-5 text-[#ED8B00]" />
              </div>
              <h4 className="font-bold text-[#6B3D2E]">Leña</h4>
              <span className="text-2xl font-extrabold text-[#6B3D2E] mt-2">$70</span>
            </div>
            <div className="flex flex-col items-center rounded-xl border border-[#d1d7dc] bg-[#ffffff] p-6 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#FFD100]/20">
                <Flame className="h-5 w-5 text-[#6B3D2E]" />
              </div>
              <h4 className="font-bold text-[#6B3D2E]">Ocote</h4>
              <span className="text-2xl font-extrabold text-[#6B3D2E] mt-2">$30</span>
            </div>
          </div>
        </div>

        {/* Nota importante */}
        <div className="mx-auto max-w-3xl rounded-xl border border-[#FFD100] bg-[#FFD100]/10 p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFD100]/20">
              <Waves className="h-5 w-5 text-[#6B3D2E]" />
            </div>
            <div>
              <h4 className="font-bold text-[#6B3D2E]">Acceso a albercas</h4>
              <p className="mt-1 text-sm text-[#6B3D2E]/70 font-serif leading-relaxed">
                El costo de acceso a las albercas es independiente y se paga diariamente. El horario de servicio de las albercas es de{" "}
                <span className="font-semibold text-[#6B3D2E]">6:00 am - 8:00 pm</span>.
                Después de este horario hay que instalarse en la zona de acampar. Si desea ingresar a las albercas al día siguiente, hay que cubrir el costo de acceso general nuevamente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
