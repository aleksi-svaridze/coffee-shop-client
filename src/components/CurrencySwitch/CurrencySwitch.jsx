import { useState } from "react";
import { convertToGEL } from "../../services/currency";

export default function CurrencySwitch({ price }) {
  const [gel, setGel] = useState(null);

  const convert = async () => {
    const result = await convertToGEL(price);
    setGel(result);
  };

  return (
    <div>
      <span>${price}</span>

      {gel && <span> / ₾{gel}</span>}

      <button onClick={convert}>Convert</button>
    </div>
  );
}
