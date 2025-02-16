import React, { useState } from "react";
import { Search, X } from "lucide-react";
import classes from "./index.module.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value === "") {
      onSearch("");
    }
  };

  const handleSearchClick = () => {
    onSearch(query);
  };

  const handleClearSearch = () => {
    setQuery("");
    onSearch("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearchClick();
    }
  };

  return (
    <div className={classes.searchContainer}>
      <div className={classes.inputWrapper}>
        <input
          type="text"
          className={classes.searchInput}
          placeholder="Search for products..."
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        {query && (
          <button className={classes.clearButton} onClick={handleClearSearch}>
            <X size={18} />
          </button>
        )}
      </div>
      <button className={classes.searchButton} onClick={handleSearchClick}>
        <Search size={20} />
      </button>
    </div>
  );
};

export default SearchBar;
