'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { 
  Shield, 
  Thermometer, 
  Droplets, 
  AlertTriangle, 
  CheckCircle,
  ArrowLeft,
  Download,
  BookOpen,
  Calendar,
  Clock
} from 'lucide-react'

interface SafetyRule {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
}

interface Technique {
  id: string
  title: string
  duration: string
  description: string
  steps: string[]
  directions?: string[]
  warnings: string[]
}

interface Week {
  weeks: string
  frequency: string
  routine: string
  duration: string
}

const safetyRules: SafetyRule[] = [
  {
    id: 'calentamiento',
    title: 'Calentamiento Obligatorio',
    description: 'Nunca realices estos ejercicios en frío. Aplica una compresa tibia o toma una ducha caliente 2-3 minutos antes de cada sesión.',
    icon: <Thermometer className="w-6 h-6" />,
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'lubricacion',
    title: 'Lubricación es Clave',
    description: 'Usa un lubricante de base acuosa de buena calidad para evitar fricción e irritación y permitir control fino.',
    icon: <Droplets className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'ereccion',
    title: 'Nunca en Erección Completa',
    description: 'Trabaja en flácido o con erección ≤ 30-40%. Estirar en erección completa aumenta el riesgo de lesión.',
    icon: <AlertTriangle className="w-6 h-6" />,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 'dolor',
    title: 'Cero Dolor',
    description: 'Debes sentir tensión suave; si notas dolor agudo o pellizcos, detente y reduce la intensidad.',
    icon: <Shield className="w-6 h-6" />,
    color: 'from-red-500 to-pink-500'
  }
]

const techniques: Technique[] = [
  {
    id: 'estiramientos',
    title: 'Técnica 1: Estiramientos Básicos',
    duration: '5 minutos',
    description: 'Estiramientos direccionales para mejorar la flexibilidad y circulación.',
    steps: [
      'Aplica lubricante. Con pulgar e índice, forma un agarre de "OK" en la base (firme pero no apretado)',
      'Estiramiento frontal: tira suave y constante alejándote del cuerpo 30 s. Descansa 10 s',
      'Direccionales: repite hacia abajo (rodillas) 30 s y descansa',
      'Repite hacia arriba (ombligo) 30 s y descansa',
      'Repite hacia la izquierda 30 s y descansa',
      'Repite hacia la derecha 30 s y descansa',
      'Haz una segunda serie completa de los estiramientos direccionales'
    ],
    directions: ['Arriba', 'Abajo', 'Izquierda', 'Derecha', 'Frontal'],
    warnings: [
      'No apliques presión excesiva',
      'Detente si sientes dolor',
      'Mantén respiración calmada'
    ]
  },
  {
    id: 'jelq',
    title: 'Técnica 2: "Jelq" Modificado y Seguro',
    duration: '3 minutos',
    description: 'Movimiento alterno suave para mejorar la circulación interna.',
    steps: [
      'Asegura una erección parcial (≤ 40%). Reaplica lubricante si es necesario',
      'Agarre de "OK" en la base',
      'Con presión muy ligera, desliza la mano desde la base hasta debajo del glande en ~3 s',
      'Antes de terminar, coloca la otra mano en la base para iniciar el siguiente pase',
      'Alterna manos de forma continua y rítmica durante 3 minutos'
    ],
    warnings: [
      'Presión mínima - evita dolor',
      'Nunca en erección completa',
      'Detente si hay molestias'
    ]
  }
]

const schedule: Week[] = [
  {
    weeks: '1-2',
    frequency: '4-5 días/semana',
    routine: 'Solo Estiramientos Básicos',
    duration: '5 minutos'
  },
  {
    weeks: '3-4',
    frequency: '4-5 días/semana',
    routine: 'Estiramientos + Jelq Modificado',
    duration: '8 minutos'
  },
  {
    weeks: '5 en adelante',
    frequency: '4-5 días/semana',
    routine: 'Estiramientos + Jelq Modificado',
    duration: '8-10 minutos'
  }
]

export default function AcondicionamientoPage() {
  const router = useRouter()
  const [completedSteps, setCompletedSteps] = useState<string[]>([])
  const [currentWeek, setCurrentWeek] = useState(1)

  useEffect(() => {
    // Cargar progreso guardado
    const saved = localStorage.getItem('viril-acondicionamiento-progress')
    if (saved) {
      setCompletedSteps(JSON.parse(saved))
    }
  }, [])

  const markAsCompleted = (stepId: string) => {
    const newCompleted = [...completedSteps, stepId]
    setCompletedSteps(newCompleted)
    localStorage.setItem('viril-acondicionamiento-progress', JSON.stringify(newCompleted))
    
    // Actualizar progreso general
    const totalSteps = techniques.length + 1 // Técnicas + calendario
    const progress = Math.round((newCompleted.length / totalSteps) * 100)
    
    const allProgress = {
      arsenal: JSON.parse(localStorage.getItem('viril-progress') || '{}').arsenal || 0,
      acondicionamiento: progress,
      dieta: JSON.parse(localStorage.getItem('viril-progress') || '{}').dieta || 0
    }
    localStorage.setItem('viril-progress', JSON.stringify(allProgress))
  }

  const progress = Math.round((completedSteps.length / (techniques.length + 1)) * 100)

  return (
    <div className="min-h-screen">
      {/* Fixed Safety Banner */}
      <div className="fixed top-0 left-0 right-0 bg-red-900/90 backdrop-blur-sm border-b border-red-500/50 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Shield className="w-6 h-6 text-red-400" />
              <h2 className="text-lg font-bold text-white">REGLAS DE SEGURIDAD - NO NEGOCIABLES</h2>
            </div>
            <div className="text-sm text-red-200">
              ⚠️ Lee antes de comenzar cualquier técnica
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="w-full p-6 border-b border-white/10 mt-16">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => router.push('/dashboard')}
              className="text-gray-400 hover:text-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver
            </Button>
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-viril-400" />
              <div>
                <h1 className="text-2xl font-bold text-white">Acondicionamiento Masculino</h1>
                <p className="text-sm text-gray-400">Técnicas manuales seguras para salud pélvica</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => {
                const link = document.createElement('a')
                link.href = '/upload/Guia_Acondicionamiento_Masculino_v3.pdf'
                link.download = 'Guia_Acondicionamiento_Masculino_v3.pdf'
                link.click()
              }}
              className="text-gray-400 hover:text-white"
            >
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
            <div 
              className="bg-gradient-to-r from-viril-400 to-viril-700 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Safety Rules */}
        <div className="mb-12">
          <Card className="bg-red-900/20 border-red-500/50">
            <CardHeader>
              <CardTitle className="text-2xl text-red-400 flex items-center">
                <Shield className="w-6 h-6 mr-2" />
                Principios Clave de Seguridad
              </CardTitle>
              <CardDescription className="text-red-200">
                Estas reglas son no negociables para tu seguridad
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {safetyRules.map((rule) => (
                  <div 
                    key={rule.id} 
                    className="bg-white/5 rounded-lg p-4 border border-white/10"
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${rule.color} text-white`}>
                        {rule.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">{rule.title}</h3>
                        <p className="text-sm text-gray-300">{rule.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Introduction */}
        <div className="mb-12">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-3xl text-gradient mb-4">
                La Importancia de la Salud Pélvica y la Circulación
              </CardTitle>
              <CardDescription className="text-lg text-gray-300">
                Bienvenido a tu manual de acondicionamiento. El objetivo de esta guía no es ofrecer soluciones 
                mágicas, sino presentarte una serie de técnicas seguras y probadas, basadas en principios 
                fisiológicos, para mejorar la salud circulatoria de la zona pélvica. Un flujo sanguíneo 
                optimizado es la base de una función eréctil saludable y una mayor confianza.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Techniques */}
        <div className="space-y-8 mb-12">
          {techniques.map((technique) => (
            <Card 
              key={technique.id} 
              className={`bg-white/5 backdrop-blur-sm border-white/10 transition-all duration-300 ${
                completedSteps.includes(technique.id) ? 'border-green-400/50 bg-green-400/5' : ''
              }`}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <CardTitle className="text-viril-400">{technique.title}</CardTitle>
                    <CardDescription className="text-gray-300">
                      {technique.description}
                    </CardDescription>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="text-sm text-viril-400 flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {technique.duration}
                      </span>
                    </div>
                  </div>
                  
                  {completedSteps.includes(technique.id) && (
                    <CheckCircle className="w-6 h-6 text-green-400" />
                  )}
                </div>
              </CardHeader>

              <CardContent>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="steps" className="border-white/10">
                    <AccordionTrigger className="text-white hover:text-viril-300">
                      Pasos a Seguir
                    </AccordionTrigger>
                    <AccordionContent>
                      <ol className="space-y-3">
                        {technique.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start space-x-3">
                            <span className="flex-shrink-0 w-8 h-8 bg-viril-400/20 rounded-full flex items-center justify-center text-sm font-bold text-viril-400">
                              {stepIndex + 1}
                            </span>
                            <span className="text-gray-300 pt-1">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </AccordionContent>
                  </AccordionItem>

                  {technique.directions && (
                    <AccordionItem value="directions" className="border-white/10">
                      <AccordionTrigger className="text-white hover:text-viril-300">
                        Direcciones de Estiramiento
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                          {technique.directions.map((direction) => (
                            <div 
                              key={direction} 
                              className="bg-viril-400/10 border border-viril-400/30 rounded-lg p-3 text-center"
                            >
                              <span className="text-viril-400 font-medium">{direction}</span>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  )}

                  <AccordionItem value="warnings" className="border-red-500/30">
                    <AccordionTrigger className="text-red-400 hover:text-red-300">
                      ⚠️ Advertencias Importantes
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2">
                        {technique.warnings.map((warning, warningIndex) => (
                          <li key={warningIndex} className="flex items-start space-x-3">
                            <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                            <span className="text-red-300">{warning}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {!completedSteps.includes(technique.id) && (
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <Button
                      onClick={() => markAsCompleted(technique.id)}
                      className="w-full bg-green-500 hover:bg-green-600 text-white"
                    >
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Marcar Técnica como Completada
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Progress Calendar */}
        <div className="mb-12">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-2xl text-viril-400 flex items-center">
                <Calendar className="w-6 h-6 mr-2" />
                Calendario de Progresión Sugerido
              </CardTitle>
              <CardDescription className="text-gray-300">
                La consistencia es más importante que la duración. Toma siempre 2 días de descanso a la semana para permitir la recuperación.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4 text-viril-400">Semanas</th>
                      <th className="text-left py-3 px-4 text-viril-400">Frecuencia</th>
                      <th className="text-left py-3 px-4 text-viril-400">Rutina</th>
                      <th className="text-left py-3 px-4 text-viril-400">Duración Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schedule.map((week, index) => (
                      <tr 
                        key={index} 
                        className={`border-b border-white/10 ${
                          currentWeek >= parseInt(week.weeks.split('-')[0]) ? 'bg-green-400/10' : ''
                        }`}
                      >
                        <td className="py-3 px-4 text-white font-medium">{week.weeks}</td>
                        <td className="py-3 px-4 text-gray-300">{week.frequency}</td>
                        <td className="py-3 px-4 text-gray-300">{week.routine}</td>
                        <td className="py-3 px-4 text-viril-400 font-medium">{week.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-2xl text-viril-400">
                Preguntas Frecuentes y Mitos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="resultados" className="border-white/10">
                  <AccordionTrigger className="text-white hover:text-viril-300">
                    ¿Veré resultados de tamaño de la noche a la mañana?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-300">
                      No. El objetivo principal es salud circulatoria, calidad eréctil y confianza. 
                      La consistencia a largo plazo favorece la función del tejido.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="peligroso" className="border-white/10">
                  <AccordionTrigger className="text-white hover:text-viril-300">
                    ¿Es esto peligroso?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-300">
                      No, si sigues las reglas de seguridad: calentar, lubricar, nunca en erección completa y cero dolor.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="dolor" className="border-white/10">
                  <AccordionTrigger className="text-white hover:text-viril-300">
                    ¿Qué pasa si siento un ligero dolor?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-300">
                      Detente. Estás usando demasiada fuerza. Reduce la presión del agarre y la intensidad del 
                      estiramiento en la siguiente sesión.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* Professional Note */}
        <div className="mb-12">
          <Card className="bg-yellow-500/10 border-yellow-400/30">
            <CardHeader>
              <CardTitle className="text-yellow-400 flex items-center">
                <BookOpen className="w-5 h-5 mr-2" />
                Nota Profesional
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Esta guía es informativa y no sustituye la evaluación de un profesional. Si presentas dolor persistente, 
                disfunción eréctil, curvatura progresiva, cambios en la sensibilidad o antecedente de traumatismo pélvico, 
                consulta con un urólogo o fisioterapeuta de piso pélvico.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Mark Calendar as Completed */}
        {!completedSteps.includes('calendar') && (
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardContent className="pt-6">
              <Button
                onClick={() => markAsCompleted('calendar')}
                className="w-full bg-green-500 hover:bg-green-600 text-white"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                Marcar Calendario como Completado
              </Button>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  )
}