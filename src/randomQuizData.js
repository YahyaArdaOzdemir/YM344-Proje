const randomQuizData = [
  {
    question: "What is the main objective of software testing?",
    answers: [
      { text: "To find defects", isCorrect: true },
      { text: "To prove the system works", isCorrect: false },
      { text: "To certify the software", isCorrect: false },
      { text: "To validate the software", isCorrect: false }
    ]
  },
  {
    question: "Which of the following is a non-functional testing type?",
    answers: [
      { text: "Performance testing", isCorrect: true },
      { text: "Regression testing", isCorrect: false },
      { text: "Smoke testing", isCorrect: false },
      { text: "Sanity testing", isCorrect: false }
    ]
  },
  {
    question: "Which testing level focuses on individual components?",
    answers: [
      { text: "Unit testing", isCorrect: true },
      { text: "Integration testing", isCorrect: false },
      { text: "System testing", isCorrect: false },
      { text: "Acceptance testing", isCorrect: false }
    ]
  },
  {
    question: "What is the purpose of regression testing?",
    answers: [
      { text: "To ensure new changes have not affected existing functionality", isCorrect: true },
      { text: "To test a system end-to-end", isCorrect: false },
      { text: "To verify a system meets user requirements", isCorrect: false },
      { text: "To check if the software can handle a specific load", isCorrect: false }
    ]
  },
  {
    question: "Which of the following is not a black-box testing technique?",
    answers: [
      { text: "Boundary value analysis", isCorrect: false },
      { text: "Equivalence partitioning", isCorrect: false },
      { text: "Decision table testing", isCorrect: false },
      { text: "Statement coverage", isCorrect: true }
    ]
  },
  {
    question: "Which of the following is a white-box testing technique?",
    answers: [
      { text: "Statement testing", isCorrect: true },
      { text: "Boundary value analysis", isCorrect: false },
      { text: "Equivalence partitioning", isCorrect: false },
      { text: "Decision table testing", isCorrect: false }
    ]
  },
  {
    question: "What does SDLC stand for?",
    answers: [
      { text: "Software Development Life Cycle", isCorrect: true },
      { text: "System Development Life Cycle", isCorrect: false },
      { text: "Software Design Life Cycle", isCorrect: false },
      { text: "System Design Life Cycle", isCorrect: false }
    ]
  },
  {
    question: "What is exploratory testing?",
    answers: [
      { text: "An informal test design technique where tests are not predefined", isCorrect: true },
      { text: "A test design technique where tests are derived from requirements", isCorrect: false },
      { text: "A type of regression testing", isCorrect: false },
      { text: "A performance testing type", isCorrect: false }
    ]
  },
  {
    question: "What is a test oracle?",
    answers: [
      { text: "A source to determine expected results to compare with actual results", isCorrect: true },
      { text: "A tool to manage test cases", isCorrect: false },
      { text: "A method to measure code coverage", isCorrect: false },
      { text: "A type of test data", isCorrect: false }
    ]
  },
  {
    question: "Which of the following is a characteristic of good testing?",
    answers: [
      { text: "It finds defects that are not obvious", isCorrect: true },
      { text: "It only tests the main functionalities", isCorrect: false },
      { text: "It is done only at the end of development", isCorrect: false },
      { text: "It ensures no defects are missed", isCorrect: false }
    ]
  },
  {
    question: "What is boundary value analysis?",
    answers: [
      { text: "A test design technique to test boundary values", isCorrect: true },
      { text: "A performance testing technique", isCorrect: false },
      { text: "A method of regression testing", isCorrect: false },
      { text: "A technique for user acceptance testing", isCorrect: false }
    ]
  },
  {
    question: "What is a test case?",
    answers: [
      { text: "A set of conditions under which a tester determines if a system is working correctly", isCorrect: true },
      { text: "A tool to manage defects", isCorrect: false },
      { text: "A document outlining the process for unit testing", isCorrect: false },
      { text: "A type of performance test", isCorrect: false }
    ]
  },
  {
    question: "What is equivalence partitioning?",
    answers: [
      { text: "A test design technique to divide input data into partitions", isCorrect: true },
      { text: "A technique for system testing", isCorrect: false },
      { text: "A method to measure code coverage", isCorrect: false },
      { text: "A performance testing type", isCorrect: false }
    ]
  },
  {
    question: "What is a defect?",
    answers: [
      { text: "A flaw in the system that causes it to fail", isCorrect: true },
      { text: "A method of performance testing", isCorrect: false },
      { text: "A tool used for testing", isCorrect: false },
      { text: "A type of user acceptance testing", isCorrect: false }
    ]
  },
  {
    question: "What is smoke testing?",
    answers: [
      { text: "A preliminary test to check the basic functionality", isCorrect: true },
      { text: "A method to perform load testing", isCorrect: false },
      { text: "A test to determine system performance", isCorrect: false },
      { text: "A technique for user acceptance testing", isCorrect: false }
    ]
  },
  {
    question: "What is the role of a test plan?",
    answers: [
      { text: "A document outlining the scope, approach, and schedule of testing activities", isCorrect: true },
      { text: "A method to automate testing", isCorrect: false },
      { text: "A tool to manage test cases", isCorrect: false },
      { text: "A technique for performance testing", isCorrect: false }
    ]
  },
  {
    question: "What is the difference between verification and validation?",
    answers: [
      { text: "Verification ensures the product is built correctly; validation ensures the right product is built", isCorrect: true },
      { text: "Verification is done after validation", isCorrect: false },
      { text: "Validation is done during development", isCorrect: false },
      { text: "There is no difference", isCorrect: false }
    ]
  },
  {
    question: "What is a use case?",
    answers: [
      { text: "A description of a system’s behavior as it responds to requests from users", isCorrect: true },
      { text: "A document outlining test plans", isCorrect: false },
      { text: "A method to perform integration testing", isCorrect: false },
      { text: "A type of performance test", isCorrect: false }
    ]
  }
];

export default randomQuizData;
