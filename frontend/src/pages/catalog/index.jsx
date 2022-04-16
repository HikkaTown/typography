import Head from "next/head";
import React from "react";
import CatalogPage from "../../components/CatalogPage/CatalogPage";
import Layout from "../../components/Layout/Layout";
import NewsSection from "../../components/NewsSection/NewsSection";
import ReviewSection from "../../components/ReviewSection/ReviewSection";

export default function Index() {
  return (
    <>
      <Head>
        <title>{"Каталог услуг"}</title>
        <meta property="og:title" content={"index.metaData.head"} />
        <meta
          itemProp="description"
          name="description"
          content={"index.metaData.title"}
        />
        <meta property="og:description" content={"index.metaData.title"} />
      </Head>
      <Layout>
        <CatalogPage />
        <ReviewSection />
        <NewsSection />
      </Layout>
    </>
  );
}
