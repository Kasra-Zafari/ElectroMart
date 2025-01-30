import React, { useEffect, useState } from "react";
import classes from "./index.module.css";

const Filters = ({ filters, setFilters }) => {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [inStock, setInStock] = useState(false);
  const [hasDiscount, setHasDiscount] = useState(false);
  const [rating, setRating] = useState(null);

  useEffect(() => {
    // get category
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setCategories(data);
        } else {
          setCategories([]);
        }
      });

    // get brand
    fetch("https://dummyjson.com/products?select=brand")
      .then((res) => res.json())
      .then((data) => {
        const uniqueBrands = [...new Set(data.products.map((p) => p.brand))];
        setBrands(uniqueBrands);
      });
  }, []);

  useEffect(() => {
    setFilters({
      categories: selectedCategories,
      brands: selectedBrands,
      priceRange,
      inStock,
      discount: hasDiscount,
      rating,
    });
  }, [selectedCategories, selectedBrands, priceRange, inStock, hasDiscount, rating]);

  return (
    <div className={classes.filtersContainer}>
      <h3>Filters</h3>

      {/* category */}
      <div className={classes.filterGroup}>
        <h4>Category</h4>
        {categories.map((category, index) => (
          <label key={`${category.slug}-${index}`}>
            <input
              type="checkbox"
              value={category.slug}
              onChange={(e) => {
                setSelectedCategories((prev) =>
                  e.target.checked
                    ? [...prev, category.slug]
                    : prev.filter((c) => c !== category.slug)
                );
              }}
            />
            {category.name}
          </label>
        ))}
      </div>

      {/* brand */}
      <div className={classes.filterGroup}>
        <h4>Brand</h4>
        {brands.map((brand, index) => (
          <label key={`${brand}-${index}`}>
            <input
              type="checkbox"
              value={brand}
              onChange={(e) => {
                setSelectedBrands((prev) =>
                  e.target.checked ? [...prev, brand] : prev.filter((b) => b !== brand)
                );
              }}
            />
            {brand}
          </label>
        ))}
      </div>

      {/* price */}
      <div className={classes.filterGroup}>
        <h4>Price Range</h4>
        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange[0]}
          onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
        />
        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
        />
        <p>${priceRange[0]} - ${priceRange[1]}</p>
      </div>

      {/* stock */}
      <div className={classes.filterGroup}>
        <h4>Stock</h4>
        <label className={classes.toggleSwitch}>
          <input
            type="checkbox"
            checked={inStock}
            onChange={() => setInStock((prev) => !prev)}
          />
          <span className={classes.slider}></span>
        </label>
      </div>

      {/* discount */}
      <div className={classes.filterGroup}>
        <h4>Discount</h4>
        <label className={classes.toggleSwitch}>
          <input
            type="checkbox"
            checked={hasDiscount}
            onChange={() => setHasDiscount((prev) => !prev)}
          />
          <span className={classes.slider}></span>
        </label>
      </div>

      {/* rate */}
      <div className={classes.filterGroup}>
        <h4>Customer Rating</h4>
        {[5, 4, 3, 2, 1].map((star) => (
          <label key={star}>
            <input
              type="radio"
              name="rating"
              value={star}
              onChange={() => setRating(star)}
            />
            {star} ⭐ & up
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filters;
