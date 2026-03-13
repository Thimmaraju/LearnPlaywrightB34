class LoginPage {
  constructor(page) {
    this.page = page;
    
    // Locators
    this.usernameField = page.locator('[data-test="username"]');
    this.passwordField = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.pageTitle = page;
  }

  // Navigate to login page
  async navigateToLoginPage() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  // Verify login page is displayed
  async isLoginPageDisplayed() {
    const title = await this.page.title();
    return title === 'Swag Labs';
  }

  // Enter username
  async enterUsername(username) {
    await this.usernameField.fill(username);
  }

  // Enter password
  async enterPassword(password) {
    await this.passwordField.fill(password);
  }

  // Click login button
  async clickLoginButton() {
    await this.loginButton.click();
  }

  // Login with credentials
  async login(username, password) {
    await this.navigateToLoginPage();
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }
}

module.exports = LoginPage;
