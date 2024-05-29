const { Builder, By, until } = require('selenium-webdriver');

(async function navigateQuizPagesTest() {
  let driver = await new Builder()
    .forBrowser('chrome')
    .build();

  try {
    console.log('Starting test...');
    // go to netlify site
    await driver.get('https://ym344quiz.netlify.app/');

    // look at url
    console.log('Navigated to:', await driver.getCurrentUrl());

    // quiz button array
    const quizButtons = [
      'ISTQB CTFL v4.0 Sample Exam A Questions v1.5',
      'ISTQB CTFL v4.0 Sample Exam B Questions v1.4',
      'ISTQB CTFL v4.0 Sample Exam C Questions v1.3',
      'ISTQB CTFL v4.0 Sample Exam D Questions v1.3'
    ];

    for (let i = 0; i < quizButtons.length; i++) {
      // press quiz button
      await driver.wait(until.elementLocated(By.xpath(`//button[contains(text(), "${quizButtons[i]}")]`)), 5000).click();

      // wait for page to load
      await driver.wait(until.elementLocated(By.css('.quiz-container')), 5000);

      // look at url
      console.log('Navigated to quiz page:', await driver.getCurrentUrl());

      // go to homepage
      await driver.wait(until.elementLocated(By.xpath('//button[contains(text(), "Return to homepage")]')), 5000).click();

      // wait until home page is loaded
      await driver.wait(until.elementLocated(By.css('.home-container')), 5000);

      // navigation back to homepage worked
      console.log('Returned to homepage:', await driver.getCurrentUrl());
    }

    console.log('Navigation test passed');
  } catch (err) {
    console.error('Error during the navigation test:', err);
  } finally {
    // Quit the WebDriver instance
    await driver.quit();
  }
})();
