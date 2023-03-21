import DecisionsSection from '@/components/DecisionsSection/DecisionsSection'
import HelpInfoSection from '@/components/HelpInfoSection/HelpInfoSection'
import LandingHeroSection from '@/components/LandingHeroSection/LandingHeroSection'
import Layout from '@/components/Layout/Layout'
import React from 'react'

export default function index() {
  return (
    <Layout>
        <LandingHeroSection title={'Запускаем полноценные сайты за 2 недели'}/>
        <DecisionsSection/>
        <HelpInfoSection/>
    </Layout>
  )
}
