import CoffeeCard from "../../components/CoffeeCard/CoffeeCard";
import styles from "./Menu.module.css";

const coffees = [
  {
    id: 1,
    name: "Espresso",
    price: 2.99,
    description: "Strong coffee",
    image: "/coffee1.png",
  },
  {
    id: 2,
    name: "Latte",
    price: 4.29,
    description: "Milk coffee",
    image: "/coffee2.png",
  },
];

export default function Menu() {
  const addToCart = (coffee) => {
    console.log("Added:", coffee);
  };

  return (
    <div className={styles.grid}>
      {coffees.map((c) => (
        <CoffeeCard key={c.id} coffee={c} addToCart={addToCart} />
      ))}
    </div>
  );
}
