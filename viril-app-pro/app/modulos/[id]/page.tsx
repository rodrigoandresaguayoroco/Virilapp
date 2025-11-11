// ===== Contenido de app/modulos/[id]/page.tsx =====
'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  arsenalData,
  acondicionamientoData,
  dietaData,
} from '@/lib/modules-data'
import { notFound } from 'next/navigation'
import { Badge } from '@/components/ui/badge'

// Este es el componente principal de la página
export default function ModuloPage({ params }: { params: { id: string } }) {
  const { id } = params

  let data
  let contentComponent

  // 1. Revisa el ID de la URL y elige los datos y el componente correctos
  if (id === 'arsenal-del-amante') {
    data = arsenalData
    contentComponent = <ArsenalContent data={data} />
  } else if (id === 'acondicionamiento') {
    data = acondicionamientoData
    contentComponent = <AcondicionamientoContent data={data} />
  } else if (id === 'dieta-del-vigor') {
    data = dietaData
    contentComponent = <DietaContent data={data} />
  } else {
    // Si el ID no coincide con nada, muestra un error 404
    return notFound()
  }

  // 2. Renderiza el layout de la página con el componente de contenido elegido
  return (
    <main className="container mx-auto max-w-3xl min-h-screen p-8 md:p-24">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold tracking-tighter mb-4">
          {data.title}
        </h1>
        <p className="text-2xl text-muted-foreground">{data.subtitle}</p>
      </div>

      {/* Aquí se inserta el contenido específico del módulo */}
      {contentComponent}
    </main>
  )
}

// --- COMPONENTES DE CONTENIDO ESPECÍFICOS ---

// Componente para el Módulo 1: Arsenal
function ArsenalContent({ data }: { data: typeof arsenalData }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {data.tactics.map((tactic, index) => (
        <AccordionItem value={`item-${index}`} key={tactic.id}>
          <AccordionTrigger className="text-xl font-medium text-left">
            {tactic.title}
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            <div className="space-y-4">
              <p>
                <strong>Misión:</strong> {tactic.mission}
              </p>

              <div className="p-4 bg-zinc-900 rounded-lg">
                <strong>Protocolo:</strong>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  {tactic.protocol.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-blue-950 border border-blue-700 rounded-lg">
                <strong>Tip Pro:</strong> {tactic.proTip}
              </div>

              <div className="p-4 bg-zinc-800 border border-zinc-700 rounded-lg">
                <strong>Ciencia:</strong> {tactic.science}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

// Componente para el Módulo 2: Acondicionamiento
function AcondicionamientoContent({
  data,
}: {
  data: typeof acondicionamientoData
}) {
  return (
    <div className="space-y-8">
      {/* Protocolo de Seguridad */}
      <div className="p-6 bg-red-950 border border-red-700 rounded-xl">
        <h3 className="text-2xl font-bold text-red-400 mb-4">
          🚨 {data.safety.title}
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-lg text-red-200">
          {data.safety.rules.map((rule, i) => (
            <li key={i}>{rule}</li>
          ))}
        </ul>
      </div>

      {/* Técnicas */}
      {data.techniques.map((tech) => (
        <div
          key={tech.id}
          className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl"
        >
          <h3 className="text-3xl font-bold mb-3">{tech.title}</h3>
          <p className="text-xl text-muted-foreground mb-4">{tech.objective}</p>

          <h4 className="text-xl font-semibold mb-2">Pasos:</h4>
          <ul className="list-decimal pl-6 mb-4 space-y-1">
            {tech.steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4">
            <Badge variant="outline">Frecuencia: {tech.frequency}</Badge>
            <Badge variant="destructive">Advertencia: {tech.warning}</Badge>
          </div>
        </div>
      ))}
    </div>
  )
}

// Componente para el Módulo 3: Dieta
function DietaContent({ data }: { data: typeof dietaData }) {
  return (
    <div className="space-y-8">
      {data.categories.map((category) => (
        <div key={category.title}>
          <h3 className="text-3xl font-bold mb-4 tracking-tight">
            {category.title}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {category.foods.map((food) => (
              <div
                key={food.name}
                className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg"
              >
                <h4 className="text-xl font-semibold text-green-400">
                  {food.name}
                </h4>
                <p className="text-muted-foreground mb-2">
                  {food.description}
                </p>
                <Badge variant="secondary">{food.servings}</Badge>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Smoothie */}
      <div className="p-6 bg-green-950 border border-green-700 rounded-xl">
        <h3 className="text-2xl font-bold text-green-400 mb-4">
          🥤 {data.smoothie.title}
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold">Ingredientes:</h4>
            <ul className="list-disc pl-6 text-muted-foreground">
              {data.smoothie.ingredients.map((ing, i) => (
                <li key={i}>{ing}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <p>{data.smoothie.instructions}</p>
            <p className="font-semibold text-green-300">
              {data.smoothie.benefits}
            </p>
          </div>
        </div>
      </div>

      {/* Prohibidos */}
      <div>
        <h3 className="text-3xl font-bold mb-4 tracking-tight">Prohibidos</h3>
        <div className="grid grid-cols-2 gap-4">
          {data.forbidden.map((item, i) => (
            <div
              key={i}
              className="p-4 bg-red-950 border border-red-800 rounded-lg text-red-300"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}