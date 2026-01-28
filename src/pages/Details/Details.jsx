import { useParams, Link } from "react-router-dom";
import styles from "./Details.module.css";

const coffees = [
  {
    id: 1,
    name: "Espresso",
    price: 2.99,
    desc: "Strong and concentrated coffee served in small shots.",
  },
  {
    id: 2,
    name: "Cappuccino",
    price: 3.99,
    desc: "Equal parts espresso, steamed milk, and milk foam.",
  },
  {
    id: 3,
    name: "Latte",
    price: 4.29,
    desc: "Espresso with steamed milk and a small layer of foam.",
  },
  {
    id: 4,
    name: "Mocha",
    price: 4.79,
    desc: "Espresso with chocolate, steamed milk, and whipped cream.",
  },
  {
    id: 5,
    name: "Americano",
    price: 3.49,
    desc: "Espresso diluted with hot water.",
  },
  {
    id: 6,
    name: "Macchiato",
    price: 3.79,
    desc: "Espresso with a small amount of foamed milk.",
  },
];

function Details() {
  const { id } = useParams();

  // გადაყვანა number-ში
  const coffee = coffees.find((item) => item.id === Number(id));

  if (!coffee) {
    return <h2>Product not found 😢</h2>;
  }

  return (
    <div className={styles.container}>
      <h1>{coffee.name}</h1>

      <p className={styles.price}>${coffee.price}</p>

      <p className={styles.desc}>{coffee.desc}</p>

      <button>Add to Cart</button>

      <br />
      <br />

      <Link to="/">← Back to Menu</Link>
    </div>
  );
}

export default Details;
