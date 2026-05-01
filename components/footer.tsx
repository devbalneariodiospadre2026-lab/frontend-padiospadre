import Link from "next/link"
import { Phone, MessageCircle } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-[#d1d7dc] bg-[#ffffff] py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="#inicio" className="flex items-center gap-2 mb-4">
              <Image
                src='icons/logo.png'
                alt="Parque Acuatico Dios Padre"
                priority
                width={60}
                height={60}
              />
              <span className="text-lg font-bold text-[#6B3D2E]">Parque Acuático Dios Padre</span>
            </Link>
            <p className="text-sm text-[#6B3D2E]/70 font-serif leading-relaxed">
              El Parque Acuático más completo de la región, con atracciones acuáticas, restaurante, hotel, zona de acampar y todo lo que necesitas para disfrutar en un solo lugar.
            </p>
          </div>

          <div>
            <p className="font-bold text-[#6B3D2E] mb-4">Explorar</p>
            <ul className="space-y-2">
              {[
                { label: "Inicio", href: "/#inicio" },
                { label: "Atracciones", href: "/#atracciones" },
                { label: "Servicios", href: "/#servicios" },
                { label: "Precios", href: "/#precios" },
                { label: "Acampar", href: "/acampar" },
                { label: "Contacto", href: "/#contacto" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#6B3D2E]/70 transition-colors hover:text-[#62B5E5] font-serif"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-bold text-[#6B3D2E] mb-4">Contacto</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#62B5E5]" />
                <Link href="tel:7597232548" className="text-sm text-[#6B3D2E]/70 font-serif hover:text-[#62B5E5] transition-colors">
                  759 723 2548
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-[#00843D]" />
                <Link
                  href="https://wa.me/527721067997"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#6B3D2E]/70 font-serif hover:text-[#00843D] transition-colors"
                >
                  772 106 7997
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-[#6B3D2E] mb-4">Horario</p>
            <ul className="space-y-2 text-sm text-[#6B3D2E]/70 font-serif">
              <li>Lunes a Domingo</li>
              <li className="font-semibold text-[#6B3D2E]">6:00 am - 8:00 pm</li>
            </ul>

            <p className="font-bold text-[#6B3D2E] mb-4 mt-6">Síguenos</p>
            <div className="flex items-center gap-3">
              <Link
                href="https://www.facebook.com/DiosPadreParqueAcuaticoOficial/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Image
                  src="/icons/facebook-icon-1.png" // o .svg
                  alt="Facebook"
                  width={40}
                  height={40}
                />
              </Link>
              <Link
                href="https://www.instagram.com/balneariodiospadreoficial/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Image
                  src="/icons/instagram-icon-1.png" // o .svg
                  alt="Instagram"
                  width={40}
                  height={40}
                />
              </Link>
              <Link
                href="https://www.youtube.com/@balneariodiospadre1591"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <Image
                  src="/icons/youtube-icon-1.png" // o .svg
                  alt="You Tube"
                  width={40}
                  height={40}
                />
              </Link>
              <Link
                href="https://www.tiktok.com/@p_a_diospadre_oficial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <Image
                  src="/icons/tiktok-icon-1.png" // o .svg
                  alt="Facebook"
                  width={40}
                  height={40}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[#d1d7dc] pt-8 text-center">
          <p className="text-sm text-[#6B3D2E]/70 font-serif">
            {"2026 Parque Acuático Dios Padre. Todos los derechos reservados."}
          </p>
        </div>
      </div>
    </footer>
  )
}
