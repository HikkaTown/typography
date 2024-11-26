import React from 'react';
import { getContactCards, getServicesList } from '@/lib/apiFunctions';
import Head from 'next/head';
import { DOMAIN } from '@/lib/const';
import Layout from '@/components/Layout/Layout';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import { CurrentContactSection } from '@/components/CurrentContactSection/CurrentContactSection';

export default function Index({ pageData, contactCards, footerLinks }) {
  return (
    <>
      <Head>
        <title itemProp="headline">{pageData.meta.metaHead}</title>
        <meta property="og:title" content={pageData.meta.metaHead} />
        <meta
          itemProp="description"
          name="description"
          content={pageData.meta.metaDescription}
        />
        <meta property="og:description" content={pageData.meta.metaDescription} />
        <meta property="og:url" content={`${DOMAIN}/contacts/${pageData.url}`} />
        <link rel="canonical" href={`${DOMAIN}/contacts/${pageData.url}`} />
      </Head>
      <Layout footerLinks={footerLinks}>
        <Breadcrumbs
          contacts
          titlePage={pageData.name}
        />
        <CurrentContactSection data={pageData} contacts={contactCards} />
      </Layout>
    </>
  );
}


export const getServerSideProps = async ({ query }) => {
  const currentUrl = query?.id;
  
  const contactCards = await getContactCards();
  const pageData = contactCards.find((card) => card.url === currentUrl);
  const footerLinks = await getServicesList();
  
  if (!pageData) {
    return {
      notFound: true,
    };
  }
  
  return {
    props: {
      pageData,
      contactCards,
      footerLinks,
    },
  };
};
