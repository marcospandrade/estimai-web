'use client'
import { Hero } from '@/components/LandingPage/Hero'
import { Services } from '@/components/LandingPage/Services'
import { Featured } from '@/components/LandingPage/Featured'
import { Team } from '@/components/LandingPage/Team'
import { Finisher } from '@/components/LandingPage/Finisher'
import { Contact } from '@/components/LandingPage/Contact'
import { Navbar } from '@/components/Navbar'

const IndexPage = () => (
  <>
    <header>
      <Navbar />
    </header>

    <main>
      <Hero />
      <Services />
      <Featured />
      <Team />
      <Finisher />
      <Contact />
    </main>
  </>
)

export default IndexPage
