import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/Search/search";
import Cards from "./components/Cards/Cards";
import { useNews } from "./context/newsContext";

function App() {
  // had no time but this should not be passed as props since it has the context
  const { news } = useNews();

  return (
    <div className="container mt-5">
      <div className="app-container">
        <Search />
        <div className="scrollable-container">
          {news && news.data.map((x) => <Cards key={x._id} news={x} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
