import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useUser } from "../../context/UserContext";
import classes from "./index.module.css";

const Header = () => {
    const { cart } = useCart();
    const { userName, logout } = useUser();
    const navigate = useNavigate();
    const location = useLocation();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    const menuItems = [
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: "Contact Us", path: "/contact" },
        { name: "About Us", path: "/about" }
    ];

    const isActive = (path) => location.pathname === path ? classes.active : "";

    return (
        <header className={classes.header}>
            <div>
                <Link to="/">
                    <img src="/logo-wh.png" alt="Logo" />
                </Link>
            </div>
            <nav>
                {menuItems.map(({ name, path }) => (
                    <Link key={path} to={path} className={isActive(path)}>
                        <button>{name}</button>
                    </Link>
                ))}
            </nav>
            <div className={classes.cartContainer}>
                <Link to="/cart">
                    <button className={classes.cartButton}>🛒 Cart <span>{totalItems}</span></button>
                </Link>
                {userName ? (
                    <div className={classes.userMenu}>
                        <button className={classes.loginButton}>{userName}</button>
                        <div className={classes.dropdown}>
                            <button onClick={logout}>Logout</button>
                        </div>
                    </div>
                ) : (
                    <button className={classes.loginButton} onClick={() => navigate("/login", { state: { from: location.pathname } })}>
                        Login
                    </button>
                )}
            </div>
        </header>
    );
};

export default Header;
