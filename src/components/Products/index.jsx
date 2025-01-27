import React, { useEffect, useState } from "react";
import classes from "./index.module.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // وضعیت بارگذاری
  const [error, setError] = useState(null); // وضعیت خطا

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

  return (
    <div className={classes.products}>
      {isLoading && <h2>Loading products...</h2>}
      {error && <h2>{error}</h2>}

      <div className={classes.productsGrid}>
        {products.map((product) => (
          <div key={product.id} className={classes.productCard}>
            <img
              src={product.image}
              alt={product.title}
              className={classes.image}
            />
            <h2 className={classes.productTitle}>{product.title}</h2>
            <p className={classes.price}>${product.price}</p>
            <button className={classes.button}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
