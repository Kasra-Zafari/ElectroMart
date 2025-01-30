import React, { useEffect, useState } from "react";
import classes from "./index.module.css";

const Filters = ({ filters, setFilters, categories }) => {
  const [brands, setBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [inStock, setInStock] = useState(false);
  const [hasDiscount, setHasDiscount] = useState(false);
  const [rating, setRating] = useState(null);

  useEffect(() => {
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

  // price
  const handlePriceChange = (e) => {
    const value = Number(e.target.value);
    const [min, max] = priceRange;

    if (e.target.name === "min") {
      setPriceRange([Math.min(value, max - 10), max]); // حداقل باید از ماکزیمم کمتر باشد
    } else {
      setPriceRange([min, Math.max(value, min + 10)]); // ماکزیمم باید از مینیمم بیشتر باشد
    }
  };

  return (
    <div className={classes.filtersContainer}>
      <h3>Filters</h3>

      {/* category */}
      <div className={classes.filterGroup}>
        <h4>Category</h4>
        {categories.map((category, index) => (
          <label key={`${category}-${index}`}>
            <input
              type="checkbox"
              value={category}
              onChange={(e) => {
                const value = e.target.value;
                setSelectedCategories((prev) =>
                  e.target.checked ? [...prev, value] : prev.filter((c) => c !== value)
                );
              }}
            />
            {category}
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
                const value = e.target.value;
                setSelectedBrands((prev) =>
                  e.target.checked ? [...prev, value] : prev.filter((b) => b !== value)
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
        <div className={classes.sliderContainer}>
          <input
            type="range"
            name="min"
            min="0"
            max="1000"
            value={priceRange[0]}
            onChange={handlePriceChange}
          />
          <input
            type="range"
            name="max"
            min="0"
            max="1000"
            value={priceRange[1]}
            onChange={handlePriceChange}
          />
        </div>
        <p>${priceRange[0]} - ${priceRange[1]}</p>
      </div>

      {/* stock */}
      <div className={classes.filterGroup}>
        <h4>Stock</h4>
        <label className={classes.toggleSwitch}>
          <input type="checkbox" checked={inStock} onChange={() => setInStock((prev) => !prev)} />
          <span className={classes.slider}></span>
        </label>
      </div>

      {/* discount */}
      <div className={classes.filterGroup}>
        <h4>Discount</h4>
        <label className={classes.toggleSwitch}>
          <input type="checkbox" checked={hasDiscount} onChange={() => setHasDiscount((prev) => !prev)} />
          <span className={classes.slider}></span>
        </label>
      </div>

      {/* rate */}
      <div className={classes.filterGroup}>
        <h4>Customer Rating</h4>
        {[5, 4, 3, 2, 1].map((star) => (
          <label key={star}>
            <input type="radio" name="rating" value={star} onChange={() => setRating(star)} />
            {star} ⭐ & up
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filters;
