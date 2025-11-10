'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { BookOpen, Heart, Shield, LogOut, Play, Download } from 'lucide-react'
import { useAuth } from '@/components/auth-provider'

interface Module {
  id: string
  title: string
  description: string
  progress: number
  icon: React.ReactNode
  route: string
  color: string
}

export default function Dashboard() {
  const router = useRouter()
  const { user, signOut } = useAuth()
  const [modules, setModules] = useState<Module[]>([
    {
      id: 'arsenal',
      title: 'Arsenal del Amante',
      description: '7 tácticas para aumentar resistencia y placer',
      progress: 0,
      icon: <Heart className="w-6 h-6" />,
      route: '/modulos/arsenal',
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'acondicionamiento',
      title: 'Acondicionamiento Masculino',
      description: 'Técnicas manuales seguras para salud pélvica',
      progress: 0,
      icon: <Shield className="w-6 h-6" />,
      route: '/modulos/acondicionamiento',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'dieta',
      title: 'Dieta del Vigor',
      description: '15 alimentos clave para potenciar virilidad',
      progress: 0,
      icon: <BookOpen className="w-6 h-6" />,
      route: '/modulos/dieta',
      color: 'from-green-500 to-emerald-500'
    }
  ])

  useEffect(() => {
    // Cargar progreso guardado
    const savedProgress = localStorage.getItem('viril-progress')
    if (savedProgress) {
      const progress = JSON.parse(savedProgress)
      setModules(modules.map(module => ({
        ...module,
        progress: progress[module.id] || 0
      })))
    }
  }, [])

  const totalProgress = Math.round(
    modules.reduce((sum, module) => sum + module.progress, 0) / modules.length
  )

  const handleModuleClick = (route: string) => {
    router.push(route)
  }

  const handleDownloadPDF = (moduleId: string) => {
    // Simular descarga del PDF correspondiente
    const pdfFiles = {
      arsenal: 'Guia_2_Arsenal_del_Amante_v2.pdf',
      acondicionamiento: 'Guia_Acondicionamiento_Masculino_v3.pdf',
      dieta: 'Guia_3_Dieta_del_Vigor_v1.pdf'
    }
    
    const link = document.createElement('a')
    link.href = `/upload/${pdfFiles[moduleId as keyof typeof pdfFiles]}`
    link.download = pdfFiles[moduleId as keyof typeof pdfFiles]
    link.click()
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="w-full p-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-viril-400 to-viril-700 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">VIRIL</h1>
              <p className="text-sm text-gray-400">Dashboard Privado</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-300">{user?.email}</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => signOut()}
              className="text-gray-400 hover:text-white"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Cerrar Sesión
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Bienvenido a tu <span className="text-gradient">Programa VIRIL</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Accede a los módulos exclusivos diseñados para maximizar tu potencial. 
            Tu progreso se guarda automáticamente.
          </p>
        </div>

        {/* Progress Overview */}
        <Card className="bg-white/5 backdrop-blur-sm border-white/10 mb-12">
          <CardHeader>
            <CardTitle className="text-viril-400">Progreso General</CardTitle>
            <CardDescription className="text-gray-300">
              Tu avance completo en el programa
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-white font-medium">Completado</span>
                <span className="text-viril-400 font-bold">{totalProgress}%</span>
              </div>
              <Progress value={totalProgress} className="h-3" />
              <div className="grid grid-cols-3 gap-4 mt-6">
                {modules.map((module) => (
                  <div key={module.id} className="text-center">
                    <div className="text-2xl font-bold text-white">{module.progress}%</div>
                    <div className="text-xs text-gray-400">{module.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module) => (
            <Card 
              key={module.id} 
              className="bg-white/5 backdrop-blur-sm border-white/10 hover-lift cursor-pointer group"
              onClick={() => handleModuleClick(module.route)}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${module.color} text-white`}>
                    {module.icon}
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleDownloadPDF(module.id)
                    }}
                    className="text-gray-400 hover:text-viril-400"
                  >
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
                <CardTitle className="text-viril-400 group-hover:text-viril-300 transition-colors">
                  {module.title}
                </CardTitle>
                <CardDescription className="text-gray-300">
                  {module.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Progreso</span>
                    <span className="text-sm font-medium text-white">{module.progress}%</span>
                  </div>
                  <Progress value={module.progress} className="h-2" />
                  
                  <Button 
                    className="w-full bg-viril-900/50 hover:bg-viril-900/70 text-white border border-viril-400/30"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleModuleClick(module.route)
                    }}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    {module.progress > 0 ? 'Continuar' : 'Comenzar'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-viril-400">Temporizador de Respiración</CardTitle>
              <CardDescription className="text-gray-300">
                Práctica 4-2-6 para control y relajación
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full bg-viril-400 hover:bg-viril-400/90 text-viril-950"
                onClick={() => router.push('/modulos/arsenal?timer=true')}
              >
                <Play className="w-4 h-4 mr-2" />
                Iniciar Temporizador
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-viril-400">Descargar Todo</CardTitle>
              <CardDescription className="text-gray-300">
                Obtén todos los PDFs en un solo paquete
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20"
                onClick={() => {
                  // Descargar todos los PDFs
                  const pdfs = [
                    'Guia_2_Arsenal_del_Amante_v2.pdf',
                    'Guia_Acondicionamiento_Masculino_v3.pdf',
                    'Guia_3_Dieta_del_Vigor_v1.pdf'
                  ]
                  pdfs.forEach(pdf => {
                    const link = document.createElement('a')
                    link.href = `/upload/${pdf}`
                    link.download = pdf
                    link.click()
                  })
                }}
              >
                <Download className="w-4 h-4 mr-2" />
                Descargar Pack Completo
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}