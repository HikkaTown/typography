import { getAllNews, getNewsPage } from "../lib/apiFunctions";
import { DOMAIN } from "../lib/const";

const Rss = () => {
  return null;
};

export const getServerSideProps = async ({ res }) => {
  const newsMeta = await getNewsPage();
  const newsList = await getAllNews();

  const blogPostsRssXml = (news) => {
    let rssItemsXml = "";
    news.forEach((post) => {
      if (post) {
        rssItemsXml += `
      <item turbo="true">
        <title>${post.postName}</title>
		<link>${DOMAIN}/blog/${post.url}</link>
        <pubDate>${new Date(post.postDate).toLocaleDateString(
          "ru-RU"
        )}</pubDate>
		<author>Аренда фуршетов</author>
        <yandex:related/>
        <turbo:content>
            <![CDATA[
                <header> 
                    <h1>${post.name}</h1> 
                    <img src="${post.imageMob}"/>
                </header> 
                ${post.postText} 
            ]]>
        </turbo:content>
    </item>`;
      }
    });
    return rssItemsXml;
  };

  const getRssXml = (blogPosts) => {
    const rssItemsXml = blogPostsRssXml(blogPosts);

    return `<?xml  version="1.0" encoding="UTF-8" ?>
    <rss xmlns:yandex="http://news.yandex.ru" xmlns:media="http://search.yahoo.com/mrss/" xmlns:turbo="http://turbo.yandex.ru" version="2.0">
      <channel>
          <title>${newsMeta.metaHead}</title>
          <link>${DOMAIN}</link>
          <description>${newsMeta.metaDescription}</description>
          <language>ru</language>
          ${rssItemsXml}
      </channel>
    </rss>`;
  };

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/xml; charset=utf-8");
  res.write(getRssXml(newsList));
  res.end();
  return {
    props: {},
  };
};

export default Rss;
