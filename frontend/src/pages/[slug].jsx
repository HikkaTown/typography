import React from "react";
import Head from "next/head";
import CallbackProudctSection from "@/components/CallbackProudctSection/CallbackProudctSection";
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
  getAllNews,
  getReviews,
  getServicesList,
  getContactCards,
  getCurrentProductCard,
  getCurrentProjects,
  getSmallProduct,
} from "@/lib/apiFunctions";
import { DOMAIN } from "@/lib/const";
import Breadcumbs from "@/components/Breadcumbs/Breadcumbs";
import ReviewSection from "@/components/ReviewSection/ReviewSection";
import NewsSection from "@/components/NewsSection/NewsSection";
import CatalogPage from "@/components/CatalogPage/CatalogPage";

function Product({ pageData, projects, officesList, footerLinks }) {
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
        <meta property="og:url" content={DOMAIN + pageData.url} />
        <meta property="og:site_name" content="Первый печатный" />
        <link rel="canonical" href={DOMAIN + "/" + pageData.url} />
      </Head>
      <Layout footerLinks={footerLinks}>
        <Breadcumbs
          categoryPage={pageData.category}
          titlePage={pageData.pageData.title}
        />
        <ProductMainSection
          style={pageData.headStyle}
          header={pageData.pageData.title}
          description={pageData.pageData.description}
        />
        <ShortDescription data={pageData.shortDescription} />
        {pageData.table?.length &&
          pageData.table.map((item, index) => {
            return (
              <HowMuchSection
                data={item}
                key={index}
                title={
                  pageData.tableName?.length
                    ? pageData.tableName[index]
                    : undefined
                }
              />
            );
          })}
        {!pageData.steps && (
          <>
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
        {pageData?.steps && (
          <>
            <StepSection data={pageData} officesData={officesList} />
          </>
        )}
        {projects ? <ProjectSection data={projects} /> : ""}
        {pageData?.seoBlock ? <SeoProduct data={pageData.seoBlock} /> : ""}
      </Layout>
    </>
  );
}

function Service({ pageData, news, reviews, footerLinks, tabs, cards }) {
  return (
    <>
      <Head>
        <title>{pageData.meta.metaHead}</title>
        <meta property="og:title" content={pageData.meta.metaHead} />
        <meta
          itemProp="description"
          name="description"
          content={pageData.meta.metaDescription}
        />
        <meta
          property="og:description"
          content={pageData.meta.metaDescription}
        />
        <meta property="og:url" content={DOMAIN + "/" + pageData.url} />
        <link rel="canonical" href={DOMAIN + "/" + pageData.url} />
        {pageData.url === "foto-ryadom" ? (
          <meta name="robots" content="noindex, follow" />
        ) : (
          ""
        )}
      </Head>
      <Layout footerLinks={footerLinks}>
        <CatalogPage
          tabs={tabs}
          header={pageData.meta.header}
          id={pageData.url}
          cards={cards}
        />
        <ReviewSection data={reviews} />
        <NewsSection data={news} />
        {pageData?.seoBlock ? <SeoProduct data={pageData.seoBlock} /> : ""}
      </Layout>
    </>
  );
}

export default function Index({
  type,
  pageData,
  projects,
  news,
  reviews,
  officesList,
  footerLinks,
  tabs,
  cards,
}) {
  if (type === "product") {
    return (
      <Product
        pageData={pageData}
        projects={projects}
        officesList={officesList}
        footerLinks={footerLinks}
      />
    );
  } else if (type === "service") {
    return (
      <Service
        pageData={pageData}
        news={news}
        reviews={reviews}
        footerLinks={footerLinks}
        tabs={tabs}
        cards={cards}
      />
    );
  }
}

export const getServerSideProps = async ({ res, query }) => {
  const service = async () => {
    const tabs = await getServicesList();
    const page = tabs.filter((item) => item.url === query.slug);
    const news = await getAllNews();
    const reviews = await getReviews();
    const footerLinks = await getServicesList();
    let cards = footerLinks;
    if (page[0]?.url) {
      cards = await getSmallProduct(page[0]?.url);
    }
    let officesList = [];
    const contactList = await getContactCards();
    contactList.map((item) => {
      officesList.push({
        id: +item.id,
        address: `${item.name} ${item.address}`,
      });
    });
    let projects;
    if (page[0]?.projectId) {
      projects = await getCurrentProjects(+page[0].projectId);
    } else {
      projects = null;
    }
    if (page?.length) {
      return {
        props: {
          type: "service",
          pageData: page[0],
          cards,
          tabs,
          news,
          officesList,
          reviews,
          projects,
          footerLinks,
        },
      };
    }
  };
  const product = async () => {
    const pageData = await getCurrentProductCard(query.slug);
    const tabs = await getServicesList();
    const footerLinks = await getServicesList();
    const news = await getAllNews();
    const reviews = await getReviews();
    let officesList = [];
    const contactList = await getContactCards();
    contactList.map((item) => {
      officesList.push({
        id: +item.id,
        address: `${item.name} ${item.address}`,
        email: item.email,
      });
    });
    let projects;

    if (pageData[0]?.projectId) {
      projects = await getCurrentProjects(+pageData[0].projectId);
    } else {
      projects = [];
    }
    if (pageData?.length) {
      return {
        props: {
          type: "product",
          pageData: pageData[0],
          tabs,
          news,
          officesList,
          reviews,
          projects: projects?.length ? projects : null,
          footerLinks,
        },
      };
    }
  };
  const resProd = await product();
  const resServ = await service();
  if (resProd) {
    return resProd;
  } else if (resServ) {
    return resServ;
  } else {
    return {
      notFound: true,
    };
  }
};
