import Head from 'next/head'
import React from 'react'
import Layout from '@/components/Layout/Layout'
import { getServicesList, getVoennayaFormPage, getCurrentProjects, getTabsForm } from '@/lib/apiFunctions'
import { DOMAIN } from '@/lib/const'
import ProductMainSection from '@/components/ProductMainSection/ProductMainSection'
import ShortDescription from '@/components/ShortDescription/ShortDescription'
import Breadcumbs from '@/components/Breadcumbs/Breadcumbs'
import SeoProduct from '@/components/SeoProduct/SeoProduct'
import CallbackProudctSection from "@/components/CallbackProudctSection/CallbackProudctSection";
import ProjectSection from "@/components/ProjectSection/ProjectSection";
import FormsCatalog from '@/components/FormsCatalog/FormsCatalog'


export default function Forms({ pageData, footerLinks, projects, tabsForm }) {
    return (
        <>
            <Head>
                <title itemProp="headline">{pageData.pageData.metaTitle}</title>
                <meta property="og:title" content={pageData.pageData.metaTitle} />
                <meta
                    itemProp="description"
                    name="description"
                    content={pageData.pageData.metaDescription}
                />
                <meta property="og:description" content={pageData.pageData.metaDescription} />
                <meta property="og:url" content={`${DOMAIN}/forms`} />
                <link rel="canonical" href={`${DOMAIN}/forms`} />
            </Head>
            <Layout footerLinks={footerLinks}>
                <Breadcumbs
                    titlePage={pageData.pageData.header}
                    categoryPage={pageData.category}
                />
                <ProductMainSection
                    style={'forms'}
                    header={pageData.pageData.header}
                    description={pageData.pageData.description}
                />
                <ShortDescription 
                    data={pageData.shortDescription}
                />
                <FormsCatalog header={'Варианты форм'} tabs={tabsForm} />
                <CallbackProudctSection
                    theme={pageData.pageData.title}
                    title={pageData.callbackBlockTitle}
                />
                {projects ? <ProjectSection data={projects} /> : ""}
                <SeoProduct
                    data={pageData.seoBlock}
                />
            </Layout>
        </>
    )
}

export async function getServerSideProps() {
    const pageData = await getVoennayaFormPage();
    const footerLinks = await getServicesList();
    const tabsForm = await getTabsForm();
    let projects;
    if (pageData?.projectId) {
      projects = await getCurrentProjects(+pageData.projectId);
    } else {
      projects = null;
    }

    return {
        props: {
            pageData,
            footerLinks,
            projects,
            tabsForm,
        }
    }
}