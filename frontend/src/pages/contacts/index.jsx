import Head from "next/head";
import React, { useState, useEffect } from "react";
import ContactPageSection from "@/components/ContactPageSection/ContactPageSection";
import Layout from "@/components/Layout/Layout";
import {
  getContactCards,
  getContactPage,
  getProductLinks,
  getServicesList,
} from "@/lib/apiFunctions";
import { DOMAIN } from "@/lib/const";

export default function Index({ pageData, cards, footerLinks }) {
  const [mapUrl, setMapUrl] = useState(pageData.mapUrl);
  const [activeMapUrl, setActiveMapUrl] = useState(null);
  useEffect(() => {
    if (activeMapUrl === null) {
      setMapUrl(pageData.mapUrl);
    } else {
      setMapUrl(cards[activeMapUrl].mapUrl);
    }
  }, [activeMapUrl]);
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
        <meta property="og:url" content={DOMAIN + "/contacts"} />
        <link rel="canonical" href={DOMAIN + "/contacts"} />
      </Head>
      <Layout footerLinks={footerLinks}>
        <ContactPageSection
          setActiveMapUrl={setActiveMapUrl}
          data={cards}
          header={pageData.header}
          mapUrl={mapUrl}
        />
      </Layout>
    </>
  );
}

export const getServerSideProps = async ({ res }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  const pageData = await getContactPage();
  const cards = await getContactCards();
  const footerLinks = await getServicesList();
  return {
    props: {
      cards,
      pageData,
      footerLinks,
    },
  };
};
