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
        <ContactPageSection data={offices} />
      </Layout>
    </>
  );
}

const offices = [
  {
    id: 1,
    name: "Офис 1",
    address:
      "м. Цветной бульвар, м. Трубная Малый Сухаревский переулок 9 стр. 1, 2-й этаж",
    email: "email@mail.ru",
    phone: "+7 (495) 517-59-14",
    pathHeader: "Как добраться до офиса 1",
    workTime: "Пн-птн 09:00-18:00; Выходные:  сб, вск",
    mapUrl: "dsds",
    path: {
      onFoot: {
        description:
          "Двигаться по внутреней стороне садового, доехать до улицы Трубная, по ней проехать 300 метров до перекрёстка и повернуть на право на Малый Сухаревский переулок, проехать ещё 50 метров и вы у цели. Есть платная парковка 150 ₽ в час.",
        videoBlock: {
          url: "https://animalreader.ru/wp-content/uploads/2013/03/volk-voj-hishhnika_1.jpg",
          videoUrl: "ds",
        },
        images: [
          {
            url: "https://web-zoopark.ru/wp-content/uploads/2018/07/2-278.jpg",
          },
          {
            url: "https://img.gazeta.ru/files3/998/13557998/Depositphotos_225504558_l-2015-pic_32ratio_900x600-900x600-80774.jpg",
          },
          {
            url: "https://thebiggest.ru/wp-content/uploads/2020/12/volk.jpg",
          },
        ],
      },
      byCar: {
        description:
          "Машина Двигаться по внутреней стороне садового, доехать до улицы Трубная, по ней проехать 300 метров до перекрёстка и повернуть на право на Малый Сухаревский переулок, проехать ещё 50 метров и вы у цели. Есть платная парковка 150 ₽ в час.",
        videoBlock: {
          url: "https://www.eg.ru/wp-content/uploads/2020/09/koshka110456.jpg",
          videoUrl: "ds",
        },
        images: [
          {
            url: "https://n1s2.hsmedia.ru/43/8e/85/438e85e1dcf8bc45fdb4738ad67e0523/728x485_1_676f156728d52a40cefbf4e88311021a@5000x3333_0xac120003_744610521626771276.jpg",
          },
          {
            url: "https://www.bethowen.ru/upload/iblock/63f/63f2f01ca6828d9574995f549d89a2e0.jpeg",
          },
          {
            url: "https://cdn-st1.rtr-vesti.ru/vh/pictures/xw/316/248/9.jpg",
          },
        ],
      },
    },
  },
  {
    id: 2,
    name: "Офис 2",
    address:
      "м. Цветной бульвар, м. Трубная Малый Сухаревский переулок 9 стр. 1, 2-й этаж",
    email: "email@mail.ru",
    phone: "+7 (495) 517-59-33",
    workTime: "Пн-птн 09:00-18:00; Выходные:  сб, вск",
    pathHeader: "Как добраться до офиса 2",
    mapUrl: "dsds",
    path: {
      onFoot: {
        description:
          "Двигаться по внутреней стороне садового, доехать до улицы Трубная, по ней проехать 300 метров до перекрёстка и повернуть на право на Малый Сухаревский переулок, проехать ещё 50 метров и вы у цели. Есть платная парковка 150 ₽ в час.",
        videoBlock: {
          url: "https://cdnimg.rg.ru/img/content/210/83/90/TASS_46189702_d_850.jpg",
          videoUrl: "ds",
        },

        images: [
          {
            url: "https://medialeaks.ru/wp-content/uploads/2021/10/fbpsg0tx0aaydr1.jpg",
          },
          {
            url: "https://img.ltn.com.tw/Upload/news/600/2021/10/18/phpeBNCjb.jpg",
          },
          {
            url: "https://img.ltn.com.tw/Upload/news/600/2021/10/18/phpP49ov6.jpg",
          },
        ],
      },
      byCar: {
        description:
          "Двигаться по внутреней стороне садового, доехать до улицы Трубная, по ней проехать 300 метров до перекрёстка и повернуть на право на Малый Сухаревский переулок, проехать ещё 50 метров и вы у цели. Есть платная парковка 150 ₽ в час.",
        videoBlock: {
          url: "https://img.gazeta.ru/files3/327/13087327/hom-pic905-895x505-11483.jpg",
          videoUrl: "ds",
        },
        images: [
          {
            url: "https://s0.rbk.ru/v6_top_pics/media/img/2/82/756348064960822.jpg",
          },
          {
            url: "https://icdn.lenta.ru/images/2017/07/12/16/20170712161939103/detail_15b9eca8fd6e00746cfc42a472cbee2d.jpg",
          },
          {
            url: "https://rostov-veterinar.ru/d/30100159__3.jpg",
          },
        ],
      },
    },
  },
];
