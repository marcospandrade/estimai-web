import './globals.css'
import { Roboto_Flex as Roboto } from 'next/font/google'
import { ReactNode } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

export const metadata = {
  title: 'EstimAi',
  description: 'EstimAi',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${roboto.variable} font-sans bg-gray-900 text-gray-100`}
      >
        {children}
      </body>
    </html>
  )
}
