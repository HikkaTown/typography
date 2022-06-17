import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import NewsPageSection from "@/components/NewsPageSection/NewsPageSection";
import {
  getAllNews,
  getNewsPage,
  getProductLinks,
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
        <NewsPageSection data={news} header={pageData.header} />
      </Layout>
    </>
  );
}

export async function getServerSideProps({ res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
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
