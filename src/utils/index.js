export const formatCurrency = (amount, format, code) => {
  return new Intl.NumberFormat(format, {
    style: "currency",
    currency: code,
  }).format(amount);
};
