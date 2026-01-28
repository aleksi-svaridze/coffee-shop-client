import { useEffect } from "react";
import styles from "./CurrencySwitch.module.css";
import { convertUSDToGEL } from "../../services/currency";

function CurrencySwitch({ priceUSD, currency, setCurrency, setPrice }) {
  useEffect(() => {
    async function convert() {
      if (currency === "USD") {
        setPrice(priceUSD);
        return;
      }

      if (currency === "GEL") {
        const gel = await convertUSDToGEL(priceUSD);
        setPrice(gel);
      }
    }

    convert();
  }, [currency, priceUSD, setPrice]);

  return (
    <div className={styles.wrapper}>
      <span>Currency:</span>

      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className={styles.select}
      >
        <option value="USD">USD ($)</option>
        <option value="GEL">GEL (₾)</option>
        <option value="GBP">GBP (£)</option>
        <option value="EUR">EUR (€)</option>
      </select>
    </div>
  );
}

export default CurrencySwitch;
