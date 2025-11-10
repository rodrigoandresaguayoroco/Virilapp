'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface AuthContextType {
  user: any
  loading: boolean
  signIn: (email: string) => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Simular verificación de auth
    const checkAuth = () => {
      const isAuthenticated = localStorage.getItem('viril-auth')
      if (isAuthenticated) {
        setUser({ email: 'cliente@viril.com', role: 'client' })
      }
      setLoading(false)
    }

    checkAuth()
  }, [])

  const signIn = async (email: string) => {
    // Simular login
    localStorage.setItem('viril-auth', 'true')
    setUser({ email, role: 'client' })
    router.push('/dashboard')
  }

  const signOut = async () => {
    localStorage.removeItem('viril-auth')
    setUser(null)
    router.push('/')
  }

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)