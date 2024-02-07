import { useState } from "react";
import "./App.css";
import { SearchBar } from "./SearchBar/SearchBar";
import { fetchArticles } from "../api";

function App() {
  const [query, setQuery] = useState("");

  const handleSearch = async (newQuery) => {
    setQuery(newQuery);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
    </>
  );
}

export default App;
