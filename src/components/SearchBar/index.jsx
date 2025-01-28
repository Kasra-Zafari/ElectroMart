import React, { useState } from "react";
import { Search } from "lucide-react";
import classes from "./index.module.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(query);
  };

  return (
    <div className={classes.searchContainer}>
      <input
        type="text"
        className={classes.searchInput}
        placeholder="Search for products..."
        value={query}
        onChange={handleInputChange}
      />
      <button className={classes.searchButton} onClick={handleSearchClick}>
        <Search size={20} />
      </button>
    </div>
  );
};

export default SearchBar;
