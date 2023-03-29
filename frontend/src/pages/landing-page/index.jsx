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
import { getLandingPage, getServicesList, getSotrudnik, getKeysDevelopSites } from '@/lib/apiFunctions'
import { DOMAIN } from '@/lib/const'

export default function index({ footerLinks, pageData, sotrudniki, keysDevelopSites }) {
    return (
        <>
            <Head>
                <title itemProp="headline">{pageData.metaHead}</title>
                <meta property="og:title" content={pageData.metaHead} />
                <meta
                    itemProp="description"
                    name="description"
                    content={pageData.metaDescription}
                />
                <meta property="og:description" content={pageData.metaDescription} />
                <meta property="og:url" content={DOMAIN} />
                <link rel="canonical" href="/landing-page" />
            </Head>
            <Layout footerLinks={footerLinks}>
                <LandingHeroSection title={pageData.header} />
                <DecisionsSection />
                <HelpInfoSection />
                {Boolean(pageData.productSection?.length) && <ProductSection data={pageData.productSection} />}
                {keysDevelopSites?.length > 0 ? <KeysLandingSection
                    data={keysDevelopSites}
                /> : null}
                <CallbackLandingSection />
                {sotrudniki?.length > 0 ? (<PersonalSection persons={sotrudniki}/>) : null}
                {pageData.seoBlock ? <SeoProduct data={pageData.seoBlock} /> : null}
            </Layout>
        </>
    )
}

export async function getServerSideProps({ res }) {
    res.setHeader(
        "Cache-Control",
        "public, s-maxage=10, stale-while-revalidate=59"
    );
    const pageData = await getLandingPage();
    const sotrudniki = await getSotrudnik();
    const keysDevelopSites = await getKeysDevelopSites();
    const footerLinks = await getServicesList();
    return {
        props: {
            pageData,
            sotrudniki,
            keysDevelopSites,
            footerLinks
        }
    }
}