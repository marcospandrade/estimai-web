'use client'

import { getUser } from '@/lib/auth'

// const user = getUser()

import Layout from '../components/Layout'
import { Hero } from '@/components/LandingPage/Hero'
import { Services } from '@/components/LandingPage/Services'
import { Featured } from '@/components/LandingPage/Featured'
import { Team } from '@/components/LandingPage/Team'
import { Finisher } from '@/components/LandingPage/Finisher'
import { Contact } from '@/components/LandingPage/Contact'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Hero />
    <Services />
    <Featured />
    <Team />
    <Finisher />
    <Contact />
  </Layout>
)

export default IndexPage

/// Page Sections
