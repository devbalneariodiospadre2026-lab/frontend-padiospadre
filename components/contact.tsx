"use client"

import Link from "next/link"
import { Phone, MessageCircle, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ScrollAnimation } from "@/components/scroll-animation"
import { useState } from "react";

export function Contact() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Error al enviar");
      }

      setSuccess("Mensaje enviado correctamente");
      setForm({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-[#f5f7f9]">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollAnimation animation="fade-up" className="text-center mb-16">
          <span className="inline-block rounded-full bg-[#62B5E5]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#62B5E5] mb-4">
            Contacto
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-[#6B3D2E] sm:text-4xl md:text-5xl text-balance">
            Estamos para servirte
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#6B3D2E]/70 font-serif">
            Tienes preguntas, sugerencias o quieres reservar para grupos grandes, contactanos y te responderemos lo antes posible.
          </p>
        </ScrollAnimation>

        <div className="grid gap-12 lg:grid-cols-2">
          <ScrollAnimation animation="fade-right" className="space-y-8">
            {/* Ubicacion */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#ED8B00]/10">
                <MapPin className="h-6 w-6 text-[#ED8B00]" />
              </div>
              <div>
                <p className="font-bold text-[#6B3D2E]">Ubicación</p>
                <p className="text-[#6B3D2E]/70 font-serif">
                  Km 156 Carretera México-Laredo<br />
                  Ixmiquilpan, Hidalgo
                </p>
              </div>
            </div>

            {/* Telefono */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#62B5E5]/10">
                <Phone className="h-6 w-6 text-[#62B5E5]" />
              </div>
              <div>
                <p className="font-bold text-[#6B3D2E]">Teléfono</p>
                <Link href="tel:7597232548" className="text-[#6B3D2E]/70 font-serif hover:text-[#62B5E5] transition-colors">
                  759 723 2548
                </Link>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#00843D]/10">
                <MessageCircle className="h-6 w-6 text-[#00843D]" />
              </div>
              <div>
                <p className="font-bold text-[#6B3D2E]">WhatsApp</p>
                <Link
                  href="https://wa.me/527721067997"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6B3D2E]/70 font-serif hover:text-[#00843D] transition-colors"
                >
                  772 106 7997
                </Link>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <Button asChild size="lg" className="bg-[#00843D] hover:bg-[#006B31] text-[#ffffff]">
              <Link
                href="https://wa.me/527721067996"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Escríbenos por WhatsApp
              </Link>
            </Button>

            {/* Grupos y eventos */}
            <div className="rounded-xl border border-[#d1d7dc] bg-[#ffffff] p-6">
              <p className="font-bold text-[#6B3D2E] mb-2">Grupos y Eventos</p>
              <p className="text-sm text-[#6B3D2E]/70 font-serif leading-relaxed">
                Organizamos fiestas de cumpleaños, eventos corporativos y excursiones escolares. Consulta nuestros descuentos especiales para grupos de 20 o más personas.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-left" delay={200} className="space-y-6">
            {/* Google Maps */}
            <div className="rounded-xl overflow-hidden border border-[#d1d7dc] shadow-sm">

              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.112523286534!2d-99.20002410321042!3d20.46235630000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d3e0885b70cef5%3A0xefe372224f75c28f!2sParque%20Acu%C3%A1tico%20Dios%20Padre!5e1!3m2!1ses!2smx!4v1777013433931!5m2!1ses!2smx" 
                width="600%" 
                height="450" 
                style ={{border:0}} 
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicacion Parque Acuatico Dios Padre"
                className="w-full"
              />
            </div>

            {/* Formulario */}
            <form 
              onSubmit={handleSubmit}
              className="space-y-6 rounded-xl border border-[#d1d7dc] bg-[#ffffff] p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre</Label>
                  <Input 
                    id="name" 
                    placeholder="Tu nombre"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="Tu número de teléfono" 
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="tu@correo.com" 
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Asunto</Label>
                <Input 
                  id="subject" 
                  placeholder="¿Cómo podemos ayudarte?" 
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea 
                  id="message" 
                  placeholder="Escribe tu mensaje aquí..." 
                  rows={4} 
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

                {/* Feedback */}
                {success && <p className="text-green-600">{success}</p>}
                {error && <p className="text-red-600">{error}</p>}

              <Button 
                disabled={loading}
                type="submit" 
                className="w-full bg-[#62B5E5] text-[#ffffff] hover:bg-[#4DA3D3]"
              >
                {loading ? "Enviado..." : "Enviar mensaje"}
              </Button>
            </form>
          </ScrollAnimation>
        </div>

        {/* Enlace a Google Maps */}
        <ScrollAnimation animation="fade-up" delay={400} className="mt-8 text-center">
          <Link
            href="https://www.google.com/maps/search/Balneario+Dios+Padre+Ixmiquilpan+Hidalgo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#62B5E5] hover:text-[#4DA3D3] font-medium transition-colors"
          >
            <MapPin className="h-5 w-5" />
            Ver en Google Maps
          </Link>
        </ScrollAnimation>
      </div>
    </section>
  )
}
