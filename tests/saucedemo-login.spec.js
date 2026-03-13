const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const ProductsPage = require('../pages/ProductsPage');
const testData = require('../testdata/saucedemo.json');

test.use({ browserName: 'chromium' });

test.describe('Sauce Demo - Login and Products Verification (POM)', () => {

  test('Login as standard user and verify Products page', async ({ page }) => {
    
    // Initialize page objects
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    
    // Get test data
    const credentials = testData.credentials.standard_user;
    const expectedProductCount = testData.products.expected_count;
    const productNames = testData.products.names;
    const expectedPrice = testData.expectedPrice;
    
    // Step 1: Navigate to login page
    await loginPage.navigateToLoginPage();
    
    // Step 2: Verify login page is displayed
    const isLoginPageDisplayed = await loginPage.isLoginPageDisplayed();
    expect(isLoginPageDisplayed).toBeTruthy();
    
    // Step 3: Login with credentials from JSON
    await loginPage.login(credentials.username, credentials.password);
    
    // Step 4: Verify navigation to products page
    const isProductsPageDisplayed = await productsPage.isProductsPageDisplayed();
    expect(isProductsPageDisplayed).toBeTruthy();
    
    // Step 5: Verify Products heading is visible
    const isProductsHeadingVisible = await productsPage.isProductsHeadingVisible();
    expect(isProductsHeadingVisible).toBeTruthy();
    
    // Step 6: Verify product count
    const productCount = await productsPage.getProductCount();
    expect(productCount).toBe(expectedProductCount);
    
    // Step 7: Verify specific products are visible
    expect(await productsPage.isBackpackProductVisible()).toBeTruthy();
    expect(await productsPage.isBikeLightProductVisible()).toBeTruthy();
    expect(await productsPage.isBoltTShirtProductVisible()).toBeTruthy();
    expect(await productsPage.isFleeceJacketProductVisible()).toBeTruthy();
    expect(await productsPage.isOnesieProductVisible()).toBeTruthy();
    expect(await productsPage.isRedTShirtProductVisible()).toBeTruthy();
    
    // Step 8: Verify price is displayed
    const isPriceVisible = await productsPage.isBackpackPriceVisible();
    expect(isPriceVisible).toBeTruthy();
    
    // Step 9: Verify Add to cart button is visible
    const isAddToCartVisible = await productsPage.isAddToCartButtonVisible();
    expect(isAddToCartVisible).toBeTruthy();

  });

});
