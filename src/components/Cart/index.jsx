import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import classes from "./index.module.css";

const Cart = () => {
    const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

    return (
        <div className={classes.cartPage}>
            <h1>Your Cart</h1>
            {cart.length === 0 ? (
                <p className={classes.emptyCart}>
                    Your cart is empty. <Link to="/products">Go Shopping</Link>
                </p>
            ) : (
                <div className={classes.cartTable}>
                    <div className={classes.tableHeader}>
                        <span>Product</span>
                        <span>Quantity</span>
                        <span>Unit Price</span>
                        <span>Total Price</span>
                    </div>

                    {cart.map((product) => (
                        <div key={product.id} className={classes.cartRow}>
                            <div className={classes.productInfo}>
                                <img src={product.images[0]} alt={product.title} className={classes.cartImage} />
                                <span className={classes.productTitle}>{product.title}</span>
                            </div>
                            <div className={classes.quantityControls}>
                                {product.quantity > 1 ? (
                                    <button onClick={() => decreaseQuantity(product.id)}>-</button>
                                ) : (
                                    <button onClick={() => removeFromCart(product.id)} className={classes.trashButton}>
                                        🗑️
                                    </button>
                                )}
                                <span>{product.quantity}</span>
                                <button onClick={() => increaseQuantity(product.id)}>+</button>
                            </div>
                            <p className={classes.price}>${product.price}</p>
                            <p className={classes.price}>${(product.price * product.quantity).toFixed(2)}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;
