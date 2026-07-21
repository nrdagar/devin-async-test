const { applyDiscount } = require("./discount");

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(productId) {
    const index = this.items.findIndex((i) => i.productId === productId);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  getSubtotal() {
    let subtotal = 0;
    // BUG: loop condition uses <= which reads one past the end of the array,
    // producing NaN when it hits the undefined element.
    for (let i = 0; i <= this.items.length; i++) {
      subtotal += this.items[i].price * this.items[i].quantity;
    }
    return subtotal;
  }

  getTotal(discountCode) {
    const subtotal = this.getSubtotal();
    return applyDiscount(subtotal, discountCode);
  }

  clear() {
    this.items = [];
  }
}

module.exports = { ShoppingCart };
