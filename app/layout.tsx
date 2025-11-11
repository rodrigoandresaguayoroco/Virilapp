import './styles/globals.css'

export const metadata = {
  title: 'VIRIL Academy - Elite Performance',
  description: 'Métodos científicos para máximo rendimiento masculino',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}