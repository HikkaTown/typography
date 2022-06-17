import Head from "next/head";
import CardNewsSlider from "@/components/CardNewsSlider/CardNewsSlider";
import CustomBreadrcumbs from "@/components/CustomBreadrcumbs/CustomBreadrcumbs";
import Layout from "@/components/Layout/Layout";
import { LazyImage } from "@/components/LazyImage/LazyImage";
import {
  getAllNews,
  getCurrentNews,
  getProductLinks,
  getServicesList,
} from "@/lib/apiFunctions";
import { DOMAIN, PATH_IMAGE } from "@/lib/const";
import s from "./Post.module.scss";
import dynamic from "next/dynamic";

const DynamicMarkdown = dynamic(() => import("react-markdown"), { ssr: false });

export default function Index({ pageData, news, footerLinks }) {
  return (
    <>
      <Head>
        <title itemProp="headline">{pageData.metaHead}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content={pageData.metaHead} />

        <meta
          itemProp="description"
          name="description"
          content={pageData.metaDescription}
        />
        <meta property="og:description" content={pageData.metaDescription} />
        <meta property="og:site_name" content="Первый печатный" />
        <meta property="og:url" content={DOMAIN + "/blog/" + pageData.url} />
        <link rel="canonical" href={DOMAIN + "/blog/" + pageData.url} />
        <meta name="author" content="Первый печатный" />
        <meta name="publisher" content={DOMAIN} />
      </Head>
      <Layout footerLinks={footerLinks}>
        <CustomBreadrcumbs titlePage={pageData.postName} />
        <section className={s.section}>
          <div
            className={s.container_post}
            itemScope
            itemType="http://schema.org/Article"
          >
            <div className={s.image_container}>
              <LazyImage
                itemprop="image"
                src={PATH_IMAGE + pageData.image}
                className={[s.image]}
                wrapperClass={s.image_wrapper}
              />
            </div>
            <div className={s.content}>
              <h1 className={s.head} itemProp="headline">
                {pageData.postName}
              </h1>
              <p
                className={s.date}
                itemProp="datePublished"
                dateTime={new Date(pageData.postDate).toLocaleDateString(
                  "ru-RU"
                )}
              >
                {new Date(pageData.postDate).toLocaleDateString("ru-RU")}
              </p>
              <div className={s.description} itemProp="articleBody">
                <DynamicMarkdown>{pageData.postText}</DynamicMarkdown>
              </div>
            </div>
          </div>
          <div className={s.container}>
            <h2 className={s.header}>Рекомендуем к чтению</h2>
            <CardNewsSlider
              data={news}
              currentUrl={pageData.url}
              key={pageData.url}
            />
          </div>
        </section>
      </Layout>
    </>
  );
}

export const getServerSideProps = async ({ query, res }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  const pageData = await getCurrentNews(query.id);
  const footerLinks = await getServicesList();
  const news = await getAllNews();
  if (!pageData) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      pageData: pageData,
      news,
      footerLinks,
    },
  };
};
