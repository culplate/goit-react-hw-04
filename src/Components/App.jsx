import { useState } from "react";
import "./App.css";
import { SearchBar } from "./SearchBar/SearchBar";

function App() {
  const API_KEY = "gOTmj8JmQWGgiHpU4pzX2JYCN-uvE_TdR5QD1-gJgZM";

  const [searchVal, setSearchVal] = useState("");
  const handleSearchInput = (val) => {
    setSearchVal(val);
    console.log(searchVal);
  };

  return (
    <>
      <SearchBar val={searchVal} onSearch={handleSearchInput} />
    </>
  );
}

export default App;
