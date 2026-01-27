import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>☕ Bean Brew</div>

      <nav className={styles.nav}>
        <NavLink to="/" className={styles.link}>
          Coffee Menu
        </NavLink>

        <NavLink to="/cart" className={styles.link}>
          Cart
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
