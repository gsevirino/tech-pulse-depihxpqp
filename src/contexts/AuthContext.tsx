import React, { createContext, useContext, useEffect, useState } from 'react'
import pb from '@/lib/pocketbase/client'
import type { RecordModel } from 'pocketbase'

interface AuthContextType {
  user: RecordModel | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, pass: string) => Promise<void>
  logout: () => void
  refreshUser: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<RecordModel | null>(() => pb.authStore.record)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Escutar mudanças no authStore do PocketBase
    const unsubscribe = pb.authStore.onChange((_token, model) => {
      setUser(model)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  const login = async (email: string, pass: string) => {
    setIsLoading(true)
    try {
      const authData = await pb.collection('users').authWithPassword(email, pass)
      setUser(authData.record)
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    pb.authStore.clear()
    setUser(null)
  }

  const refreshUser = async () => {
    if (pb.authStore.isValid) {
      try {
        const refreshed = await pb.collection('users').authRefresh()
        setUser(refreshed.record)
      } catch {
        pb.authStore.clear()
        setUser(null)
      }
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user && pb.authStore.isValid,
        isLoading,
        login,
        logout,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider')
  }
  return context
}
