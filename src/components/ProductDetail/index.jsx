import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./index.module.css";
import { useCart } from "../../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart, cart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

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
    return (
      <div className={classes.loadingContainer}>
        <div className={classes.loadingSpinner}></div>
      </div>
    )
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  const cartItem = cart.find((item) => item.id === product.id);

  return (
    <div className={classes.productDetail}>
      <div className={classes.imageContainer}>
        <img src={product.images[0]} alt={product.title} className={classes.image} />
      </div>
      <div className={classes.detailsContainer}>
        <h1 className={classes.title}>{product.title}</h1>
        <p className={classes.price}>${product.price}</p>
        <p className={classes.description}>{product.description}</p>

        {cartItem ? (
          <div className={classes.quantityControls}>
            {cartItem.quantity > 1 ? (
              <button
                onClick={() => decreaseQuantity(product.id)}
                className={classes.quantityButton}
              >
                -
              </button>
            ) : (
              <button
                onClick={() => removeFromCart(product.id)}
                className={classes.trashButton}
              >
                🗑️
              </button>
            )}
            <span className={classes.quantity}>{cartItem.quantity}</span>
            <button
              onClick={() => increaseQuantity(product.id)}
              className={classes.quantityButton}
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={() => addToCart(product)}
            className={classes.addToCartButton}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
