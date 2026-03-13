class ProductsPage {
  constructor(page) {
    this.page = page;
    
    // Locators
    this.productsHeading = page.locator('text=Products');
    this.productItems = page.locator('[class*="inventory_item"]');
    
    // Product names
    this.backpackProduct = page.locator('text=Sauce Labs Backpack');
    this.bikeLightProduct = page.locator('text=Sauce Labs Bike Light');
    this.boltTShirtProduct = page.locator('text=Sauce Labs Bolt T-Shirt');
    this.fleeceJacketProduct = page.locator('text=Sauce Labs Fleece Jacket');
    this.onesieProduct = page.locator('text=Sauce Labs Onesie');
    this.redTShirtProduct = page.locator('text=Test.allTheThings() T-Shirt (Red)');
    
    // Price
    this.backpackPrice = page.locator('text=$29.99');
    
    // Add to cart button
    this.addToCartButtons = page.locator('button:has-text("Add to cart")');
  }

  // Verify user is on products page
  async isProductsPageDisplayed() {
    return await this.page.url().includes('inventory.html');
  }

  // Verify products heading is visible
  async isProductsHeadingVisible() {
    return await this.productsHeading.isVisible();
  }

  // Get product count
  async getProductCount() {
    return await this.productItems.count();
  }

  // Verify specific products are visible
  async isBackpackProductVisible() {
    return await this.backpackProduct.isVisible();
  }

  async isBikeLightProductVisible() {
    return await this.bikeLightProduct.isVisible();
  }

  async isBoltTShirtProductVisible() {
    return await this.boltTShirtProduct.isVisible();
  }

  async isFleeceJacketProductVisible() {
    return await this.fleeceJacketProduct.isVisible();
  }

  async isOnesieProductVisible() {
    return await this.onesieProduct.isVisible();
  }

  async isRedTShirtProductVisible() {
    return await this.redTShirtProduct.isVisible();
  }

  // Verify price is visible
  async isBackpackPriceVisible() {
    return await this.backpackPrice.isVisible();
  }

  // Verify add to cart button is visible
  async isAddToCartButtonVisible() {
    return await this.addToCartButtons.first().isVisible();
  }

  // Add product to cart
  async addProductToCart(index = 0) {
    await this.addToCartButtons.nth(index).click();
  }
}

module.exports = ProductsPage;
