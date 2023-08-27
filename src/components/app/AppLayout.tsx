'use client'
import { ThemeProvider } from '@material-tailwind/react'
import { ReactNode } from 'react'

interface AppLayoutProps {
  children: ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  return <ThemeProvider>{children}</ThemeProvider>
}
