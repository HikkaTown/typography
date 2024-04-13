import React, { useState, useEffect } from "react";
import cs from "classnames";
import { getServicesList, getSmallProduct } from "@/lib/apiFunctions";
import CatalogItem from "@/components/uikit/CatalogItem/CatalogItem";
import CatalogTabs from "../CatalogTabs/CatalogTabs";
import { useRouter } from "next/router";
import s from "./CatalogBlock.module.scss";
import Preloader from "@/components/Preloader/Preloader";
export default function CatalogBlock({ tabs, id, cards = []}) {
  const [isActive, setIsActive] = useState(null || id);
  const [loaded, setLoaded] = useState(false);

  
  
  useEffect(() => {
    if (id) {
      setIsActive(id);
    }
  }, [id]);

  return (
    <div className={s.container}>
      <CatalogTabs
        className={s.tabs}
        data={tabs}
        isActive={isActive}
        setIsActive={setIsActive}
      />

      <div className={cs(s.items, loaded ? s.items_loaded : "")}>
        {!loaded && cards.length > 0
          ? cards.map((item, index) => {
              return (
                <CatalogItem
                  className={s.item}
                  key={item.id}
                  href={item.url.includes('/') ? item.url : `/${item.url}`}
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
