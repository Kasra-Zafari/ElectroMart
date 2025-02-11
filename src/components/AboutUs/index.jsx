import React from 'react';
import classes from "./index.module.css";

const AboutUs = () => {
  return (
    <div className={classes.aboutUs}>
      <h1>About ElectroMart Project</h1>

      <p>
        <strong>ElectroMart</strong> is an online store that allows you to purchase the latest electronic devices at the best prices. This project is designed as a sample e-commerce website that utilizes modern web technologies to provide a simple and fast shopping experience. The main goal of this project is to create a user-friendly and efficient platform where users can search for, filter, and easily purchase the products they need.
      </p>

      <h2>Project Features:</h2>
      <ul>
        <li><strong>Dynamic Homepage:</strong> The homepage is designed so that users can easily access new and best-selling products.</li>
        <li><strong>Advanced Filters:</strong> You can filter products by categories, brands, prices, and discounts.</li>
        <li><strong>Shopping Cart and Checkout:</strong> The shopping experience includes an easy-to-use shopping cart and online payment functionality.</li>
        <li><strong>Search System:</strong> The advanced search feature allows users to quickly find the products they are looking for.</li>
        <li><strong>Product Details Pages:</strong> Each product has its dedicated page with complete information and detailed images.</li>
        <li><strong>User-Friendly Interface:</strong> A clean and attractive design focused on providing ease of use at every stage of the shopping process.</li>
        <li><strong>Inventory and Discount Management:</strong> Ability to activate discounts and view product availability status.</li>
      </ul>

      <h2>Project Goal:</h2>
      <p>
        The goal of this project is to provide a hassle-free online shopping experience, where users can easily access various products, compare them, and purchase them at competitive prices. Given the importance of user convenience, all steps, from searching and filtering products to checkout and delivery, have been carefully designed with customers' needs in mind.
      </p>
    </div>
  );
}

export default AboutUs;
