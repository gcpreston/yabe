export function dollarString(cents) {
  const amount = (cents / 100).toFixed(2);
  return `$${amount}`;
}
