'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { 
  BookOpen, 
  Filter, 
  CheckCircle,
  ArrowLeft,
  Download,
  Zap,
  Heart,
  Leaf
} from 'lucide-react'

interface Food {
  id: string
  name: string
  pillar: 'hormonal' | 'nitric' | 'energy'
  description: string
  benefits: string
  incorporation: string
  imagePrompt: string
  completed: boolean
}

interface Recipe {
  name: string
  mission: string
  ingredients: string[]
  instructions: string
}

const foods: Food[] = [
  {
    id: 'ostras',
    name: 'Ostras',
    pillar: 'hormonal',
    description: 'La fuente natural más concentrada de zinc',
    benefits: 'Mineral clave para funciones reproductivas y hormonales, proteína de alta calidad',
    incorporation: 'Una docena como aperitivo o en conserva de buena calidad (en ensaladas/pasta)',
    imagePrompt: 'Macro de ostras abiertas sobre hielo con limón; iluminación limpia, gotas visibles',
    completed: false
  },
  {
    id: 'palta',
    name: 'Palta (Aguacate)',
    pillar: 'hormonal',
    description: 'Rica en grasas monoinsaturadas y vitamina B6',
    benefits: 'Contribuye a un patrón de grasas saludable',
    incorporation: 'Media palta en ensaladas, tostadas o batidos; toque de sal y limón',
    imagePrompt: 'Mitades de palta sobre mármol, semillas a la vista, luz lateral suave',
    completed: false
  },
  {
    id: 'espinacas',
    name: 'Espinacas',
    pillar: 'nitric',
    description: 'Aportan magnesio y nitratos naturales',
    benefits: 'Mayor biodisponibilidad de óxido nítrico',
    incorporation: 'Un puñado en huevos, salteados o batidos; base para ensaladas',
    imagePrompt: 'Hojas frescas con gotas de agua; fondo oscuro para resaltar verde',
    completed: false
  },
  {
    id: 'salmon',
    name: 'Salmón',
    pillar: 'hormonal',
    description: 'Aporta EPA/DHA (omega-3) y vitamina D',
    benefits: 'Se asocia consistentemente con salud cardiovascular',
    incorporation: 'A la plancha con limón 1–2×/semana; ahumado en ensaladas o tostadas',
    imagePrompt: 'Filete a la plancha con piel crujiente sobre espinacas, poca profundidad de campo',
    completed: false
  },
  {
    id: 'sandia',
    name: 'Sandía',
    pillar: 'nitric',
    description: 'Fuente natural de L-citrulina',
    benefits: 'El organismo convierte en L-arginina y luego en óxido nítrico',
    incorporation: 'Como postre o en jugo fresco pre-entrenamiento/cita',
    imagePrompt: 'Cortes rojos vibrantes, macro con textura; fondo claro',
    completed: false
  },
  {
    id: 'ajo',
    name: 'Ajo',
    pillar: 'nitric',
    description: 'Contiene alicina',
    benefits: 'Ensayos muestran reducciones modestas de presión arterial',
    incorporation: '1–2 dientes picados en salteados, salsas o marinados',
    imagePrompt: 'Cabeza de ajo y dientes picados sobre tabla; luz cálida',
    completed: false
  },
  {
    id: 'frutos-rojos',
    name: 'Frutos Rojos',
    pillar: 'nitric',
    description: 'Ricos en flavonoides (antocianinas)',
    benefits: 'Apoyan la función endotelial',
    incorporation: 'Un puñado en yogurt, avena o como snack',
    imagePrompt: 'Bol de cerámica blanca con frutos rojos y gotas de agua; fondo de mármol',
    completed: false
  },
  {
    id: 'huevos',
    name: 'Huevos (con yema)',
    pillar: 'hormonal',
    description: 'Proteína completa con nutrientes esenciales',
    benefits: 'Yema aporta vitamina D y colina; colesterol dietario es sustrato de hormonas',
    incorporation: '2–3 huevos al desayuno: revueltos, a la plancha o cocidos',
    imagePrompt: 'Huevos a la plancha con yema brillante; vajilla minimalista',
    completed: false
  },
  {
    id: 'nueces',
    name: 'Nueces y Almendras',
    pillar: 'nitric',
    description: 'Aportan L-arginina y grasas saludables',
    benefits: 'Precursor de óxido nítrico y ALA (omega-3 vegetal)',
    incorporation: 'Un puñado como snack o topping de ensaladas y yogurt',
    imagePrompt: 'Cuenco con mezcla de nueces/almendras; textura macro',
    completed: false
  },
  {
    id: 'chocolate',
    name: 'Chocolate Negro (70%+)',
    pillar: 'nitric',
    description: 'Rico en flavanoles del cacao',
    benefits: 'Ayudan a mantener la vasodilatación dependiente del endotelio',
    incorporation: '1–2 cuadrados como postre; elige tabletas 70%+ cacao, bajo en azúcar',
    imagePrompt: 'Onzas de chocolate sobre pizarra; luz lateral para resaltar superficie',
    completed: false
  },
  {
    id: 'betarraga',
    name: 'Betarraga (Remolacha)',
    pillar: 'nitric',
    description: 'Alto contenido de nitratos dietarios',
    benefits: 'Pueden favorecer el NO y la regulación de la presión arterial',
    incorporation: 'Jugo con manzana o en rodajas cocidas para ensaladas',
    imagePrompt: 'Jugo de betarraga en vaso de cristal con espuma fina; fondo oscuro',
    completed: false
  },
  {
    id: 'semillas',
    name: 'Semillas de Zapallo',
    pillar: 'hormonal',
    description: 'Destacan por su zinc y magnesio',
    benefits: 'Combinación útil para soporte metabólico y neuromuscular',
    incorporation: 'Espolvorea en ensaladas, cremas o consúmelas como snack',
    imagePrompt: 'Semillas tostadas en bowl, sombras suaves',
    completed: false
  },
  {
    id: 'carne',
    name: 'Carne Roja Magra',
    pillar: 'energy',
    description: 'Fuente de proteína de alta calidad',
    benefits: 'Hierro, vitaminas B y zinc para energía sostenida',
    incorporation: 'Corte magro a la plancha o parrilla 1–2×/semana',
    imagePrompt: 'Bife magro en plancha de hierro; corte y punto jugoso',
    completed: false
  },
  {
    id: 'granada',
    name: 'Granada',
    pillar: 'nitric',
    description: 'Rica en polifenoles',
    benefits: 'Estudios en salud vascular muestran señales de beneficio',
    incorporation: 'Jugo 100% granada o arilos en ensaladas/yogurt',
    imagePrompt: 'Mitades de granada con arilos brillantes; fondo negro',
    completed: false
  },
  {
    id: 'banana',
    name: 'Plátano (Banana)',
    pillar: 'energy',
    description: 'Alto en potasio',
    benefits: 'Apoyo cardiovascular y energía rápida pre-entrenamiento',
    incorporation: 'Uno antes de entrenar o en batido post-entrenamiento',
    imagePrompt: 'Bananas sobre madera clara; luz natural',
    completed: false
  }
]

const recipe: Recipe = {
  name: 'El Batido del Vigor',
  mission: 'Un batido delicioso que combina varios de los alimentos más potentes de la lista',
  ingredients: [
    '1 taza leche de almendras/agua',
    '1 puñado grande espinacas',
    '½ palta',
    '½ taza frutos rojos congelados',
    '1 cda semillas de zapallo',
    '1 medida proteína (opcional)',
    '1 cuadrado de chocolate negro (70%+)'
  ],
  instructions: 'Licúa hasta textura suave. Disfruta de inmediato.'
}

const pillars = [
  { id: 'hormonal', name: 'Precursores Hormonales', icon: <Zap className="w-4 h-4" />, color: 'from-purple-500 to-pink-500' },
  { id: 'nitric', name: 'Potenciadores Óxido Nítrico', icon: <Heart className="w-4 h-4" />, color: 'from-red-500 to-orange-500' },
  { id: 'energy', name: 'Energía Sostenida', icon: <Leaf className="w-4 h-4" />, color: 'from-green-500 to-emerald-500' }
]

export default function DietaPage() {
  const router = useRouter()
  const [selectedPillar, setSelectedPillar] = useState<string | null>(null)
  const [completedFoods, setCompletedFoods] = useState<string[]>([])
  const [filteredFoods, setFilteredFoods] = useState(foods)

  useEffect(() => {
    // Cargar progreso guardado
    const saved = localStorage.getItem('viril-dieta-progress')
    if (saved) {
      setCompletedFoods(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    if (selectedPillar) {
      setFilteredFoods(foods.filter(food => food.pillar === selectedPillar))
    } else {
      setFilteredFoods(foods)
    }
  }, [selectedPillar])

  const toggleFoodCompletion = (foodId: string) => {
    const newCompleted = completedFoods.includes(foodId)
      ? completedFoods.filter(id => id !== foodId)
      : [...completedFoods, foodId]
    
    setCompletedFoods(newCompleted)
    localStorage.setItem('viril-dieta-progress', JSON.stringify(newCompleted))
    
    // Actualizar progreso general
    const progress = Math.round((newCompleted.length / foods.length) * 100)
    
    const allProgress = {
      arsenal: JSON.parse(localStorage.getItem('viril-progress') || '{}').arsenal || 0,
      acondicionamiento: JSON.parse(localStorage.getItem('viril-progress') || '{}').acondicionamiento || 0,
      dieta: progress
    }
    localStorage.setItem('viril-progress', JSON.stringify(allProgress))
  }

  const progress = Math.round((completedFoods.length / foods.length) * 100)

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="w-full p-6 border-b border-white/10">
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
              <BookOpen className="w-8 h-8 text-viril-400" />
              <div>
                <h1 className="text-2xl font-bold text-white">Dieta del Vigor</h1>
                <p className="text-sm text-gray-400">15 alimentos clave para potenciar virilidad</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => {
                const link = document.createElement('a')
                link.href = '/upload/Guia_3_Dieta_del_Vigor_v1.pdf'
                link.download = 'Guia_3_Dieta_del_Vigor_v1.pdf'
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
        {/* Introduction */}
        <div className="mb-12">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-3xl text-gradient mb-4">
                Come como un Rey, Rinde como un Campeón
              </CardTitle>
              <CardDescription className="text-lg text-gray-300">
                Tu rendimiento, energía y vitalidad empiezan en el plato. Este dossier reúne 15 alimentos accesibles 
                en Chile que apoyan tres pilares: precursores hormonales, potenciadores de óxido nítrico y energía sostenida. 
                No es una dieta rígida, es un arsenal para elegir mejor cada día.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Pillars Filter */}
        <div className="mb-12">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-2xl text-viril-400 mb-4 flex items-center">
                <Filter className="w-6 h-6 mr-2" />
                Los 3 Pilares de la Dieta del Vigor
              </CardTitle>
              <CardDescription className="text-gray-300">
                Integra semanalmente opciones de cada pilar para construir una base de salud vascular, hormonal y de energía.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {pillars.map((pillar) => (
                  <Button
                    key={pillar.id}
                    onClick={() => setSelectedPillar(selectedPillar === pillar.id ? null : pillar.id)}
                    className={`h-auto p-6 flex flex-col items-center justify-center space-y-3 transition-all duration-300 ${
                      selectedPillar === pillar.id
                        ? 'bg-gradient-to-r ' + pillar.color + ' text-white'
                        : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                    }`}
                  >
                    <div className="p-3 rounded-full bg-white/20">
                      {pillar.icon}
                    </div>
                    <span className="font-medium text-center">{pillar.name}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Foods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredFoods.map((food) => (
            <Card 
              key={food.id} 
              className={`bg-white/5 backdrop-blur-sm border-white/10 transition-all duration-300 hover-lift ${
                completedFoods.includes(food.id) ? 'border-green-400/50 bg-green-400/5' : ''
              }`}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <CardTitle className="text-viril-400">{food.name}</CardTitle>
                    <CardDescription className="text-gray-300">
                      {food.description}
                    </CardDescription>
                  </div>
                  
                  {completedFoods.includes(food.id) && (
                    <CheckCircle className="w-6 h-6 text-green-400" />
                  )}
                </div>
              </CardHeader>

              <CardContent>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="benefits" className="border-white/10">
                    <AccordionTrigger className="text-white hover:text-viril-300">
                      Beneficios
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-300 bg-viril-400/10 p-4 rounded-lg border-l-4 border-viril-400">
                        {food.benefits}
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="incorporation" className="border-white/10">
                    <AccordionTrigger className="text-white hover:text-viril-300">
                      Cómo Incorporarlo
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-300 bg-green-500/10 p-4 rounded-lg border-l-4 border-green-400">
                        {food.incorporation}
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="pillar" className="border-white/10">
                    <AccordionTrigger className="text-white hover:text-viril-300">
                      Pilar Nutricional
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex items-center space-x-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          food.pillar === 'hormonal' ? 'bg-purple-500/20 text-purple-400' :
                          food.pillar === 'nitric' ? 'bg-red-500/20 text-red-400' :
                          'bg-green-500/20 text-green-400'
                        }`}>
                          {food.pillar === 'hormonal' ? 'Precursor Hormonal' :
                           food.pillar === 'nitric' ? 'Potenciador Óxido Nítrico' :
                           'Energía Sostenida'}
                        </span>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <Button
                    onClick={() => toggleFoodCompletion(food.id)}
                    className={`w-full ${
                      completedFoods.includes(food.id)
                        ? 'bg-green-500 hover:bg-green-600'
                        : 'bg-viril-400 hover:bg-viril-400/90 text-viril-950'
                    }`}
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {completedFoods.includes(food.id) ? 'Completado' : 'Marcar como Completado'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recipe Section */}
        <div className="mb-12">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-2xl text-viril-400">
                Receta Rápida: El Batido del Vigor
              </CardTitle>
              <CardDescription className="text-gray-300">
                {recipe.mission}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Ingredientes:</h3>
                  <ul className="space-y-2">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-viril-400/20 rounded-full flex items-center justify-center text-xs font-bold text-viril-400">
                          {index + 1}
                        </span>
                        <span className="text-gray-300">{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Instrucciones:</h3>
                  <div className="bg-green-500/10 p-4 rounded-lg border-l-4 border-green-400">
                    <p className="text-gray-300">{recipe.instructions}</p>
                  </div>
                </div>
              </div>
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
                Este material es educativo y no sustituye consejo médico. Si tienes condiciones cardiovasculares, 
                renales o usas anticoagulantes, consulta a un profesional antes de cambios dietarios o suplementos.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Summary Stats */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-purple-500/10 border-purple-400/30">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  {foods.filter(f => f.pillar === 'hormonal').length}
                </div>
                <div className="text-sm text-purple-300">Precursores Hormonales</div>
                <div className="text-xs text-gray-400 mt-1">
                  {foods.filter(f => f.pillar === 'hormonal' && completedFoods.includes(f.id)).length} completados
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-red-500/10 border-red-400/30">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">
                  {foods.filter(f => f.pillar === 'nitric').length}
                </div>
                <div className="text-sm text-red-300">Potenciadores Óxido Nítrico</div>
                <div className="text-xs text-gray-400 mt-1">
                  {foods.filter(f => f.pillar === 'nitric' && completedFoods.includes(f.id)).length} completados
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-green-500/10 border-green-400/30">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  {foods.filter(f => f.pillar === 'energy').length}
                </div>
                <div className="text-sm text-green-300">Energía Sostenida</div>
                <div className="text-xs text-gray-400 mt-1">
                  {foods.filter(f => f.pillar === 'energy' && completedFoods.includes(f.id)).length} completados
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}