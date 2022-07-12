import React, { useState, useEffect } from "react";
import cs from "classnames";
import { getServicesList, getSmallProduct } from "@/lib/apiFunctions";
import CatalogItem from "@/components/uikit/CatalogItem/CatalogItem";
import CatalogTabs from "../CatalogTabs/CatalogTabs";
import { useRouter } from "next/router";
import s from "./CatalogBlock.module.scss";
import Preloader from "@/components/Preloader/Preloader";
export default function CatalogBlock({ tabs, id }) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(null || id);
  const [currentCards, setCurrentCards] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    async function getData() {
      setLoaded(true);
      if (isActive !== null) {
        const res = await getSmallProduct(isActive);
        setCurrentCards(res);
      } else {
        const res = await getServicesList();
        setCurrentCards(res);
      }
      setLoaded(false);
    }
    getData();
  }, [isActive]);

  useEffect(() => {
    if (router.query.id) {
      setIsActive(router.query.id);
    }
  }, [router]);

  return (
    <div className={s.container}>
      <CatalogTabs
        className={s.tabs}
        data={tabs}
        isActive={isActive}
        setIsActive={setIsActive}
      />

      <div className={cs(s.items, loaded ? s.items_loaded : "")}>
        {!loaded && currentCards.length > 0
          ? currentCards.map((item, index) => {
              return (
                <CatalogItem
                  className={s.item}
                  key={index}
                  href={`/${item.url}`}
                  data={item}
                />
              );
            })
          : ""}
        {loaded ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              width: "100%",
            }}
          >
            <Preloader />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
