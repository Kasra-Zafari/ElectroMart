import HomeSlider from "../HomeSlider";
import classes from "./index.module.css";
import { Link } from "react-router-dom";

// Category Card
const CategoryCard = ({ title, image, link }) => (
    <div className={classes.categoryCard}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <Link to={link}>View Products</Link>
    </div>
  );
  
  // Product Card
  const ProductCard = ({ image, title, price, onAddToCart }) => (
    <div className={classes.productCard}>
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>{price} USD</p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
  
  // Testimonial Slider
  const TestimonialSlider = () => (
    <div className={classes.testimonialSlider}>
      <h2>Customer Testimonials</h2>
      <div className={classes.slider}>
        {/* You can use a slider plugin here or implement it dynamically */}
        <div className={classes.testimonial}>
          <p>"Shopping at ElectroMart was quick and easy!"</p>
          <p>- Ali Rezaei</p>
        </div>
        <div className={classes.testimonial}>
          <p>"I had an amazing shopping experience. Will definitely shop again!"</p>
          <p>- Sara Mohammadi</p>
        </div>
      </div>
    </div>
  );


  const HomePage = () => {

    // Sample products
    const featuredProducts = [
      { title: "Mobile Phone", price: "5000", image: "/path/to/image" },
      { title: "Bluetooth Headphones", price: "1500", image: "/path/to/image" },
    ];
  
    const bestSellingProducts = [
      { title: "Asus Laptop", price: "12000", image: "/path/to/image" },
      { title: "Samsung Tablet", price: "6000", image: "/path/to/image" },
    ];
  
    return (
      <div className={classes.home}>
        <HomeSlider />
        
        {/* Categories */}
        <div className={classes.categories}>
          <CategoryCard title="Mobile Phones" image="/path/to/image" link="/category/mobile" />
          <CategoryCard title="Laptops" image="/path/to/image" link="/category/laptop" />
          <CategoryCard title="Headphones" image="/path/to/image" link="/category/headphones" />
          <CategoryCard title="Accessories" image="/path/to/image" link="/category/accessories" />
        </div>
  
        {/* Featured Products */}
        <div className={classes.featuredProducts}>
          <h2>Featured Products</h2>
          <div className={classes.productsGrid}>
            {featuredProducts.map(product => (
              <ProductCard
                key={product.title}
                image={product.image}
                title={product.title}
                price={product.price}
                onAddToCart={() => console.log(`${product.title} added to cart`)}
              />
            ))}
          </div>
        </div>
  
        {/* Best Selling Products */}
        <div className={classes.bestSellingProducts}>
          <h2>Best Sellers</h2>
          <div className={classes.productsGrid}>
            {bestSellingProducts.map(product => (
              <ProductCard
                key={product.title}
                image={product.image}
                title={product.title}
                price={product.price}
                onAddToCart={() => console.log(`${product.title} added to cart`)}
              />
            ))}
          </div>
        </div>
  
        {/* Customer Testimonials */}
        <TestimonialSlider />
  
        {/* Benefits */}
        <div className={classes.benefits}>
          <h2>Why Shop at ElectroMart?</h2>
          <ul>
            <li>Fast Shipping</li>
            <li>Secure Payment</li>
            <li>Money-back Guarantee</li>
            <li>24/7 Support</li>
          </ul>
        </div>
      </div>
    );
  }

export default HomePage;