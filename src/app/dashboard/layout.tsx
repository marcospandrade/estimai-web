import { ThemeProvider } from '@/lib/material'
import { ReactNode } from 'react'
import { Sidenav } from './components/Sidenav'
import { AdminFooter } from './components/AdminFooter'

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <ThemeProvider>
      <div className="bg-gray-50">
        <div className="min-h-screen bg-blue-gray-50/50">
          <Sidenav brandImg={'../../public/img/logo-ct.png'} brandName="EstimAi" />
          <div className="p-4 xl:ml-80">
            {children}

            <div className="text-blue-gray-400">
              <AdminFooter />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}
