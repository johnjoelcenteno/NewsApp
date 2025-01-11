import { useNews } from "../../context/newsContext";
import useSearch from "../../hooks/useSearch";

export default function Search() {
  const { input, setInput } = useSearch();
  const { news, setNews, originalNewsRef } = useNews();

  function handleChange(text) {
    setInput(text);

    if (text == "") {
      setNews(originalNewsRef.current);
      return;
    }

    if (!Array.isArray(news.data)) {
      console.error("Invalid data: news.data is not an array");
      return;
    }

    const filteredNews = news.data.filter((x) =>
      x.title?.toLowerCase().includes(text.toLowerCase())
    );

    setNews({ ...news, data: filteredNews });
  }

  function clearInput() {
    setInput("");

    if (!Array.isArray(originalNewsRef.current.data)) {
      console.error("Invalid data: news.data is not an array");
      return;
    }

    setNews(originalNewsRef.current);
  }

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search..."
        onChange={(e) => handleChange(e.target.value)}
        value={input}
      />
      <button className="btn btn-secondary" type="button" onClick={clearInput}>
        Clear
      </button>
    </div>
  );
}
