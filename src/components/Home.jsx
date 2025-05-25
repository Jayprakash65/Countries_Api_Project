
import SearchBar from "./SearchBar.jsx";
import SelectMenu from "./SelectMenu.jsx";
import CountryList from "./CountryList.jsx";
import { useContext, useState } from "react"
import { ThemeContext } from "../contexts/ThemeContext.jsx";


const Home = () => {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState('');

  const [isDark] = useContext(ThemeContext);



  return (
    <main className={`${isDark ? 'dark' : ''}`} >
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu setRegion={setRegion} />
      </div>
      
      <CountryList region={region} query={query} />
    </main>
  );
};

export default Home;
