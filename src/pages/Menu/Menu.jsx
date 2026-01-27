import styles from "./Menu.module.css";
import CoffeeCard from "../../components/CoffeeCard/CoffeeCard";

const coffees = [
  {
    id: 1,
    name: "Espresso",
    price: 2.99,
    desc: "Strong coffee",
  },
  {
    id: 2,
    name: "Latte",
    price: 4.29,
    desc: "With milk",
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
