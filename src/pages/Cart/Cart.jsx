import styles from "./Cart.module.css";
import CurrencySwitch from "../../components/CurrencySwitch/CurrencySwitch";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className={styles.empty}>
          <div className={styles.emptyIcon}>🛒</div>

          <h2>Your cart is empty</h2>

          <p>Add some delicious coffee to your cart!</p>

          <Link to="/" className={styles.backBtn}>
            Back to shop
          </Link>
        </div>
      ) : (
        <>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Coffee</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>{item.qty}</td>
                  <td>${(item.price * item.qty).toFixed(2)}</td>

                  <td>
                    <button
                      className={styles.remove}
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.total}>Total: ${total.toFixed(2)}</div>
          <CurrencySwitch total={total} />;
          <div className={styles.actions}>
            <button className={styles.buy}>Purchase</button>

            <button className={styles.clear} onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
