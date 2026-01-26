import styles from "./CoffeeCard.module.css";
import { Link } from "react-router-dom";

export default function CoffeeCard({ coffee, addToCart }) {
  return (
    <div className={styles.card}>
      <img src={coffee.image} alt={coffee.name} />

      <h3>{coffee.name}</h3>
      <p>{coffee.description}</p>
      <span>${coffee.price}</span>

      <div className={styles.actions}>
        <button onClick={() => addToCart(coffee)}>Add to Cart</button>

        <Link to={`/details/${coffee.id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
}
