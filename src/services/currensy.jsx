export async function convertUSDToGEL(amount) {
  const res = await fetch(
    `https://bankofgeorgia.ge/api/currencies/convert/USD/GEL?amountFrom=${amount}`,
  );

  const data = await res.json();

  return data.amount;
}
