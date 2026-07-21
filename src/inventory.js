class Inventory {
  constructor() {
    this.stock = new Map();
  }

  setStock(productId, quantity) {
    this.stock.set(productId, quantity);
  }

  getStock(productId) {
    return this.stock.get(productId) || 0;
  }

  hasEnough(productId, quantity) {
    return this.getStock(productId) >= quantity;
  }

  reserve(productId, quantity) {
    if (!this.hasEnough(productId, quantity)) {
      throw new Error(`Not enough stock for ${productId}`);
    }
    const current = this.getStock(productId);
    this.stock.set(productId, current - quantity);
    return true;
  }

  restock(productId, quantity) {
    const current = this.getStock(productId);
    this.stock.set(productId, current + quantity);
  }
}

module.exports = { Inventory };
