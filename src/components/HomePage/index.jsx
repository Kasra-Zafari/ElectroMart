import HomeSlider from "../HomeSlider";
import classes from "./index.module.css";
import { Link } from "react-router-dom";

const categories = [
  { name: "Beauty", image: "src/img/category-beauty.jpg" },
  { name: "Fragrances", image: "src/img/category-fragrances.jpg" },
  { name: "Furniture", image: "src/img/category-furniture.jpg" },
  { name: "Groceries", image: "src/img/category-groceries.jpg" },
];

const benefits = [
  { icon: "🚚", title: "Fast Delivery", desc: "Receive your order in no time." },
  { icon: "💳", title: "Secure Payment", desc: "Your transactions are safe with us." },
  { icon: "🔄", title: "Easy Returns", desc: "Hassle-free return policy." },
  { icon: "⭐", title: "Customer Satisfaction", desc: "Top-rated service and quality." },
];

const reviews = [
  {
    name: "John Doe",
    comment: "Great shopping experience! Fast delivery and excellent support.",
    image: "src/img/user1.jpg",
  },
  {
    name: "Sarah Smith",
    comment: "Loved the quality of the products. Highly recommended!",
    image: "src/img/user2.jpg",
  },
  {
    name: "Michael Johnson",
    comment: "Superb service and easy returns. Will shop again!",
    image: "src/img/user3.jpg",
  },
];

const HomePage = () => {
  return (
    <div className={classes.home}>
      <HomeSlider />

      {/* Categories */}
      <h2 className={classes.sectionTitle}>Shop by Category</h2>
      <div className={classes.categories}>
        {categories.map((category) => (
          <Link
            key={category.name}
            to={`/products?category=${category.name.toLowerCase()}`}
            className={classes.categoryCard}
          >
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
          </Link>
        ))}
      </div>

      {/* Why Shop With Us */}
      <h2 className={classes.sectionTitle}>Why Shop With Us?</h2>
      <div className={classes.benefits}>
        {benefits.map((benefit, index) => (
          <div key={index} className={classes.benefitCard}>
            <span className={classes.benefitIcon}>{benefit.icon}</span>
            <h3>{benefit.title}</h3>
            <p>{benefit.desc}</p>
          </div>
        ))}
      </div>

      {/* Customer Reviews */}
      <h2 className={classes.sectionTitle}>Customer Reviews</h2>
      <div className={classes.reviews}>
        {reviews.map((review, index) => (
          <div key={index} className={classes.reviewCard}>
            <img src={review.image} alt={review.name} className={classes.reviewImage} />
            <h3>{review.name}</h3>
            <p>"{review.comment}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
