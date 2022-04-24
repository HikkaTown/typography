import Head from "next/head";
import React from "react";
import Layout from "../../components/Layout/Layout";
import ProjectsPageSection from "../../components/ProjectsPageSection/ProjectsPageSection";
import {
  getAllProjectsCard,
  getProductLinks,
  getProjectPage,
  getProjectTabs,
} from "../../lib/apiFunctions";

export default function Index({ pageData, tabs, cards, footerLinks }) {
  return (
    <>
      <Head>
        <title>{pageData.metaHead}</title>
        <meta property="og:title" content={pageData.metaHead} />
        <meta
          itemProp="description"
          name="description"
          content={pageData.metaDescription}
        />
        <meta property="og:description" content={pageData.metaDescription} />
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

export async function getServerSideProps() {
  const pageData = await getProjectPage();
  const tabs = await getProjectTabs();
  const cards = await getAllProjectsCard();
  const footerLinks = await getProductLinks();
  return {
    props: { pageData, tabs, cards, footerLinks },
  };
}
