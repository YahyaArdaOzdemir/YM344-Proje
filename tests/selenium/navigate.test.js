const { Builder, By, until } = require('selenium-webdriver');

(async function navigateTest() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('http://localhost:3000');

    await driver.findElement(By.id('quizPageLink')).click();

    await driver.wait(until.elementLocated(By.id('quizPage')), 5000);

    let currentUrl = await driver.getCurrentUrl();
    if (currentUrl.includes('/quiz')) {
      console.log('Navigation test passed');
    } else {
      console.log('Navigation test failed');
    }
  } catch (err) {
    console.error('Error during the navigation test:', err);
  } finally {
    await driver.quit();
  }
})();
