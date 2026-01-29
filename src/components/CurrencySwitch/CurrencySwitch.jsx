import { useState, useEffect } from "react";
import styles from "./CurrencySwitch.module.css";
import { convertUSDToGEL } from "../../services/currency";

function CurrencySwitch({ total = 0 }) {
  const [currency, setCurrency] = useState("USD");
  const [converted, setConverted] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function convert() {
      try {
        setLoading(true);

        if (currency === "USD") {
          setConverted(total);
        } else {
          const gel = await convertUSDToGEL(total);
          setConverted(gel);
        }
      } catch (err) {
        console.error("Convert error:", err);
        setConverted(total);
      } finally {
        setLoading(false);
      }
    }

    convert();
  }, [currency, total]);

  return (
    <div>
      <div className={styles.currencySelector}>
        <label htmlFor="currency">Currency:</label>
        <select
          className={styles.select}
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option value="USD">USD ($)</option>
          <option value="GEL">GEL (₾)</option>
          <option value="GBP">GBP (£)</option>
        </select>
      </div>

      <p>
        {loading
          ? "Loading..."
          : currency === "USD"
            ? `$${Number(converted).toFixed(2)}`
            : currency === "GEL"
              ? `${Number(converted).toFixed(2)} ₾`
              : `${Number(converted).toFixed(2)} £`}
      </p>
    </div>
  );
}

export default CurrencySwitch;
