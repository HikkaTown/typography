import Head from "next/head";
import BenefitsSection from "../components/BenefitsSection/BenefitsSection";
import CatalogSection from "../components/CatalogSection/CatalogSection";
import FeedbackModal from "../components/FeedbackModal/FeedbackModal";
import HeroMainSection from "../components/HeroMainSection/HeroMainSection";
import Layout from "../components/Layout/Layout";
import MainSeoSection from "../components/MainSeoSection/MainSeoSection";
import NewsSection from "../components/NewsSection/NewsSection";
import ReviewSection from "../components/ReviewSection/ReviewSection";
import ShortDescription from "../components/ShortDescription/ShortDescription";

export default function Index() {
  return (
    <>
      <Head>
        <title>{"index.metaData.head"}</title>
        <meta property="og:title" content={"index.metaData.head"} />
        <meta
          itemProp="description"
          name="description"
          content={"index.metaData.title"}
        />
        <meta property="og:description" content={"index.metaData.title"} />
      </Head>
      <Layout>
        <HeroMainSection />
        <ShortDescription />
        <BenefitsSection />
        <CatalogSection />
        <ReviewSection />
        <NewsSection />
        <MainSeoSection />
      </Layout>
    </>
  );
}
