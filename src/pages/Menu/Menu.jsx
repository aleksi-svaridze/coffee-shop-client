import styles from "./Menu.module.css";
import CoffeeCard from "../../components/CoffeeCard/CoffeeCard";

const coffees = [
  {
    id: 1,
    name: "Espresso",
    price: 2.99,
    desc: "Strong and concentrated coffee served in small shots.",
  },
  {
    id: 3,
    name: "Latte",
    price: 4.29,
    desc: "Espresso with steamed milk and a small layer of foam.",
  },
  {
    id: 2,
    name: "Cappuccino",
    price: 3.99,
    desc: "With milEqual parts espresso, steamed milk, and milk foam.",
  },
  {
    id: 4,
    name: "Mocha",
    price: 4.79,
    desc: "Espresso with chocolate, steamed milk, and whipped cream..",
  },
  {
    id: 5,
    name: "Americano",
    price: 3.49,
    desc: "Espresso diluted with hot water..",
  },
  {
    id: 6,
    name: "Macchiato",
    price: 3.79,
    desc: "Espresso with a small amount of foamed milk.",
  },
];

function Menu() {
  return (
    <div>
      <h1 className={styles.title}>Coffee Selection</h1>

      <div className={styles.grid}>
        {coffees.map((item) => (
          <CoffeeCard key={item.id} coffee={item} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
