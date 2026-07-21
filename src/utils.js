function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}

function roundTo(value, decimals) {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}

function calculateTax(amount, taxRate) {
  return amount * (taxRate / 100);
}

function generateOrderId() {
  return `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
}

module.exports = { formatCurrency, roundTo, calculateTax, generateOrderId };
