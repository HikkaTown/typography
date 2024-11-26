import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import NewsPageSection from "@/components/NewsPageSection/NewsPageSection";
import {
  getAllNews,
  getNewsPage,
  getServicesList,
} from "@/lib/apiFunctions";
import { DOMAIN } from "@/lib/const";

export default function Index({ news, pageData, footerLinks }) {
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
        <meta property="og:description" content={pageData.metaHead} />
        <meta property="og:url" content={DOMAIN + "/blog"} />
        <link rel="canonical" href={DOMAIN + "/blog"} />
      </Head>
      <Layout footerLinks={footerLinks}>
        <NewsPageSection data={Array.from(news || []).reverse()} header={pageData.header} />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const pageData = await getNewsPage();
  const newsList = await getAllNews();
  const footerLinks = await getServicesList();
  return {
    props: {
      pageData: pageData,
      news: newsList,
      footerLinks,
    },
  };
}
