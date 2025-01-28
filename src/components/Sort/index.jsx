import React from "react";
import classes from "./index.module.css";

const Sort = ({ onSortChange }) => {
  return (
    <div className={classes.sortContainer}>
      <select className={classes.sortSelect} onChange={(e) => onSortChange(e.target.value)}>
        <option value="default">Sort By</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="title-asc">Title: A to Z</option>
        <option value="title-desc">Title: Z to A</option>
      </select>
    </div>
  );
};

export default Sort;
