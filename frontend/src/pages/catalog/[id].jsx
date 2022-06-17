import CatalogPage from "@/components/CatalogPage/CatalogPage";
import Layout from "@/components/Layout/Layout";
import NewsSection from "@/components/NewsSection/NewsSection";
import ReviewSection from "@/components/ReviewSection/ReviewSection";
import SeoProduct from "@/components/SeoProduct/SeoProduct";
import {
  getAllNews,
  getProductLinks,
  getReviews,
  getServicesList,
  getServicesListSitemap,
} from "@/lib/apiFunctions";
import { DOMAIN } from "@/lib/const";
import Head from "next/head";
import React from "react";

export default function Index({ pageData, news, reviews, footerLinks, tabs }) {
  return (
    <>
      <Head>
        <title>{pageData.meta.metaHead}</title>
        <meta property="og:title" content={pageData.meta.metaHead} />
        <meta
          itemProp="description"
          name="description"
          content={pageData.meta.metaDescription}
        />
        <meta
          property="og:description"
          content={pageData.meta.metaDescription}
        />
        <meta property="og:url" content={DOMAIN + "/catalog/" + pageData.url} />
        <link rel="canonical" href={DOMAIN + "/catalog/" + pageData.url} />
      </Head>
      <Layout footerLinks={footerLinks}>
        <CatalogPage
          tabs={tabs}
          header={pageData.meta.header}
          id={pageData.url}
        />
        <ReviewSection data={reviews} />
        <NewsSection data={news} />
        {pageData?.seoBlock ? <SeoProduct data={pageData.seoBlock} /> : ""}
      </Layout>
    </>
  );
}

export const getServerSideProps = async ({ res, query }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  const tabs = await getServicesList();
  const page = tabs.filter((item) => item.url === query.id);
  const news = await getAllNews();
  const reviews = await getReviews();
  const footerLinks = await getServicesList();
  if (!page?.length) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      pageData: page[0],
      tabs,
      news,
      reviews,
      footerLinks,
    },
  };
};
