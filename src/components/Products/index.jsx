import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./index.module.css";
import SearchBar from "../SearchBar";
import Sort from "../Sort";
import Filters from "../Filters";

const Products = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("category");

  const [products, setProducts] = useState([]);
  const [categoriesWithProducts, setCategoriesWithProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("default");

  // filter
  const [filters, setFilters] = useState({
    categories: selectedCategory ? [selectedCategory] : [],
    brands: [],
    priceRange: [0, 1000],
    inStock: false,
    discount: false,
  });

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        const categories = [...new Set(data.products.map((product) => product.category))];
        setCategoriesWithProducts(categories);
        setIsLoading(false);
      })
      .catch((error) => {
        setError("Error fetching products: " + error.message);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        categories: [selectedCategory],
      }));
    }
  }, [selectedCategory]);

  // products filter 
  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((product) =>
      filters.categories.length === 0 || filters.categories.includes(product.category)
    )
    .filter((product) =>
      filters.brands.length === 0 || filters.brands.includes(product.brand)
    )
    .filter((product) =>
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
    )
    .filter((product) =>
      !filters.inStock || product.stock > 0
    )
    .filter((product) =>
      !filters.discount || product.discountPercentage > 0
    )
    .sort((a, b) => {
      if (sortOption === "new") return b.id - a.id;
      if (sortOption === "price-low") return a.price - b.price;
      if (sortOption === "price-high") return b.price - a.price;
      if (sortOption === "title-asc") return a.title.localeCompare(b.title);
      if (sortOption === "title-desc") return b.title.localeCompare(a.title);
      return 0;
    });

  return (
    <>
      <div className={classes.topBar}>
        <Sort onSortChange={setSortOption} />
        <SearchBar onSearch={setSearchQuery} />
      </div>

      <div className={classes.mainContainer}>
        <Filters filters={filters} setFilters={setFilters} categories={categoriesWithProducts} />

        <div className={classes.products}>
          {isLoading && <div className={classes.loadingSpinner}></div>}

          {error && <h2>{error}</h2>}

          {!isLoading && !error && (
            <div className={classes.productsGrid}>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <Link key={product.id} to={`/product/${product.id}`} className={classes.productLink}>
                    <div className={classes.productCard}>
                      <img src={product.images[0]} alt={product.title} className={classes.image} />
                      <h2 className={classes.productTitle}>{product.title}</h2>
                      <p className={classes.price}>${product.price}</p>
                      <button className={classes.button}>View Details</button>
                    </div>
                  </Link>
                ))
              ) : (
                <p>No products found</p>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
