import HomeSlider from "../HomeSlider";
import classes from "./index.module.css";
import { Link } from "react-router-dom";

const categories = [
  { name: "Beauty", image: "src/img/category-beauty.jpg" },
  { name: "Fragrances", image: "src/img/category-fragrances.jpg" },
  { name: "Furniture", image: "src/img/category-furniture.jpg" },
  { name: "Groceries", image: "src/img/category-groceries.jpg" },
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
