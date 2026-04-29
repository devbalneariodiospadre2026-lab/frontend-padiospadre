import {
  Ruler, ShieldCheck, ShowerHead, Clock, CalendarClock, Toilet,
} from "lucide-react"

const amenities = [
  { icon: Ruler, title: "Lote", description: "Espacios amplios para tu comodidad con o sin auto" },
  { icon: ShieldCheck, title: "Vigilancia 24 hrs", description: "Personal de seguridad las 24 horas del dia" },
  { icon: Toilet, title: "Sanitarios", description: "Instalaciones limpias disponibles en todo momento" },
  { icon: ShowerHead, title: "Regaderas", description: "Regaderas con agua caliente para tu comodidad" },
  { icon: Clock, title: "Servicio 24 hrs", description: "Acceso al área de campamento las 24 horas" },
  { icon: CalendarClock, title: "Check-out a las 12:00 hrs", description: "El lote y casa de campana vencen al día siguiente al mediodía" },
]

export function CampingInfo() {
  return (
    <section id="informacion" className="py-24 bg-[#f5f7f9]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-[#00843D]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#00843D] mb-4">
            Servicios
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-[#6B3D2E] sm:text-4xl md:text-5xl text-balance">
            Tu espacio incluye
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#6B3D2E]/70 font-serif">
            Todo lo que necesitas para una estancia cómoda y segura en nuestro parque.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 rounded-xl border border-[#d1d7dc] bg-[#ffffff] p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#00843D]/10">
                <item.icon className="h-5 w-5 text-[#00843D]" />
              </div>
              <div>
                <h3 className="font-bold text-[#6B3D2E]">{item.title}</h3>
                <p className="mt-1 text-sm text-[#6B3D2E]/70 font-serif leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
