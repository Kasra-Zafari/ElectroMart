import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import classes from "./index.module.css";

const Header = () => {
    const { cart } = useCart();
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const storedUser = localStorage.getItem("userName");
        if (storedUser) setUserName(storedUser);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("userName");
        setUserName("");
    };

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
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    </div>
                ) : (
                    <button onClick={() => navigate("/login")}>Login</button>
                )}
            </div>
        </header>
    );
};

export default Header;
