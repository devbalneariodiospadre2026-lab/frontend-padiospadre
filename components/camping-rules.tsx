import { CheckCircle2, XCircle, AlertTriangle } from "lucide-react"

const rules = [
  "Respetar los horarios de entrada y salida de las albercas de 6:00 am a 6:00 pm.",
  "Acatar y respetar las indicaciones del personal autorizado y los senalamientos del Parque.",
  "Depositar la basura en los cestos correspondientes.",
  "Guardar buen comportamiento en las instalaciones del Parque.",
  "Cuidar las instalaciones y areas del Parque Acuatico.",
  "El costo de la zona de acampar no incluye la entrada a las albercas.",
  "Respetar los limites establecidos para las areas de acampado, cada lote es de 5 x 5 metros.",
]

const restrictions = [
  "Introducir tanques de gas, armas blancas, objetos punzo-cortantes de cualquier tipo y armas de fuego.",
  "Dañar arboles, plantas y alterar el ecosistema del Parque.",
  "Realizar necesidades fisiologicas fuera de las areas designadas para ello.",
  "Tirar basura y piedras a las albercas.",
  "Realizar actos que molesten o perjudiquen la integridad de los demas usuarios (musica, escandalo, unicamente hasta las 11:00 pm).",
  "Estacionar su auto en pasillos o fuera de su lote asignado.",
]

export function CampingRules() {
  return (
    <section id="reglamento" className="py-24 bg-[#f5f7f9]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-[#62B5E5]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#62B5E5] mb-4">
            Reglamento
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-[#6B3D2E] sm:text-4xl md:text-5xl text-balance">
            Reglas del Campamento
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#6B3D2E]/70 font-serif">
            Para garantizar una convivencia sana y segura, te pedimos respetar el siguiente reglamento.
          </p>
        </div>

        <div className="mx-auto max-w-4xl grid gap-10 md:grid-cols-2">
          {/* Reglas */}
          <div className="rounded-xl border border-[#d1d7dc] bg-[#ffffff] p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#00843D]/10">
                <CheckCircle2 className="h-5 w-5 text-[#00843D]" />
              </div>
              <h3 className="text-lg font-bold text-[#6B3D2E]">Reglas</h3>
            </div>
            <ul className="space-y-4">
              {rules.map((rule) => (
                <li key={rule} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#00843D]" />
                  <span className="text-sm text-[#6B3D2E] font-serif leading-relaxed">
                    {rule}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Restricciones */}
          <div className="rounded-xl border border-[#ED8B00]/30 bg-[#ffffff] p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ED8B00]/10">
                <XCircle className="h-5 w-5 text-[#ED8B00]" />
              </div>
              <h3 className="text-lg font-bold text-[#6B3D2E]">Restricciones</h3>
            </div>
            <ul className="space-y-4">
              {restrictions.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#ED8B00]" />
                  <span className="text-sm text-[#6B3D2E] font-serif leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Avisos legales */}
        <div className="mx-auto max-w-4xl mt-10 flex flex-col gap-3">
          <div className="flex items-start gap-3 rounded-lg border border-[#d1d7dc] bg-[#6B3D2E]/5 p-4">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[#6B3D2E]" />
            <p className="text-xs text-[#6B3D2E]/70 font-serif leading-relaxed">
              Quien dolosamente no respeta las normas sera consignado a las autoridades correspondientes y originara el pago de los daños y perjuicios.
            </p>
          </div>
          <div className="flex items-start gap-3 rounded-lg border border-[#d1d7dc] bg-[#6B3D2E]/5 p-4">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[#6B3D2E]" />
            <p className="text-xs text-[#6B3D2E]/70 font-serif leading-relaxed">
              El Parque Acuatico no se hace responsable de la perdida total o parcial de los objetos dentro de las instalaciones.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
