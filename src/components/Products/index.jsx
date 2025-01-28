import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./index.module.css";
import SearchBar from "../SearchBar";
import Sort from "../Sort";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    fetch("https://fakestoreapi.in/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setIsLoading(false);
      })
      .catch((error) => {
        setError("Error fetching products: " + error.message);
        setIsLoading(false);
      });
  }, []);

  const filteredProducts = products
    .filter((product) => product.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortOption === "price-low") return a.price - b.price;
      if (sortOption === "price-high") return b.price - a.price;
      if (sortOption === "title-asc") return a.title.localeCompare(b.title);
      if (sortOption === "title-desc") return b.title.localeCompare(a.title);
      return 0;
    });

  return (
    <>
      <div className={classes.topBar}>
        <SearchBar onSearch={setSearchQuery} />
        <Sort onSortChange={setSortOption} />
      </div>
      
      <div className={classes.products}>
        {isLoading && (
          <div className={classes.loadingContainer}>
            <div className={classes.loadingSpinner}></div>
          </div>
        )}

        {error && <h2>{error}</h2>}

        {!isLoading && !error && (
          <div className={classes.productsGrid}>
            {filteredProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className={classes.productLink}>
                <div className={classes.productCard}>
                  <img src={product.image} alt={product.title} className={classes.image} />
                  <h2 className={classes.productTitle}>{product.title}</h2>
                  <p className={classes.price}>${product.price}</p>
                  <button className={classes.button}>View Details</button>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Products;
