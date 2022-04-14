import Head from "next/head";
import CardNewsSlider from "../../components/CardNewsSlider/CardNewsSlider";
import Layout from "../../components/Layout/Layout";
import {
  LazyImage,
  LazyImageWrapper,
} from "../../components/LazyImage/LazyImage";
import NewsSlider from "../../components/NewsSection/components/NewsSlider/NewsSlder";
import s from "./Post.module.scss";
export default function Index({ id }) {
  return (
    <>
      <Head>
        <title itemProp="headline">{"post.name"}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content={"post.meta_title"} />

        <meta
          itemProp="description"
          name="description"
          content={"post.meta_description"}
        />
        <meta property="og:description" content={"post.meta_description"} />
        <meta property="og:site_name" content="Первый печатный" />
        {/* <meta property="og:url" content={DOMEN + "/blog"} /> */}
        {/* <link rel="canonical" href={DOMEN + "/blog"} /> */}
      </Head>
      <Layout>
        <section className={s.section}>
          <div className={s.container_post}>
            <div className={s.image_container}>
              <LazyImage
                src={
                  "https://mirpozitiva.ru/wp-content/uploads/2019/11/1472042719_15.jpg"
                }
                srcTablet={
                  "https://mirpozitiva.ru/wp-content/uploads/2019/11/1472042719_15.jpg"
                }
                srcMobile={
                  "https://mirpozitiva.ru/wp-content/uploads/2019/11/1472042719_15.jpg"
                }
                className={[s.image]}
                wrapperClass={s.image_wrapper}
              />
            </div>
            <div className={s.content}>
              <h1 className={s.head}>{"post.name"}</h1>
              <p className={s.date}>{"post.date"}</p>
              <p className={s.description}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
                voluptas itaque corporis deleniti ipsam enim consequuntur,
                provident ducimus veniam, necessitatibus harum quaerat sequi
                fugit fuga saepe. Odit, natus quae! Sunt assumenda commodi
                dignissimos laboriosam harum provident perspiciatis doloribus
                inventore iusto deleniti quis porro, minima blanditiis dolorum
                corrupti eveniet rerum nostrum fugit enim quia dolorem? Quisquam
                earum at velit esse iste?
              </p>
            </div>
          </div>
          <div className={s.container}>
            <h2 className={s.header}>Рекомендуем к чтению</h2>
            <CardNewsSlider />
          </div>
        </section>
      </Layout>
    </>
  );
}

export const getStaticProps = async (context) => {
  return {
    props: {
      id: 1,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { id: "1" } }],
    fallback: "blocking",
  };
};
