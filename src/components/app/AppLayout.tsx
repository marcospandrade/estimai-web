'use client'
import { ThemeProvider } from '@material-tailwind/react'
import { ReactNode } from 'react'

interface AppLayoutProps {
  children: ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <ThemeProvider>
      <div className="bg-gray-50">{children}</div>
    </ThemeProvider>
  )
}
