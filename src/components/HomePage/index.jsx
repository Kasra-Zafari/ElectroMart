import { Link } from "react-router-dom";
import HomeSlider from "../HomeSlider";
import classes from "./index.module.css";

const categories = [
  { name: "Beauty", image: "/images/beauty.jpg" },
  { name: "Fragrances", image: "/images/fragrances.jpg" },
  { name: "Furniture", image: "/images/furniture.jpg" },
  { name: "Groceries", image: "/images/groceries.jpg" },
];

const HomePage = () => {
  return (
    <div className={classes.home}>
      <HomeSlider />

      {/* category */}
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
    </div>
  );
};

export default HomePage;
