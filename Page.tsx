'use client'

import { Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { BreathingTimer } from '@/components/breathing-timer'
import { Heart, Brain, Target, Users, Zap, Map, MessageCircle, CheckCircle, ArrowLeft, Timer, Download, BookOpen } from 'lucide-react'

interface Tactic {
  id: string
  title: string
  mission: string
  protocol: string[]
  proTip: string
  science: string
  icon: React.ReactNode
}

const tactics: Tactic[] = [
  {
    id: 'ancla',
    title: 'Táctica 1: El Ancla Mental',
    mission: 'Controlar la ansiedad y activar el sistema parasimpático.',
    protocol: ['Inhala 4 s por nariz (diafragma)', 'Pausa 2 s', 'Exhala 6 s por boca', 'Sincroniza respiración y movimiento'],
    proTip: 'Practica 5 min/día fuera del dormitorio.',
    science: 'La respiración lenta reduce frecuencia cardiaca y tensión vía parasimpático.',
    icon: <Brain className="w-6 h-6" />
  },
  {
    id: 'kegel',
    title: 'Táctica 2: El Músculo Secreto (Kegel Inverso)',
    mission: 'Dominar la relajación del músculo PC para influir el reflejo eyaculatorio.',
    protocol: ['Identifica el PC al cortar el flujo de orina', 'Realiza el movimiento opuesto (empuje suave)', 'Entrena contracción 2 s y relajación 10 s, priorizando la relajación'],
    proTip: 'Aplica el Kegel inverso cuando la excitación suba rápido.',
    science: 'Mayor control neuromuscular eleva el umbral del reflejo.',
    icon: <Target className="w-6 h-6" />
  },
  {
    id: 'pausa',
    title: 'Táctica 3: La Pausa Estratégica (Start–Stop)',
    mission: 'Resetear niveles de excitación para prolongar el acto.',
    protocol: ['Usa un medidor interno 1–10', 'En 7–8, detén la estimulación', 'Respira y baja a 3–4', 'Reanuda cuando el control regrese'],
    proTip: 'Comunícalo y conviértelo en juego en pareja.',
    science: 'La práctica recalibra tu umbral y mejora detección de señales.',
    icon: <Timer className="w-6 h-6" />
  },
  {
    id: 'foco',
    title: 'Táctica 4: El Cambio de Foco',
    mission: 'Redirigir la atención al placer de tu pareja para disminuir tu retroalimentación sensorial.',
    protocol: ['Observación activa de respiración, sonidos y expresiones', 'Escucha y mira conscientemente', 'Haz del placer de tu pareja tu objetivo operativo'],
    proTip: 'Durante la pausa, usa manos o boca para mantener conexión.',
    science: 'Los recursos atencionales son limitados; redirigirlos reduce la escalada de excitación propia.',
    icon: <Users className="w-6 h-6" />
  },
  {
    id: 'ritmo',
    title: 'Táctica 5: El Ritmo del Maestro',
    mission: 'Modular la excitación con variaciones de velocidad y profundidad.',
    protocol: ['Evita ritmo constante por tiempo prolongado', 'Alterna rápido/superficial con lento/profundo', 'Sincroniza fases lentas con respiración'],
    proTip: 'Ceder el ritmo a tu pareja puede rebajar tu carga de control.',
    science: 'El ritmo se correlaciona con activación autonómica; lo lento y deliberado frena la escalada.',
    icon: <Zap className="w-6 h-6" />
  },
  {
    id: 'mapa',
    title: 'Táctica 6: El Mapa del Placer',
    mission: 'Usar descansos activos y explorar rutas sensoriales para evitar sobreestimulación local.',
    protocol: ['Identifica puntos calientes', 'Cambia posición para modificar ángulo y profundidad', 'Activa zonas erógenas con manos y boca'],
    proTip: 'Posturas erguidas o recostadas hacia atrás brindan más control.',
    science: 'La diversificación sensorial distribuye la carga neuronal y enriquece la experiencia.',
    icon: <Map className="w-6 h-6" />
  },
  {
    id: 'comunicacion',
    title: 'Táctica 7: La Comunicación Cómplice',
    mission: 'Convertir a tu pareja en aliada para control y placer mutuo.',
    protocol: ['Habla antes en un contexto relajado', 'Acordad una señal discreta', 'Agradece y refuerza tras la intimidad'],
    proTip: 'Reformula las pausas como momentos de conexión intensa.',
    science: 'Menos ansiedad de rendimiento implica menos cortisol y más presencia.',
    icon: <MessageCircle className="w-6 h-6" />
  }
]

// Componente con hooks
function ArsenalContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const showTimer = searchParams.get('timer') === 'true'
  const [completedTactics, setCompletedTactics] = useState<string[]>([])
  const [showBreathingTimer, setShowBreathingTimer] = useState(showTimer)

  useEffect(() => {
    const saved = localStorage.getItem('viril-arsenal-progress')
    if (saved) setCompletedTactics(JSON.parse(saved))
  }, [])

  const markAsCompleted = (tacticId: string) => {
    const newCompleted = [...completedTactics, tacticId]
    setCompletedTactics(newCompleted)
    localStorage.setItem('viril-arsenal-progress', JSON.stringify(newCompleted))
  }

  const progress = Math.round((completedTactics.length / tactics.length) * 100)

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="w-full p-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => router.push('/dashboard')} className="text-gray-400 hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" /> Volver
            </Button>
            <div className="flex items-center space-x-3">
              <Heart className="w-8 h-8 text-viril-400" />
              <div>
                <h1 className="text-2xl font-bold text-white">Arsenal del Amante</h1>
                <p className="text-sm text-gray-400">7 tácticas para aumentar resistencia y placer</p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" onClick={() => setShowBreathingTimer(!showBreathingTimer)} className="border-viril-400 text-viril-400 hover:bg-viril-400 hover:text-viril-950">
              <Timer className="w-4 h-4 mr-2" /> {showBreathingTimer ? 'Ocultar' : 'Mostrar'} Timer
            </Button>
            <Button variant="ghost" onClick={() => { const link = document.createElement('a'); link.href = '/upload/Guia_2_Arsenal_del_Amante_v2.pdf'; link.download = 'Guia_2_Arsenal_del_Amante_v2.pdf'; link.click(); }} className="text-gray-400 hover:text-white">
              <Download className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="w-full px-6 py-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-white">Progreso</span>
            <span className="text-sm font-bold text-viril-400">{progress}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className="bg-gradient-to-r from-viril-400 to-viril-700 h-2 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Breathing Timer */}
        {showBreathingTimer && <div className="mb-12"><BreathingTimer onComplete={() => console.log('Ciclo completado')} /></div>}

        {/* Introduction */}
        <div className="mb-12">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-3xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-viril-400 to-viril-700">De la Ansiedad a la Maestría</CardTitle>
              <CardDescription className="text-lg text-gray-300">Bienvenido a tu arsenal táctico. El rendimiento sexual no es suerte: es una habilidad entrenable.</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Tactics */}
        <div className="space-y-6">
          {tactics.map((tactic) => (
            <Card key={tactic.id} className={`bg-white/5 backdrop-blur-sm border-white/10 transition-all duration-300 ${completedTactics.includes(tactic.id) ? 'border-green-400/50 bg-green-400/5' : ''}`}>
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-viril-400 to-viril-700 text-white">{tactic.icon}</div>
                    <div>
                      <CardTitle className="text-viril-400">{tactic.title}</CardTitle>
                      <CardDescription className="text-gray-300">{tactic.mission}</CardDescription>
                    </div>
                  </div>
                  {completedTactics.includes(tactic.id) && <CheckCircle className="w-6 h-6 text-green-400" />}
                </div>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="protocol" className="border-white/10">
                    <AccordionTrigger className="text-white hover:text-viril-300">Protocolo de Ejecución</AccordionTrigger>
                    <AccordionContent>
                      <ol className="space-y-2">
                        {tactic.protocol.map((step, i) => (
                          <li key={i} className="flex items-start space-x-3">
                            <span className="w-6 h-6 bg-viril-400/20 rounded-full flex items-center justify-center text-xs font-bold text-viril-400">{i + 1}</span>
                            <span className="text-gray-300">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="tip" className="border-white/10">
                    <AccordionTrigger className="text-white hover:text-viril-300">Inteligencia de Campo</AccordionTrigger>
                    <AccordionContent><p className="text-gray-300 bg-viril-400/10 p-4 rounded-lg border-l-4 border-viril-400">{tactic.proTip}</p></AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="science" className="border-white/10">
                    <AccordionTrigger className="text-white hover:text-viril-300">La Ciencia Detrás</AccordionTrigger>
                    <AccordionContent><p className="text-gray-300 bg-blue-500/10 p-4 rounded-lg border-l-4 border-blue-400">{tactic.science}</p></AccordionContent>
                  </AccordionItem>
                </Accordion>
                {!completedTactics.includes(tactic.id) && (
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <Button onClick={() => markAsCompleted(tactic.id)} className="w-full bg-green-500 hover:bg-green-600 text-white">
                      <CheckCircle className="w-4 h-4 mr-2" /> Marcar como Completado
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Professional Note */}
        <div className="mt-12">
          <Card className="bg-yellow-500/10 border-yellow-400/30">
            <CardHeader><CardTitle className="text-yellow-400 flex items-center"><BookOpen className="w-5 h-5 mr-2" />Nota Profesional</CardTitle></CardHeader>
            <CardContent><p className="text-gray-300">Material educativo; no sustituye valoración médica.</p></CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

// Componente principal con Suspense
export default function ArsenalPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen text-white">Cargando Arsenal...</div>}>
      <ArsenalContent />
    </Suspense>
  )
}