import { useEffect, useState } from "react";
import "./App.css";
import { SearchBar } from "./SearchBar/SearchBar";
import { fetchArticles } from "../api";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Loader } from "./Loader/Loader";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [photos, setPhotos] = useState([]);

  const handleSearch = async (newQuery) => {
    setQuery(`${Date.now()}/${newQuery}`);
    setPage(1);
    setPhotos([]);
  };

  useEffect(() => {
    if (query === "") return;

    async function fetchData() {
      try {
        setLoading(true);
        setError(false);
        const fetchedData = await fetchArticles(query.split("/")[1]); // +page
        setPhotos((prevResults) => [...prevResults, ...fetchedData.results]);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [query]); //+page

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {photos.length > 0 && <ImageGallery data={photos} />}
      {loading && <Loader />}
    </>
  );
}

export default App;
