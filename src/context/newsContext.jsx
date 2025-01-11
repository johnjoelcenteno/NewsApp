import { createContext, useContext, useEffect, useState, useRef } from "react";
import { getAllNews } from "../services/news";
import PropTypes from "prop-types";

// Create the context
const NewsContext = createContext();

NewsProvider.propTypes = { children: PropTypes.node };
export function NewsProvider({ children }) {
  const [news, setNews] = useState();
  const originalNewsRef = useRef();

  useEffect(() => {
    async function fetchNews() {
      const allNews = await getAllNews();
      setNews(allNews);

      // Store the fetched news in the ref only once
      if (!originalNewsRef.current) {
        originalNewsRef.current = allNews;
      }
    }
    fetchNews();
  }, []);
  return (
    <NewsContext.Provider value={{ news, setNews, originalNewsRef }}>
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
