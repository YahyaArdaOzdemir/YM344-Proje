const { Builder, By, Key, until } = require('selenium-webdriver');

(async function loginTest() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://ym344quiz.netlify.app/');

    // Enter email
    await driver.findElement(By.css('input[type="email"]')).sendKeys('test@test.com');
    // Enter password
    await driver.findElement(By.css('input[type="password"]')).sendKeys('123456');
    // Click login button
    await driver.findElement(By.css('button[type="submit"]')).click();

    // Wait until login is processed and user is redirected
    await driver.wait(until.urlContains('homepage'), 5000);
  } finally {
    await driver.quit();
  }
})();
