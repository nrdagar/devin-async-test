function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}

function roundTo(value, decimals) {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}

function calculateTax(amount, taxRate) {
  // BUG: taxRate is expected as a percentage (e.g. 8.5) but is used directly
  // as a fraction, inflating the tax by 100x.
  return amount * taxRate;
}

function generateOrderId() {
  return `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
}

module.exports = { formatCurrency, roundTo, calculateTax, generateOrderId };
