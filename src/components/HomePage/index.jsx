import HomeSlider from "../HomeSlider";
import classes from "./index.module.css";
import { Link } from "react-router-dom";

const categories = [
  { name: "Beauty", image: "vite.svg" },
  { name: "Fragrances", image: "vite.svg" },
  { name: "Furniture", image: "vite.svg" },
  { name: "Groceries", image: "vite.svg" },
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
