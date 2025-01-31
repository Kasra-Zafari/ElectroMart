import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import classes from "./index.module.css";

const Cart = () => {
    const { cart, removeFromCart } = useCart();

    return (
        <div className={classes.cartPage}>
            <h1>Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty. <Link to="/products">Go Shopping</Link></p>
            ) : (
                <div className={classes.cartItems}>
                    {cart.map((product, index) => (
                        <div key={index} className={classes.cartItem}>
                            <img src={product.images[0]} alt={product.title} className={classes.cartImage} />
                            <div>
                                <h2>{product.title}</h2>
                                <p>${product.price}</p>
                                <button onClick={() => removeFromCart(product.id)}>Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;
