'use client'

import { User } from '@/models/User.model'
import { ReactNode, createContext, useContext, useMemo, useState } from 'react'

interface AuthContextData {
  user: User | null
  setUserInfo: (user: User) => void
}

interface AuthContextProviderProps {
  children: ReactNode
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User | null>(null)

  function setUserInfo(user: User) {
    return setUser(user)
  }

  const contextData: AuthContextData = useMemo(
    () => ({
      user,
      setUserInfo,
    }),
    [user]
  )

  return <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthContextProvider, useAuth }
