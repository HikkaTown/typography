import React from "react";
import { LazyImageWrapper } from "../LazyImage/LazyImage";
import YellowBtn from "../uikit/YellowBtn/YellowBtn";
import s from "./HeroMainSection.module.scss";
import { scroller } from "react-scroll";

export default function HeroMainSection({ data }) {
  return (
    <section className={s.section}>
      <LazyImageWrapper
        src={"/assets/HeroMainSection/bg_pc.jpg"}
        srcTablet={"/assets/HeroMainSection/bg_tab.jpg"}
        srcMobile={"/assets/HeroMainSection/bg_mob.jpg"}
        lazy={false}
        className={[s.background]}
        wrapperClass={s.background_wrapper}
      />
      <div className={s.container}>
        <h1 className={s.header}>{data.header}</h1>
        <div className={s.content_block}>
          <p className={s.description}>{data.description}</p>
          <YellowBtn
            className={s.btn}
            onClick={() => {
              scroller.scrollTo("catalog", {
                duration: 800,
                delay: 0,
                smooth: "easeInOutQuart",
              });
            }}
          >
            В каталог услуг
          </YellowBtn>
        </div>
      </div>
      <ScrollBtn className={s.scroll_btn} />
    </section>
  );
}

const ScrollBtn = ({ className }) => {
  return (
    <button className={className}>
      <svg
        width="32"
        height="40"
        viewBox="0 0 32 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 12L16 20L24 12"
          stroke="#37465D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 20L16 28L24 20"
          stroke="#CED7E7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};
