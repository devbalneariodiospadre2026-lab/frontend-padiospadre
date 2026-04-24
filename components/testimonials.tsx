"use client"

import { Star } from "lucide-react"
import { ScrollAnimation, StaggerContainer } from "@/components/scroll-animation"

const reviews = [
  {
    name: "Maria Garcia",
    initials: "MG",
    rating: 5,
    text: "Increible experiencia! Mis hijos no querian irse. Las atracciones son seguras y divertidas. Definitivamente volveremos.",
  },
  {
    name: "Carlos Ramirez",
    initials: "CR",
    rating: 5,
    text: "Los toboganes son lo mejor que he probado. La adrenalina es total. El parque esta muy bien mantenido y limpio.",
  },
  {
    name: "Ana Lopez",
    initials: "AL",
    rating: 5,
    text: "El balneario es una ganga. Tiene de todo: albercas, restaurante, zona para acampar. Pasamos un dia espectacular.",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-[#00843D]/5">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollAnimation animation="fade-up" className="text-center mb-16">
          <span className="inline-block rounded-full bg-[#00843D]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#00843D] mb-4">
            Opiniones
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-[#6B3D2E] sm:text-4xl md:text-5xl text-balance">
            Lo Que Dicen Nuestros Visitantes
          </h2>
        </ScrollAnimation>

        <StaggerContainer 
          className="grid gap-8 md:grid-cols-3"
          staggerDelay={150}
          animation="scale-up"
        >
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-xl border border-[#d1d7dc] bg-[#ffffff] p-8 shadow-sm"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={`star-${review.name}-${i}`}
                    className="h-5 w-5 fill-[#FFD100] text-[#FFD100]"
                  />
                ))}
              </div>
              <p className="text-[#6B3D2E] font-serif leading-relaxed mb-6">
                {`"${review.text}"`}
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#62B5E5] text-[#ffffff] font-bold text-sm">
                  {review.initials}
                </div>
                <span className="font-semibold text-[#6B3D2E]">{review.name}</span>
              </div>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
