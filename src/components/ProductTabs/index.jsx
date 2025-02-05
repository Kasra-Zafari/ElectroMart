import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import classes from "./index.module.css";

const ProductTabs = ({ productId }) => {
  const [productDetails, setProductDetails] = useState(null);
  const [activeTab, setActiveTab] = useState("description"); // Tab default = description

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProductDetails(data))
      .catch((error) => console.error("Error fetching product details:", error));
  }, [productId]);

  if (!productDetails) {
    return <div>Loading...</div>;
  }

  const { description, reviews, tags, warrantyInformation, shippingInformation } = productDetails;

  return (
    <div className={classes.tabsContainer}>
      <div className={classes.tabButtons}>
        <button
          className={activeTab === "description" ? classes.activeTab : ""}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className={activeTab === "features" ? classes.activeTab : ""}
          onClick={() => setActiveTab("features")}
        >
          Features
        </button>
        <button
          className={activeTab === "reviews" ? classes.activeTab : ""}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
        <button
          className={activeTab === "tags" ? classes.activeTab : ""}
          onClick={() => setActiveTab("tags")}
        >
          Tags
        </button>
      </div>

      <div className={classes.tabContent}>
        {activeTab === "description" && <p>{description}</p>}
        {activeTab === "features" && (
          <div>
            <p><strong>Warranty:</strong> {warrantyInformation}</p>
            <p><strong>Shipping Information:</strong> {shippingInformation}</p>
          </div>
        )}
        {activeTab === "reviews" && (
          <div>
            {reviews.map((review) => (
              <div key={review.date} className={classes.review}>
                <p><strong>{review.reviewerName}</strong> ({review.rating} stars)</p>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
        )}
        {activeTab === "tags" && <p>{tags.join(", ")}</p>}
      </div>
    </div>
  );
};

export default ProductTabs;
