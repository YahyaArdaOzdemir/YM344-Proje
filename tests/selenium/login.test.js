const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function loginTest() {
  // Initialize Chrome options with the remote-allow-origins argument
  let options = new chrome.Options();
  options.addArguments("--remote-allow-origins=*");

  // Initialize the WebDriver with the Chrome options
  let driver;

  try {
    driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build();

    console.log('Navigating to the home page...');
    // Navigate to the home page
    await driver.get('http://localhost:3000'); // Change URL to your local or deployed app
    console.log('Successfully navigated to the home page');

    console.log('Filling email field...');
    // Find and fill the email field
    await driver.findElement(By.name('email')).sendKeys('test@example.com');
    console.log('Email field filled successfully');

    console.log('Filling password field...');
    // Find and fill the password field
    await driver.findElement(By.name('password')).sendKeys('password123');
    console.log('Password field filled successfully');

    console.log('Clicking login button...');
    // Find and click the login button
    await driver.findElement(By.id('loginButton')).click();
    console.log('Login button clicked successfully');

    console.log('Waiting for dashboard element...');
    // Wait until a specific element that signifies successful login is present
    await driver.wait(until.elementLocated(By.id('dashboard')), 5000);
    console.log('Dashboard element located');

    // Verify the user is redirected to the dashboard
    let currentUrl = await driver.getCurrentUrl();
    if (currentUrl.includes('/dashboard')) {
      console.log('Login test passed');
    } else {
      console.log('Login test failed');
    }
  } catch (err) {
    // Check if the error is related to net::ERR_CONNECTION_REFUSED
    if (err.message.includes('ERR_CONNECTION_REFUSED')) {
      console.error('Connection refused error:', err);
    } else {
      console.error('Error during the login test:', err);
    }
  } finally {
    if (driver) {
      // Quit the WebDriver instance
      await driver.quit();
    }
  }
}

loginTest();
