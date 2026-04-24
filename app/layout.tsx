import React from "react"
import type { Metadata } from 'next'
import { Poppins, Nunito } from 'next/font/google'

import './globals.css'

const _poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'], variable: '--font-poppins' })
const _nunito = Nunito({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-nunito' })

export const metadata: Metadata = {
  title: 'Parque Acuatico Dios Padre',
  description: 'Descubre las mejores atracciones acuaticas en el Parque Acuatico Dios Padre. Toboganes, alberca de olas y mucho mas para toda la familia.',
  keywords:[
    'parque acuático dios padre',
    'balneario dios padre',
    'dios padre ixmiquilan',
    //keywords principales
    'parque acuático en Hidalgo',
    'parque acuático cerca de CDMX',
    'balnearios en Hidalgo',
    'parque acuático Ixmiquilpan',
    'Balnearios en Ixmiquilpan',
    'parques acuáticos México',
    'balnearios cerca de mí',
    'mejores balnearios en Hidalgo',
    'parque acuático con toboganes',
    'parque acuático familiar',

    //keywords de intencion
    'precios parque acuático Hidalgo',
    'costo entrada balneario Hidalgo',
    'cuánto cuesta entrar a un balneario',
    'horarios parque acuático Hidalgo',
    'parque acuático abierto todo el año',
    'promociones balneario Hidalgo',
    'descuentos para grupos balneario',
    'paquetes para excursiones parque acuático',

    //keywords emocionales / experiencia
    'plan familiar en Hidalgo',
    'qué hacer en Hidalgo fin de semana',
    'escapada cerca de CDMX',
    'viaje con amigos balneario',
    'lugar para relajarse y divertirse',
    'vacaciones económicas México',
    'experiencias en parques acuáticos',

    //keywords geograficos
    'balnearios en Ixmiquilpan Hidalgo',
    'parque acuático cerca de Pachuca',
    'balnearios cerca de CDMX económicos',
    'cómo llegar a Ixmiquilpan Hidalgo',
    'parque acuático en el Valle del Mezquita',
    
    //keywords de servicios
    'hotel en balneario Hidalgo',
    'restaurante en parque acuático',
    'salón de eventos Hidalgo',
    'parque acuático con hospedaje',
    'balneario con masajes',
    'parque acuático con toboganes extremos',
    'parque acuático con alberca olímpica',

    //keywords long-tail
    'parque acuático cerca de CDMX con hote',
    'balneario en Hidalgo con aguas termales y toboganes',
    'cuánto cuesta un balneario en Ixmiquilpan 2026',
    'parque acuático económico para grupos grandes',
    'mejores parques acuáticos en Hidalgo para niños',
    'balnearios abiertos 24 horas en Hidalgo',
  ],
  icons:{
    icon:[
      {
        url: '/icons/logo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icons/logo.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url:'/icons/icon.svg',
        type:'image/svg+xml',
        sizes:'44x44'
      } 
    ],
    apple:'/icons/logo-180-png'
  },

  openGraph:{
    title:'Parque Acuático Dios Padre',
    description:'Atracciones acuáticas únicas en Ixmiquilpan, Hidalgo. Diversión para toda la familia.',
    url:'https://padiospadre.com.mx',
    siteName:'Parque Acuatico Dios Padre',
    images:[
      //incluir imagenes de todo 
      {
        url:'',
        width:120,
        height:630,
        alt:'Vista aérea del Parque Acuático Dios Padre'
      }
    ],
    locale:'es_MX',
    type:'website'
  }, 

  twitter:{
    card:'summary_large_image',
    title:'Parque Acuatico Dios Padre',
    description:'Diversión acuática en Ixmiquilpan, Hidalgo.',
    images:[]
  }

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${_poppins.variable} ${_nunito.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
