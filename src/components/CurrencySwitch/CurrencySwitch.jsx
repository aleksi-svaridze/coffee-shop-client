import { useState } from "react";
import styles from "./CurrencySwitch.module.css";
import { convertUSDToGEL } from "../../services/currensy";

function CurrencySwitch({ total }) {
  const [currency, setCurrency] = useState("USD");
  const [converted, setConverted] = useState(null);

  async function handleConvert() {
    if (currency === "USD") {
      const gel = await convertUSDToGEL(total);
      setConverted(gel.toFixed(2));
      setCurrency("GEL");
    } else {
      setCurrency("USD");
      setConverted(null);
    }
  }

  return (
    <div className={styles.box}>
      <p>
        Total: {currency === "USD" ? `$${total.toFixed(2)}` : `${converted} ₾`}
      </p>

      <button onClick={handleConvert}>
        Switch to {currency === "USD" ? "GEL" : "USD"}
      </button>
    </div>
  );
}

export default CurrencySwitch;
