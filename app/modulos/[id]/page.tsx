'use client'

import { notFound } from 'next/navigation'
import { arsenalData, acondicionamientoData, dietaData } from '@/lib/modules-data'
import { ScrollReveal } from '@/components/scroll-reveal'

export default function ModuloPage({ params }: { params: { id: string } }) {
  const modules: Record<string, any> = {
    'arsenal-del-amante': arsenalData,
    'acondicionamiento': acondicionamientoData,
    'dieta-del-vigor': dietaData,
  }

  const data = modules[params.id]
  if (!data) return notFound()

  return (
    <div className="min-h-screen bg-[#101010] p-8 md:p-12">
      <div className="container mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <h1 className="text-7xl md:text-8xl font-black gradient-text mb-6">
              {data.title}
            </h1>
            <p className="text-2xl md:text-3xl text-gray-400">
              {data.subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* Contenido específico por módulo */}
        {params.id === 'arsenal-del-amante' && <ArsenalContent data={data} />}
        {params.id === 'acondicionamiento' && <AcondicionamientoContent data={data} />}
        {params.id === 'dieta-del-vigor' && <DietaContent data={data} />}
      </div>
    </div>
  )
}

// Componentes de contenido específicos
function ArsenalContent({ data }: { data: any }) {
  return (
    <div className="space-y-16">
      {data.tactics.map((tactic: any, i: number) => (
        <ScrollReveal key={tactic.id} delay={i * 0.1}>
          <div className="glass-card">
            <h3 className="text-4xl font-black mb-4 text-viril-400">{tactic.title}</h3>
            <p className="text-xl text-gray-300 mb-6">{tactic.mission}</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-bold mb-4">🔬 PROTOCOLO</h4>
                <ol className="space-y-3">
                  {tactic.protocol.map((step: string, idx: number) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-viril-400 text-viril-950 rounded-full flex items-center justify-center font-bold">
                        {idx + 1}
                      </span>
                      <span className="text-lg">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
              
              <div>
                <h4 className="text-2xl font-bold mb-4">💡 TIP PRO</h4>
                <p className="bg-viril-400/10 p-6 rounded-2xl border-l-4 border-viril-400 mb-6">
                  {tactic.proTip}
                </p>
                
                <h4 className="text-2xl font-bold mb-4">🧬 CIENCIA</h4>
                <p className="bg-blue-500/10 p-6 rounded-2xl border-l-4 border-blue-400">
                  {tactic.science}
                </p>
              </div>
            </div>
            
            <button className="btn-premium mt-8 w-full">
              Marcar como Dominada →
            </button>
          </div>
        </ScrollReveal>
      ))}
    </div>
  )
}

function AcondicionamientoContent({ data }: { data: any }) {
  return (
    <div className="space-y-16">
      {/* Safety Protocol */}
      <ScrollReveal>
        <div className="glass-card border-red-400/30">
          <h3 className="text-4xl font-black mb-6 text-red-400">🚨 {data.safety.title}</h3>
          <ul className="space-y-4">
            {data.safety.rules.map((rule: string, i: number) => (
              <li key={i} className="text-xl flex items-start space-x-3">
                <span className="text-red-400 text-2xl">•</span>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </div>
      </ScrollReveal>

      {/* Techniques */}
      {data.techniques.map((tech: any, i: number) => (
        <ScrollReveal key={tech.id} delay={i * 0.1}>
          <div className="glass-card">
            <h3 className="text-4xl font-black mb-4 text-viril-400">{tech.title}</h3>
            <p className="text-xl text-gray-300 mb-6">{tech.objective}</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-bold mb-4">📋 PASOS</h4>
                <ol className="space-y-3">
                  {tech.steps.map((step: string, idx: number) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-viril-400 text-viril-950 rounded-full flex items-center justify-center font-bold">
                        {idx + 1}
                      </span>
                      <span className="text-lg">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
              
              <div>
                <h4 className="text-2xl font-bold mb-4">⚠️ ADVERTENCIAS</h4>
                <p className="bg-red-500/10 p-6 rounded-2xl border-l-4 border-red-400 text-red-200">
                  {tech.warning}
                </p>
                <p className="text-gray-400 mt-4">
                  <strong>Frecuencia:</strong> {tech.frequency}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  )
}

function DietaContent({ data }: { data: any }) {
  const [filter, setFilter] = useState('ALL')

  return (
    <div className="space-y-16">
      {/* Filter Tabs */}
      <ScrollReveal>
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {['ALL', 'PROTEÍNAS', 'MINERALES', 'PRECURSORES', 'ENERGÍA'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-full font-bold transition-all ${
                filter === cat
                  ? 'bg-viril-400 text-viril-950'
                  : 'bg-white/10 text-gray-400 hover:bg-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Categories */}
      {data.categories.map((category: any, i: number) => (
        (filter === 'ALL' || filter === category.title.split(' ')[0]) && (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="glass-card">
              <h3 className="text-4xl font-black mb-8 text-viril-400">{category.title}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {category.foods.map((food: any, idx: number) => (
                  <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <h4 className="text-2xl font-bold mb-2">{food.name}</h4>
                    <p className="text-gray-300 mb-4">{food.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <span><strong>Porción:</strong> {food.servings}</span>
                      {food.cooking && <span><strong>Preparación:</strong> {food.cooking}</span>}
                      {food.evidence && <span><strong>Evidencia:</strong> {food.evidence}</span>}
                      {food.benefit && <span><strong>Beneficio:</strong> {food.benefit}</span>}
                      {food.warning && <span className="text-red-400"><strong>⚠️</strong> {food.warning}</span>}
                      {food.timing && <span><strong>Timing:</strong> {food.timing}</span>}
                      {food.boost && <span className="text-viril-400"><strong>💡</strong> {food.boost}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )
      ))}

      {/* Smoothie */}
      <ScrollReveal>
        <div className="glass-card bg-viril-400/10 border-viril-400/30">
          <h3 className="text-4xl font-black mb-6 text-viril-400">🥤 {data.smoothie.title}</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-2xl font-bold mb-4">INGREDIENTES</h4>
              <ul className="space-y-2">
                {data.smoothie.ingredients.map((ing: string, i: number) => (
                  <li key={i} className="text-lg flex items-center space-x-2">
                    <span className="text-viril-400">•</span>
                    <span>{ing}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-4">INSTRUCCIONES</h4>
              <p className="text-lg mb-4">{data.smoothie.instructions}</p>
              <p className="bg-viril-400/20 p-4 rounded-2xl border-l-4 border-viril-400">
                {data.smoothie.benefits}
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Forbidden */}
      <ScrollReveal>
        <div className="glass-card border-red-400/30">
          <h3 className="text-4xl font-black mb-6 text-red-400">🚫 ALIMENTOS PROHIBIDOS</h3>
          <ul className="grid md:grid-cols-2 gap-4">
            {data.forbidden.map((item: string, i: number) => (
              <li key={i} className="text-xl bg-red-500/10 p-4 rounded-2xl border-l-4 border-red-400">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </ScrollReveal>
    </div>
  )
}