export async function convertUSDToGEL(amount) {
  const res = await fetch("https://open.er-api.com/v6/latest/USD");

  const data = await res.json();

  const rate = data.rates.GEL;

  return amount * rate;
}
