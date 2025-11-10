'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Play, Pause, RotateCcw } from 'lucide-react'

interface BreathingTimerProps {
  inhaleTime?: number
  holdTime?: number
  exhaleTime?: number
  onComplete?: () => void
}

export function BreathingTimer({ 
  inhaleTime = 4, 
  holdTime = 2, 
  exhaleTime = 6,
  onComplete 
}: BreathingTimerProps) {
  const [isActive, setIsActive] = useState(false)
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale')
  const [timeLeft, setTimeLeft] = useState(inhaleTime)
  const [cycleCount, setCycleCount] = useState(0)
  const [totalTime, setTotalTime] = useState(0)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(time => time - 1)
        setTotalTime(total => total + 1)
      }, 1000)
    } else if (isActive && timeLeft === 0) {
      // Cambiar de fase
      if (phase === 'inhale') {
        setPhase('hold')
        setTimeLeft(holdTime)
      } else if (phase === 'hold') {
        setPhase('exhale')
        setTimeLeft(exhaleTime)
      } else if (phase === 'exhale') {
        setPhase('inhale')
        setTimeLeft(inhaleTime)
        setCycleCount(count => count + 1)
        
        // Llamar callback cada 5 ciclos
        if ((cycleCount + 1) % 5 === 0 && onComplete) {
          onComplete()
        }
      }
    }

    return () => clearInterval(interval)
  }, [isActive, timeLeft, phase, inhaleTime, holdTime, exhaleTime, cycleCount, onComplete])

  const toggleTimer = () => {
    setIsActive(!isActive)
  }

  const resetTimer = () => {
    setIsActive(false)
    setPhase('inhale')
    setTimeLeft(inhaleTime)
    setCycleCount(0)
    setTotalTime(0)
  }

  const getPhaseText = () => {
    switch (phase) {
      case 'inhale':
        return 'Inhala'
      case 'hold':
        return 'Mantén'
      case 'exhale':
        return 'Exhala'
      default:
        return ''
    }
  }

  const getPhaseColor = () => {
    switch (phase) {
      case 'inhale':
        return 'from-green-400 to-emerald-500'
      case 'hold':
        return 'from-yellow-400 to-orange-500'
      case 'exhale':
        return 'from-blue-400 to-cyan-500'
      default:
        return 'from-viril-400 to-viril-700'
    }
  }

  const getCircleAnimation = () => {
    if (!isActive) return ''
    
    if (phase === 'inhale') {
      return 'animate-breath-in'
    } else if (phase === 'exhale') {
      return 'animate-breath-out'
    }
    return ''
  }

  return (
    <Card className="bg-white/5 backdrop-blur-sm border-white/10 max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-viril-400">Temporizador de Respiración</CardTitle>
        <CardDescription className="text-gray-300">
          Técnica 4-2-6 para control y relajación
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Breathing Circle */}
        <div className="flex justify-center">
          <div 
            className={`relative w-48 h-48 rounded-full bg-gradient-to-br ${getPhaseColor()} ${getCircleAnimation()} transition-all duration-1000 flex items-center justify-center`}
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-white">{timeLeft}</div>
              <div className="text-sm text-white/80">{getPhaseText()}</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="bg-white/5 rounded-lg p-3">
            <div className="text-2xl font-bold text-viril-400">{cycleCount}</div>
            <div className="text-xs text-gray-400">Ciclos</div>
          </div>
          <div className="bg-white/5 rounded-lg p-3">
            <div className="text-2xl font-bold text-viril-400">
              {Math.floor(totalTime / 60)}:{(totalTime % 60).toString().padStart(2, '0')}
            </div>
            <div className="text-xs text-gray-400">Tiempo Total</div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center space-x-3">
          <Button
            onClick={toggleTimer}
            className="bg-viril-400 hover:bg-viril-400/90 text-viril-950"
          >
            {isActive ? (
              <>
                <Pause className="w-4 h-4 mr-2" />
                Pausar
              </>
            ) : (
              <>
                <Play className="w-4 h-4 mr-2" />
                Iniciar
              </>
            )}
          </Button>
          
          <Button
            onClick={resetTimer}
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Reiniciar
          </Button>
        </div>

        {/* Instructions */}
        <div className="space-y-2 text-sm text-gray-300">
          <p className="font-medium text-viril-400">Instrucciones:</p>
          <ul className="space-y-1 text-xs">
            <li>• <span className="text-green-400">Inhala</span> por la nariz durante 4 segundos</li>
            <li>• <span className="text-yellow-400">Mantén</span> la respiración durante 2 segundos</li>
            <li>• <span className="text-blue-400">Exhala</span> por la boca durante 6 segundos</li>
            <li>• Repite el ciclo varias veces para máximo efecto</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}