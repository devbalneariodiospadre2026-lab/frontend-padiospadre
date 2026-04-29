"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Info, DollarSign, ScrollText, Waves, Phone, Hotel } from "lucide-react"
import Image from "next/image"

const navLinks = [
  { label: "Parque Acuatico", href: "/", icon: Waves },
  { label: "Informacion", href: "#informacion", icon: Info },
  { label: "Precios", href: "#precios", icon: DollarSign },
  { label: "Reglamento", href: "#reglamento", icon: ScrollText },
  { label: "Hotel", href: "https://www.hoteldiospadre.com", icon: Hotel },
]

export function CampingNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#ffffff]/95 backdrop-blur-md border-b border-[#d1d7dc] shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2 group">
                      <Image
            src='icons/logo.png'
            alt="Parque Acuatico Dios Padre"
            priority
            width={60}
            height={60}
          />
            <div className="flex flex-col">
              <span
                className={`text-xl font-bold tracking-tight leading-tight transition-colors duration-300 ${
                  scrolled ? "text-[#6B3D2E]" : "text-[#ffffff]"
                }`}
              >
                Parque Acuatico
              </span>
              <span
                className={`text-[10px] font-semibold uppercase tracking-widest transition-colors duration-300 ${
                  scrolled ? "text-[#00843D]" : "text-[#FFD100]"
                }`}
              >
                Zona de Acampar
              </span>
            </div>
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    scrolled
                      ? "text-[#6B3D2E]/70 hover:text-[#62B5E5]"
                      : "text-[#ffffff]/90 hover:text-[#FFD100]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className={`md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 ${
              scrolled
                ? "text-[#6B3D2E] hover:bg-[#62B5E5]/10"
                : "text-[#ffffff] hover:bg-[#ffffff]/10"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Cerrar menu" : "Abrir menu"}
          >
            <span
              className={`absolute transition-all duration-300 ${
                mobileOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
              }`}
            >
              <Menu className="h-6 w-6" />
            </span>
            <span
              className={`absolute transition-all duration-300 ${
                mobileOpen ? "rotate-0 opacity-100" : "-rotate-180 opacity-0"
              }`}
            >
              <X className="h-6 w-6" />
            </span>
          </button>
        </nav>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#6B3D2E]/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm bg-[#ffffff] shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#d1d7dc]">
            <div className="flex items-center gap-2">
                        <Image
            src='icons/logo.png'
            alt="Parque Acuatico Dios Padre"
            priority
            width={60}
            height={60}
          />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-[#6B3D2E]">Dios Padre</span>
                <span className="text-[9px] font-semibold uppercase tracking-widest text-[#00843D]">
                  Zona de Acampar
                </span>
              </div>
            </div>
            <button
              type="button"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f5f7f9] text-[#6B3D2E] hover:bg-[#62B5E5]/10 transition-colors"
              onClick={() => setMobileOpen(false)}
              aria-label="Cerrar menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-6 px-4">
            <ul className="space-y-2">
              {navLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <li
                    key={link.href}
                    style={{
                      animation: mobileOpen ? `slideInRight 0.3s ease-out ${index * 0.05}s both` : "none",
                    }}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center gap-4 px-4 py-3 rounded-xl text-[#6B3D2E] hover:bg-[#00843D]/10 hover:text-[#00843D] transition-all duration-200 group"
                      onClick={() => setMobileOpen(false)}
                    >
                      <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#00843D]/10 text-[#00843D] group-hover:bg-[#00843D] group-hover:text-[#ffffff] transition-all duration-200">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-medium">{link.label}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-[#d1d7dc]">
            <Link
              href="https://wa.me/527721067996"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#00843D] text-[#ffffff] font-medium hover:bg-[#006B31] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              <Phone className="h-5 w-5" />
              Reservar por WhatsApp
            </Link>
            <p className="text-center text-xs text-[#6B3D2E]/50 mt-4">
              Balneario Dios Padre - Ixmiquilpan, Hidalgo
            </p>
          </div>

          {/* Decorative bar */}
          <div className="h-1.5 w-full flex">
            <div className="flex-1 bg-[#62B5E5]" />
            <div className="flex-1 bg-[#00843D]" />
            <div className="flex-1 bg-[#ED8B00]" />
            <div className="flex-1 bg-[#FFD100]" />
            <div className="flex-1 bg-[#6B3D2E]" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  )
}
