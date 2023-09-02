'use client'

import { useAuth } from '@/hooks/useAuth'
import { User } from '@/models/User.model'
import Image from 'next/image'
import { useEffect } from 'react'

interface HomeProps {
  userLogged: User
}

export function Home({ userLogged }: HomeProps) {
  const { user, setUserInfo } = useAuth()

  useEffect(() => {
    setUserInfo(userLogged)
  }, [])
  return (
    <>
      <h1>HOME HOME</h1>
      <div>Olá, {user?.name}</div>
    </>
  )
}
