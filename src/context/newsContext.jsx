import { createContext, useContext, useEffect, useState } from "react";
import { getAllNews } from "../services/news";
import PropTypes from "prop-types";

// Create the context
const NewsContext = createContext();

NewsProvider.propTypes = { children: PropTypes.node };
export function NewsProvider({ children }) {
  const [news, setNews] = useState();
  const originalNews = news;

  useEffect(() => {
    async function fetchNews() {
      const allNews = await getAllNews();
      setNews(allNews);
    }
    fetchNews();
  }, []);

  return (
    <NewsContext.Provider value={{ news, setNews, originalNews }}>
      {children}
    </NewsContext.Provider>
  );
}

export function useNews() {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error("useNews must be used within a NewsProvider");
  }
  return context;
}
