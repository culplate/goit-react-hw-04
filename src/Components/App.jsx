import { useState } from "react";
import "./App.css";
import { SearchBar } from "./SearchBar/SearchBar";

function App() {
  const API_KEY = "gOTmj8JmQWGgiHpU4pzX2JYCN-uvE_TdR5QD1-gJgZM";
  const [count, setCount] = useState(0);

  return (
    <>
      <SearchBar />
    </>
  );
}

export default App;
