import classes from "./index.module.css"
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header className={classes.header}>
            <div>
                <Link to="/">
                    <img src="logo-wh.png" alt="" />
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
            <div>
                <button>Login</button>
            </div>
        </header>
    )
}


export default Header;