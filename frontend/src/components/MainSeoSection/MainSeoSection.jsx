import React from "react";
import { LazyImage } from "../LazyImage/LazyImage";
import s from "./MainSeoSection.module.scss";

export default function MainSeoSection() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <h2 className={s.header}>Seo заголовок</h2>
        <div className={s.row}>
          <p className={s.seo_text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            tempore nobis fugiat veritatis saepe dolor doloremque, nam ipsam
            officiis nulla odio non repellat labore alias dolore ex, sapiente
            earum voluptatem. Nostrum dolorum illo sapiente cumque, odio unde
            mollitia laboriosam quae explicabo amet minus tenetur perferendis?
            <LazyImage
              src="https://www.iguides.ru/upload/medialibrary/9f8/9f8fdff471b7d281f81f694c100b5adc.png"
              srcTablet="https://www.iguides.ru/upload/medialibrary/9f8/9f8fdff471b7d281f81f694c100b5adc.png"
              srcMobile="https://www.iguides.ru/upload/medialibrary/9f8/9f8fdff471b7d281f81f694c100b5adc.png"
              alt={""}
              className={[s.seo_image]}
            />
          </p>
        </div>
        <div className={s.row}>
          <h3 className={s.seo_header}>Seo header</h3>
          <p className={s.seo_text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            et nobis perferendis nulla quae, exercitationem at provident
            adipisci tenetur ipsa eligendi totam labore quod, vitae nihil
            maiores natus possimus ipsam necessitatibus quidem. Commodi fuga
            quasi, molestias neque aperiam rerum quibusdam dolorum obcaecati
            laboriosam odio aut provident temporibus eos veniam. Illo!
          </p>
        </div>
      </div>
    </section>
  );
}
