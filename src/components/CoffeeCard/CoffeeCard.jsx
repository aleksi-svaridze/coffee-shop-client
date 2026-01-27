import styles from "./CoffeeCard.module.css";
import { Link } from "react-router-dom";

function CoffeeCard({ coffee }) {
  return (
    <div className={styles.card}>
      <div className={styles.image}></div>

      <div className={styles.body}>
        <h3 className={styles.name}>{coffee.name}</h3>

        <p className={styles.desc}>{coffee.desc}</p>

        <div className={styles.price}>${coffee.price}</div>

        <div className={styles.buttons}>
          <button className={`${styles.btn} ${styles.cart}`}>
            Add to Cart
          </button>

          <Link to={`/details/${coffee.id}`}>
            <button className={`${styles.btn} ${styles.details}`}>
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CoffeeCard;
