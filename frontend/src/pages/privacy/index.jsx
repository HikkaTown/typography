import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import s from "./index.module.scss";
import { getPrivacy } from "../../lib/apiFunctions";
export default function Index({ paragraphs }) {
  return (
    <>
      <Head>
        <title>Политика конфиденциальности</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Layout>
        <section className={s.section}>
          <div className={s.container}>
            <h1 className={s.header}>Политика конфиденциальности</h1>
            {paragraphs &&
              paragraphs.map((item, index) => {
                return (
                  <p className={s.paragraph} key={index}>
                    {item}
                  </p>
                );
              })}
          </div>
        </section>
      </Layout>
    </>
  );
}

export const getServerSideProps = async () => {
  const paragraphs = await getPrivacy();
  return {
    props: {
      paragraphs,
    },
  };
};
