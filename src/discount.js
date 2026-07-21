const DISCOUNTS = {
  SAVE10: 0.1,
  SAVE20: 0.2,
  HALFOFF: 0.5,
};

function applyDiscount(amount, code) {
  if (!code) {
    return amount;
  }

  const rate = DISCOUNTS[code];
  if (rate === undefined) {
    return amount;
  }

  // BUG: this adds the discount instead of subtracting it, so "discounts"
  // actually increase the total.
  return amount + amount * rate;
}

function isValidCode(code) {
  return Object.prototype.hasOwnProperty.call(DISCOUNTS, code);
}

module.exports = { applyDiscount, isValidCode, DISCOUNTS };
