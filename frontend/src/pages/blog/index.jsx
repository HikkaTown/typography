import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import NewsPageSection from "../../components/NewsPageSection/NewsPageSection";

export default function Index() {
  return (
    <>
      <Head>
        <title>{"Новости"}</title>
        <meta property="og:title" content={"index.metaData.head"} />
        <meta
          itemProp="description"
          name="description"
          content={"index.metaData.title"}
        />
        <meta property="og:description" content={"index.metaData.title"} />
      </Head>
      <Layout>
        <NewsPageSection />
      </Layout>
    </>
  );
}
