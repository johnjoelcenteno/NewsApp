import { useEffect, useState } from "react";
import { getAllNews } from "../services/news";

export default function useApp() {
  const [news, setNews] = useState();

  useEffect(() => {
    async function getNews() {
      const allNews = await getAllNews();
      setNews(allNews);
    }
    getNews();
  }, []);

  useEffect(() => {
    console.log(news);
  }, [news]);

  return { news };
}
