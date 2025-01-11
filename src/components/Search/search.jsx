import useSearch from "../../hooks/useSearch";
import PropTypes from "prop-types";

Search.propTypes = {
  setNews: PropTypes.func,
  news: PropTypes.any,
  originalNews: PropTypes.any,
};
export default function Search({ news, setNews, originalNews }) {
  const { input, setInput } = useSearch();

  function handleChange(text) {
    setInput(text);

    if (text == "") {
      setNews(originalNews);
      console.log("text is empty");
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

    // Ensure news.data is valid before resetting
    if (!Array.isArray(originalNews)) {
      console.error("Invalid data: news.data is not an array");
      return;
    }

    setNews({ ...news, data: originalNews });
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
