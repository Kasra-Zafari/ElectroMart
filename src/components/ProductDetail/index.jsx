import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./index.module.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError("Error fetching product details: " + error.message);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <h2>Loading product details...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className={classes.productDetail}>
      <div className={classes.imageContainer}>
        <img src={product.images} alt={product.title} className={classes.image} />
      </div>
      <div className={classes.detailsContainer}>
        <h1 className={classes.title}>{product.title}</h1>
        <p className={classes.price}>${product.price}</p>
        <p className={classes.description}>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;