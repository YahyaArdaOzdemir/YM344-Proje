const { Builder, By, until } = require('selenium-webdriver');

(async function navigateAndCompleteAllQuizzes() {
  let driver = await new Builder()
    .forBrowser('chrome')
    .build();

  try {
    console.log('Starting test...');

    // Go to the Netlify site
    await driver.get('https://ym344quiz.netlify.app/');

    // Array of quiz button texts
    const quizButtons = [
      'ISTQB CTFL v4.0 Sample Exam A Questions v1.5',
      'ISTQB CTFL v4.0 Sample Exam B Questions v1.4',
      'ISTQB CTFL v4.0 Sample Exam C Questions v1.3',
      'ISTQB CTFL v4.0 Sample Exam D Questions v1.3'
    ];

    for (let i = 0; i < quizButtons.length; i++) {
      // Click on the quiz button
      await driver.wait(until.elementLocated(By.xpath(`//button[contains(text(), "${quizButtons[i]}")]`)), 5000).click();

      // Wait for the quiz page to load
      await driver.wait(until.elementLocated(By.css('.quiz-container')), 5000);

      // Log the current URL
      console.log('Navigated to quiz page:', await driver.getCurrentUrl());

      // Loop through the questions
      while (true) {
        try {
          // Wait for the next button to be clickable
          let nextButton = await driver.wait(until.elementLocated(By.xpath('//button[contains(text(), "Next Question")]')), 5000);

          // Click the next button
          await nextButton.click();

          // Wait for a small delay to allow the next question to load
          await driver.sleep(100);
        } catch (err) {
          // If no "Next Question" button, look for the "Finish Quiz" button
          try {
            let finishButton = await driver.wait(until.elementLocated(By.xpath('//button[contains(text(), "Finish Quiz")]')), 5000);
            await finishButton.click();
            console.log(`Finished quiz: ${quizButtons[i]}`);
            break;
          } catch (finishErr) {
            console.error('Error finishing quiz:', finishErr);
            break;
          }
        }
      }

      // Wait for the "Return to homepage" button and click it
      await driver.wait(until.elementLocated(By.xpath('//button[contains(text(), "Return to homepage")]')), 5000).click();

      // Wait until the home page is loaded
      await driver.wait(until.elementLocated(By.css('.home-container')), 5000);

      // Log the current URL to ensure the navigation back to the homepage was successful
      console.log('Returned to homepage:', await driver.getCurrentUrl());
    }

    console.log('Quiz navigation and completion test passed');
  } catch (err) {
    console.error('Error during the quiz navigation and completion test:', err);
  } finally {
    // Quit the WebDriver instance
    await driver.quit();
  }
})();
