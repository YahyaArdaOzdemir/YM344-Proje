const { Builder, By, until } = require('selenium-webdriver');

(async function loginAndCompleteRandomQuizTest() {
  let driver = await new Builder()
    .forBrowser('chrome')
    .build();

  try {
    console.log('Starting login test...');
    await driver.get('https://ym344quiz.netlify.app/'); // Replace with your actual URL

    // Log in with email and password
    await driver.findElement(By.css('input[type="email"]')).sendKeys('test@test.com');
    await driver.findElement(By.css('input[type="password"]')).sendKeys('123456');
    await driver.findElement(By.css('form button[type="submit"]')).click();
    await driver.sleep(3000);
    
    // Wait for the homepage to load and verify login
    await driver.wait(until.elementLocated(By.css('.home-container')), 5000);
    console.log('Logged in successfully.');

    // Navigate to the Randomized Quiz page
    await driver.findElement(By.xpath('//button[contains(text(), "Randomized Quiz")]')).click();

    // Wait for the quiz page to load
    await driver.wait(until.elementLocated(By.css('.quiz-container')), 5000);
    console.log('Navigated to random quiz page:', await driver.getCurrentUrl());

    // Loop through the quiz questions
    while (true) {
      try {
        // Select a random answer for demonstration purposes
        let options = await driver.findElements(By.css('.options button'));
        let randomOption = options[Math.floor(Math.random() * options.length)];
        await randomOption.click();

        // Wait for a small delay to allow the next question to load
        await driver.sleep(1000);

        // Check if the "Next Question" button is available, click if it is
        let nextButton = await driver.findElement(By.xpath('//button[contains(text(), "Next Question")]'));
        await nextButton.click();
      } catch (err) {
        // If no "Next Question" button, look for the "Finish Quiz" button
        try {
          let finishButton = await driver.findElement(By.xpath('//button[contains(text(), "Finish Quiz")]'));
          await finishButton.click();
          console.log('Finished random quiz.');
          break;
        } catch (finishErr) {
          console.error('Error finishing quiz:', finishErr);
          break;
        }
      }
    }

    // Return to the homepage
    await driver.findElement(By.xpath('//button[contains(text(), "Return to homepage")]')).click();

    // Wait until the home page is loaded
    await driver.wait(until.elementLocated(By.css('.home-container')), 5000);

    // Log the current URL to ensure the navigation back to the homepage was successful
    console.log('Returned to homepage:', await driver.getCurrentUrl());

    console.log('Random quiz navigation and completion test passed');
  } catch (err) {
    console.error('Error during the login and random quiz test:', err);
  } finally {
    // Quit the WebDriver instance
    await driver.quit();
  }
})();
