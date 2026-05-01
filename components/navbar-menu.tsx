"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { 
  Menu, 
  X, 
  Waves, 
  Utensils, 
  Wine, 
  Tent, 
  Phone, 
  DollarSign, 
  Package, 
  Sparkles,
  ChevronDown,
  Home,
  Info,
  ScrollText
} from "lucide-react"

const parqueAcuaticoLinks = [
  { label: "Inicio", href: "/#inicio", icon: Home },
  { label: "Atracciones", href: "/#atracciones", icon: Waves },
  { label: "Servicios", href: "/#servicios", icon: Sparkles },
  { label: "Precios", href: "/#precios", icon: DollarSign },
  { label: "Restaurante", href: "/#restaurante", icon: Utensils },
  { label: "Bar", href: "/#bar", icon: Wine },
  { label: "Contacto", href: "/#contacto", icon: Phone },
]

const campingLinks = [
  { label: "Informacion", href: "/acampar#informacion", icon: Info },
  { label: "Precios", href: "/acampar#precios", icon: DollarSign },
  { label: "Reglamento", href: "/acampar#reglamento", icon: ScrollText },
]

export function NavbarMenu() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [parqueDropdown, setParqueDropdown] = useState(false)
  const [campingDropdown, setCampingDropdown] = useState(false)
  const [mobileParqueOpen, setMobileParqueOpen] = useState(false)
  const [mobileCampingOpen, setMobileCampingOpen] = useState(false)
  
  const parqueRef = useRef<HTMLLIElement>(null)
  const campingRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (parqueRef.current && !parqueRef.current.contains(event.target as Node)) {
        setParqueDropdown(false)
      }
      if (campingRef.current && !campingRef.current.contains(event.target as Node)) {
        setCampingDropdown(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-[#ffffff]/95 backdrop-blur-md border-b border-[#d1d7dc] shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className={`relative transition-all duration-300 ${scrolled || mobileOpen ? "h-12 w-28 sm:h-14 sm:w-32" : "h-14 w-32 sm:h-16 sm:w-36"}`}>
            <Image
              src="/icons/icon.svg"
              alt="Balneario Dios Padre - Parque Acuatico Ixmiquilpan"
              className="object-contain"
              height={75}
              width={75}
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-6 lg:flex">
          {/* Parque Acuatico Dropdown */}
          <li className="relative" ref={parqueRef}>
            <button
              type="button"
              onClick={() => {
                setParqueDropdown(!parqueDropdown)
                setCampingDropdown(false)
              }}
              className={`flex items-center gap-1 text-sm font-medium transition-colors duration-300 ${
                scrolled
                  ? "text-[#6B3D2E]/70 hover:text-[#62B5E5]"
                  : "text-[#ffffff]/90 hover:text-[#FFD100]"
              }`}
            >
              <Waves className="h-4 w-4" />
              Parque Acuatico
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${parqueDropdown ? "rotate-180" : ""}`} />
            </button>
            
            {/* Dropdown Menu */}
            <div className={`absolute top-full left-0 mt-2 w-56 rounded-xl bg-[#ffffff] shadow-xl border border-[#d1d7dc] overflow-hidden transition-all duration-200 origin-top ${
              parqueDropdown ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
            }`}>
              <div className="py-2">
                {parqueAcuaticoLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#6B3D2E] hover:bg-[#62B5E5]/10 hover:text-[#62B5E5] transition-colors"
                      onClick={() => setParqueDropdown(false)}
                    >
                      <Icon className="h-4 w-4" />
                      {link.label}
                    </Link>
                  )
                })}
              </div>
            </div>
          </li>

          {/* Zona de Acampar Dropdown */}
          <li className="relative" ref={campingRef}>
            <button
              type="button"
              onClick={() => {
                setCampingDropdown(!campingDropdown)
                setParqueDropdown(false)
              }}
              className={`flex items-center gap-1 text-sm font-medium transition-colors duration-300 ${
                scrolled
                  ? "text-[#6B3D2E]/70 hover:text-[#00843D]"
                  : "text-[#ffffff]/90 hover:text-[#FFD100]"
              }`}
            >
              <Tent className="h-4 w-4" />
              Zona de Acampar
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${campingDropdown ? "rotate-180" : ""}`} />
            </button>
            
            {/* Dropdown Menu */}
            <div className={`absolute top-full left-0 mt-2 w-56 rounded-xl bg-[#ffffff] shadow-xl border border-[#d1d7dc] overflow-hidden transition-all duration-200 origin-top ${
              campingDropdown ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
            }`}>
              <div className="py-2">
                <Link
                  href="/acampar"
                  className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#6B3D2E] hover:bg-[#00843D]/10 hover:text-[#00843D] transition-colors border-b border-[#d1d7dc]"
                  onClick={() => setCampingDropdown(false)}
                >
                  <Tent className="h-4 w-4" />
                  Ver Zona de Acampar
                </Link>
                {campingLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#6B3D2E] hover:bg-[#00843D]/10 hover:text-[#00843D] transition-colors"
                      onClick={() => setCampingDropdown(false)}
                    >
                      <Icon className="h-4 w-4" />
                      {link.label}
                    </Link>
                  )
                })}
              </div>
            </div>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
            scrolled || mobileOpen 
              ? "text-[#6B3D2E] hover:bg-[#62B5E5]/10" 
              : "text-[#ffffff] hover:bg-[#ffffff]/10"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menu" : "Abrir menu"}
        >
          <div className="relative w-6 h-6">
            <span className={`absolute inset-0 transition-all duration-300 ${mobileOpen ? "rotate-0 opacity-100" : "rotate-90 opacity-0"}`}>
              <X className="h-6 w-6" />
            </span>
            <span className={`absolute inset-0 transition-all duration-300 ${mobileOpen ? "-rotate-90 opacity-0" : "rotate-0 opacity-100"}`}>
              <Menu className="h-6 w-6" />
            </span>
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#6B3D2E]/20 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ top: "73px" }}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed left-0 right-0 bg-gradient-to-b from-[#ffffff] to-[#f5f7f9] lg:hidden transition-all duration-300 ease-out shadow-xl ${
          mobileOpen 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        style={{ top: "73px", maxHeight: "calc(100vh - 73px)", overflowY: "auto" }}
      >
        <div className="p-4">
          {/* Parque Acuatico Section */}
          <div className="mb-2">
            <button
              type="button"
              onClick={() => setMobileParqueOpen(!mobileParqueOpen)}
              className="flex items-center justify-between w-full px-4 py-3 rounded-xl bg-[#62B5E5]/10 text-[#6B3D2E] font-medium"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#62B5E5]/20">
                  <Waves className="h-5 w-5 text-[#62B5E5]" />
                </span>
                <span>Parque Acuatico</span>
              </div>
              <ChevronDown className={`h-5 w-5 text-[#62B5E5] transition-transform duration-200 ${mobileParqueOpen ? "rotate-180" : ""}`} />
            </button>
            
            <div className={`overflow-hidden transition-all duration-300 ${mobileParqueOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
              <ul className="mt-2 ml-4 space-y-1">
                {parqueAcuaticoLinks.map((link, index) => {
                  const Icon = link.icon
                  return (
                    <li 
                      key={link.href}
                      style={{ transitionDelay: mobileParqueOpen ? `${index * 30}ms` : "0ms" }}
                      className={`transition-all duration-200 ${mobileParqueOpen ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}`}
                    >
                      <Link
                        href={link.href}
                        className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-[#6B3D2E] hover:bg-[#62B5E5]/10 hover:text-[#62B5E5] transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        <Icon className="h-4 w-4 text-[#62B5E5]" />
                        <span className="text-sm">{link.label}</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>

          {/* Zona de Acampar Section */}
          <div className="mb-4">
            <button
              type="button"
              onClick={() => setMobileCampingOpen(!mobileCampingOpen)}
              className="flex items-center justify-between w-full px-4 py-3 rounded-xl bg-[#00843D]/10 text-[#6B3D2E] font-medium"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#00843D]/20">
                  <Tent className="h-5 w-5 text-[#00843D]" />
                </span>
                <span>Zona de Acampar</span>
              </div>
              <ChevronDown className={`h-5 w-5 text-[#00843D] transition-transform duration-200 ${mobileCampingOpen ? "rotate-180" : ""}`} />
            </button>
            
            <div className={`overflow-hidden transition-all duration-300 ${mobileCampingOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}>
              <ul className="mt-2 ml-4 space-y-1">
                <li className={`transition-all duration-200 ${mobileCampingOpen ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}`}>
                  <Link
                    href="/acampar"
                    className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-[#6B3D2E] hover:bg-[#00843D]/10 hover:text-[#00843D] transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    <Tent className="h-4 w-4 text-[#00843D]" />
                    <span className="text-sm font-medium">Ver Zona Camping</span>
                  </Link>
                </li>
                {campingLinks.map((link, index) => {
                  const Icon = link.icon
                  return (
                    <li 
                      key={link.href}
                      style={{ transitionDelay: mobileCampingOpen ? `${(index + 1) * 30}ms` : "0ms" }}
                      className={`transition-all duration-200 ${mobileCampingOpen ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}`}
                    >
                      <Link
                        href={link.href}
                        className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-[#6B3D2E] hover:bg-[#00843D]/10 hover:text-[#00843D] transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        <Icon className="h-4 w-4 text-[#00843D]" />
                        <span className="text-sm">{link.label}</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <Link
            href="https://wa.me/527721067996"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-[#00843D] px-4 py-3 text-[#ffffff] font-medium transition-all duration-200 hover:bg-[#006B31] active:scale-[0.98]"
            onClick={() => setMobileOpen(false)}
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Contactar por WhatsApp
          </Link>
        </div>

        {/* Decorative bottom */}
        <div className="h-2 bg-gradient-to-r from-[#62B5E5] via-[#00843D] to-[#FFD100]" />
      </div>
    </header>
  )
}
