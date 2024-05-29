const { Builder, By, Key, until } = require('selenium-webdriver');

(async function navigateToPages() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    console.log('Starting navigation test...');

    // Navigate to the first URL
    await driver.get('https://akademik.dogus.edu.tr/');
    console.log('Navigated to:', await driver.getCurrentUrl());

    // Wait for 2 seconds
    await driver.sleep(2000);

    // Navigate to the second URL
    await driver.get('https://akademik.dogus.edu.tr/akademisyenler');
    console.log('Navigated to:', await driver.getCurrentUrl());

    // Wait for 2 seconds
    await driver.sleep(2000);

    // Navigate to the third URL
    await driver.get('https://akademik.dogus.edu.tr/akademisyenler?q=sak%C4%B1n%20can');
    console.log('Navigated to:', await driver.getCurrentUrl());

    // Wait for 2 seconds
    await driver.sleep(2000);

    // Navigate to the fourth URL
    await driver.get('https://akademik.dogus.edu.tr/sakin-can');
    console.log('Navigated to:', await driver.getCurrentUrl());

    // Wait for 4 seconds before closing the browser
    await driver.sleep(4000);

    console.log('Navigation test completed successfully');
  } catch (err) {
    console.error('Error during navigation test:', err);
  } finally {
    // Quit the WebDriver instance
    await driver.quit();
  }
})();
