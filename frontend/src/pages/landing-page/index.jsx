import DecisionsSection from '@/components/DecisionsSection/DecisionsSection'
import HelpInfoSection from '@/components/HelpInfoSection/HelpInfoSection'
import LandingHeroSection from '@/components/LandingHeroSection/LandingHeroSection'
import Layout from '@/components/Layout/Layout'
import ProductSection from '@/components/ProductSection/ProductSection'
import React from 'react'
import SeoProduct from '@/components/SeoProduct/SeoProduct'
import CallbackLandingSection from '@/components/CallbackLandingSection/CallbackLandingSection'

export default function index() {
  return (
    <Layout>
        <LandingHeroSection title={'Запускаем полноценные сайты за 2 недели'}/>
        <DecisionsSection/>
        <HelpInfoSection/>
        <ProductSection data={[
            {
                id: '1',
                name: 'сайт-визитка',
                price: '20 000',
                index: '2',
                image: '',
            },
            {
                id: '2',
                name: 'landing page',
                price: '24 000',
                image: '',
                index: '9'
            },
            {
                id: '3',
                name: 'сайт-визитка',
                price: '20 000',
                index: '2',
                image: '',
            },
            {
                id: '4',
                name: 'landing page',
                price: '24 000',
                image: '',
                index: '9'
            },
            {
                id: '5',
                name: 'landing page',
                price: '24 000',
                image: '',
                index: '9'
            },
        ]}/>
        <CallbackLandingSection/>
        {true ? <SeoProduct data={{
            header: 'Заголовок',
            seoDescription: 'описание'
        }} /> : null}
    </Layout>
  )
}
