import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { useCart } from "../../context/CartContext";

function Sidebar() {
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>☕ Bean Brew</div>

      <nav className={styles.nav}>
        <NavLink to="/" className={styles.link}>
          Coffee Menu
        </NavLink>
        <NavLink to="/cart" className={styles.link}>
          Cart
          {totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
