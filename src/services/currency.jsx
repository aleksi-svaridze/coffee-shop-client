export async function convertUSDToGEL(usd) {
  const res = await fetch("https://open.er-api.com/v6/latest/USD");
  //   // const res = await fetch("https://bankofgeorgia.ge/api/currencies/convert/USD
  // /GEL?amountFrom=10");

  const data = await res.json();

  const rate = data.rates.GEL;

  return usd * rate;
}
