import Head from "next/head";
import BenefitsSection from "@/components/BenefitsSection/BenefitsSection";
import CatalogSection from "@/components/CatalogSection/CatalogSection";
import HeroMainSection from "@/components/HeroMainSection/HeroMainSection";
import Layout from "@/components/Layout/Layout";
import MainSeoSection from "@/components/MainSeoSection/MainSeoSection";
import NewsSection from "@/components/NewsSection/NewsSection";
import ReviewSection from "@/components/ReviewSection/ReviewSection";
import ShortDescription from "@/components/ShortDescription/ShortDescription";
import {
  getAllNews,
  getIndex,
  getProductLinks,
  getReviews,
  getServicesList,
} from "@/lib/apiFunctions";
import { DOMAIN } from "@/lib/const";

export default function Index({
  response,
  reviews,
  news,
  services,
  footerLinks,
}) {
  const { pageData, seoBlock, shortDescription } = response;
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
      </Head>
      <Layout footerLinks={footerLinks}>
        <HeroMainSection data={pageData} />
        <ShortDescription data={shortDescription} />
        <BenefitsSection />
        <CatalogSection data={services} />
        <ReviewSection data={reviews} />
        <NewsSection data={news} />
        <MainSeoSection data={seoBlock} />
      </Layout>
    </>
  );
}

export async function getServerSideProps({ res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  const response = await getIndex();
  const reviews = await getReviews();
  const news = await getAllNews();
  const services = await getServicesList();
  const footerLinks = await getProductLinks();
  return {
    props: { response: response, reviews, news, services, footerLinks },
  };
}
