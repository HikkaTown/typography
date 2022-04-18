import React, { useCallback } from "react";
import Head from "next/head";
import CallbackProudctSection from "../../components/CallbackProudctSection/CallbackProudctSection";
import CustomBreadrcumbs from "../../components/CustomBreadrcumbs/CustomBreadrcumbs";
import HowMuchSection from "../../components/HowMuchSection/HowMuchSection";
import InfromationProduct from "../../components/InfromationProduct/InfromationProduct";
import Layout from "../../components/Layout/Layout";
import ProductMainSection from "../../components/ProductMainSection/ProductMainSection";
import ProjectSection from "../../components/ProjectSection/ProjectSection";
import SeoProduct from "../../components/SeoProduct/SeoProduct";
import ShortDescription from "../../components/ShortDescription/ShortDescription";
import StepSection from "../../components/StepSection/StepSection";
import TechnicalRequirementsSection from "../../components/TechnicalRequirementsSection/TechnicalRequirementsSection";

export default function Index({ id, title }) {
  return (
    <>
      <Head>
        <title itemProp="headline">{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content={"post.meta_title"} />

        <meta
          itemProp="description"
          name="description"
          content={"post.meta_description"}
        />
        <meta property="og:description" content={"post.meta_description"} />
        <meta property="og:site_name" content="Первый печатный" />
      </Head>
      <Layout>
        <CustomBreadrcumbs titlePage={title} />
        <ProductMainSection />
        <ShortDescription />
        {id === "1" && (
          <>
            <HowMuchSection />
            <InfromationProduct />
            <CallbackProudctSection />
            <TechnicalRequirementsSection />
          </>
        )}
        {id === "2" && (
          <>
            <StepSection data={testData} officesData={testOfficesData} />
          </>
        )}
        <ProjectSection />
        <SeoProduct />
      </Layout>
    </>
  );
}

export const getStaticProps = async (context) => {
  return {
    props: {
      id: context.params.id,
      title:
        context.params.id === "1" ? "Названеи продукта" : "Название продукта2",
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: "blocking",
  };
};

const testData = {
  header: "Закажите печать за несколько шагов",
  files: true,
  defaultText: "Изготовление печати 700 ₽",
  defaultPrice: 700,
  deliveryAmount: 300,
  steps: [
    {
      id: 1,
      header: "Выберите оснастку для вашей новой печати",
      proudcts: [
        {
          id: 1,
          image: "https://sovremennik.info/up/slider/tort/photo_55_big.jpg",
          name: "Ручная оснастка",
          price: 0,
        },
        {
          id: 2,
          image:
            "https://img.povar.ru/main/3a/57/fb/b6/mussovii_tort_dlya_nachinaiushih-642029.JPG",
          name: "Colob mouse",
          price: 500,
        },
        {
          id: 3,
          image:
            "https://tortchao.ru/files/products/chao-ushakova20064_2.1800x1200w.jpg",
          name: "Disko",
          price: 2700,
        },
        {
          id: 4,
          image:
            "https://tortchao.ru/files/products/chao-ushakova20064_2.1800x1200w.jpg",
          name: "Рука mouse",
          price: 0,
        },
        {
          id: 5,
          image:
            "https://tortchao.ru/files/products/chao-ushakova20064_2.1800x1200w.jpg",
          name: "Диско mouse",
          price: 0,
        },
        {
          id: 6,
          image:
            "https://tortchao.ru/files/products/chao-ushakova20064_2.1800x1200w.jpg",
          name: "Флекс mouse",
          price: 0,
        },
      ],
    },
    {
      id: 2,
      header: "Выберете дизайн-макет вашей новой печати",
      products: [
        {
          id: 1,
          category: "ООО, ОАО,ЗАО",
          name: "Печать 29 ммПечать 29 мм",
          image:
            "https://www.chefmarket.ru/blog/wp-content/uploads/2019/12/feta-cheese-2000x1200.jpg",
          price: 13,
        },
        {
          id: 2,
          category: "ИП",
          name: "Печать 29 мм+ микротекст",
          image: "https://www.patee.ru/r/x6/12/5b/d5/960m.jpg",
          price: 0,
        },
        {
          id: 3,
          category: "Врач",
          name: "Печать 29 мм + микротекст + логотип",
          image: "https://rutxt.ru/files/15321/original/42908b9dfa.JPG",
          price: 230,
        },
        {
          id: 4,
          category: "ООО, ОАО,ЗАО",
          name: "Печать 29 мм+ смайл",
          image:
            "https://www.bulochka.ru/wp-content/uploads/2019/10/salat-s-avokado-syomgoj-i-pomidorami.jpg",
          price: 660,
        },
      ],
    },
  ],
};

const testOfficesData = [
  {
    id: 1,
    address:
      "Самовывоз Офис #1, м. Цветной бульвар,Малый Сухаревский пер., д. 9с1, оф. 24",
  },
  {
    id: 2,
    address:
      "Самовывоз Офис #1, м. Цветной бульвар,Малый Сухаревский пер., д. 9с1, оф. 24",
  },
  {
    id: 3,
    address:
      "Самовывоз Офис #1, м. Цветной бульвар,Малый Сухаревский пер., д. 9с1, оф. 24",
  },
  {
    id: 4,
    address:
      "Самовывоз Офис #1, м. Цветной бульвар,Малый Сухаревский пер., д. 9с1, оф. 24",
  },
  {
    id: 5,
    address:
      "Самовывоз Офис #1, м. Цветной бульвар,Малый Сухаревский пер., д. 9с1, оф. 24",
  },
];
