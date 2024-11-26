import React from "react";
import Head from "next/head";
import CallbackProductSection from "@/components/CallbackProudctSection/CallbackProductSection";
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
  getSmallProduct, getContactPage,
} from "@/lib/apiFunctions";
import { DOMAIN } from "@/lib/const";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import ReviewSection from "@/components/ReviewSection/ReviewSection";
import NewsSection from "@/components/NewsSection/NewsSection";
import CatalogPage from "@/components/CatalogPage/CatalogPage";
import ContactPageSection from '@/components/ContactPageSection/ContactPageSection';

function Product({ pageData, projects, officesList, footerLinks, contactList, mapUrl }) {
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
        <Breadcrumbs
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
            <CallbackProductSection
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
        <ContactPageSection data={contactList} mapUrl={mapUrl} whiteBg />
        {pageData?.seoBlock ? <SeoProduct data={pageData.seoBlock} /> : ""}
      </Layout>
    </>
  );
}

function Service({ pageData, news, reviews, footerLinks, tabs, cards, url, contactList, mapUrl }) {
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
      </Head>
      <Layout footerLinks={footerLinks}>
        <CatalogPage
          tabs={tabs}
          header={pageData.meta.header}
          id={url}
          cards={cards}
        />
        <ReviewSection data={reviews} />
        <NewsSection data={news} />
        <ContactPageSection data={contactList} mapUrl={mapUrl}/>
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
  contactList,
  mapUrl,
  tabs,
  cards,
  url,
}) {
  if (type === "product") {
    return (
      <Product
        pageData={pageData}
        projects={projects}
        officesList={officesList}
        contactList={contactList}
        mapUrl={mapUrl}
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
        contactList={contactList}
        mapUrl={mapUrl}
        tabs={tabs}
        cards={cards}
        url={url}
      />
    );
  }
}

export const getServerSideProps = async ({ query }) => {
  try {
    const [servicesList, news, reviews, contactPage, contactCards] = await Promise.all([
      getServicesList(),
      getAllNews(),
      getReviews(),
      getContactPage(),
      getContactCards()
    ]);

    const page = servicesList.find(item => item.url === query.slug);
    const mapUrl = contactPage.mapUrl;
    const officesList = contactCards.map(item => ({
      id: +item.id,
      address: `${item.name} ${item.address}`,
      email: item.email,
    }));

    let projects = null;
    if (page?.projectId) {
      projects = await getCurrentProjects(+page.projectId);
    }

    if (page) {
      return {
        props: {
          type: "service",
          pageData: page,
          cards: await getSmallProduct(query.slug) || servicesList,
          tabs: servicesList,
          news,
          officesList,
          contactList: contactCards,
          mapUrl,
          reviews,
          projects,
          footerLinks: servicesList,
          url: query.slug,
        },
      };
    }

    const pageData = await getCurrentProductCard(query.slug);
    if (pageData.length) {
      return {
        props: {
          type: "product",
          pageData: pageData[0],
          tabs: servicesList,
          news,
          officesList,
          contactList: contactCards,
          mapUrl,
          reviews,
          projects: projects || null,
          footerLinks: servicesList,
        },
      };
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return { notFound: true };
  }
};