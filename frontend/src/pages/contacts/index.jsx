import Head from "next/head";
import React from "react";
import ContactPageSection from "@/components/ContactPageSection/ContactPageSection";
import Layout from "@/components/Layout/Layout";
import {
  getContactCards,
  getContactPage,
  getProductLinks,
} from "@/lib/apiFunctions";

export default function Index({ pageData, cards, footerLinks }) {
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
      </Head>
      <Layout footerLinks={footerLinks}>
        <ContactPageSection
          data={cards}
          header={pageData.header}
          mapUrl={pageData.mapUrl}
        />
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const pageData = await getContactPage();
  const cards = await getContactCards();
  const footerLinks = await getProductLinks();
  return {
    props: {
      cards,
      pageData,
      footerLinks,
    },
  };
};
