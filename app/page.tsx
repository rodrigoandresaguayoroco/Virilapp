'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Shield, Zap, Heart } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function LandingPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-viril-400 to-viril-700 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">VIRIL</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-gradient">Potencia</span>
                <br />
                <span className="text-white">tu Virilidad</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                Accede a módulos exclusivos diseñados para maximizar tu rendimiento, 
                resistencia y confianza. Ciencia basada, resultados comprobados.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-viril-400/20 rounded-full flex items-center justify-center">
                  <Zap className="w-4 h-4 text-viril-400" />
                </div>
                <span className="text-gray-300">7 tácticas para aumentar resistencia</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-viril-400/20 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-viril-400" />
                </div>
                <span className="text-gray-300">Técnicas de acondicionamiento seguro</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-viril-400/20 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-viril-400" />
                </div>
                <span className="text-gray-300">15 alimentos para potenciar vigor</span>
              </div>
            </div>

            <Button 
              size="lg" 
              className="group bg-viril-400 hover:bg-viril-400/90 text-viril-950 font-semibold px-8 py-4 text-lg"
              onClick={() => router.push('/login')}
            >
              Entrar al Programa
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="space-y-6">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover-lift">
              <CardHeader>
                <CardTitle className="text-viril-400">Arsenal del Amante</CardTitle>
                <CardDescription className="text-gray-300">
                  7 tácticas basadas en ciencia para aumentar resistencia e intensificar placer
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-viril-400 rounded-full"></div>
                  <span className="text-sm text-gray-400">Control consciente y presencia</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover-lift">
              <CardHeader>
                <CardTitle className="text-viril-400">Acondicionamiento Masculino</CardTitle>
                <CardDescription className="text-gray-300">
                  Técnicas manuales seguras para mejorar salud circulatoria y función eréctil
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-viril-400 rounded-full"></div>
                  <span className="text-sm text-gray-400">Seguridad y consistencia primero</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover-lift">
              <CardHeader>
                <CardTitle className="text-viril-400">Dieta del Vigor</CardTitle>
                <CardDescription className="text-gray-300">
                  15 alimentos clave para potenciar virilidad y energía sostenida
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-viril-400 rounded-full"></div>
                  <span className="text-sm text-gray-400">Precursores hormonales naturales</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full p-6 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            © 2024 VIRIL. Material educativo exclusivo para clientes.
          </p>
        </div>
      </footer>
    </div>
  )
}