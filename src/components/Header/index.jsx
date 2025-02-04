import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useUser } from "../../context/UserContext";
import classes from "./index.module.css";

const Header = () => {
    const { cart } = useCart();
    const { userName, logout } = useUser();

    const navigate = useNavigate();
    const location = useLocation();

    return (
        <header className={classes.header}>
            <div>
                <Link to="/">
                    <img src="/logo-wh.png" alt="Logo" />
                </Link>
            </div>
            <nav>
                <Link to="/"><button>Home</button></Link>
                <Link to="/products"><button>Products</button></Link>
                <Link to="/contact"><button>Contact Us</button></Link>
            </nav>
            <div className={classes.cartContainer}>
                <Link to="/cart">
                    <button className={classes.cartButton}>🛒 Cart ({cart.length})</button>
                </Link>
                {userName ? (
                    <div className={classes.userMenu}>
                        <button className={classes.userButton}>{userName}</button>
                        <div className={classes.dropdown}>
                            <button onClick={logout}>Logout</button>
                        </div>
                    </div>
                ) : (
                    <button onClick={() => navigate("/login", { state: { from: location.pathname } })}>
                        Login
                    </button>
                )}
            </div>
        </header>
    );
};

export default Header;
