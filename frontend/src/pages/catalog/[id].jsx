import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import ProductMainSection from "../../components/ProductMainSection/ProductMainSection";
import ShortDescription from "../../components/ShortDescription/ShortDescription";

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
