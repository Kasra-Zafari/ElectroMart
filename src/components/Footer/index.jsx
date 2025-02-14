import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useUser } from "../../context/UserContext";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import classes from "./index.module.css";

const Footer = () => {
  const { cart } = useCart();
  const { userName, logout } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.logo}>
          <Link to="/">
            <img src="/logo-wh.png" alt="ElectroMart Logo" />
          </Link>
        </div>

        <nav className={classes.navLinks}>
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/about">About Us</Link>
        </nav>

        <div className={classes.socialLinks}>
          <h4>Follow Us</h4>
          <a href="https://github.com/Kasra-Zafari" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/kasra-zafari-2695a2298/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook /> Facebook
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram /> Instagram
          </a> 
        </div>
      </div>

      <div className={classes.footerBottom}>
        <p>&copy; 2025 ElectroMart. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
