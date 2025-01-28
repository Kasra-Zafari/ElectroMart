import React, { useState } from "react";
import classes from "./index.module.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className={classes.searchContainer}>
      <input
        type="text"
        className={classes.searchInput}
        placeholder="Search for products..."
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
