import Head from "next/head";
import CardNewsSlider from "@/components/CardNewsSlider/CardNewsSlider";
import CustomBreadrcumbs from "@/components/CustomBreadrcumbs/CustomBreadrcumbs";
import Layout from "@/components/Layout/Layout";
import { LazyImage } from "@/components/LazyImage/LazyImage";
import {
  getAllNews,
  getCurrentNews,
  getProductLinks,
} from "@/lib/apiFunctions";
import { PATH_IMAGE } from "@/lib/const";
import s from "./Post.module.scss";
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
        {/* <meta property="og:url" content={DOMEN + "/blog"} /> */}
        {/* <link rel="canonical" href={DOMEN + "/blog"} /> */}
      </Head>
      <Layout footerLinks={footerLinks}>
        <CustomBreadrcumbs titlePage={pageData.postName} />
        <section className={s.section}>
          <div className={s.container_post}>
            <div className={s.image_container}>
              <LazyImage
                src={PATH_IMAGE + pageData.image}
                className={[s.image]}
                wrapperClass={s.image_wrapper}
              />
            </div>
            <div className={s.content}>
              <h1 className={s.head}>{pageData.postName}</h1>
              <p className={s.date}>
                {new Date(pageData.postDate).toLocaleDateString()}
              </p>
              <p className={s.description}>{pageData.postText}</p>
            </div>
          </div>
          <div className={s.container}>
            <h2 className={s.header}>Рекомендуем к чтению</h2>
            <CardNewsSlider data={news} currentUrl={pageData.url} />
          </div>
        </section>
      </Layout>
    </>
  );
}

export const getStaticProps = async (context) => {
  const { params } = context;
  const currentUrl = params.id;
  const footerLinks = await getProductLinks();
  const pageData = await getCurrentNews(currentUrl);
  const news = await getAllNews();
  return {
    props: {
      pageData: pageData,
      news,
      footerLinks,
    },
  };
};

export const getStaticPaths = async () => {
  const news = await getAllNews();
  const paths = news.map((item) => ({
    params: { id: item.url },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};
