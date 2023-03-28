import Head from "next/head";
import DecisionsSection from '@/components/DecisionsSection/DecisionsSection'
import HelpInfoSection from '@/components/HelpInfoSection/HelpInfoSection'
import LandingHeroSection from '@/components/LandingHeroSection/LandingHeroSection'
import Layout from '@/components/Layout/Layout'
import ProductSection from '@/components/ProductSection/ProductSection'
import React from 'react'
import SeoProduct from '@/components/SeoProduct/SeoProduct'
import CallbackLandingSection from '@/components/CallbackLandingSection/CallbackLandingSection'
import PersonalSection from '@/components/PersonalSection/PersonalSection'
import KeysLandingSection from '@/components/KeysLandingSection/KeysLandingSection'
import { getServicesList } from '@/lib/apiFunctions'
import { DOMAIN } from '@/lib/const'

export default function index({ footerLinks }) {
    return (
        <>
            <Head>
                <title itemProp="headline">{'pageData.metaHead'}</title>
                <meta property="og:title" content={'pageData.metaHead'} />
                <meta
                    itemProp="description"
                    name="description"
                    content={'pageData.metaDescription'}
                />
                <meta property="og:description" content={'pageData.metaDescription'} />
                <meta property="og:url" content={DOMAIN} />
                <link rel="canonical" href="/landing-page" />
            </Head>
            <Layout footerLinks={footerLinks}>
                <LandingHeroSection title={'Запускаем полноценные сайты за 2 недели'} />
                <DecisionsSection />
                <HelpInfoSection />
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
                ]} />
                <KeysLandingSection
                    data={[
                        {
                            id: '1',
                            name: 'CRM система для застройщика',
                            preview: '',
                            images: null,
                        },
                        {
                            id: '2',
                            name: 'Interio Design',
                            preview: '',
                            images: ['', '', '', ''],
                        }
                    ]}
                />
                <CallbackLandingSection />
                <PersonalSection persons={[
                    {
                        id: 1,
                        profession: 'project manager',
                        name: 'Роман Зинковский',
                        subtitle: 'какие-то старнные данные о работае213',
                        colorProfText: '#056AC7',
                        colorProfBackground: '#AFD7FD',
                        specific: 10,
                        src: 'https://i.iheart.com/v3/url/aHR0cHM6Ly9hc3NldHMucG9kb21hdGljLm5ldC90cy9kNS82My9hMi9jb2Rlbm5pa2Jha2h0MS8zMDAweDMwMDBfMTU2ODk4NDguanBn'
                    },
                    {
                        id: 2,
                        profession: 'backend developer',
                        name: 'Роман Зинковский',
                        subtitle: 'какие-то старнные данные о работае213',
                        colorProfText: '#056AC7',
                        colorProfBackground: '#AFD7FD',
                        specific: 0,
                        src: 'https://i.iheart.com/v3/url/aHR0cHM6Ly9hc3NldHMucG9kb21hdGljLm5ldC90cy9kNS82My9hMi9jb2Rlbm5pa2Jha2h0MS8zMDAweDMwMDBfMTU2ODk4NDguanBn'
                    },
                    {
                        id: 3,
                        profession: 'frontend developer',
                        name: 'Роман Зинковский',
                        subtitle: 'какие-то старнные данные о работае213',
                        colorProfText: '#056AC7',
                        colorProfBackground: '#AFD7FD',
                        specific: 3,
                        src: 'https://i.iheart.com/v3/url/aHR0cHM6Ly9hc3NldHMucG9kb21hdGljLm5ldC90cy9kNS82My9hMi9jb2Rlbm5pa2Jha2h0MS8zMDAweDMwMDBfMTU2ODk4NDguanBn'
                    },
                    {
                        id: 4,
                        profession: 'project designer',
                        name: 'Роман Зинковский',
                        subtitle: 'какие-то старнные данные о работае213',
                        colorProfText: '#056AC7',
                        colorProfBackground: '#AFD7FD',
                        specific: 2,
                        src: 'https://i.iheart.com/v3/url/aHR0cHM6Ly9hc3NldHMucG9kb21hdGljLm5ldC90cy9kNS82My9hMi9jb2Rlbm5pa2Jha2h0MS8zMDAweDMwMDBfMTU2ODk4NDguanBn'
                    }
                ]}
                />
                {true ? <SeoProduct data={{
                    header: 'Заголовок',
                    seoDescription: 'описание'
                }} /> : null}
            </Layout>
        </>
    )
}

export async function getServerSideProps({ res }) {
    res.setHeader(
        "Cache-Control",
        "public, s-maxage=10, stale-while-revalidate=59"
    );

    const footerLinks = await getServicesList();
    return {
        props: {
            footerLinks
        }
    }
}