import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pokédex - Catálogo de Pokémon',
  description: 'Catálogo de Pokémon con Next.js y PokéAPI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-red-600">
        {children}
      </body>
    </html>
  )
}
