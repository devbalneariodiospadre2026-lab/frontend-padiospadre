"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
    Droplet,
    Waves,
    Clover,
    Baby,
    Zap,
    ArrowDownToLine,
    Eye,
    Trophy,
    X,
    Thermometer,
    Ruler,
    Clock,
    Users,
    ChevronLeft,
    ChevronRight
} from "lucide-react"
import { ScrollAnimation, StaggerContainer } from "@/components/scroll-animation"

const attractions = [

    //===============================================================

    {
        title: "Infantil",
        description: " Si visitas con los más pequeños, esta será sin duda su lugar favorito. Un espacio diseñado especialmente para que los niños se diviertan de forma segura y sin parar. ",
        images: [
            "/attractions/infantil-1/INFANTIL-1.png",
            "/attractions/infantil-1/infantil-2.jpg"
        ],
        icon: Droplet,
        badge: "Familiar",
        badgeColor: "bg-[#00843D] text-[#ffffff]",
        temperatura: "26°C",
        profundidad: "35 cm",
        horario: "9:30 am a 5:00 pm",
        capacidad: "400 niños",
    },

    {
        title: "Alberca Infantil Isla Pirata",
        description: "Embárcate en una emocionante aventura en la Isla Pirata, un espacio lleno de fantasía donde la diversión no tiene límites. Rodeada de un impresionante barco naufragado y un gigantesco pulpo que parece cobrar vida, esta área te invita a explorar, jugar y dejar volar tu imaginación.",
        images: [
            "/attractions/infantil-2/INFANTIL-2.png",
            "/attractions/infantil-2/infantil-3.jpg"
        ],
        icon: Zap,
        badge: "Familiar",
        badgeColor: "bg-[#ED8B00] text-[#ffffff]",
        temperatura: "26°C",
        profundidad: "30 cm",
        horario: "9:30 am a 5:00 pm",
        capacidad: "120 niños",
    },

    {
        title: "Kraken",
        description: "El Kraken es un imponente tobogán gigante con múltiples tentáculos que pondrá a prueba tu valentía mientras te deslizas a toda velocidad entre curvas y giros llenos de emoción.",
        images: [
            "/attractions/kraken/KRAKEN.png",
            "/attractions/kraken/kraken2.jpg"
        ],
        icon: Clover,
        badge: "Popular",
        badgeColor: "bg-[#62B5E5] text-[#ffffff]",
        temperatura: "24°C",
        profundidad: "caida",
        horario: "10:30 am a 4:00 pm",
        capacidad: "4 personas por lanzamiento",
    },

    {
        title: "Ojo De Agua",
        description: "Sin duda, uno de los principales atractivos del parqu es su emblemático “Ojo de Agua”, del cual brota un impresionante caudal de 100 litros por segundo. En esta zona podrás encontrar tres pozas, ideales para disfrutar y relajarte en sus cálidas y reconfortantes aguas termales.",
        images: [
            "/attractions/ojo-de-agua/OJO-DE-AGUA.png",
            "/attractions/ojo-de-agua/ojo-de-agua-2.jpg",
            "/attractions/ojo-de-agua/ojo-de-agua-3.jpg",
        ],
        icon: Baby,
        badge: "Familiar",
        badgeColor: "bg-[#FFD100] text-[#6B3D2E]",
        temperatura: "36C",
        profundidad: "0.30 m - 0.60 m",
        horario: "06:00 - 16:30",
        capacidad: "300 personas",
    },

    {
        title: "Olimpica",
        description: "Compite con tus amigos y familia en nuestras pistas paralelas. Quien llega primero al agua? Una experiencia llena de emocion y competencia sana para todas las edades.",
        images: [
            "/attractions/olimpica/OLIMPICA.png",
            "/attractions/olimpica/olimpica-2.jpg"
        ],
        icon: Trophy,
        badge: "Diversion",
        badgeColor: "bg-[#62B5E5] text-[#ffffff]",
        temperatura: "28°C",
        profundidad: "1.60 cm",
        horario: "6:00am - 6:00pm",
        capacidad: "600 personas",
    },

    {
        title: "Playa Sirena",
        description: "Una de las atracciones más divertidas de Hidalgo, ideal para disfrutar en familia y crear momentos inolvidables. Esta impresionante alberca de olas tiene capacidad para 1,200 personas y además cuenta con un área infantil, perfecta para los más pequeños.",
        images: [
            "/attractions/playa-sirena/PLAYA-SIRENA.png",
            "/attractions/playa-sirena/playa-sirena-2.jpg",
            "/attractions/playa-sirena/playa-sirena-3.jpg",
        ],
        icon: Waves,
        badge: "Popular",
        badgeColor: "bg-[#ED8B00] text-[#ffffff]",
        temperatura: "27°C",
        profundidad: "1.70 cm",
        horario: "12:00 am - 4:00 pm",
        capacidad: "500 personas",
    },

    {
        title: "Trebol",
        description: "Una alberca familiar ideal para disfrutar en compañía de chicos y grandes. Aquí podrás divertirte con su impresionante géiser artificial de 7 metros de altura, además de sus juegos acuáticos en forma de barco, mariposa y hongo, que hacen de este espacio una experiencia llena de alegría y entretenimiento.",
        images: [
            "/attractions/trebol/TREBOL.png",
            "/attractions/trebol/trebol-2.jpg",
        ],
        icon: Eye,
        badge: "Natural",
        badgeColor: "bg-[#00843D] text-[#ffffff]",
        temperatura: "29°C",
        profundidad: "60 cm - 1.50 m",
        horario: "06:00 - 16:30",
        capacidad: "300 personas",
    },

    {
        title: "Toboganes",
        description: "Con una imponente torre de 18 metros de altura, nuestros toboganes están listos para llenarte de emoción desde el primer momento. Disfruta de un tobogán abierto de 50 metros, otro de 70 metros, y un increíble multicanal de 4 carriles con 90 metros de pura diversión.",
        images: [
            "/attractions/toboganes/toboganes-1.jpg",
            "/attractions/toboganes/toboganes-2.jpg",
        ],
        icon: Eye,
        badge: "Popular",
        badgeColor: "bg-[#00843D] text-[#ffffff]",
        temperatura: "28°C",
        profundidad: "60 cm - 1.50 m",
        horario: "10:30 am - 4:30 am",
        capacidad: "300 personas",
    },

]

type Attraction = typeof attractions[number]

export function Attractions() {
    const [selectedAttraction, setSelectedAttraction] = useState<Attraction | null>(null)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    // Reset image index when attraction changes
    useEffect(() => {
        setCurrentImageIndex(0)
    }, [selectedAttraction])

    // Bloquear scroll del body cuando el modal esta abierto
    useEffect(() => {
        if (selectedAttraction) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [selectedAttraction])

    // Cerrar modal con tecla Escape y navegar con flechas
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setSelectedAttraction(null)
            }
            if (selectedAttraction) {
                if (e.key === "ArrowLeft") {
                    setCurrentImageIndex((prev) =>
                        prev === 0 ? selectedAttraction.images.length - 1 : prev - 1
                    )
                }
                if (e.key === "ArrowRight") {
                    setCurrentImageIndex((prev) =>
                        prev === selectedAttraction.images.length - 1 ? 0 : prev + 1
                    )
                }
            }
        }
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [selectedAttraction])

    const nextImage = () => {
        if (selectedAttraction) {
            setCurrentImageIndex((prev) =>
                prev === selectedAttraction.images.length - 1 ? 0 : prev + 1
            )
        }
    }

    const prevImage = () => {
        if (selectedAttraction) {
            setCurrentImageIndex((prev) =>
                prev === 0 ? selectedAttraction.images.length - 1 : prev - 1
            )
        }
    }

    return (
        <section id="atracciones" className="py-16 sm:py-24 bg-[#f5f7f9]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <ScrollAnimation animation="fade-up" className="text-center mb-10 sm:mb-16">
                    <span className="inline-block rounded-full bg-[#62B5E5]/10 px-3 sm:px-4 py-1 sm:py-1.5 text-xs font-semibold uppercase tracking-wider text-[#62B5E5] mb-3 sm:mb-4">
                        Nuestras Atracciones
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#6B3D2E] text-balance">
                        Diversiones Para Todos los Gustos
                    </h2>
                    <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base text-[#6B3D2E]/70 font-serif">
                        Desde adrenalina extrema hasta relajacion total, tenemos la atraccion perfecta para cada miembro de tu familia.
                    </p>
                </ScrollAnimation>

                <StaggerContainer
                    className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 xs:grid-cols-2 lg:grid-cols-4"
                    staggerDelay={100}
                    animation="scale-up"
                >
                    {attractions.map((attraction) => (
                        <motion.article
                            key={attraction.title}
                            layoutId={`card-${attraction.title}`}
                            onClick={() => setSelectedAttraction(attraction)}
                            className="group relative overflow-hidden rounded-xl bg-[#ffffff] border border-[#d1d7dc] shadow-sm cursor-pointer transition-colors hover:border-[#62B5E5] active:scale-[0.98]"
                            whileHover={{ y: -5, boxShadow: "0 10px 40px rgba(107, 61, 46, 0.15)" }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="relative h-40 sm:h-48 lg:h-52 overflow-hidden">
                                <Image
                                    src={attraction.images[0]}
                                    alt={attraction.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-[#6B3D2E]/20 transition-opacity group-hover:opacity-0" />
                                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                                    <span className={`inline-flex items-center rounded-full px-2 sm:px-2.5 py-0.5 text-[10px] sm:text-xs font-semibold ${attraction.badgeColor}`}>
                                        {attraction.badge}
                                    </span>
                                </div>
                                <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
                                    <span className="inline-flex items-center rounded-full bg-[#ffffff]/90 px-3 py-1 text-xs font-medium text-[#6B3D2E]">
                                        Ver detalles
                                    </span>
                                </div>
                            </div>
                            <div className="p-4 sm:p-5">
                                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                                    <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg bg-[#62B5E5]/10">
                                        <attraction.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#62B5E5]" />
                                    </div>
                                    <h3 className="text-sm sm:text-base font-bold text-[#6B3D2E]">
                                        {attraction.title}
                                    </h3>
                                </div>
                                <p className="text-xs sm:text-sm text-[#6B3D2E]/70 font-serif leading-relaxed line-clamp-2">
                                    {attraction.description}
                                </p>
                            </div>
                        </motion.article>
                    ))}
                </StaggerContainer>
            </div>

            {/* Modal con Framer Motion y Carrusel */}
            <AnimatePresence>
                {selectedAttraction && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedAttraction(null)}
                            className="fixed inset-0 bg-[#6B3D2E]/60 backdrop-blur-sm z-50"
                        />

                        {/* Modal Container */}
                        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
                            <motion.div
                                layoutId={`card-${selectedAttraction.title}`}
                                className="relative w-full sm:max-w-lg md:max-w-2xl bg-[#ffffff] rounded-t-3xl sm:rounded-2xl shadow-2xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden"
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "100%" }}
                                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            >
                                {/* Handle para arrastrar en movil */}
                                <div className="sm:hidden flex justify-center pt-3 pb-1">
                                    <div className="w-12 h-1.5 bg-[#d1d7dc] rounded-full" />
                                </div>

                                {/* Boton cerrar */}
                                <motion.button
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ delay: 0.1 }}
                                    onClick={() => setSelectedAttraction(null)}
                                    className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#ffffff]/90 shadow-lg hover:bg-[#ffffff] transition-colors"
                                    aria-label="Cerrar"
                                >
                                    <X className="h-4 w-4 sm:h-5 sm:w-5 text-[#6B3D2E]" />
                                </motion.button>

                                {/* Contenido con scroll */}
                                <div className="overflow-y-auto max-h-[calc(95vh-20px)] sm:max-h-[90vh]">
                                    {/* Carrusel de imagenes */}
                                    <div className="relative h-48 sm:h-64 md:h-80">
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={currentImageIndex}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="absolute inset-0"
                                            >
                                                <Image
                                                    src={selectedAttraction.images[currentImageIndex]}
                                                    alt={`${selectedAttraction.title} - Imagen ${currentImageIndex + 1}`}
                                                    fill
                                                    className="object-cover"
                                                    priority
                                                />
                                            </motion.div>
                                        </AnimatePresence>

                                        <div className="absolute inset-0 bg-gradient-to-t from-[#6B3D2E]/80 via-[#6B3D2E]/20 to-transparent" />

                                        {/* Botones de navegacion del carrusel */}
                                        {selectedAttraction.images.length > 1 && (
                                            <>
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                                    className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#ffffff]/80 shadow-lg hover:bg-[#ffffff] transition-colors"
                                                    aria-label="Imagen anterior"
                                                >
                                                    <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-[#6B3D2E]" />
                                                </button>
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                                    className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#ffffff]/80 shadow-lg hover:bg-[#ffffff] transition-colors"
                                                    aria-label="Imagen siguiente"
                                                >
                                                    <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-[#6B3D2E]" />
                                                </button>
                                            </>
                                        )}

                                        {/* Indicadores de imagen */}
                                        {selectedAttraction.images.length > 1 && (
                                            <div className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                                                {selectedAttraction.images.map((_, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(index); }}
                                                        className={`h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full transition-all ${index === currentImageIndex
                                                            ? "bg-[#ffffff] w-6 sm:w-8"
                                                            : "bg-[#ffffff]/50 hover:bg-[#ffffff]/70"
                                                            }`}
                                                        aria-label={`Ver imagen ${index + 1}`}
                                                    />
                                                ))}
                                            </div>
                                        )}

                                        {/* Info sobre la imagen */}
                                        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                                            <span className={`inline-flex items-center rounded-full px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-semibold mb-2 ${selectedAttraction.badgeColor}`}>
                                                {selectedAttraction.badge}
                                            </span>
                                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#ffffff]">
                                                {selectedAttraction.title}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Contenido */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.15 }}
                                        className="p-4 sm:p-6 relative"
                                    >
                                        <p className="text-sm sm:text-base text-[#6B3D2E]/80 font-serif leading-relaxed mb-5 sm:mb-6">
                                            {selectedAttraction.description}
                                        </p>

                                        {/* Miniaturas del carrusel */}
                                        {selectedAttraction.images.length > 1 && (
                                            <div className="flex gap-2 mb-5 sm:mb-6 overflow-x-auto pb-2">
                                                {selectedAttraction.images.map((img, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => setCurrentImageIndex(index)}
                                                        className={`relative h-14 w-20 sm:h-16 sm:w-24 shrink-0 rounded-lg overflow-hidden border-2 transition-all ${index === currentImageIndex
                                                            ? "border-[#62B5E5] ring-2 ring-[#62B5E5]/30"
                                                            : "border-transparent opacity-60 hover:opacity-100"
                                                            }`}
                                                    >
                                                        <Image
                                                            src={img}
                                                            alt={`Miniatura ${index + 1}`}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </button>
                                                ))}
                                            </div>
                                        )}

                                        {/* Atributos - Grid responsivo */}
                                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                            <motion.div
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.2 }}
                                                className="flex items-center gap-2 sm:gap-3 rounded-xl bg-[#ED8B00]/10 p-3 sm:p-4"
                                            >
                                                <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-[#ED8B00]/20">
                                                    <Thermometer className="h-4 w-4 sm:h-5 sm:w-5 text-[#ED8B00]" />
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="text-[10px] sm:text-xs text-[#6B3D2E]/60 uppercase tracking-wide">Temperatura</p>
                                                    <p className="text-xs sm:text-sm font-semibold text-[#6B3D2E] truncate">{selectedAttraction.temperatura}</p>
                                                </div>
                                            </motion.div>

                                            <motion.div
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.25 }}
                                                className="flex items-center gap-2 sm:gap-3 rounded-xl bg-[#62B5E5]/10 p-3 sm:p-4"
                                            >
                                                <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-[#62B5E5]/20">
                                                    <Ruler className="h-4 w-4 sm:h-5 sm:w-5 text-[#62B5E5]" />
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="text-[10px] sm:text-xs text-[#6B3D2E]/60 uppercase tracking-wide">Profundidad</p>
                                                    <p className="text-xs sm:text-sm font-semibold text-[#6B3D2E] truncate">{selectedAttraction.profundidad}</p>
                                                </div>
                                            </motion.div>

                                            <motion.div
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.3 }}
                                                className="flex items-center gap-2 sm:gap-3 rounded-xl bg-[#00843D]/10 p-3 sm:p-4"
                                            >
                                                <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-[#00843D]/20">
                                                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-[#00843D]" />
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="text-[10px] sm:text-xs text-[#6B3D2E]/60 uppercase tracking-wide">Horario</p>
                                                    <p className="text-xs sm:text-sm font-semibold text-[#6B3D2E] truncate">{selectedAttraction.horario}</p>
                                                </div>
                                            </motion.div>

                                            <motion.div
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.35 }}
                                                className="flex items-center gap-2 sm:gap-3 rounded-xl bg-[#FFD100]/10 p-3 sm:p-4"
                                            >
                                                <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-[#FFD100]/20">
                                                    <Users className="h-4 w-4 sm:h-5 sm:w-5 text-[#6B3D2E]" />
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="text-[10px] sm:text-xs text-[#6B3D2E]/60 uppercase tracking-wide">Capacidad</p>
                                                    <p className="text-xs sm:text-sm font-semibold text-[#6B3D2E] truncate">{selectedAttraction.capacidad}</p>
                                                </div>
                                            </motion.div>
                                        </div>

                                        {/* Icono decorativo */}
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 0.1, scale: 1 }}
                                            transition={{ delay: 0.4 }}
                                            className="absolute bottom-4 right-4 pointer-events-none hidden sm:block"
                                        >
                                            <selectedAttraction.icon className="h-24 w-24 md:h-32 md:w-32 text-[#62B5E5]" />
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </section>
    )
}
