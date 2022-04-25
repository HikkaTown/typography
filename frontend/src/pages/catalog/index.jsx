import Head from "next/head";
import React from "react";
import CatalogPage from "../../components/CatalogPage/CatalogPage";
import Layout from "@/components/Layout/Layout";
import NewsSection from "../../components/NewsSection/NewsSection";
import ReviewSection from "../../components/ReviewSection/ReviewSection";
import {
  getAllNews,
  getAllProductCard,
  getCatalogPage,
  getProductLinks,
  getReviews,
  getServicesList,
} from "../../lib/apiFunctions";

export default function Index({
  tabs,
  news,
  reviews,
  pageData,
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
      </Head>
      <Layout footerLinks={footerLinks}>
        <CatalogPage tabs={tabs} header={pageData.header} id={id} />
        <ReviewSection data={reviews} />
        <NewsSection data={news} />
      </Layout>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const tabs = await getServicesList();
  const news = await getAllNews();
  const reviews = await getReviews();
  const pageData = await getCatalogPage();
  const id = context?.query?.id ?? null;
  const footerLinks = await getProductLinks();
  return {
    props: {
      footerLinks,
      pageData,
      tabs,
      news,
      reviews,
      id,
    },
  };
};
