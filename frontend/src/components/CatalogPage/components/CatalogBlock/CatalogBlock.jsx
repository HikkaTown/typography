import React, { useState, useEffect } from "react";
import { getSmallProduct } from "@/lib/apiFunctions";
import CatalogItem from "@/components/uikit/CatalogItem/CatalogItem";
import CatalogTabs from "../CatalogTabs/CatalogTabs";
import { useRouter } from "next/router";
import s from "./CatalogBlock.module.scss";
export default function CatalogBlock({ tabs, id }) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(id || tabs[0].id);
  const [currentCards, setCurrentCards] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    async function getData() {
      const res = await getSmallProduct(+isActive);
      setCurrentCards(res);
    }
    getData();
  }, [isActive]);

  useEffect(() => {
    if (router.query.id) {
      setIsActive(router.query.id);
    }
  }, [router]);
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={s.container}>
      {loaded && (
        <CatalogTabs
          className={s.tabs}
          data={tabs}
          isActive={isActive}
          setIsActive={setIsActive}
        />
      )}
      <div className={s.items}>
        {currentCards.length > 0
          ? currentCards.map((item) => {
              return (
                <CatalogItem
                  className={s.item}
                  key={s.item}
                  href={`/catalog/${item.url}`}
                  data={item}
                />
              );
            })
          : ""}
      </div>
    </div>
  );
}
