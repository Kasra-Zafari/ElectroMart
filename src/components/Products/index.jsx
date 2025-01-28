import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./index.module.css";
import SearchBar from "../SearchBar";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");


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

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <SearchBar onSearch={setSearchQuery} />
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
