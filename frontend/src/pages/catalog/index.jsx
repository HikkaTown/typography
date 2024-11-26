import Head from "next/head";
import React from "react";
import CatalogPage from "../../components/CatalogPage/CatalogPage";
import Layout from "@/components/Layout/Layout";
import NewsSection from "../../components/NewsSection/NewsSection";
import ReviewSection from "../../components/ReviewSection/ReviewSection";
import {
  getAllNews,
  getCatalogPage,
  getReviews,
  getServicesList,
} from "@/lib/apiFunctions";
import { DOMAIN } from "@/lib/const";

export default function Index({
  tabs,
  news,
  reviews,
  pageData,
  cards,
  id,
  footerLinks,
}) {
  return (
    <>
      <Head>
        <title>{pageData.metaHead}</title>
        <meta property="og:title" content={pageData.metaHead} />
        <meta
          itemProp="description"
          name="description"
          content={pageData.metaDescription}
        />
        <meta property="og:description" content={pageData.metaDescription} />
        <meta property="og:url" content={DOMAIN + "/catalog"} />
        <link rel="canonical" href={DOMAIN + "/catalog"} />
      </Head>
      <Layout footerLinks={footerLinks}>
        <CatalogPage tabs={tabs} header={pageData.header} id={id} cards={cards} />
        {/* <CatalogSection data={tabs} header={pageData.header} /> */}
        <ReviewSection data={reviews} />
        <NewsSection data={news} />
      </Layout>
    </>
  );
}

export const getServerSideProps = async ({ query }) => {
  const tabs = await getServicesList();
  const news = await getAllNews();
  const reviews = await getReviews();
  const pageData = await getCatalogPage();
  const cards = await getServicesList();
  const id = query?.id ?? null;
  return {
    props: {
      footerLinks: tabs,
      pageData,
      tabs,
      news,
      reviews,
      cards,
      id,
    },
  };
};
