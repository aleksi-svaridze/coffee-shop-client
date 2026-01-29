import { Link } from "react-router-dom";
import styles from "./CoffeeCard.module.css";
import { useCart } from "../../context/CartContext";

function CoffeeCard({ coffee }) {
  const { addToCart } = useCart();

  return (
    <div className={styles.card}>
      <div className={styles.image}></div>

      <h3>{coffee.name}</h3>

      <p className={styles.desc}>{coffee.desc}</p>

      <p className={styles.price}>${coffee.price}</p>

      <div className={styles.actions}>
        <button onClick={() => addToCart(coffee)}>Add to Cart</button>

        <Link to={`/details/${coffee.id}`} className={styles.details}>
          Details
        </Link>
      </div>
    </div>
  );
}

export default CoffeeCard;
