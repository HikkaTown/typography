import Head from "next/head";
import React from "react";
import Layout from "../../components/Layout/Layout";
import ProjectsPageSection from "../../components/ProjectsPageSection/ProjectsPageSection";

export default function Index() {
  return (
    <>
      <Head>
        <title>{"Наши проекты"}</title>
        <meta property="og:title" content={"index.metaData.head"} />
        <meta
          itemProp="description"
          name="description"
          content={"index.metaData.title"}
        />
        <meta property="og:description" content={"index.metaData.title"} />
      </Head>
      <Layout>
        <ProjectsPageSection />
      </Layout>
    </>
  );
}
