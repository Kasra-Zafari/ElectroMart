import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import classes from "./index.module.css";

const Header = () => {
    const { cart } = useCart();

    return (
        <header className={classes.header}>
            <div>
                <Link to="/">
                    <img src="logo-wh.png" alt="Logo" />
                </Link>
            </div>
            <nav>
                <Link to="/">
                    <button>Home</button>
                </Link>
                <Link to="/products">
                    <button>Products</button>
                </Link>
                <Link to="/contact">
                    <button>Contact Us</button>
                </Link>
            </nav>
            <div className={classes.cartContainer}>
                <Link to="/cart">
                    <button className={classes.cartButton}>
                        🛒 Cart ({cart.length})
                    </button>
                </Link>
                <button>Login</button>
            </div>
        </header>
    );
};

export default Header;
