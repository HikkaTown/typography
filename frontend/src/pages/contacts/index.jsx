import Head from "next/head";
import React from "react";
import ContactPageSection from "../../components/ContactPageSection/ContactPageSection";
import Layout from "../../components/Layout/Layout";

export default function Index() {
  return (
    <>
      <Head>
        <title>{"Контакты"}</title>
        <meta property="og:title" content={"index.metaData.head"} />
        <meta
          itemProp="description"
          name="description"
          content={"index.metaData.title"}
        />
        <meta property="og:description" content={"index.metaData.title"} />
      </Head>
      <Layout>
        <ContactPageSection />
      </Layout>
    </>
  );
}
