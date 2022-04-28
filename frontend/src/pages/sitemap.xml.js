import {
  getAllNews,
  getAllProductCard,
  getServicesList,
} from "../lib/apiFunctions";
import { DOMAIN, PAGES } from "../lib/const";

const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }) => {
  const staticPaths = PAGES.map((page) => `${DOMAIN}${page}`);
  const news = await getAllNews();
  const catalog = await getServicesList();
  const products = await getAllProductCard();
  const createStream = (path) => {
    return `<url>
        <loc>${path}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
      </url>`;
  };
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${createStream(`${DOMAIN}/`)}
      ${staticPaths.map(createStream).join("")}
      ${news
        .map((item) => {
          const path = item.url;
          return createStream(`${DOMAIN}/blog/${path}`);
        })
        .join("")}
      ${catalog
        .map((item) => {
          const path = item.id;
          return createStream(`${DOMAIN}/catalog?id=${path}`);
        })
        .join("")}
      ${products
        .map((item) => {
          const path = item.url;
          return createStream(`${DOMAIN}/catalog/${item.url}`);
        })
        .join("")}
  </urlset>
`;
  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
