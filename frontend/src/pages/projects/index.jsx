import Head from "next/head";
import React from "react";
import Layout from "@/components/Layout/Layout";
import ProjectsPageSection from "@/components/ProjectsPageSection/ProjectsPageSection";
import {
  getAllProjectsCard,
  getProductLinks,
  getProjectPage,
  getProjectTabs,
  getServicesList,
} from "@/lib/apiFunctions";
import { DOMAIN } from "@/lib/const";

export default function Index({ pageData, tabs, cards, footerLinks }) {
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
        <meta property="og:url" content={DOMAIN + "/projects"} />
        <link rel="canonical" href={DOMAIN + "/projects"} />
      </Head>
      <Layout footerLinks={footerLinks}>
        <ProjectsPageSection
          header={pageData.header}
          tabs={tabs}
          cards={cards}
        />
      </Layout>
    </>
  );
}

export async function getServerSideProps({ res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  const pageData = await getProjectPage();
  const tabs = await getProjectTabs();
  const cards = await getAllProjectsCard();
  const footerLinks = await getServicesList();
  return {
    props: { pageData, tabs, cards, footerLinks },
  };
}
