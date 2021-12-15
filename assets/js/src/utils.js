export function dollarAmount(cents) {
  return cents / 100;
}

export function dollarString(cents) {
  const amount = dollarAmount(cents);
  return `$${amount.toFixed(2)}`;
}
