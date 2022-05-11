import React from "react";
import Head from "next/head";
import CallbackProudctSection from "@/components/CallbackProudctSection/CallbackProudctSection";
import CustomBreadrcumbs from "@/components/CustomBreadrcumbs/CustomBreadrcumbs";
import HowMuchSection from "@/components/HowMuchSection/HowMuchSection";
import InfromationProduct from "@/components/InfromationProduct/InfromationProduct";
import Layout from "@/components/Layout/Layout";
import ProductMainSection from "@/components/ProductMainSection/ProductMainSection";
import ProjectSection from "@/components/ProjectSection/ProjectSection";
import SeoProduct from "@/components/SeoProduct/SeoProduct";
import ShortDescription from "@/components/ShortDescription/ShortDescription";
import StepSection from "@/components/StepSection/StepSection";
import TechnicalRequirementsSection from "@/components/TechnicalRequirementsSection/TechnicalRequirementsSection";
import {
  getAllProjectsCard,
  getContactCards,
  getCurrentProductCard,
  getProductCardUrl,
  getProductLinks,
} from "@/lib/apiFunctions";

export default function Index({
  pageData,
  projects,
  officesList,
  footerLinks,
}) {
  return (
    <>
      <Head>
        <title itemProp="headline">{pageData.pageData.metaHead}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content={pageData.pageData.metaHead} />

        <meta
          itemProp="description"
          name="description"
          content={pageData.pageData.metaDescription}
        />
        <meta
          property="og:description"
          content={pageData.pageData.metaDescription}
        />
        <meta property="og:site_name" content="Первый печатный" />
      </Head>
      <Layout footerLinks={footerLinks}>
        <CustomBreadrcumbs titlePage={pageData.pageData.title} />
        <ProductMainSection
          style={pageData.headStyle}
          header={pageData.pageData.title}
          description={pageData.pageData.description}
        />
        <ShortDescription data={pageData.shortDescription} />
        {!pageData.steps && (
          <>
            <HowMuchSection data={pageData.table} />
            <InfromationProduct data={pageData.infoList} />
            <CallbackProudctSection
              theme={pageData.pageData.title}
              title={pageData.callbackBlockTitle}
            />
            {pageData?.tech && (
              <TechnicalRequirementsSection data={pageData.tech} />
            )}
          </>
        )}
        {pageData.steps && (
          <>
            <StepSection data={pageData} officesData={officesList} />
          </>
        )}
        <ProjectSection data={projects} />
        <SeoProduct data={pageData.seoBlock} />
      </Layout>
    </>
  );
}

export const getStaticProps = async (context) => {
  const url = context?.params?.id;
  const projects = await getAllProjectsCard();
  const footerLinks = await getProductLinks();
  let pageData;
  if (url) {
    pageData = await getCurrentProductCard(url);
  }
  const contactList = await getContactCards();
  let officesList = [];
  contactList.map((item) => {
    officesList.push({
      id: +item.id,
      address: `${item.name} ${item.address}`,
    });
  });
  return {
    props: {
      projects,
      officesList,
      pageData: pageData[0],
      footerLinks,
    },
    revalidate: 60,
  };
};

export const getStaticPaths = async () => {
  const url = await getProductCardUrl();
  const paths = url.map((item) => ({
    params: { id: item },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};
