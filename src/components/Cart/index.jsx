import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import classes from "./index.module.css";

const Cart = () => {
    const { cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = useCart();

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

    return (
        <div className={classes.cartPage}>
            <div className={classes.headerContainer}>
                <h1>Your Cart</h1>
                {cart.length > 0 && (
                    <button onClick={clearCart} className={classes.clearCartButton}>
                        Clear Cart
                    </button>
                )}
            </div>
            {cart.length === 0 ? (
                <p className={classes.emptyCart}>
                    Your cart is empty. <Link to="/products" className={classes.emptyCartLink}>Go Shopping</Link>
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
            {cart.length > 0 && (
                <div className={classes.cartSummary}>
                    <p>Total Items: {totalItems}</p>
                    <p>Total Price: ${totalPrice}</p>
                    <button className={classes.checkoutButton}>Proceed to Checkout</button>
                </div>
            )}
        </div>
    );
};

export default Cart;
