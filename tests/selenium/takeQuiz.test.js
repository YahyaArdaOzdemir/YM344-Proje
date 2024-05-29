const { Builder, By, until } = require('selenium-webdriver');

(async function takeQuizTest() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://ym344quiz.netlify.app/');

    await driver.findElement(By.id('quizPageLink')).click();
    await driver.wait(until.elementLocated(By.id('quizPage')), 5000);

    // Assuming quiz questions have IDs like question1, question2, etc.
    await driver.findElement(By.id('question1-optionA')).click();
    await driver.findElement(By.id('question2-optionB')).click();
    // Continue for all questions...

    await driver.findElement(By.id('submitQuizButton')).click();

    await driver.wait(until.elementLocated(By.id('resultsPage')), 5000);

    let currentUrl = await driver.getCurrentUrl();
    if (currentUrl.includes('/results')) {
      console.log('Take quiz test passed');
    } else {
      console.log('Take quiz test failed');
    }
  } catch (err) {
    console.error('Error during the take quiz test:', err);
  } finally {
    await driver.quit();
  }
})();
