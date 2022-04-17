import Head from "next/head";
import CallbackProudctSection from "../../components/CallbackProudctSection/CallbackProudctSection";
import HowMuchSection from "../../components/HowMuchSection/HowMuchSection";
import InfromationProduct from "../../components/InfromationProduct/InfromationProduct";
import Layout from "../../components/Layout/Layout";
import ProductMainSection from "../../components/ProductMainSection/ProductMainSection";
import ProjectSection from "../../components/ProjectSection/ProjectSection";
import SeoProduct from "../../components/SeoProduct/SeoProduct";
import ShortDescription from "../../components/ShortDescription/ShortDescription";
import TechnicalRequirementsSection from "../../components/TechnicalRequirementsSection/TechnicalRequirementsSection";

export default function Index({ id }) {
  return (
    <>
      <Head>
        <title itemProp="headline">{"Товар"}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content={"post.meta_title"} />

        <meta
          itemProp="description"
          name="description"
          content={"post.meta_description"}
        />
        <meta property="og:description" content={"post.meta_description"} />
        <meta property="og:site_name" content="Первый печатный" />
      </Head>
      <Layout>
        <ProductMainSection />
        <ShortDescription />
        <HowMuchSection />
        <InfromationProduct />
        <CallbackProudctSection />
        <TechnicalRequirementsSection />
        <ProjectSection />
        <SeoProduct />
      </Layout>
    </>
  );
}

export const getStaticProps = async (context) => {
  return {
    props: {
      id: 1,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { id: "1" } }],
    fallback: "blocking",
  };
};
