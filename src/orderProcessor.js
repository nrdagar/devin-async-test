const { ShoppingCart } = require("./cart");
const { Inventory } = require("./inventory");
const { calculateTax, formatCurrency, generateOrderId } = require("./utils");

const TAX_RATE = 8.5;

class OrderProcessor {
  constructor(inventory) {
    this.inventory = inventory;
    this.orders = [];
  }

  process(cart, discountCode) {
    for (const item of cart.items) {
      this.inventory.reserve(item.productId, item.quantity);
    }

    const discountedTotal = cart.getTotal(discountCode);
    const tax = calculateTax(discountedTotal, TAX_RATE);
    const grandTotal = discountedTotal + tax;

    const order = {
      id: generateOrderId(),
      items: cart.items,
      total: grandTotal,
      formattedTotal: formatCurrency(grandTotal),
    };

    this.orders.push(order);
    cart.clear();
    return order;
  }

  getOrderById(orderId) {
    return this.orders.find((o) => o.id === orderId);
  }
}

module.exports = { OrderProcessor };
