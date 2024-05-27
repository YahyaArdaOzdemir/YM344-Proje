const quizData = [
  {
    id: 1,
    title: "ISTQB CTFL v4.0 Sample Exam A Questions v1.5",
    questions: [
      {
        text: "Which of the following statements describe a valid test objective?",
        options: [
          "To prove that there are no unfixed defects in the system under test",
          "To prove that there will be no failures after the implementation of the system into production",
          "To reduce the risk level of the test object and to build confidence in the quality level",
          "To verify that there are no untested combinations of inputs"
        ],
        correctAnswer: 2,
        explanation: "Testing finds defects and failures which reduces the level of risk and at the same time gives more confidence in the quality level of the test object.",
        image: null
      },
      {
        text: "Which of the following options shows an example of test activities that contribute to success?",
        options: [
          "Having testers involved during various software development lifecycle (SDLC) activities will help to detect defects in work products",
          "Testers try not to disturb the developers while coding, so that the developers write better code",
          "Testers collaborating with end users help to improve the quality of defect reports during component integration and system testing",
          "Certified testers will design much better test cases than non-certified testers"
        ],
        correctAnswer: 0,
        explanation: "It is important that testers are involved from the beginning of the software development lifecycle (SDLC). It will increase understanding of design decisions and will detect defects early.",
        image: null
      },
      {
        text: "You have been assigned as a tester to a team producing a new system incrementally. You have noticed that no changes have been made to the existing regression test cases for several iterations and no new regression defects were identified. Your manager is happy, but you are not. Which testing principle explains your skepticism?",
        options: [
          "Tests wear out",
          "Absence-of-errors fallacy",
          "Defects cluster together",
          "Exhaustive testing is impossible"
        ],
        correctAnswer: 0,
        explanation: "This principle means that if the same tests are repeated over and over again, eventually these tests no longer find any new defects. This is probably why the tests all passed in this release as well.",
        image: null
      }
      ,
      {
        text: "You work in a team that develops a mobile application for food ordering. In the current iteration the team decided to implement the payment functionality. Which of the following activities is a part of test analysis?",
        options: [
          "Estimating that testing the integration with the payment service will take 8 person-days",
          "Deciding that the team should test if it is possible to properly share payment between many users",
          "Using boundary value analysis (BVA) to derive the test data for the test cases that check the correct payment processing for the minimum allowed amount to be paid",
          "Analyzing the discrepancy between the actual result and expected result after executing a test case that checks the process of payment with a credit card, and reporting a defect"
        ],
        correctAnswer: 1,
        explanation: "This is an example of defining test conditions which is a part of test analysis.",
        image: null
      }
      ,
      {
        text: "Which of the following factors (i-v) have SIGNIFICANT influence on the test process?",
        options: [
          "i, ii have significant influence",
          "i, iii, iv have significant influence",
          "ii, iv, v have significant influence",
          "iii, v have significant influence"
        ],
        correctAnswer: 1,
        explanation: "The identified product risks (iii), new regulatory requirements forcing formal white-box testing (iv), and the SDLC (i) are significant factors influencing the test process.",
        image: 'images/ExamA_5.png'
      }
      ,
      {
        text: "Which of the following tasks belong MAINLY to a testing role?",
        options: [
          "Configure test environments and report on achieved coverage",
          "Maintain the product backlog",
          "Design solutions to new requirements",
          "Create the test plan"
        ],
        correctAnswer: 0, 
        explanation: "Tasks like configuring test environments and reporting on achieved coverage are primarily performed by testing roles within a project.",
        image: null
      }
      ,
      {
        text: "Which of the following skills (i-v) are the MOST important skills of a tester?",
        options: [
          " ii and iv are important ",
          " i, iii and v are important",
          " i, ii and v are important ",
          " iii and iv are important ",
        ],
        correctAnswer: 1,
        explanation: "Skills like having domain knowledge and critical thinking are important for testers, but being a good team player is the most crucial skill as it contributes to effective collaboration and communication within the team.",
        image: "images/ExamA_7.png"
      }
      ,
      {
        text: "How is the whole team approach present in the interactions between testers and business representatives?",
        options: [
          "Business representatives decide on test automation approaches",
          "Testers help business representatives to define test strategy",
          "Business representatives are not part of the whole team approach",
          "Testers help business representatives to create suitable acceptance tests"
        ],
        correctAnswer: 3,
        explanation: "Testers work closely with business representatives to ensure that the desired quality levels are achieved. This includes supporting and collaborating with them to help create suitable acceptance tests.",
        image: null
      }
      ,
      {
        text: "Consider the following rule: 'for every SDLC activity there is a corresponding test activity'. In which SDLC models does this rule hold?",
        options: [
          "Only in sequential SDLC models",
          "Only in iterative SDLC models",
          "Only in iterative and incremental SDLC models",
          "In sequential, incremental, and iterative SDLC models"
        ],
        correctAnswer: 3,
        explanation: "This rule holds for all SDLC models, including sequential, incremental, and iterative models.",
        image: null
      }
      ,
      {
        text: "Which of the following statements BEST describes the acceptance test-driven development (ATDD) approach?",
        options: [
          "In ATDD, acceptance criteria are typically created based on the given/when/then format",
          "In ATDD, test cases are mainly created at component testing and are code-oriented",
          "In ATDD, tests are created, based on acceptance criteria to drive the development of the related software",
          "in ATDD, tests are based on the desired behavior of the software, which makes it easier for team members to understand them"
        ],
        correctAnswer: 2,
        explanation: "In acceptance test-driven development (ATDD), tests are created based on acceptance criteria to drive the development of the related software.",
        image: null
      }
      ,
      {
        text: "Which of the following is NOT an example of the shift left approach?",
        options: [
          "Reviewing the user requirements before they are formally accepted by the stakeholders",
          "Writing a component test before the corresponding code is written",
          "Executing a performance efficiency test for a component during component testing",
          "Writing a test script before setting up the configuration management process"
        ],
        correctAnswer: 3,
        explanation: "Writing a test script before setting up the configuration management process is not an example of the shift left approach.",
        image: null
      }
      ,
      {
        text: "Which of the arguments below would you use to convince your manager to organize retrospectives at the end of each release cycle?",
        options: [
          "Retrospectives are very popular these days and clients would appreciate it if we added them to our processes",
          "Organizing retrospectives will save the organization money because without them end user representatives do not provide immediate feedback about the product",
          "Process weaknesses identified during the retrospective can be analyzed and serve as a to-do list for the organization’s continuous process improvement program",
          "Retrospectives embrace five values including courage and respect, which are crucial to maintain continuous improvement in the organization"
        ],
        correctAnswer: 2,
        explanation: "Regularly conducted retrospectives, when appropriate follow-up activities occur, are critical to continual improvement of development and testing.",
        image: null
      }
      ,
      {
        text: "Which types of failures (1-4) fit which test levels (A-D) BEST?",
        options: [
          "1D, 2B, 3A, 4C",
          "1D, 2B, 3C, 4A",
          "1B, 2A, 3D, 4C",
          "1C, 2B, 3A, 4D"
        ],
        correctAnswer: 0,
        explanation: "Failures in system behavior as it deviates from the user’s business needs (1D) are typically found during acceptance testing (option D). Failures in communication between components (2B) are detected during component integration testing (option B). Failures in logic in a module (3A) are best identified during component testing (option A). Failures in not correctly implemented business rules (4C) are uncovered during system testing (option C).",
        image: 'images/ExamA_13.png'
      }
      ,
      {
        text: "Which of the above tests are executed as regression tests?",
        options: [
          "Only 4, 7, 8, 9",
          "Only 5, 7",
          "Only 4, 6, 8, 9",
          "Only 5, 6"
        ],
        correctAnswer: 1,
        explanation: "TC2 passed in Execution 1 (test 2), so test 5 is a regression test. TC1 passed in Execution 2 (test 4), so test 7 is also a regression test.",
        image: 'images/ExamA_14.png'
      }
      ,
      {
        text: "Which of the following is NOT a benefit of static testing?",
        options: [
          "Having less expensive defect management due to the ease of detecting defects later in the SDLC",
          "Fixing defects found during static testing is generally much less expensive than fixing defects found during dynamic testing",
          "Finding coding defects that might not have been found by only performing dynamic testing",
          "Detecting gaps and inconsistencies in requirements"
        ],
        correctAnswer: 0,
        explanation: "Defect management is not less expensive due to detecting defects later in the SDLC; in fact, it's more costly.",
        image: null
      }
      ,
      {
        text: "Which of the following is a benefit of early and frequent feedback?",
        options: [
          "It improves the test process for future projects",
          "It forces customers to prioritize their requirements based on agreed risks",
          "It is the only way to measure the quality of changes",
          "It helps avoid requirements misunderstandings"
        ],
        correctAnswer: 3,
        explanation: "Early and frequent feedback allows for the early communication of potential quality problems, helping to avoid requirements misunderstandings.",
        image: null
      }
      ,
      {
        text: "The reviews being used in your organization have the following attributes: There is the role of a scribe, the main purpose is to evaluate quality, the meeting is led by the author of the work product, there is individual preparation, and a review report is produced. Which of the following review types is MOST likely being used?",
        options: [
          "Informal review",
          "Walkthrough",
          "Technical review",
          "Inspection"
        ],
        correctAnswer: 1,
        explanation: "Based on the attributes specified, a walkthrough aligns with the characteristics mentioned such as the role of a scribe, evaluation of quality, meeting led by the author, individual preparation, and the production of a review report."
      }
      ,
      {
        text: "Which of these statements is NOT a factor that contributes to successful reviews?",
        options: [
          "Participants should dedicate adequate time for the review",
          "Splitting large work products into small parts to make the required effort less intense",
          "Participants should avoid behaviors that might indicate boredom, exasperation, or hostility to other participants",
          "Failures found should be acknowledged, appreciated, and handled objectively"
        ],
        correctAnswer: 3,
        explanation: "During reviews one can find defects, not failures."
      }
      ,
      {
        text: "Which of the following is a characteristic of experience-based test techniques?",
        options: [
          "Test cases are created based on detailed design information",
          "Items tested within the interface code section are used to measure coverage",
          "The techniques heavily rely on the tester’s knowledge of the software and the business domain",
          "The test cases are used to identify deviations from the requirements"
        ],
        correctAnswer: 2,
        explanation: "This knowledge and experience include expected use of the software, its environment, likely defects, and the distribution of those defects, which is used to define tests. This is a common characteristic of experience-based test techniques.",
        image: null
      }
      ,
      {
        text: "You are testing a simplified apartment search form with two search criteria: floor and garden type. Only ground floor apartments have gardens. The form has a validation mechanism to enforce this rule. How many test cases are needed to achieve 100% equivalence partitioning (EP) coverage?",
        options: [
          "3",
          "4",
          "5",
          "6"
        ],
        correctAnswer: 1,
        explanation: "For 100% equivalence partitioning coverage, we need to cover each partition. In this case, there are 3 floor partitions and 3 garden type partitions. However, only ground floor apartments have gardens, so there are effectively 2 garden type partitions. To cover all partitions, we need 3 test cases for the floor partitions and 1 test case for the garden type partitions, totaling 4 test cases.",
        image: 'images/ExamA_20.png'
      }
      ,
      {
        text: "What is the 2-value Boundary Value Analysis (BVA) coverage for the final result that is achieved with the existing test cases?",
        options: [
          "50%",
          "60%",
          "33.3%",
          "100%"
        ],
        correctAnswer: 0,
        explanation: "The test cases cover six out of twelve boundary values, resulting in a coverage of 50% for the 2-value Boundary Value Analysis (BVA). Therefore, option a) is correct.",
        image: 'images/ExamA_21.png'
      }
      ,
      {
        text: "Your favorite bicycle daily rental store has just introduced a new Customer Relationship Management system and asked you, one of their most loyal members, to test it. Based ONLY on the feature description of the Customer Relationship Management system, which of the above rules describes an impossible situation?",
        options: [
          "R4",
          "R2",
          "R6",
          "R8"
        ],
        correctAnswer: 3,
        explanation: "The impossible situation is described in option d), where it states that a non-member who has missed a deadline cannot receive a discount and only members can receive a gift T-Shirt.",
        image: 'images/ExamA_22.png'
      }
      ,
      {
        text: "You test a system whose lifecycle is modeled by the state transition diagram shown below. The system starts in the INIT state and ends its operation in the OFF state. What is the MINIMAL number of test cases to achieve valid transitions coverage?",
        options: [
          "4",
          "2",
          "7",
          "3"
        ],
        correctAnswer: 3,
        explanation: "The minimal number of test cases to achieve valid transitions coverage is 3. This is because 'test' and 'error' transitions cannot occur in one test case, neither can both 'done' transitions. Therefore, we need at least three test cases to achieve transition coverage: TC1: test, done; TC2: run, error, done; TC3: run, pause, resume, pause, done.",
        image: 'images/ExamA_23.png'
      }
      ,
      {
        text: "Your test suite achieved 100% statement coverage. What is the consequence of this fact?",
        options: [
          "Each instruction in the code that contains a defect has been executed at least once",
          "Any test suite containing more test cases than your test suite will also achieve 100% statement coverage",
          "Each path in the code has been executed at least once",
          "Every combination of input values has been tested at least once"
        ],
        correctAnswer: 0,
        explanation: "Since 100% statement coverage is achieved, every statement, including the ones with defects, must have been executed and evaluated at least once.",
        image: null
      }
      ,
      {
        text: "Which of the following is NOT true for white-box testing?",
        options: [
          "During white-box testing, the entire software implementation is considered",
          "White-box coverage metrics can help identify additional tests to increase code coverage",
          "White-box test techniques can be used in static testing",
          "White-box testing can help identify gaps in requirements implementation"
        ],
        correctAnswer: 3,
        explanation: "White-box testing focuses on the internal structure of the software, which means it doesn't directly address gaps in requirements implementation.",
        image: null
      }
      ,
      {
        text: "Which of the following BEST describes the concept behind error guessing?",
        options: [
          "Error guessing involves using your knowledge and experience of defects found in the past and typical errors made by developers",
          "Error guessing involves using your personal experience of development and the errors you made as a developer",
          "Error guessing requires you to imagine that you are the user of the test object and to guess errors the user could make interacting with it",
          "Error guessing requires you to rapidly duplicate the development task to identify the sort of errors a developer might make"
        ],
        correctAnswer: 0,
        explanation: "Error guessing is based on the tester's knowledge and experience of defects found in the past, typical errors made by developers, and sometimes checklists.",
        image: null
      }
      ,
      {
        text: "Which test technique fits BEST in this situation?",
        options: [
          "Checklist-based testing",
          "Error guessing",
          "Exploratory testing",
          "Branch testing"
        ],
        correctAnswer: 2,
        explanation: "Exploratory testing is most suitable in this situation due to the delay in release, late test execution, and incomplete requirements. With detailed domain knowledge and analytical skills, exploratory testing allows for flexible exploration of the application to uncover defects effectively.",
        image: null
      }
      ,
      {
        text: "Which of the following BEST describes the way acceptance criteria can be documented?",
        options: [
          "Performing retrospectives to determine the actual needs of the stakeholders regarding a given user story",
          "Using the given/when/then format to describe an example test condition related to a given user story",
          "Using verbal communication to reduce the risk of misunderstanding the acceptance criteria by others",
          "Documenting risks related to a given user story in a test plan to facilitate the risk-based testing of a given user story"
        ],
        correctAnswer: 1,
        explanation: "Using the given/when/then format is a way to describe example test conditions, not the acceptance criteria. Acceptance criteria are typically determined through collaboration with stakeholders and can be documented using various formats, but performing retrospectives helps to determine the actual needs and expectations of stakeholders regarding a given user story, making it the best choice for documenting acceptance criteria.",
        image: null
      }
      ,
      {
        text: "Consider the following user story:",
        options: [
          "Test if the editor can save the document after editing the page content",
          "Test if the content owner can log in and make updates to the content",
          "Test if the editor can schedule the edited content for publication",
          "Test if the editor can reassign to another editor to make updates"
        ],
        correctAnswer: 0,
        explanation: "This test covers two acceptance criteria: one about editing the document and one about saving changes.",
        image: 'images/ExamA_29.png'
      }
      ,
      {
        text: "How do testers add value to iteration and release planning?",
        options: [
          "Testers determine the priority of the user stories to be developed",
          "Testers focus only on the functional aspects of the system to be tested",
          "Testers participate in the detailed risk identification and risk assessment of user stories",
          "Testers guarantee the release of high-quality software through early test design during the release planning"
        ],
        correctAnswer: 2,
        explanation: "Testers add value to iteration and release planning by participating in detailed risk identification and risk assessment of user stories. This helps in identifying potential issues early and making informed decisions during planning.",
        image: null
      }
      ,
      {
        text: "Which of the following options are the exit criteria for testing a system?",
        options: [
          "Test environment readiness",
          "The ability to log in to the test object by the tester",
          "Estimated defect density is reached and Regression tests are automated",
          "Requirements are translated into given/when/then format",
        ],
        correctAnswer: 2,
        explanation: "The exit criteria for testing a system typically include reaching the estimated defect density and automating regression tests. This ensures that the system has been thoroughly tested and is ready for release.",
        image: null
      }
      ,
      {
        text: "Your team uses the three-point estimation technique to estimate the test effort for a new high-risk feature. The following estimates were made: What is the final estimate?",
        options: [
          "9 person-hours",
          "14 person-hours",
          "11 person-hours",
          "10 person-hours"
        ],
        correctAnswer: 4,
        explanation: "In the three-point estimation technique, the final estimate (E) is calculated using the formula E = (optimistic + 4 * most likely + pessimistic) / 6. Plugging in the values, we get E = (2 + (4 * 11) + 14) / 6 = 10 person-hours.",
        image: 'images/ExamA_32.png'
      }
      ,
      {
        text: "You are testing a mobile application that allows users to find a nearby restaurant based on the type of food they want to eat. Consider the following list of test cases, priorities (i.e., a smaller number means a higher priority), and dependencies: TC 001: Priority 1, Dependencies: None. TC 002: Priority 2, Dependencies: TC 001. TC 003: Priority 3, Dependencies: TC 002. TC 004: Priority 4, Dependencies: None. TC 005: Priority 3, Dependencies: TC 001, TC 002. Which of the following test cases should be executed as the third one?",
        options: [
          "TC 003",
          "TC 005",
          "TC 002",
          "TC 001"
        ],
        correctAnswer: 1,
        explanation: "Test TC 001 must come first, followed by TC 002, to satisfy dependencies. Afterwards, TC 003 to satisfy priority and then TC 004, followed by TC 005.",
        image: null
      }
      ,
      {
        text: "Consider the following test categories (1-4) and agile testing quadrants (A-D): How do the following test categories map onto the agile testing quadrants?",
        options: [
          "1C, 2A, 3B, 4D",
          "1D, 2A, 3C, 4B",
          "1C, 2B, 3D, 4A",
          "1D, 2B, 3C, 4A"
        ],
        correctAnswer: 1,
        explanation: "Usability testing (Q3) maps to 1C, Component testing (Q1) maps to 2A, Functional testing (Q2) maps to 3B, and Reliability testing (Q4) maps to 4D. Therefore, the correct mapping is 1C, 2A, 3B, 4D.",
        image: 'images/ExamA_34.png'
      }
      ,
      {
        text: "During a risk analysis, the following risk was identified and assessed: What measure is proposed to be taken in response to this analyzed risk?",
        options: [
          "Risk acceptance",
          "Contingency plan",
          "Risk mitigation",
          "Risk transfer"
        ],
        correctAnswer: 3,
        explanation: "The proposed actions are related to testing, which is a form of risk mitigation.",
        image: 'images/ExamA_35.png'
      }
      ,
      {
        text: "Which work product can be used by an agile team to show the amount of work that has been completed and the amount of total work remaining for a given iteration?",
        options: [
          "Acceptance criteria",
          "Defect report",
          "Test completion report",
          "Burndown chart"
        ],
        correctAnswer: 4,
        explanation: "Burndown charts are a graphical representation of work left to do versus time remaining. They are updated daily, so they can continuously show the work progress.",
        image: null
      }
      ,
      {
        text: "You need to update one of the automated test scripts to be in line with a new requirement. Which process indicates that you create a new version of the test script in the test repository?",
        options: [
          "Traceability management",
          "Maintenance testing",
          "Configuration management",
          "Requirements engineering"
        ],
        correctAnswer: 3,
        explanation: "Configuration management involves version control of all test items, including test scripts. When you update a test script to align with a new requirement, creating a new version in the test repository is part of configuration management.",
        image: null
      }
      ,
      {
        text: "You received the following defect report from the developers stating that the anomaly described in this test report is not reproducible. What critical information is MISSING from this test report that would have been useful for the developers?",
        options: [
          "Expected result and actual result",
          "References and defect status",
          "Test environment and test item",
          "Priority and severity"
        ],
        correctAnswer: 3,
        explanation: "We do not know in which test environment the anomaly was detected, and we also do not know which application (and its version) is affected.",
        image: 'images/ExamA_38.png'
      }
      ,
      {
        text: "Which test activity does a data preparation tool support?",
        options: [
          "Test monitoring and control",
          "Test analysis and design",
          "Test implementation and execution",
          "Test completion"
        ],
        correctAnswer: 3,
        explanation: "A data preparation tool supports the test implementation and execution activity by helping in creating or acquiring the necessary testware, such as test data, for test execution.",
        image: null
      }
      ,
      {
        text: "Which item correctly identifies a potential risk of performing test automation?",
        options: [
          "It may introduce unknown regressions in production",
          "Sufficient efforts to maintain testware may not be properly allocated",
          "Testing tools and associated testware may not be sufficiently relied upon",
          "It may reduce the time allocated for manual testing"
        ],
        correctAnswer: 1,
        explanation: "Wrong allocation of effort to maintain testware is a risk.",
        image: null
      }
      ,
      {
        text: "You were given a task to analyze and fix causes of failures in a new system to be released. Which activity are you performing?",
        options: [
          "Debugging",
          "Software testing",
          "Requirement elicitation",
          "Defect management"
        ],
        correctAnswer: 0,
        explanation: "Debugging involves finding, analyzing, and fixing the causes of failures in a system or component.",
        image: null
      }
      ,
      {
        text: "In many software organizations the test department is called the Quality Assurance (QA) department. Is this sentence correct or not and why?",
        options: [
          "It is correct. Testing and QA mean exactly the same thing",
          "It is correct. These names can be used interchangeably because both testing and QA focus their activities on the same quality issues",
          "It is not correct. Testing is something more; testing includes all activities with regard to quality. QA focuses on quality-related processes",
          "It is not correct. QA is focused on quality-related processes while testing concentrates on demonstrating that a component or system is fit for purpose and to detect defects"
        ],
        correctAnswer: 3,
        explanation: "Testing and quality assurance are not the same. Testing involves all activities in the software development lifecycle concerned with evaluating a component or system for quality and fitness for purpose, while quality assurance focuses on establishing and improving quality-related processes.",
        image: null
      }
      ,
      {
        text: "A phone ringing in a neighboring cubicle distracts a programmer causing him to improperly program the logic that checks the upper boundary of an input variable. Later, during system testing, a tester notices that this input field accepts invalid input values. Which of the following correctly describes an incorrectly coded upper bound?",
        options: [
          "The root cause",
          "A failure",
          "An error",
          "A defect"
        ],
        correctAnswer: 4,
        explanation: "The problem in the code, where the input field accepts invalid input values due to improper programming of the upper boundary logic, is a defect.",
        image: null
      }
      ,
      {
        text: "Consider the following testware. Which test activity produces this testware as an output?",
        options: [
          "Test planning",
          "Test monitoring and control",
          "Test analysis",
          "Test design"
        ],
        correctAnswer: 4,
        explanation: "The testware under consideration is a test charter. Test charters are the output from test design.",
        image: 'images/ExamAA_4.png'
      }
      ,
      {
        text: "Which of the following is the BEST example of how traceability supports testing?",
        options: [
          "Performing the impact analysis of a change will give information about the completion of the tests",
          "Analyzing the traceability between test cases and test results will give information about the estimated level of residual risk",
          "Performing the impact analysis of a change will help selecting the right test cases for regression testing",
          "Analyzing the traceability between the test basis, the test objects and the test cases will help in selecting test data to achieve the assumed coverage of the test object"
        ],
        correctAnswer: 3,
        explanation: "Performing the impact analysis of the changes helps in selecting the test cases for the regression test.",
        image: null
      }
      ,
      {
        text: "Which of the following BEST explains a benefit of independence of testing?",
        options: [
          "The use of an independent test team allows project management to assign responsibility for the quality of the final deliverable to the test team",
          "If a test team external to the organization can be afforded, then there are distinct benefits in terms of this external team not being so easily swayed by the delivery concerns of project management and the need to meet strict delivery deadlines",
          "An independent test team can work separately from the developers, need not be distracted with project requirement changes, and can restrict communication with the developers to defect reporting through the defect management system",
          "When specifications contain ambiguities and inconsistencies, assumptions are made on their interpretation, and an independent tester can be useful in questioning those assumptions and the interpretation made by the developer"
        ],
        correctAnswer: 3,
        explanation: "When specifications contain ambiguities and inconsistencies, assumptions are made on their interpretation, and an independent tester can be useful in questioning those assumptions and the interpretation made by the developer.",
        image: null
      }
      ,
      {
        text: "You are working as a tester in the team that follows the V-model. The choice of software development lifecycle (SDLC) model impacts the timing of testing, which of the following statement is NOT true?",
        options: [
          "Dynamic testing can be performed early in the SDLC",
          "Static testing can be performed early in the SDLC",
          "Test planning can be performed early in the SDLC",
          "Acceptance testing can be performed early in the SDLC"
        ],
        correctAnswer: 0,
        explanation: "In sequential development models, in the initial phases, testers participate in requirement reviews, test analysis, and test design. The executable code is usually created in the later phases, so dynamic testing cannot be performed early in the SDLC"
      }
      ,
      {
        text: "Which of the following are advantages of DevOps?",
        options: [
          "i, ii, iv are advantages",
          "iii, v are advantages",
          "i, iii are advantages",
          "ii, iv, v are advantages"
        ],
        correctAnswer: 2,
        explanation: "Consider: i. Is true. Faster product release and faster time to market is an advantage of DevOps iii. Is true. Constant availability of executable software is an advantage",
        image: 'images/ExamAA_8.png'
      }
      ,
      {
        text: "You work as a tester in a project on a mobile application for food ordering for one of your clients. The client sent you a list of requirements. One of them, with high priority, says 'The order must be processed in less than 10 seconds in 95% of the cases'. You created a set of test cases in which a number of random orders were made, the processing time measured, and the test results were checked against the requirements. What test type did you perform?",
        options: [
          "Functional, because the test cases cover the user’s business requirement for the system",
          "Non-functional, because they measure the system’s performance",
          "Functional, because the test cases interact with the user interface",
          "Structural, because we need to know the internal structure of the program to measure the order processing time"
        ],
        correctAnswer: 1,
        explanation: "This is an example of performance testing, a type of non-functional testing.",
        image: null
      }
      ,
      {
        text: "Your organization’s test strategy suggests that once a system is going to be retired, data migration shall be tested. As part of what test type is this testing MOST likely to be performed?",
        options: [
          "Maintenance testing",
          "Regression testing",
          "Component testing",
          "Integration testing"
        ],
        correctAnswer: 0,
        explanation: "When a system is retired, testing data migration is a form of maintenance testing.",
        image: null
      }
      ,
      {
        text: "The following is a list of the work products produced in the SDLC. Which of them can be reviewed?",
        options: [
          "i and iv can be reviewed",
          "i, ii, iii and iv can be reviewed",
          "i, ii, iii, and v can be reviewed",
          "iii, iv, v can be reviewed"
        ],
        correctAnswer: 2,
        explanation: "Only third-party executable code cannot be reviewed. ",
        image: 'images/ExamAA_11.png'
      }
      ,
      {
        text: "Decide which of the following statements (i-v) are true for static testing.",
        options: [
          "i, iv, v are true for static testing",
          "i, iii, iv are true for static testing",
          "ii, iii are true for static testing",
          "ii, iv, v are true for static testing"
        ],
        correctAnswer: 3,
        explanation: "ii, iv, v are true for static testing.",
        image: 'images/ExamAA_12.png'
      }
      ,
      {
        text: "Which of the following statements about formal reviews is TRUE?",
        options: [
          "Some reviews do not require more than one role",
          "The review process has several activities",
          "Documentation to be reviewed is not distributed before the review meeting, with the exception of the work product for specific review types",
          "Defects found during the review are not reported since they are not found by dynamic testing"
        ],
        correctAnswer: 1,
        explanation: "Formal reviews involve multiple activities such as planning, preparation, review meeting, and follow-up actions.",
        image: null
      }
      ,
      {
        text: "What task may management take on during a formal review?",
        options: [
          "Taking overall responsibility for the review",
          "Deciding what is to be reviewed",
          "Ensuring the effective running of review meetings, and mediating, if necessary",
          "Recording review information such as review decisions"
        ],
        correctAnswer: 1,
        explanation: "Management may decide what work products are to be reviewed during a formal review.",
        image: null
      }
      ,
      {
        text: "A wine storage system uses a control device that measures the wine cell temperature T (measured in °C, rounded to the nearest degree) and alarms the user if it deviates from the optimal value of 12. What is the MINIMAL set of test inputs that achieves 100% of the desired coverage?",
        options: [
          "11, 12, 13",
          "10, 12, 14",
          "10, 11, 12, 13, 14",
          "10, 11, 13, 14"
        ],
        correctAnswer: 2,
        explanation: "The correct answer is 10, 11, 12, 13, 14.",
        image: 'images/ExamAA_15.png'
      }
      ,
      {
        text: "Which of the following statements about branch testing is CORRECT?",
        options: [
          "If a program includes only unconditional branches, then 100% branch coverage can be achieved without executing any test cases",
          "If the test cases exercise all unconditional branches in the code, then 100% branch coverage is achieved",
          "If 100% statement coverage is achieved, then 100% branch coverage is also achieved",
          "If 100% branch coverage is achieved, then all decision outcomes in each decision statement in the code are exercised"
        ],
        correctAnswer: 3,
        explanation: "If 100% branch coverage is achieved, then all decision outcomes in each decision statement in the code are exercised. This statement accurately describes the relationship between branch coverage and decision outcomes.",
        image: null
      }
      ,
      {
        text: "You are testing a mobile application that allows customers to access and manage their bank accounts. You are running a test suite that involves evaluating each screen, and each field on each screen, against a general list of user interface best practices derived from a popular book on the topic that maximizes attractiveness, ease-of-use, and accessibility for such applications. Which of the following options BEST categorizes the test technique you are using?",
        options: [
          "Black-box",
          "Exploratory",
          "Checklist-based",
          "Error guessing"
        ],
        correctAnswer: 2,
        explanation: "The correct answer is Checklist-based. The test technique being used involves systematically evaluating each screen and field against a general list of user interface best practices, which resembles a checklist of test conditions to be checked.",
        image: null
      }
      ,
      {
        text: "Which of the following BEST describe the collaborative approach to user story writing?",
        options: [
          "User stories are created by testers and developers and then accepted by business representatives",
          "User stories are created by business representatives, developers, and testers together",
          "User stories are created by business representatives and verified by developers and testers",
          "User stories are created in a way that they are independent, negotiable, valuable, estimable, small, and testable"
        ],
        correctAnswer: 1,
        explanation: "User stories are created by business representatives, developers, and testers together. Collaborative user story writing involves all stakeholders working together to create user stories, ensuring a shared understanding and vision.",
        image: null
      }
      ,
      {
        text: "Consider the following part of a test plan. Testing will be performed using component testing and component integration testing. The regulations require to demonstrate that 100% branch coverage is achieved for each component classified as critical. Which part of the test plan does this part belong to?",
        options: [
          "Communication",
          "Risk register",
          "Context of testing",
          "Test approach"
        ],
        correctAnswer: 3,
        explanation: "The correct answer is Test approach. This part of the test plan outlines the approach for testing, specifically mentioning the use of component testing and integration testing, as well as the requirement for achieving 100% branch coverage for critical components.",
        image: null
      }
      ,
      {
        text: "Your team uses planning poker to estimate the test effort for a newly required feature. There is a rule in your team that if there is no time to reach full agreement and the variation in the results is small, applying rules like 'accept the number with the most votes' can be applied. After two rounds, the consensus was not reached, so the third round was initiated. You can see the test estimation results in the table below. Which of the following is the BEST example of the next step?",
        options: [
          "The product owner has to step in and make a final decision",
          "Accept 13 as the final test estimate as this has most of the votes",
          "No further action is needed. Consensus has been reached",
          "Remove the new feature from the current release because consensus has not been reached"
        ],
        correctAnswer: 1,
        explanation: "The correct answer is Accept 13 as the final test estimate as this has most of the votes. When there is no time to reach full agreement and the variation in the results is small, applying rules like 'accept the number with the most votes' can be a practical approach to move forward with the test estimation.",
        image: 'images/ExamAA_20.png'
      }
      ,
      {
        text: "Which of the following is NOT true regarding the test pyramid?",
        options: [
          "The test pyramid emphasizes having a larger number of tests at the lower test levels",
          "The closer to the top of the pyramid, the more formal your test automation should be",
          "Usually, component testing and component integration testing are automated using API based tools",
          "For system testing and acceptance testing, the automated tests are typically created using GUI-based tools"
        ],
        correctAnswer: 1,
        explanation: "The correct answer is The closer to the top of the pyramid, the more formal your test automation should be. This statement is not true because the test pyramid emphasizes that as you move towards the top, the number of tests should reduce, not the formality of automation.",
        image: null
      }
      ,
      {
        text: "During risk analysis the team considered the following risk: 'The system allows too high a discount for a customer'. The team estimated the risk impact to be very high. What can one say about the risk likelihood?",
        options: [
          "It is also very high. High risk impact always implies high risk likelihood",
          "It is very low. High risk impact always implies low risk likelihood",
          "One cannot say anything about risk likelihood. Risk impact and risk likelihood are independent.",
          "Risk likelihood is not important with such a high-risk impact. One does not need to define it."
        ],
        correctAnswer: 2,
        explanation: "The correct answer is One cannot say anything about risk likelihood. Risk impact and risk likelihood are independent. The likelihood of a risk occurring is not determined solely by its impact. They are two separate factors that need to be assessed independently during risk analysis.",
        image: null
      }
      ,
      {
        text: "The following list contains risks that have been identified for a new software product to be developed: Which of them are project risks?",
        options: [
          "i, iv are project risks",
          "iv, v are project risks",
          "i, iii are project risks",
          "ii, v are project risks"
        ],
        correctAnswer: 0,
        explanation: "The correct answer is i, iv are project risks. Risks i and iv are related to project management aspects such as budget and schedule, which makes them project risks. Risks ii, iii, and v are product risks, as they are related to the software product itself.",
        image: 'images/ExamAA_23.png'
      }
      ,
      {
        text: "Which of the following is an example of how product risk analysis influences thoroughness and scope of testing?",
        options: [
          "The test manager monitors and reports the level of all known risks on a daily basis so the stakeholders can make an informed decision on the release date",
          "One of the identified risks was 'Lack of support of open-source databases', so the team decided to integrate the system with an open-source database",
          "During the quantitative risk analysis, the team estimated the total level of all identified risks and reported it as the total residual risk before testing",
          "Risk assessment revealed a very high level of performance risks, so it was decided to perform detailed performance efficiency testing early in the SDLC"
        ],
        correctAnswer: 3,
        explanation: "This shows how risk analysis impacts the thoroughness of testing (i.e., the level of detail). In this case, due to the very high level of performance risks identified, the decision was made to perform detailed performance efficiency testing early in the software development life cycle (SDLC), which influences the thoroughness and scope of testing.",
        image: null
      }
      ,
      {
        text: "Which of the following options are common metrics used for reporting on the quality level of the test object?",
        options: [
          "Number of defects found during system testing and number of defects found divided by the size of a work product",
          "Total effort on test design divided by the number of designed test cases",
          "Number of executed test procedures",
          "Time needed to repair a defect"
        ],
        correctAnswer: 0,
        explanation: "The number of defects found during system testing reflects the quality of the test object by indicating the number of issues encountered. Similarly, the number of defects found divided by the size of a work product (defect density) is also a common metric used to assess the quality level of the test object.",
        image: null
      }
      ,
      {
        text: "Which of the following pieces of information contained in a test progress report is the LEAST useful for business representatives?",
        options: [
          "Impediments to testing",
          "Branch coverage achieved",
          "Test progress",
          "New risks within the test cycle"
        ],
        correctAnswer: 1,
        explanation: "Branch testing is a technical metric used by developers and technical testers. This information is of no interest to business representatives.",
        image: null
      }      
    ]
  },
  {
    id: 2,
    title: "ISTQB CTFL v4.0 Sample Exam B Questions v1.4",
    questions: [
      {
        text: "Which of the following is an example of why testing is necessary?",
        options: [
          "Dynamic testing increases quality by causing test objects to fail in ways that could never be achieved by the users",
          "Static testing is used by developers to identify failures in their program code earlier than can be achieved through dynamic testing",
          "Static analysis provides evidence to customers that the elements of the system that provide no outputs are fit for release",
          "Reviews increase the quality of requirements specifications and lead to fewer changes being needed in derived work products"
        ],
        correctAnswer: 3,
        explanation: "Reviews are a form of static testing that can be applied from the very start of the software development lifecycle and are used to find defects that can be removed before subsequent development activities waste effort on faulty requirements. If the defects are not detected and removed early on, then when the defect is found derived work products, such as the design and code, will need to be changed as they were based on faulty requirements.",
        image: null
      },
      {
        text: "Which of the following statements about quality assurance (QA) and/or quality control (QC) is correct?",
        options: [
          "QA is performed as part of testing",
          "Testing is performed as part of QC",
          "Testing is another term for QC",
          "Testing is performed as part of QA"
        ],
        correctAnswer: 1,
        explanation: "QC aims to achieve appropriate levels of quality by focusing on identifying and correcting product defects. Testing is a significant part of QC and helps to uncover these defects.",
        image: null
      },
      {
        text: "One of the ‘principles of testing’ states that exhaustive testing is impossible. Which of the following is an example of addressing this principle in practice?",
        options: [
          "Creating test cases that cover every possible specified output",
          "Documenting all possible test input variations and prioritizing these based on importance",
          "Starting testing as early as possible with reviews and other static testing approaches",
          "Using equivalence partitioning and boundary value analysis to generate test cases"
        ],
        correctAnswer: 3,
        explanation: "The use of equivalence partitioning and boundary value analysis to generate test cases is one way to address the principle as these test techniques provide a systematic way to derive a finite subset of all possible test cases.",
        image: null
      },
      {
        text: "Which test activity involves working with test data requirements, test conditions, test environment requirements and test cases?",
        options: [
          "Test design",
          "Test execution",
          "Test analysis",
          "Test implementation"
        ],
        correctAnswer: 0,
        explanation: "Test design involves using test conditions to create test cases and other necessary testware, such as test data requirements and test charters for exploratory testing. Test environment requirements are also specified, including the necessary infrastructure and tools.",
        image: null
      },
      {
        text: "Which of the following is MOST likely to impact how testing is performed for a given test object?",
        options: [
          "The average level of experience of the organization’s marketing team",
          "The knowledge of users that a new system is being developed for them",
          "The number of years’ experience of the members of the test team",
          "The end user’s organizational structure for a commercial music streaming application"
        ],
        correctAnswer: 2,
        explanation: "The number of years’ experience of the members of the performance testing team will help to determine the capabilities and knowledge (e.g., of different tools and defect types) that the team members will apply when they are testing.",
        image: null
      },
      {
        text: "Which of the following statements is a CORRECT example of the value of traceability?",
        options: [
          "Traceability between the mitigated risks and passing test cases provides a means of determining the level of residual risk",
          "Traceability between user requirements and test execution results provides a means of measuring project progress against business goals",
          "Traceability between testers and failing test cases provides a means of determining the skill level of the testers",
          "Traceability between the identified risks and written test conditions provides a means of determining which risks are worth testing"
        ],
        correctAnswer: 1,
        explanation: "Traceability between user requirements and test execution results provides an indication of which user requirements have been tested and so provides a means of measuring project progress (in the context of testing) against business goals.",
        image: null
      },
      {
        text: "Which of the following is MOST likely to be an example of a tester using a generic skill when testing?",
        options: [
          "The tester’s deep knowledge of a variety of computer games meant that they got on well with one of the developers who was also into gaming",
          "The tester was a former pilot and was better able to understand the acceptance criteria for the helicopter control system",
          "The tester previously worked as a programmer and used their skills in this area to better communicate with the business analysts",
          "The tester was very careful not to make mistakes when they methodically generated test cases prior to starting their exploratory testing session"
        ],
        correctAnswer: 1,
        explanation: "Domain knowledge that can be used to understand and communicate with end-users and business representatives is one of the generic skills required by testers. A tester with experience as a pilot would make them better able to appreciate the acceptance criteria for the helicopter control system.",
        image: null
      },
      {
        text: "Which of the following is an advantage of the whole-team approach?",
        options: [
          "It allows team members to take on any role at any time",
          "It only needs a single team to support the complete development project",
          "It embeds business representatives alongside developers in the same team",
          "It generates a team synergy that benefits the entire project"
        ],
        correctAnswer: 3,
        explanation: "By leveraging the diverse skill sets of each team member most effectively, the whole-team approach fosters superior team dynamics, promotes robust communication and collaboration, and generates a team synergy that benefits the entire project.",
        image: null
      },
      {
        text: "Which of the following statements about the chosen software development lifecycle is CORRECT?",
        options: [
          "If agile software development is used, system test automation replaces the need for regression testing",
          "If a sequential development model is used, then the dynamic testing is typically restricted to later in the lifecycle",
          "If an iterative development model is used, then component testing is typically performed manually by developers",
          "If an incremental development model is used, then static testing is done in early increments and dynamic testing in later increments"
        ],
        correctAnswer: 1,
        explanation: "If a sequential development model is used, then early in the lifecycle no code is available for execution, and so during this time static testing (e.g., reviews) is performed. Later in the lifecycle, when code is available for execution, dynamic testing is possible. Note, however, that preparation for dynamic testing will often occur early in any software development lifecycle.",
        image: null
      },
      {
        text: "Which of the following is a good testing practice that applies to all software development lifecycles?",
        options: [
          "Testers should review work products as part of the next development phase",
          "Testers should review work products as soon as drafts are available",
          "Testers should review work products before test analysis and design begins",
          "Testers should review work products immediately after they are published"
        ],
        correctAnswer: 1,
        explanation: "Testers should review work products as soon as drafts are available to enable early testing as part of a shift-left approach.",
        image: null
      },
      {
        text: "Which of the following is an example of a test-first approach to development?",
        options: [
          "Test-Driven Development",
          "Coverage-Driven Development",
          "Quality-Driven Development",
          "Feature-Driven Development"
        ],
        correctAnswer: 0,
        explanation: "Test-Driven Development (TDD) is a well-known example of a test-first approach to development.",
        image: null
      },
      {
        text: "Which of the following statements about DevOps is CORRECT?",
        options: [
          "To speed up releases, continuous integration is used to encourage developers to submit code quickly without the need to complete component testing",
          "To be able to update and release systems on a more frequent basis, many automated regression tests are required to reduce the danger of regression",
          "To treat both developers and operations equally, the testers will allocate more effort to release testing by operations using a shift-right approach",
          "To create increased synergy between testers, developers and operations, the testing must become fully automated with no manual testing"
        ],
        correctAnswer: 1,
        explanation: "DevOps enhances testing in several ways, such as by providing fast feedback on code quality, automated regression testing that minimizes regression risk, and promoting a shift-left approach with high-quality code submission and component tests.",
        image: null
      },
      {
        text: "Which of the following is MOST likely to be performed as part of system testing?",
        options: [
          "Security testing of a credit management system by an independent test team",
          "Testing the interface of a currency exchange system with an external banking system",
          "Beta testing of a remote learning system by courseware developers",
          "Testing interactions between the user interface and database of a human resources system"
        ],
        correctAnswer: 0,
        explanation: "System testing examines the behavior and capabilities of the whole system, and independent testing can include security testing to identify vulnerabilities.",
        image: null
      },
      {
        text: "Which of the following statements is CORRECT?",
        options: [
          "Regression tests increase in number as the project progresses, whereas the number of confirmation tests decreases as the project progresses",
          "Regression tests are created and run when the test object is fixed, whereas confirmation tests are run whenever the test object is enhanced",
          "Regression testing is concerned with checking that the operational environment remains unchanged, whereas confirmation testing is concerned with testing changes to the test object",
          "Regression testing is concerned with adverse effects in unchanged code, whereas confirmation testing is concerned with testing changed code"
        ],
        correctAnswer: 3,
        explanation: "d) Is correct. Regression testing ensures that changes do not have negative effects on unchanged software. Confirmation testing verifies that a defect has been fixed – and so is concerned with changed code",
        image: null
      },
      {
        text: "Which of the following is an example of a defect that can be found by static testing but NOT by dynamic testing?",
        options: [
          "Lack of usability provided through the user interface",
          "Code with no path that reaches it",
          "Poor response times for most of the expected users",
          "Required features that are not implemented in the code"
        ],
        correctAnswer: 1,
        explanation: "b) Is correct. A code review can detect code that cannot be reached by any path, however dynamic tests can only exercise reachable code and cannot determine that code cannot be reached without running every possible combination of inputs and input states, which is impractical for real code",
        image: null
      },
      {
        text: "Which of the following is a benefit of early and frequent stakeholder feedback?",
        options: [
          "Managers are aware of which developers are less productive",
          "It allows project managers to prioritize their stakeholder interactions",
          "It facilitates early communication of potential quality issues",
          "End users better understand why the delivery of the work product is delayed"
        ],
        correctAnswer: 2,
        explanation: "c) Is correct. Obtaining feedback from stakeholders early and often in the software development process can be highly beneficial as it facilitates early communication of potential quality issues, can prevent misunderstandings about requirements, and ensures that any changes in stakeholder requirements are understood and implemented sooner",
        image: null
      },
      {
        text: "Given the following task descriptions:\n1. The quality characteristics to be evaluated and the exit criteria are selected\n2. Everyone has access to the work product\n3. Anomalies are identified in the work product\n4. Anomalies are discussed\nAnd the following review activities\nA. Individual review\nB. Review initiation\nC. Planning\nD. Communication and analysis\nWhich of the following BEST matches the task descriptions and activities?",
        options: [
          "1B, 2C, 3D, 4A",
          "1B, 2D, 3C, 4A",
          "1C, 2A, 3B, 4D",
          "1C, 2B, 3A, 4D"
        ],
        correctAnswer: 3,
        explanation: "d) Is correct. The correct match is: 1C, 2B, 3A, 4D",
        image: null
      },
      {
        text: "Given the following roles in reviews:\n1. Scribe\n2. Review leader\n3. Facilitator\n4. Manager\nAnd the following responsibilities in reviews:\nA. Ensures the effective running of review meetings and the setting up a safe review environment\nB. Records review information, such as decisions and new anomalies found during the review meeting\nC. Decides what is to be reviewed and provides resources, such as staff and time for the review\nD. Takes overall responsibility for the review such as organizing when and where the review will take place\nWhich of the following BEST matches the roles and responsibilities?",
        options: [
          "1A, 2B, 3D, 4C",
          "1A, 2C, 3B, 4D",
          "1B, 2D, 3A, 4C",
          "1B, 2D, 3C, 4A"
        ],
        correctAnswer: 2,
        explanation: "c) Is correct. The correct match is: 1B, 2D, 3A, 4C",
        image: null
      },
      {
        text: "Which of the following statements BEST describes the difference between decision table testing and branch testing?",
        options: [
          "In decision table testing, the test cases are derived from the decision statements in the code. In branch testing, the test cases are derived from knowledge of the control flow of the test object.",
          "In decision table testing, the test cases are derived from the specification that describes the business logic. In branch testing the test cases are based on anticipation of potential defects in the source code.",
          "In decision table testing, the test cases are derived from knowledge of the control flow of the test object. In branch testing, test cases are derived from the specification that describes the business logic.",
          "In decision table testing, the test cases are independent of how the software is implemented. In branch testing, test cases can be created only after the design or implementation of the code."
        ],
        correctAnswer: 3,
        explanation: "d) Is correct. Decision table testing is a black-box test technique, so it is based on an analysis of the specified behavior of the test object without reference to its internal structure. Therefore, the test cases are independent of how the software is implemented. Branch testing is a white-box test technique, so test cases are based on an analysis of the test object’s internal structure and processing. As the test cases are dependent on how the software is designed and coded, they can only be created after the design or implementation of the test object",
        image: null
      },
      {
        text: "Customers of the TestWash car wash chain have cards with a record of the number of washes they have bought so far. The initial value is 0. After entering the car wash, the system increases the number on the card by one. This value represents the number of the current wash. Based on this number the system decides what discount the customer is entitled to. For every tenth wash the system gives a 10% discount, and for every twentieth wash, the system gives a further 40% discount (i.e., a 50% discount in total). Which of the following sets of input data (understood as the numbers of the current wash) achieves the highest equivalence partition coverage?",
        options: [
          "19, 20, 30",
          "11, 12, 20",
          "1, 10, 50",
          "10, 29, 30, 31"
        ],
        correctAnswer: 0,
        explanation: "a) Is correct. 19 covers the “no discount” partition, 20 covers the “50% discount” partition, and 30 covers the “10% discount” partition. These three values cover all three of the valid equivalence partitions",
        image: null
      },
      {
        text: "You are testing a form that verifies the correctness of the length of the password given as input. The form accepts a password with the correct length and rejects a password that is too short or too long. The password length is correct if it has between 6 and 12 characters inclusive. Otherwise, it is considered incorrect. At first, the form is empty (password length = 0). You apply boundary value analysis to the “password length” variable. Your set of test cases achieves 100% 2-value boundary value coverage. The team decided that due to the high risk of this component, test cases should be added to ensure 100% 3-value boundary value coverage. Which additional password lengths should be tested to achieve this?",
        options: [
          "4, 5, 13, 14",
          "7, 11",
          "1, 5, 13",
          "1, 4, 7, 11, 14"
        ],
        correctAnswer: 3,
        explanation: "The domain for the password length has three equivalence partitions: passwords too short {0, 1, …, 4, 5}, passwords OK {6, 7, …, 11, 12}, passwords too long {13, 14, …} To achieve full coverage for 3-value BVA we need to test the following values: 0, 1, 4, 5, 6, 7, 11, 12, 13, 14. Since 2-value BVA is already covered, this means that we have already tested the passwords of length: 0, 5, 6, 12 and 13. This means that the additional lengths that need to be covered to move from 2-value to 3-value are: 1, 4, 7, 11 and 14. Thus: a) Is not correct b) Is not correct c) Is not correct d) Is correct",
        image: null
      },
      {
        text: "The following decision table contains the rules for determining the risk of atherosclerosis.\nRule 1\nRule 2\nRule 3\nRule 4\nConditions\nCholesterol (mg/dl)\nRule 5\n≤124\n≤ 124\nBlood pressure (mm Hg)\n≤ 140\n125 – 200\n125 – 200\n≥ 201\n> 140\nAction\n≤ 140\n> 140 – Risk level very low\nlow\nmedium\nYou designed the test cases with the following test input data:\nTC1:\nCholesterol = 125 mg/dl\nhigh\nvery high\nBlood pressure = 141 mm Hg\nTC2:\nTC3:\nTC4:\nTC5:\nCholesterol = 200 mg/dl\nCholesterol = 124 mg/dl\nCholesterol = 109 mg/dl\nCholesterol = 201 mg/dl\nBlood pressure = 201 mm Hg\nBlood pressure = 201 mm Hg\nBlood pressure = 200 mm Hg\nBlood pressure = 140 mm Hg\nWhat is the decision table coverage achieved by these test cases?",
        options: [
          "40%",
          "60%",
          "80%",
          "100%"
        ],
        correctAnswer: 1,
        explanation: "There are five columns in the decision table. Each test case covers one of them. TC1 and TC2 both cover Rule 4 TC3 and TC4 both cover Rule 2 TC5 covers Rule 5 So, these five test cases cover three out of five columns, achieving a coverage of (3/5)*100% = 60%. Therefore, option b) is the CORRECT option. Thus: a) Is not correct b) Is correct c) Is not correct d) Is not correct",
        image: null
      },
      {
        text: "A storage system can store up to three elements and is modeled by the following state transition diagram. The variable N represents the number of currently stored elements. Which of the following test cases, represented as sequences of events, achieves the highest level of valid transitions coverage?",
        options: [
          "Add, Remove, Add, Add, Add",
          "Add, Add, Add, Add, Remove, Remove",
          "Add, Add, Add, Remove, Remove",
          "Add, Add, Add, Remove, Add"
        ],
        correctAnswer: 2,
        explanation: "Let us refer to the transitions with E1, …, E5 as in the picture. The variable N denotes the number of elements currently stored. Each “Add” event increases it by 1, and each “Remove” event decreases it by 1. Notice, that when the “Add” event occurs while being in the NOT FULL state, the state changes to FULL only if N=2. If N<2, the system stays in the NOT FULL state. If N=0, no “Remove” action is possible. Similarly, if N=3, no “Add” action is possible. Test a) can be written as E1, E3, E3, E2, E4 (so covers 4 out of 5 valid transitions, achieving 80% valid transitions coverage). Test b) is infeasible, because after the first three “Add” actions the system is in the FULL state and there is no valid transition going from FULL triggered by the “Add” event. After the first three transitions only 60% of valid transitions coverage is achieved. Test c) can be written as E1, E2, E4, E5, E3 (so covers 5 out of 5 valid transitions, achieving 100% valid transitions coverage). Test d) can be written as E1, E2, E4, E5, E4 (so covers 4 out of 5 valid transitions, achieving 80% valid transitions coverage). Thus: a) Is not correct b) Is not correct c) Is correct d) Is not correct",
        image: null
      },
      {
        text: "You run two test cases, T1 and T2, on the same code. Test T1 achieved 40% statement coverage and test T2 achieved 65% statement coverage. Which of the following sentences must be necessarily true?",
        options: [
          "The test suite composed with tests T1 and T2 achieves 105% statement coverage",
          "There exists at least one statement that must have been executed by both T1 and T2",
          "At least 5% of the statements in the code under test are non-executable",
          "The test suite composed of tests T1 and T2 achieves full branch coverage"
        ],
        correctAnswer: 1,
        explanation: "b) Is correct. If the statements executed by T1 and T2 were disjoint, the coverage of the test suite {T1, T2} would be 105%, which is impossible (see answer a). Therefore, at least 5% of executable statements must have been executed by both T1 and T2",
        image: null
      },
      {
        "text": "Let the branch coverage metric be defined as BCov = (X / Y) * 100%. What do X and Y represent in this formula?",
        "options": [
          "X = number of decision outcomes exercised by the test cases, Y = total number of decision outcomes in the code",
          "X = number of conditional branches exercised by the test cases, Y = total number of branches in the code",
          "X = number of branches exercised by the test cases, Y = total number of branches in the code",
          "X = number of conditional branches exercised by the test cases, Y = total number of decision outcomes in the code"
        ],
        "correctAnswer": 2,
        "explanation": "Branch coverage is measured as the number of branches exercised by the test cases divided by the total number of branches, and is expressed as a percentage."
      },
      {
        "text": "Which of the following statements provide the BEST rationale for using exploratory testing?",
        "options": [
          "Testers have not been allocated enough time for test design and test execution",
          "The existing test strategy requires that testers use formal, black-box test techniques",
          "The specification is written in a formal language that can be processed by a tool",
          "Testers are the members of an agile team and have good programming skills"
        ],
        "correctAnswer": 0,
        "explanation": "Exploratory testing is useful when there are few or inadequate specifications or there is significant time pressure on the testing."
      },
      {
        "text": "Which of the following BEST fits as an element of the checklist used in checklist-based testing?",
        "options": [
          "The developer made an error when implementing the code",
          "The achieved statement coverage exceeds 85%",
          "The program works correctly regarding functional and non-functional requirements",
          "The error messages are written in language that the user can understand"
        ],
        "correctAnswer": 3,
        "explanation": "This is an example of a test condition that can be checked by a human."
      },
      {
        "text": "Consider the following acceptance criteria for a user story written from the perspective of an online store owner. Given that the user is logged in and on the homepage, When the user clicks on the \"Add Item\" button, Then the \"Create Item\" form should appear, And the user should be able to input a name and price for the new item. In what format is this acceptance criteria written?",
        "options": [
          "Rule-oriented",
          "Scenario-oriented",
          "Product-oriented",
          "Process-oriented"
        ],
        "correctAnswer": 1,
        "explanation": "This is a Given/When/Then format, which is scenario-oriented."
      },
      {
        "text": "Your team analyzes the following user story in order to define the acceptance criteria: As a registered customer, I want to be able to view my previous orders on the company's website, so that I can keep track of my purchases. Which of the following test cases will NOT be relevant for this user story?",
        "options": [
          "Input: the customer logs into their account on the website and clicks the “see order history” button. Expected output: the system shows a list of all the customer’s previous orders, including the date, order number, and total cost",
          "Input: the customer clicks on an order from the order list. Expected output: the system displays the individual items purchased, along with their prices and quantities",
          "Input: the customer clicks “Sort ascending” button on the order history screen. Expected output: the system shows the order history sorted by order number in ascending order",
          "Input: an unregistered customer registers as a new customer with a valid e-mail address that does not already exist in the customer database. Expected output: the system accepts the registration and creates the account"
        ],
        "correctAnswer": 3,
        "explanation": "The test case is related to the registration process, which is not discussed in the user story. The user story is about viewing previous orders."
      },
      {
        "text": "Your team follows the process that uses the DevOps delivery pipeline. The first three steps of this process are: (1) Code development (2) Submit code into a version control system and merge it into the “test” branch (3) Perform component testing for the submitted code. Which of the following is BEST suited to be the entry criterion for step (2) of this pipeline?",
        "options": [
          "Static analysis returns no high severity warnings for the submitted code",
          "System version control reports no conflicts when merging code into the “test” branch",
          "Component tests are compiled and ready to be executed",
          "Statement coverage is at least 80%"
        ],
        "correctAnswer": 0,
        "explanation": "This is something that can (and should) be checked before the code is submitted to version control."
      },
      {
        "text": "You want to estimate the test effort for the new project using estimation based on ratios. You calculate the test-to-development effort ratio using averaged data for both development effort and test effort from four historical projects similar to the new one. The table shows this historical data.\nProject\nDevelopment effort ($)\nP1\n800,000\nTest effort ($)\nP2\n40,000\n1,200,000\nP3\n130,000\n600,000\nP4\n70,000\n1,000,000\n120,000\nThe estimated development effort for the new project is $800,000. What is your estimate of the test effort in this project?",
        "options": [
          "$40,000",
          "$80,000",
          "$81,250",
          "$82,500"
        ],
        "correctAnswer": 1,
        "explanation": "The average development effort is $900,000 and the average test effort is $90,000 (calculated from the four projects). The average test-to-development effort ratio is 1:10 ($90,000 : $900,000), which means that historically, on average, the test effort is 10% of the development effort. So if the development effort is estimated to be $800,000, the estimated test effort is estimated as: 10% * $800,000 = 0.1 * $800,000 = $80,000."
      },
      {
        "text": "You are testing a web application that allows users to SEARCH for products, VIEW product details, ADD products to a shopping cart, and place an ORDER. You have prepared the following five test cases, which you want to execute according to their priorities:\nTC1: SEARCH product A Priority: medium\nTC2: VIEW product A details Priority: low\nTC3: ADD product B to a shopping cart Priority: medium\nTC4: ADD product C to a shopping cart Priority: high\nTC5: place an ORDER Priority: high\nYou also identified the following logical dependencies between test cases:\n- SEARCH functionality must be tested before VIEW functionality can be tested, as product details rely on search functionality.\n- VIEW functionality must be tested before ADD functionality, as adding products relies on the availability of accurate product details.\n- ADD functionality must be tested before ORDER functionality, as placing an order relies on the availability of accurate shopping cart information.\nWhich test case should be executed as the fourth one?",
        "options": [
          "TC3",
          "TC1",
          "TC2",
          "TC4"
        ],
        "correctAnswer": 0,
        "explanation": "According to the dependencies, SEARCH tests must be executed first, then VIEW tests, then ADD tests and, at the end, ORDER tests. Within each of these groups the order is determined by the priorities of the test cases. So, TC1 must be executed first, then TC2, then TC4 followed by TC3, and then TC5 as the last one. Thus: TC3 will be the fourth test case executed."
      },
      {
        "text": "According to the testing quadrants model, which of the following falls into quadrant Q1 (“technology facing” and “support the team”)?",
        "options": [
          "Usability testing",
          "Functional testing",
          "User acceptance testing",
          "Component integration testing"
        ],
        "correctAnswer": 3,
        "explanation": "Component integration testing is technology facing testing that supports the team (guides the development) (Q1)."
      },
      {
        text: "Given the following risks: \n1. Ineffective loop implementation causes long system responses \n2. Consumers change their preferences \n3. Flooding of the server room \n4. Patients above a certain age receive inaccurate reports \nAnd the following mitigation activities: \nA. Risk acceptance \nB. Performance testing \nC. Using boundary value analysis as the test technique \nD. Risk transfer \nWhich of the following BEST matches the risks with the mitigation activities?",
        options: [
          "1C,  2D,  3A,  4B",
          "1B,  2D,  3A,  4C",
          "1B,  2A,  3D,  4C",
          "1C,  2A,  3D,  4B"
        ],
        correctAnswer: 2,
        explanation: "The correct combinations of risk and mitigation are: 1B, 2A, 3D, and 4C."
      },
      {
        text: "Which of the following is a product quality metric?",
        options: [
          "Mean time to failure",
          "Number of defects found",
          "Requirements coverage",
          "Defect detection percentage"
        ],
        correctAnswer: 0,
        explanation: "Mean time to failure measures maturity, so it is a product quality metric."
      },
      {
        text: "You are a member of a test team located in North America, developing a product for a client located in Europe. The team is agile and follows the DevOps approach and uses a continuous integration/continuous delivery pipeline. Which of the following is the LEAST effective way to communicate test progress to the customer?",
        options: [
          "Face-to-face",
          "Dashboards",
          "Email",
          "Video conferencing"
        ],
        correctAnswer: 0,
        explanation: "The client is in a different location and time zone, so it may be difficult to communicate face-to-face."
      },
      {
        text: "Which of the following BEST describes an example of how configuration management (CM) supports testing?",
        options: [
          "Having the version number of the environment, the CM tool can retrieve the version numbers of libraries, stubs and drivers used in that environment",
          "Having a record of the values of the test inputs, the CM tool can execute the test cases for these configurations and calculate test coverage",
          "Having data about the date of purchase of a software license, the CM tool automatically generates information about the fact that the product license is coming to an end",
          "Having the version number of the test case, the CM tool can automatically generate test data for this test case"
        ],
        correctAnswer: 0,
        explanation: "For a complex configuration item (e.g., a test environment), CM records the items it consists of, their relationships, and versions."
      },
      {
        text: "You are testing a sort function that gets a set of numbers as input and returns the same set of numbers sorted in ascending order. The log from the test execution looks as follows. \nEnvironment configuration: sort function build 2.002.2182, test case set: TCS-3, # of TCs: 5 \nTest run ID: 736 \nStart 12:43:21.003 \n12:43:21.003  Execution of TC1.  Input: 3.  \n12:43:21.003  Execution of TC2.  Input: 3 11 6 5.  \n12:43:21.004  Execution of TC3.  Input: 8 7 3 7 1.  \n12:43:21.005  Execution of TC4.  Input: -2 -2 -2 -3 -3.  Output: -3 -2.  \n12:43:21.005  Execution of TC5.  Input: 0 -2 0 3 4 4.  Output: -2 0 3 4.  \nEnd 12:43:21.005 \nTotal time of test cycle: 0:00:00.002 \nOutput: 3.  \nOutput: 3 5 6 11.  \nOutput: 1 3 7 8.  \nResult: passed \nResult: passed \nResult: failed \nResult: failed \nResult: failed \nWhich of the following provides the BEST description of the failure that can be used in a defect report?",
        options: [
          "The system fails to sort several sets of numbers. Reference: TC3, TC4, TC5.",
          "The system seems to disregard duplicates while sorting. Reference: TC3, TC4, TC5.",
          "The system fails to sort negative numbers. Reference: TC4, TC5.",
          "TC3, TC4 and TC5 have defects (duplicate input data) and should be corrected."
        ],
        correctAnswer: 1,
        explanation: "From the test results it seems that the system ignores duplicates and sorts the list disregarding the repetitions. This is probably the cause of failures in TC3, TC4, TC5. Such information may help the developer to find the defect and fix it more efficiently."
      },
      {
        text: "Given the following descriptions: \n1. Support workflow tracking  \n2. Facilitate communication \n3. Virtual machines \n4. Support reviews \nAnd the following test tool categories: \nA. Static testing tools  \nB. Tools supporting scalability and deployment standardization \nC. DevOps tools \nD. Collaboration tools  \nWhich of the following BEST matches the descriptions and categories?",
        options: [
          "1A, 2B, 3C, 4D",
          "1B, 2D, 3C, 4A",
          "1C, 2D, 3B, 4A",
          "1D, 2C, 3A, 4B"
        ],
        correctAnswer: 2,
        explanation: "The correct match is: 1C, 2D, 3B, 4A."
      },
      {
        text: "Which of the following is MOST likely to be a benefit of test automation?",
        options: [
          "It provides coverage measures that are too complicated for humans to derive",
          "It shares responsibility for the testing with the tool vendor",
          "It removes the need for critical thinking when analyzing test results",
          "It generates test cases from an analysis of the program code"
        ],
        correctAnswer: 0,
        explanation: "Test automation can provide measures that are too complicated for humans to derive, such as white-box test coverage measures for all but the most trivial code."
      }
    ]
  },
  {
    id: 3,
    title: "ISTQB CTFL v4.0 Sample Exam C Questions v1.3",
    questions: [
      {
        text: "Which of the following is a typical test objective?",
        options: [
          "Validating that documented requirements are met",
          "Causing failures and identifying defects",
          "Initiating errors and identifying root causes",
          "Verifying the test object meets user expectations"
        ],
        correctAnswer: 1,
        explanation: "Causing failures and identifying defects is probably the most common objective of dynamic testing."
      },
      {
        text: "Which of the following statements BEST describes the difference between testing and debugging?",
        options: [
          "Testing causes failures while debugging fixes failures",
          "Testing is a negative activity while debugging is a positive activity",
          "Testing determines that defects exist while debugging removes defects",
          "Testing finds the cause of defects while debugging fixes the cause of defects"
        ],
        correctAnswer: 2,
        explanation: "Testing determines that defects exist either directly through observation of the defect in reviews (or by a tool in static analysis), or indirectly by causing a failure in dynamic testing. Debugging is a separate activity from testing (normally performed by developers) and is concerned with locating defects (only for dynamic testing) and fixing the defects."
      },
      {
        text: "The ‘absence-of-defects fallacy’ is one of the principles of testing. Which of the following is an example of addressing this principle in practice?",
        options: [
          "Explaining that it is not possible for testing to show the absence of defects",
          "Supporting the end users to perform acceptance testing",
          "Ensuring that no implementation defects remain in the delivered system",
          "Modifying tests that cause no failures to ensure few defects remain"
        ],
        correctAnswer: 1,
        explanation: "By supporting the end user to perform acceptance testing it should be possible to validate that the system meets users' needs and expectations."
      },
      {
        text: "Which of the following test activities are MOST likely to involve the application of boundary value analysis and equivalence partitioning?",
        options: [
          "Test implementation",
          "Test design",
          "Test execution",
          "Test monitoring"
        ],
        correctAnswer: 1,
        explanation: "Test design is likely to involve the use of test techniques to create test cases from test conditions and coverage items."
      },
      {
        text: "Given the following testware:\n1. Coverage items\n2. Change requests\n3. Test execution schedule\n4. Prioritized test conditions\nAnd the following test activities\nA. Test analysis\nB. Test design\nC. Test implementation\nD. Test completion\nWhich of the following BEST shows the testware produced by the activities?",
        options: [
          "1B, 2D, 3C, 4A",
          "1B, 2D, 3A, 4C",
          "1D, 2C, 3A, 4B",
          "1D, 2C, 3B, 4A"
        ],
        correctAnswer: 0,
        explanation: "The correct match is: 1B, 2D, 3C, 4A."
      },
      {
        text: "Which of the following statements about the different testing roles is MOST likely to be CORRECT?",
        options: [
          "In Agile software development, the test management role is the primary responsibility of the team, while the testing role is primarily the responsibility of a single individual from outside the team",
          "The testing role is primarily responsible for test monitoring and control, while the test management role is primarily responsible for test planning and test completion",
          "In Agile software development, test management activities that span multiple teams are handled by a test manager outside the team, while some test management tasks are handled by the team itself",
          "The test management role is primarily responsible for test analysis and test design, while the testing role is primarily responsible for test implementation and execution"
        ],
        correctAnswer: 2,
        explanation: "In Agile software development, some of the test management tasks may be handled by the Agile team itself. However, for test activities that span multiple teams within an organization, test managers outside of the development team may perform these tasks."
      },
      {
        text: "Which of the following is an advantage of the whole-team approach?",
        options: [
          "Teams with no testers",
          "Improved team dynamics",
          "Specialist team members",
          "Larger team sizes"
        ],
        correctAnswer: 1,
        explanation: "By leveraging the diverse skill sets of each team member most effectively, the whole-team approach fosters superior team dynamics, promotes robust communication and collaboration, and generates a synergistic effect that benefits the entire project."
      },
      {
        text: "Which of the following statements about the independence of testing is CORRECT?",
        options: [
          "Independent testers will find defects due to their different technical perspective from developers, but their independence may lead to an adversarial relationship with the developers",
          "Developers’ familiarity with their own code means they only find a few defects in it, however their shared software background with testers means these defects would also be found by the testers",
          "Independent testing requires testers who are outside the developer’s team and ideally from outside the organization, however these testers find it difficult to understand the application domain",
          "Testers from outside the developer’s team are more independent than testers from within the team, but the testers from within the team are more likely to be blamed for delays in product release"
        ],
        correctAnswer: 0,
        explanation: "The primary benefit of independence in testing is that testers are more likely to identify different types of failures and defects compared to developers, due to their varied backgrounds, technical viewpoints, and potential biases, including cognitive bias. However, the main disadvantage of independence in testing is that testers may become isolated from the development team, leading to communication problems, a lack of collaboration, and potentially an adversarial relationship, with testers being blamed for delays and bottlenecks in the release process."
      },
      {
        text: "Which of the following is a good testing practice that applies to all software development lifecycles?",
        options: [
          "For each test level, there is a corresponding development level",
          "For each test objective, there is a corresponding development objective",
          "For every software test activity, there is a corresponding user activity",
          "For every software development activity, there is a corresponding test activity"
        ],
        correctAnswer: 3,
        explanation: "Quality control applies to all development activities, meaning that every software development activity has a corresponding test activity."
      },
      {
        text: "Which of the following is an example of a test-first approach to development?",
        options: [
          "Component Test-Driven Development",
          "Integration Test-Driven Development",
          "System Test-Driven Development",
          "Acceptance Test-Driven Development"
        ],
        correctAnswer: 3,
        explanation: "Acceptance Test-Driven Development (ATDD) is a well-known example of a test-first approach to development."
      },
      {
        text: "Which of the following provides the BEST description of the shift-left approach?",
        options: [
          "When agreed by the developers, manual activities on the left-hand side of the test process are automated to support the principle of ‘early testing saves time and money’",
          "Where cost-effective, test activities are moved to be performed earlier in the software development lifecycle (SDLC) to reduce the total cost of quality by reducing the number of defects found later in the SDLC",
          "When they have spare time available, testers are required to automate tests for regression testing, starting with component tests and component integration tests",
          "When available, testers are trained to perform tasks early in the SDLC to allow more test activities to be automated later in the SDLC"
        ],
        correctAnswer: 1,
        explanation: "Shift-left emphasizes the importance of starting testing earlier in the software development lifecycle (SDLC). Implementing shift-left testing necessitates additional training, and increased effort and costs during the early stages of the SDLC, nevertheless, overall savings should be higher."
      },
      {
        text: "Which of the following is LEAST likely to occur as a result of a retrospective?",
        options: [
          "The quality of future test objects improves by identifying improvements in development practices",
          "Test efficiency improves by speeding up the configuration of test environments through automation",
          "End users’ understanding of the development and test processes is improved",
          "Automated test scripts are enhanced through feedback from developers"
        ],
        correctAnswer: 2,
        explanation: "Participants at retrospectives typically include testers, developers, architects, product owners, and business analysts, but end users are rarely invited or attend these meetings – and they are also unlikely to receive any reports from these meetings. So, it is very unlikely that they will learn and understand more about the development and test processes through retrospectives."
      },
      {
        text: "Which of the following test levels is MOST likely being performed if the testing is focused on validation and is not being performed by testers?",
        options: [
          "Component testing",
          "Component integration testing",
          "System integration testing",
          "Acceptance testing"
        ],
        correctAnswer: 3,
        explanation: "Acceptance testing focuses on validating that the system meets the user's business needs and is ready for deployment. Ideally, this testing is carried out by the end users."
      },
      {
        text: "The navigation system software has been updated due to it suggesting routes that break traffic laws, such as driving the wrong way down one-way streets. Which of the following BEST describes the testing that will be performed?",
        options: [
          "Only confirmation testing",
          "Confirmation testing then regression testing",
          "Only regression testing",
          "Regression testing then confirmation testing"
        ],
        correctAnswer: 1,
        explanation: "Confirmation testing will check that the updates have resulted in a correct implementation, and then regression testing will be used to ensure that no defects have been introduced or uncovered in unchanged areas of the system."
      },
      {
        text: "Given the following example defects:\n\ni. Two different parts of the design specification disagree due to the complexity of the design\nii. A response time is too long and so makes users lose patience\niii. A path in the code cannot be reached during execution\niv. A variable is declared but never subsequently used in the program\nv. The amount of memory needed by the program to generate a report is too high\n\nWhich of the following BEST identifies example defects that could be found by static testing (rather than dynamic testing)?",
        options: [
          "ii, v",
          "iii, v",
          "i, ii, iv",
          "i, iii, iv"
        ],
        correctAnswer: 3,
        explanation: "The correct match for static testing is i, iii, and iv."
      },
      {
        text: "Which of the following is a benefit of early and frequent stakeholder feedback?",
        options: [
          "Changes to requirements are understood and implemented earlier",
          "It ensures business stakeholders understand user requirements",
          "It allows product owners to change their requirements as often as they want",
          "End users are told which requirements will not be implemented prior to release"
        ],
        correctAnswer: 0,
        explanation: "Obtaining feedback from stakeholders early and often in the software development process can be highly beneficial. It facilitates early communication of potential quality issues, can prevent misunderstandings about requirements, and ensures that any changes in stakeholder requirements are understood and implemented sooner."
      },
      {
        text: "Given the following review types:\n\n1. Technical review\n2. Informal review\n3. Inspection\n4. Walkthrough\n\nAnd the following descriptions:\n\nA. Includes objectives such as gaining consensus, generating new ideas, and motivating authors to improve\nB. Includes objectives such as educating reviewers, gaining consensus, generating new ideas and detecting potential defects\nC. The main objective is detecting potential defects and it requires metrics collection to support process improvement\nD. The main objective is detecting potential defects and it generates no formal documented output\n\nWhich of the following BEST matches the review types and the descriptions?",
        options: [
          "1A, 2B, 3C, 4D",
          "1A, 2D, 3C, 4B",
          "1B, 2C, 3D, 4A",
          "1C, 2D, 3A, 4B"
        ],
        correctAnswer: 1,
        explanation: "The correct match is: 1A, 2D, 3C, 4B."
      },
      {
        text: "Which of the following is a factor that contributes to a successful review?",
        options: [
          "Ensure management participate as reviewers",
          "Split large work products into smaller parts",
          "Set reviewer evaluation as an objective",
          "Plan to cover one document per review"
        ],
        correctAnswer: 1,
        explanation: "To ensure successful reviews, it's important to break the work product into parts that are small enough to be reviewed in a reasonable timescale to prevent reviewers from losing focus during individual review or review meetings."
      },
      {
        text: "What is the MAIN difference between black-box test techniques and experience-based test techniques?",
        options: [
          "The test object",
          "The test level at which the test technique is used",
          "The test basis",
          "The software development lifecycle (SDLC) in which the test technique can be used"
        ],
        correctAnswer: 2,
        explanation: "Black-box test techniques (also known as specification-based techniques) are based on an analysis of the specified behavior of the test object without reference to its internal structure. So, the test basis is usually a specification. Experience-based test techniques effectively use the knowledge and experience of testers for the design and implementation of test cases. This means that the tester, when designing tests, may not use the specification at all."
      },
      {
        text: "You are testing a PIN validator, which accepts valid PINs and rejects invalid PINs. A PIN is a sequence of digits. A PIN is valid if it consists of four digits, at least two of which are different. You have identified the following valid equivalence partitions: Variable: PIN code length - The partition “length correct” - The partition “length incorrect” - four-digit PINs - PINs with length other than 4. Variable: Number of different digits - The partition “number of different digits correct” - PINs with at least two different digits - The partition “number of different digits incorrect” - PINs with all digits being the same. Which of the following is a MINIMUM set of input test data that covers all identified equivalence partitions?",
        options: [
          "a) 1, 1111, 1234",
          "b) 111, 1111, 1112",
          "c) 1, 12345",
          "d) 12345, 1234"
        ],
        correctAnswer: 0,
        explanation: "Value '1' covers 'length incorrect' and covers 'number of different digits incorrect', however, the system would not validate against this partition when hitting the first incorrect partition. Value '1111' covers 'length correct' and 'number of different digits incorrect'. Value '1234' again covers 'length correct' and also 'number of different digits correct'."
      },
      {
        text: "W A developer was asked to implement the following business rule: INPUT: value (integer number) IF (value ≤ 100 OR value ≥ 200) THEN write “value incorrect” ELSE write “value OK” You design the test cases using 2-value boundary value analysis. Which of the following sets of test inputs achieves the greatest coverage?",
        options: [
          "a) 100,  150,  200,  201",
          "b) 99,  100,  200,  201",
          "c) 98,  99,  100,  101",
          "d) 101,  150,  199,  200"
        ],
        correctAnswer: 3,
        explanation: "d) Is correct. 101, 199 and 200 are valid coverage items for 2-value BVA, so we achieve 75% coverage"
      },
      {
        text: "You are working on a project to develop a system to analyze driving test results. You have been asked to design test cases based on the following decision table. R1 R2 R3 C1: First attempt at the exam? C2: Theoretical exam passed? - - F C3: Practical exam passed? T F - T - F Issue a driving license? Request additional driving lessons? X Request to take the exam again? X X What test data will show that there are contradictory rules in the decision table?",
        options: [
          "a) C1 = T,  C2 = T,  C3 = F",
          "b) C1 = T,  C2 = F,  C3 = T",
          "c) C1 = T,  C2 = T,  C3 = T and C1 = F, C2 = T, C3 = T",
          "d) C1 = F,  C2 = F,  C3 = F"
        ],
        correctAnswer: 3,
        explanation: "d) Is correct. The combination (F, F, F) matches both R2 and R3, but R2 and R3 have different actions, so this shows a contradiction between R2 and R3."
      },
      {
        text: "You are designing test cases based on the following state transition diagram: What is the MINIMUM number of test cases required to achieve 100% valid transitions coverage?",
        options: [
          "a) 3",
          "b) 2",
          "c) 5",
          "d) 6"
        ],
        correctAnswer: 0,
        explanation: "3 Is correct"
      },
      {
        text: "You want to apply branch testing to the code represented by the following control flow graph. How many coverage items do you need to test?",
        options: [
          "a) 2",
          "b) 4",
          "c) 8",
          "d) 7"
        ],
        correctAnswer: 2,
        explanation: "8 Is correct"
      },
      {
        text: "How can white-box testing be useful in support of black-box testing?",
        options: [
          "a) White-box coverage measures can help testers evaluate black-box tests in terms of the code coverage achieved by these black-box tests",
          "b) White-box coverage analysis can help testers identify unreachable fragments of the source code",
          "c) Branch testing subsumes black-box test techniques, so achieving full branch coverage guarantees achieving full coverage of any black-box technique",
          "d) White-box test techniques can provide coverage items for black-box techniques"
        ],
        correctAnswer: 0,
        explanation: "Performing only black-box testing does not provide a measure of actual code coverage. White-box coverage measures provide an objective measurement of coverage and provide the necessary information to allow additional tests to be generated to increase this coverage, and subsequently increase confidence in the code"
      },
      {
        text: "Consider the following list: Correct input not accepted, Incorrect input accepted, Wrong output format, Division by zero. What test technique is MOST PROBABLY used by the tester who uses this list when performing testing?",
        options: [
          "a) Exploratory testing",
          "b) Fault attack",
          "c) Checklist-based testing",
          "d) Boundary value analysis"
        ],
        correctAnswer: 1,
        explanation: "This is a list of possible failures. Fault attacks are a methodical approach to the implementation of error guessing and require the tester to create or acquire a list of possible errors, defects, and failures, and to design tests that will identify defects associated with the errors, expose the defects, or cause the failures"
      },
      {
        text: "Which of the following BEST describes how using checklist-based testing can result in increased coverage?",
        options: [
          "a) Checklist items can be defined at a sufficiently low level of detail, so the tester can implement and execute detailed test cases based on these items",
          "b) Checklists can be automated, so each time an automated test execution covers the checklist items, it results in additional coverage",
          "c) Each checklist item should be tested separately and independently, so the elements cover different areas of the software",
          "d) Two testers designing and executing tests based on the same high-level checklist items will typically perform the testing in slightly different ways"
        ],
        correctAnswer: 3,
        explanation: "If the checklists are high-level, some variability in the actual testing is likely to occur, resulting in potentially greater coverage but less repeatability. If two testers follow a checklist of high-level items, each of them may use different test data, test steps, etc. This way, one tester will probably cover some areas not covered by the other tester, and this will result in increased coverage"
      },
      {
        text: "Which of the following provides the BEST example of a scenario-oriented acceptance criterion?",
        options: [
          "a) The application must allow users to delete their account and all associated data upon request",
          "b) When a customer adds an item to their cart and proceeds to checkout, they should be prompted to log in or create an account if they haven’t already done so",
          "c) IF (contain(product(23).Name, cart.products())) THEN return FALSE",
          "d) The website must comply with the ICT Accessibility 508 Standards and ensure that all content is accessible to users with disabilities"
        ],
        correctAnswer: 1,
        explanation: "This acceptance criterion describes an example scenario that must be realizable by the system. This is an example of a scenario-oriented acceptance criterion"
      },
      {
        text: "You are using acceptance test-driven development and designing test cases based on the following user story: As a Regular or Special user, I want to be able to use my electronic floor card, to access specific floors. Acceptance Criteria: AC1: Regular users have access to floors 1 to 3 AC2: Floor 4 is only accessible to Special users AC3: Special users have all the access rights of Regular users. Which test case is the MOST reasonable one to test AC3?",
        options: [
          "a) Check that a Regular user can access floors 1 and 3",
          "b) Check that a Regular user cannot access floor 4",
          "c) Check that a Special user can access floor 5",
          "d) Check that a Special user can access floors 1, 2, and 3"
        ],
        correctAnswer: 3,
        explanation: "This way we can check if a Special user can access floors which are accessible to a Regular user"
      },
      {
        text: "Which of the following is NOT a purpose of a test plan?",
        options: [
          "a) To define test data and expected results for component tests and component integration tests",
          "b) To define as exit criteria from the component test level that '100% statement coverage and 100% branch coverage must be achieved'",
          "c) To describe what fields the test progress report shall contain and what should be the form of this report",
          "d) To explain why system integration testing will be excluded from testing, although the test strategy requires this test level"
        ],
        correctAnswer: 0,
        explanation: "The test plan may include test data requirements (as part of the test approach), but not the detailed test data for test cases. Test data is part of the test cases, not the test plan. Also, it is usually impossible to define such data when the test plan is created, because it is not exactly known what the components will look like"
      },
      {
        text: "At the beginning of each iteration, the team estimates the amount of work (in person-days) they will need to complete during the iteration. Let E(n) be the estimated amount of work for iteration n, and let A(n) be the actual amount of work done in iteration n. From the third iteration, the team uses the following estimation model based on extrapolation: E(n) = 3*A(n-1) + A(n-2) / 4. The graph shows the estimated and actual amount of work for the first four iterations. What is the estimated amount of work for iteration #5? a) 10.5 person-days b) 8.25 person-days c) 6.5 person-days d) 9.4 person-days",
        options: [
          "a) 10.5 person-days",
          "b) 8.25 person-days",
          "c) 6.5 person-days",
          "d) 9.4 person-days"
        ],
        correctAnswer: 2,
        explanation: "c) Is correct"
      },
      {
        text: "You are preparing a test execution schedule for executing seven test cases TC 1 to TC 7. The following figure includes the priorities of these test cases (1=highest priority, 3 = lowest priority). The figure also shows the dependencies between test cases using arrows. For instance, the arrow from TC 4 to TC 5 means that TC 5 can only be executed if TC 4 was previously executed. Which test case should be executed sixth? a) TC 3 b) TC 5 c) TC 6 d) TC 2",
        options: [
          "a) TC 3",
          "b) TC 5",
          "c) TC 6",
          "d) TC 2"
        ],
        correctAnswer: 0,
        explanation: "a) Is correct"
      },
      {
        text: "What does the test pyramid model show? a) That tests may have different priorities b) That tests may have different granularity c) That tests may require different coverage criteria d) That tests may depend on other tests",
        options: [
          "a) That tests may have different priorities",
          "b) That tests may have different granularity",
          "c) That tests may require different coverage criteria",
          "d) That tests may depend on other tests"
        ],
        correctAnswer: 1,
        explanation: "b) Is correct. The test pyramid model shows that different tests have different levels of granularity"
      },
      {
        text: "What is the relationship between the testing quadrants, test levels and test types? a) Testing quadrants represent particular combinations of test levels and test types, defining their location in the software development lifecycle b) Testing quadrants describe the degree of granularity of individual test types performed at each test level c) Testing quadrants assign the test types that can be performed to the test levels d) Testing quadrants group test levels and test types by several criteria such as targeting specific stakeholders",
        options: [
          "a) Testing quadrants represent particular combinations of test levels and test types, defining their location in the software development lifecycle",
          "b) Testing quadrants describe the degree of granularity of individual test types performed at each test level",
          "c) Testing quadrants assign the test types that can be performed to the test levels",
          "d) Testing quadrants group test levels and test types by several criteria such as targeting specific stakeholders"
        ],
        correctAnswer: 3,
        explanation: "d) Is correct. The testing quadrants group test levels, test types, activities, test techniques and work products in Agile software development. In this model, tests can be business facing or technology facing. Tests can support the team (i.e., guide the development) or critique the product (i.e., measure its behavior against expectations). The combination of these two viewpoints determines the four quadrants"
      },
      {
        text: "Which of the following is an example of how product risk analysis may influence the thoroughness and scope of testing? a) Continuous risk monitoring allows us to identify emerging risk as soon as possible b) Risk identification allows us to implement risk mitigation activities and reduce the risk level c) The assessed risk level helps us to select the rigor of testing d) Risk analysis allows us to derive coverage items",
        options: [
          "a) Continuous risk monitoring allows us to identify emerging risk as soon as possible",
          "b) Risk identification allows us to implement risk mitigation activities and reduce the risk level",
          "c) The assessed risk level helps us to select the rigor of testing",
          "d) Risk analysis allows us to derive coverage items"
        ],
        correctAnswer: 2,
        explanation: "c) Is correct. This is an example of how risk analysis influences the thoroughness and scope of testing"
      },
      {
        text: "Which of the following activities in the test process makes the MOST use of test progress reports? a) Test design b) Test completion c) Test analysis d) Test planning",
        options: [
          "a) Test design",
          "b) Test completion",
          "c) Test analysis",
          "d) Test planning"
        ],
        correctAnswer: 1,
        explanation: "b) Is correct. A test completion report is prepared during test completion, when a project, test level, or test type is complete and when, ideally, its exit criteria have been met. This report uses information from test progress reports and other data"
      },
      {
        text: "Which of the following is NOT an example of how configuration management supports testing? a) All commits to the repository are uniquely identified and version controlled b) All changes in the test environment elements are tracked c) All requirement specifications are referenced unambiguously in test plans d) All identified defects have an assigned status",
        options: [
          "a) All commits to the repository are uniquely identified and version controlled",
          "b) All changes in the test environment elements are tracked",
          "c) All requirement specifications are referenced unambiguously in test plans",
          "d) All identified defects have an assigned status"
        ],
        correctAnswer: 3,
        explanation: "d) Is correct. This is ensured by the defect management, not configuration management process"
      },
      {
        text: "Consider the following defect report for a web-based shopping application: Application: WebShop v0.99 Defect: Login button not working Steps to Reproduce: Launch the website Click on the login button Expected result: The user should be redirected to the login page. Actual result: The login button does not respond when clicked. Severity: High Priority: Urgent What is the MOST important information that is missing from this report? a) Name of the tester and date of the report b) Test environment elements and their version numbers c) Identification of the test object d) Impact on the interests of stakeholders",
        options: [
          "a) Name of the tester and date of the report",
          "b) Test environment elements and their version numbers",
          "c) Identification of the test object",
          "d) Impact on the interests of stakeholders"
        ],
        correctAnswer: 1,
        explanation: "b) Is correct. The important thing that is missing is the identification of the browser and device used for the testing. The browser and device information are important because such a defect can be browser- or device-specific. For example, a login button may work fine on one browser (or one version of a specific browser) but not on another. Therefore, the browser and device information can help the developers to reproduce the issue and find the root cause of the problem more quickly."
      },
      {
        text: "Tools from which of the following categories help with the organization of test cases, detected defects and configuration management? a) Test execution and coverage tools b) Test design and implementation tools c) Defect management tools d) Test management tools",
        options: [
          "a) Test execution and coverage tools",
          "b) Test design and implementation tools",
          "c) Defect management tools",
          "d) Test management tools"
        ],
        correctAnswer: 3,
        explanation: "d) Is correct. Test management tools increase the test process efficiency by facilitating the management of the software development lifecycle (SDLC), requirements, tests, defects, and configuration management."
      },
      {
        text: "Which of the following is MOST likely to be a benefit of test automation? a) The capability of generating test cases without access to the test basis b) The achievement of increased coverage through more objective assessment c) The increase in test execution times available with higher processing power d) The prevention of human errors through greater consistency and repeatability",
        options: [
          "a) The capability of generating test cases without access to the test basis",
          "b) The achievement of increased coverage through more objective assessment",
          "c) The increase in test execution times available with higher processing power",
          "d) The prevention of human errors through greater consistency and repeatability"
        ],
        correctAnswer: 3,
        explanation: "d) Is correct. The prevention of human errors through greater consistency and repeatability is a benefit of test automation as test automation cannot suffer from human errors. For instance, it means that tests are consistently derived from requirements, test data is created in a systematic manner, and tests are executed by a tool in the same order with the same frequency."
      }
    ]
  },
  {
    id: 4,
    title: "ISTQB CTFL v4.0 Sample Exam D Questions v1.3",
    questions: [
      {
        text: "Which of the following is a typical test objective? a) Finding and fixing defects in the test object b) Maintaining effective communications with developers c) Validating that legal requirements have been met d) Building confidence in the quality of the test object",
        options: [
          "a) Finding and fixing defects in the test object",
          "b) Maintaining effective communications with developers",
          "c) Validating that legal requirements have been met",
          "d) Building confidence in the quality of the test object"
        ],
        correctAnswer: 3,
        explanation: "d) Is correct. Building confidence in the quality of the test object is achieved by executing tests that pass"
      },
      {
        text: "A designer documents a design for a user interface that does not suitably address disabled users because the designer is tired. The programmer implements the user interface in line with the design but as they are working under severe time pressure, they do not include suitable exception handling in their program code for bonus calculations. When the operational system is used, complaints are made by some disabled users about the interface and the company is subsequently fined by the relevant regulatory authority. No one notices that bonus calculations are sometimes incorrect. Which of the following statements is CORRECT? a) The miscalculation of bonuses is a defect that occasionally occurs b) The fine received for failing to address some disabled users is a failure c) The programmer working under severe time pressure is a root cause d) The design of the user interface includes a designer error",
        options: [
          "a) The miscalculation of bonuses is a defect that occasionally occurs",
          "b) The fine received for failing to address some disabled users is a failure",
          "c) The programmer working under severe time pressure is a root cause",
          "d) The design of the user interface includes a designer error"
        ],
        correctAnswer: 2,
        explanation: "c) Is correct. The error is made by the programmer and this mistake is caused by them working under severe time pressure, which is the root cause of the subsequent defect"
      },
      {
        text: "High-level test conditions are being used by testers to generate test cases and execute tests. Even though the test conditions remain the same, the test cases are varied each time. Which of the following ‘principles of testing’ is being addressed through the variation of test cases? a) Tests wear out b) Absence-of-defects fallacy c) Early testing saves time and money d) Defects cluster together",
        options: [
          "a) Tests wear out",
          "b) Absence-of-defects fallacy",
          "c) Early testing saves time and money",
          "d) Defects cluster together"
        ],
        correctAnswer: 0,
        explanation: "a) Is correct. The ‘tests wear out’ principle is concerned with the idea that repeating identical tests on unaltered code is unlikely to uncover novel defects and therefore, modifying tests may be essential. By using high level test conditions to generate new tests each time, the tests will not be identical and should not ‘wear out’"
      },
      {
        text: "Given the following test tasks: 1. Derive test cases from test conditions 2. Identify reusable testware 3. Organize test cases into test procedures 4. Evaluate test basis and test object And the following test activities: A. Test analysis B. Test design C. Test implementation D. Test completion Which of the following BEST matches the tasks with the activities? a) 1B,  2A,  3D,  4C b) 1B,  2D,  3C,  4A c) 1C,  2A,  3B,  4D d) 1C,  2D,  3A,  4B",
        options: [
          "a) 1B,  2A,  3D,  4C",
          "b) 1B,  2D,  3C,  4A",
          "c) 1C,  2A,  3B,  4D",
          "d) 1C,  2D,  3A,  4B"
        ],
        correctAnswer: 1,
        explanation: "b) Is correct. The CORRECT match is: 1B, 2D, 3C, 4A"
      },
      {
        text: "Given the following testware: i. Test completion report ii. iii. iv. v. Data held in a database used for test inputs and expected results The list of elements needed to build the test environment Documented sequences of test cases in execution order Test cases Which of the following BEST shows the testware produced as a result of performing test implementation? a) ii, iv b) iii, v c) i, ii, v d) i, iii, iv",
        options: [
          "a) ii, iv",
          "b) iii, v",
          "c) i, ii, v",
          "d) i, iii, iv"
        ],
        correctAnswer: 0,
        explanation: "a) Is correct. Items ii and iv in the list are produced as a result of test implementation"
      },
      {
        text: "Which of the following is MOST likely to describe a task performed by someone in a test management role? a) Evaluate test basis and test object b) Define test environment requirements c) Assess testability of test object d) Create test completion report",
        options: [
          "a) Evaluate test basis and test object",
          "b) Define test environment requirements",
          "c) Assess testability of test object",
          "d) Create test completion report"
        ],
        correctAnswer: 3,
        explanation: "d) Is correct. The test management role primarily involves activities related to test planning, test monitoring and control, and test completion. Thus, creating the test completion report, which is the prime output from the test completion activity, is likely to be a task performed by the test management role",
        image: null
      },
      {
        text: "Which of the following is an advantage of the whole team approach? a) Improved communication between team members b) Decreased individual accountability for quality c) Faster deployment of deliverables to the end users d) Reduced collaboration with external business users",
        options: [
          "a) Improved communication between team members",
          "b) Decreased individual accountability for quality",
          "c) Faster deployment of deliverables to the end users",
          "d) Reduced collaboration with external business users"
        ],
        correctAnswer: 0,
        explanation: "a) Is correct. The whole team approach promotes robust communication and collaboration between the team members"
      },
      {
        text: "Given the following benefits and drawbacks of the independence of testing: i. The testers work in a different location from the developers ii. iii. iv. v. Testers question the assumptions programmers make while writing code A confrontational dynamic has been established between testers and developers Developers have convinced themselves that testers are mostly accountable for quality Testers have different biases than those held by the developers Which are MOST likely to be considered benefits? a) i, iv b) ii, v c) i, iii, iv d) ii, iii, v",
        options: [
          "a) i, iv",
          "b) ii, v",
          "c) i, iii, iv",
          "d) ii, iii, v"
        ],
        correctAnswer: 1,
        explanation: "b) Is correct. The list entries showing benefits are ii and v"
      },
      {
        text: "Which of the following is a good testing practice that applies to all software development lifecycles? a) Each test level has specific and distinct test objectives b) Test implementation and execution for a given test level should start during the corresponding development phase c) Testers should start test design as soon as drafts of the relevant work products become available d) Every dynamic testing activity has a corresponding static testing activity",
        options: [
          "a) Each test level has specific and distinct test objectives",
          "b) Test implementation and execution for a given test level should start during the corresponding development phase",
          "c) Testers should start test design as soon as drafts of the relevant work products become available",
          "d) Every dynamic testing activity has a corresponding static testing activity"
        ],
        correctAnswer: 0,
        explanation: "a) Is correct. Each test level has specific and distinct test objectives as a different form of test object (e.g., single component, complete system) is tested at each test level and overlapping test objectives would lead to unnecessary duplication"
      },
      {
        text: "Which of the following is an example of a test-first approach to development? a) Behavior-Driven Development b) Test Level Driven Development c) Function-Driven Development d) Performance-Driven Development",
        options: [
          "a) Behavior-Driven Development",
          "b) Test Level Driven Development",
          "c) Function-Driven Development",
          "d) Performance-Driven Development"
        ],
        correctAnswer: 0,
        explanation: "a) Is correct. Behavior-Driven Development (BDD) is a well-known example of a test-first approach to development"
      },
      {
        text: "Which of the following is MOST likely to be a challenge encountered when implementing DevOps? a) Making sure that non-functional quality characteristics are not overlooked b) Managing continuously changing test environments c) The need for more manual testers with suitable experience d) Setting up the test automation as part of the delivery pipeline",
        options: [
          "a) Making sure that non-functional quality characteristics are not overlooked",
          "b) Managing continuously changing test environments",
          "c) The need for more manual testers with suitable experience",
          "d) Setting up the test automation as part of the delivery pipeline"
        ],
        correctAnswer: 3,
        explanation: "d) Is correct. DevOps implementation can pose several risks and challenges, including the need to define and set up the delivery pipeline, introduce and maintain CI/CD tools, and establish and maintain test automation",
        image: null
      },
      {
        text: "Which of the following BEST describes retrospectives? a) Retrospectives allow team members to identify other team members who did not fully contribute to achieving quality as required by the whole-team approach b) Retrospectives give testers an opportunity to identify activities that were successful so that these are retained when potential improvements are made in the future c) Retrospectives are where agile team members are allowed to voice their concerns about management and customers in a blame-free environment d) Retrospectives give agile team members a forum where they focus on discussing the plan and technical decisions for the next iteration",
        options: [
          "a) Retrospectives allow team members to identify other team members who did not fully contribute to achieving quality as required by the whole-team approach",
          "b) Retrospectives give testers an opportunity to identify activities that were successful so that these are retained when potential improvements are made in the future",
          "c) Retrospectives are where agile team members are allowed to voice their concerns about management and customers in a blame-free environment",
          "d) Retrospectives give agile team members a forum where they focus on discussing the plan and technical decisions for the next iteration"
        ],
        correctAnswer: 1,
        explanation: "b) Is correct. During the retrospective, the group discusses what aspects of the project were successful and should be retained, as well as areas that could be improved, and how to do so",
        image: null
      },
      {
        text: "Which of the following tests is MOST likely to be performed as part of functional testing? a) The test checks that the sort function puts the elements of the list or array in ascending order b) The test checks whether the sort function completes sorting within one second of starting c) The test checks how easily the sort function can be changed from sorting ascending to sorting descending d) The test checks that the sort function still functions correctly when moved from a 32-bit to a 64-bit architecture",
        options: [
          "a) The test checks that the sort function puts the elements of the list or array in ascending order",
          "b) The test checks whether the sort function completes sorting within one second of starting",
          "c) The test checks how easily the sort function can be changed from sorting ascending to sorting descending",
          "d) The test checks that the sort function still functions correctly when moved from a 32-bit to a 64-bit architecture"
        ],
        correctAnswer: 0,
        explanation: "a) Is correct. Checking that the sort function puts the elements of the list or array in ascending order is evaluating the functional correctness of the sort function, which is part of functional testing",
        image: null
      },
      {
        text: "Which of the following is MOST likely to be a trigger that leads to maintenance testing of a currency exchange system? a) The developers reported that changing the currency exchange system was difficult and the testers decided to check if this was true b) The refund option of the currency exchange system was removed as it did not always repay the correct amount to customers c) The agile team has started developing a user story that adds a new customer loyalty feature to the currency exchange system d) The currency exchange system was reconfigured to support both English and local language currency transactions",
        options: [
          "a) The developers reported that changing the currency exchange system was difficult and the testers decided to check if this was true",
          "b) The refund option of the currency exchange system was removed as it did not always repay the correct amount to customers",
          "c) The agile team has started developing a user story that adds a new customer loyalty feature to the currency exchange system",
          "d) The currency exchange system was reconfigured to support both English and local language currency transactions"
        ],
        correctAnswer: 1,
        explanation: "b) Is correct. A system modification (such as a fix or enhancement) is an example of a trigger for maintenance testing. The removal of the refund option of the currency exchange system was a fix that would lead to maintenance testing",
        image: null
      },
      {
        text: "Which of the following CANNOT be examined by static testing? a) Contract b) Test plan c) Encrypted code d) Test charter",
        options: [
          "a) Contract",
          "b) Test plan",
          "c) Encrypted code",
          "d) Test charter"
        ],
        correctAnswer: 2,
        explanation: "c) Is correct. Most work products can be examined using some form of static testing; however it is not suitable for work products that are too complex for human interpretation and should not be analyzed by tools, and encrypted code is too complex for humans and if it is properly encrypted it will not be analyzable by most tools",
        image: null
      },
      {
        text: "Which of the following statements about the value of static testing is CORRECT? a) The defect types found by static testing are different from the defect types that can be found by dynamic testing b) Dynamic testing can detect the defect types that can be found by static testing plus some additional defect types c) Dynamic testing can identify some of the defects that can be found by static testing but not all of them d) Static testing can identify the defect types that can be found by dynamic testing as well as some extra defect types",
        options: [
          "a) The defect types found by static testing are different from the defect types that can be found by dynamic testing",
          "b) Dynamic testing can detect the defect types that can be found by static testing plus some additional defect types",
          "c) Dynamic testing can identify some of the defects that can be found by static testing but not all of them",
          "d) Static testing can identify the defect types that can be found by dynamic testing as well as some extra defect types"
        ],
        correctAnswer: 2,
        explanation: "c) Is correct",
        image: null
      },
      {
        text: "Given the following descriptions of review activities: 1. Detected anomalies are deliberated upon, and determinations are reached regarding their status, ownership, and any further steps needed 2. Issues are recorded, and any needed updates are addressed prior to the acceptance of the work product 3. Reviewers employ techniques to come up with suggestions and questions about the work product and to spot anomalies 4. The objective of the review and its schedule are established to ensure a focused and efficient review 5. Participants are provided with access to the item being reviewed Which of the following is the CORRECT sequence in the review process of the activities that correspond to the descriptions? a) 4 – 3 – 5 – 2 – 1 b) 4 – 5 – 3 – 1 – 2 c) 5 – 4 – 1 – 3 – 2 d) 5 – 4 – 3 – 2 – 1",
        options: [
          "a) 4 – 3 – 5 – 2 – 1",
          "b) 4 – 5 – 3 – 1 – 2",
          "c) 5 – 4 – 1 – 3 – 2",
          "d) 5 – 4 – 3 – 2 – 1"
        ],
        correctAnswer: 1,
        explanation: "b) Is correct",
        image: null
      },
      {
        text: "Which participant in the review process is responsible for ensuring that the review meetings run effectively and that everyone at the meetings can voice their opinions freely? a) Manager b) Moderator c) Chairperson d) Review Leader",
        options: [
          "a) Manager",
          "b) Moderator",
          "c) Chairperson",
          "d) Review Leader"
        ],
        correctAnswer: 1,
        explanation: "b) Is correct",
        image: null
      },
      {
        text: "You perform system testing of an e-commerce web application and are provided with the following requirement: REQ 05-017. If the total cost of purchases exceeds $100, the customer gets a 5% discount on subsequent purchases. Otherwise, the customer does not receive a discount. Which test techniques will be MOST helpful in designing test cases based on this requirement? a) White-box test techniques b) Black-box test techniques c) Experience-based test techniques d) Risk-based test techniques",
        options: [
          "a) White-box test techniques",
          "b) Black-box test techniques",
          "c) Experience-based test techniques",
          "d) Risk-based test techniques"
        ],
        correctAnswer: 1,
        explanation: "b) Is correct",
        image: null
      },
      {
        text: "The system for selling cinema tickets calculates the discount type based on the client’s birth year (BY) and on the current year (CY) as follows: Let D be the difference between CY and BY, that is, D = CY – BY  If D < 0 then print the error message “birth year cannot be greater than current year”  If 0 ≤ D < 18  If 18 ≤ D < 65  If D ≥ 65 then apply the student discount then apply no discount then apply the pensioner discount Your test suite already contains two test cases:  BY = 1990, CY = 2020, expected result: no discount  BY = 2030, CY = 2029, expected result: print the error message Which of the following test data sets should be added to achieve full valid equivalence partitioning coverage for the discount type? a) BY = 2001, CY = 2065 b) BY = 1900, CY = 1965 c) BY = 1965, CY = 1900 d) BY = 2011, CY = 2029",
        options: [
          "a) BY = 2001, CY = 2065",
          "b) BY = 1900, CY = 1965",
          "c) BY = 1965, CY = 1900",
          "d) BY = 2011, CY = 2029"
        ],
        correctAnswer: 1,
        explanation: "b) Is correct",
        image: null
      },
      {
        text: "You are testing a temperature control system for a horticultural cold storage facility. The system receives the temperature (in full degrees Celsius) as the input. If the temperature is between 0 and 2 degrees inclusive, the system displays the message “temperature OK”. For lower temperatures, the system displays the message 'temperature too low' and for higher temperatures it displays the message “temperature too high”. Using two-value boundary value analysis, which of the following sets of test inputs provides the highest level of boundary value coverage? a) –1, 3 b) 0, 2 c) –1, 0, 2, 3 d) –2, 0, 2, 4",
        options: [
          "a) –1, 3",
          "b) 0, 2",
          "c) –1, 0, 2, 3",
          "d) –2, 0, 2, 4"
        ],
        correctAnswer: 2,
        explanation: "c) Is correct",
        image: null
      },
      {
        text: "You are designing test cases based on the following decision table. So far you have designed the following test cases:  TC1: 19-year-old, unregistered man with no experience; expected result: category A  TC2: 65-year-old, unregistered woman with 5 years of experience; expected result: category B  TC3: 66-year-old, registered man with no experience; expected result: category C  TC4: 65-year-old, registered woman with 4 years of experience; expected result: category D Which of the following test cases, when added to the existing set of test cases, will increase the decision table coverage? a) 66-year-old, unregistered man with no experience; b) 55-year-old, unregistered woman with 2 years of experience; c) 19-year-old, registered woman with 5 years of experience; expected result: category B expected result: category A expected result: category D d) No additional test case can increase the already achieved decision table coverage",
        options: [
          "a) 66-year-old, unregistered man with no experience;",
          "b) 55-year-old, unregistered woman with 2 years of experience;",
          "c) 19-year-old, registered woman with 5 years of experience; expected result: category B expected result: category A expected result: category D",
          "d) No additional test case can increase the already achieved decision table coverage"
        ],
        correctAnswer: 0,
        explanation: "a) Is correct.",
        image: null
      },
      {
        text: "You are applying state transition testing to the hotel room reservation system modeled by the following state transition table, with 4 states and 5 different events: Assuming all test cases start in the ‘Requesting’ state, which of the following test cases, represented as sequences of events, achieves the highest valid transitions coverage? a) NotAvailable,Available, ChangeRoom,NotAvailable,Cancel b) Available,ChangeRoom,NotAvailable,Available, Pay c) Available,ChangeRoom,Available,ChangeRoom, NotAvailable d) NotAvailable,Cancel,ChangeRoom, Available,Pay",
        options: [
          "a) NotAvailable,Available, ChangeRoom,NotAvailable,Cancel",
          "b) Available,ChangeRoom,NotAvailable,Available, Pay",
          "c) Available,ChangeRoom,Available,ChangeRoom, NotAvailable",
          "d) NotAvailable,Cancel,ChangeRoom, Available,Pay"
        ],
        correctAnswer: 1,
        explanation: "b) Is correct.",
        image: null
      },
      {
        text: "Your test suite S for a program P achieves 100% statement coverage. It consists of three test cases, each of which achieves 50% statement coverage. Which of the following statements is CORRECT? a) Executing S will cause all possible failures in P b) S achieves 100% branch coverage for P c) Every executable statement in P containing a defect has been run at least once during the execution of S d) After removing one test case from S, the remaining two test cases will still achieve 100% statement coverage",
        options: [
          "a) Executing S will cause all possible failures in P",
          "b) S achieves 100% branch coverage for P",
          "c) Every executable statement in P containing a defect has been run at least once during the execution of S",
          "d) After removing one test case from S, the remaining two test cases will still achieve 100% statement coverage"
        ],
        correctAnswer: 2,
        explanation: "c) Is correct.",
        image: null
      },
      {
        text: "Why does white-box testing facilitate defect detection even when the software specification is vague, outdated or incomplete? a) Test cases are designed based on the structure of the test object rather than the specification b) For each white-box test technique the coverage can be well-defined and easily measured c) White-box test techniques are very well designed to detect omissions in the requirements d) White-box test techniques can be used in both static testing and dynamic testing",
        options: [
          "a) Test cases are designed based on the structure of the test object rather than the specification",
          "b) For each white-box test technique the coverage can be well-defined and easily measured",
          "c) White-box test techniques are very well designed to detect omissions in the requirements",
          "d) White-box test techniques can be used in both static testing and dynamic testing"
        ],
        correctAnswer: 0,
        explanation: "a) Is correct.",
        image: null
      },
      {
        text: "Which of the following is NOT anticipated by the tester while applying error guessing? a) The developer misunderstood the formula in the user story for calculating the interest b) The developer wrote “FA = A*(1+IR^N)” instead of “FA = A*(1+IR)^N” in the source code c) The developer missed the seminar on new compound interest rate legislation d) The accuracy of the interest calculated by the system is not precise enough c) Is correct. This is an example of a potential root cause of a defect, which is neither an error, defect nor failure, and difficult for the tester to anticipate",
        options: [
          "a) The developer misunderstood the formula in the user story for calculating the interest",
          "b) The developer wrote “FA = A*(1+IR^N)” instead of “FA = A*(1+IR)^N” in the source code",
          "c) The developer missed the seminar on new compound interest rate legislation",
          "d) The accuracy of the interest calculated by the system is not precise enough"
        ],
        correctAnswer: 2,
        explanation: "c) Is correct.",
        image: null
      },
      {
        text: "Which of the following is true about exploratory testing? a) Test cases are designed before the exploratory testing session starts b) The tester can perform test execution, but cannot perform test design c) Exploratory testing results are good predictors of the number of remaining defects d) During exploratory testing the tester may use black-box test techniques",
        options: [
          "a) Test cases are designed before the exploratory testing session starts",
          "b) The tester can perform test execution, but cannot perform test design",
          "c) Exploratory testing results are good predictors of the number of remaining defects",
          "d) During exploratory testing the tester may use black-box test techniques"
        ],
        correctAnswer: 3,
        explanation: "d) Is correct.",
        image: null
      },
      {
        text: "Which collaborative user story writing practice enables the team to achieve a collective understanding of what needs to be delivered? a) Planning poker, so that a team can achieve consensus on the effort needed to implement a user story b) Reviews, so that a team can detect inconsistencies and contradictions in a user story c) Iteration planning, so that user stories with the highest business value for a customer can be prioritized for implementation d) Conversation, so that team members can understand how the software will be used",
        options: [
          "a) Planning poker, so that a team can achieve consensus on the effort needed to implement a user story",
          "b) Reviews, so that a team can detect inconsistencies and contradictions in a user story",
          "c) Iteration planning, so that user stories with the highest business value for a customer can be prioritized for implementation",
          "d) Conversation, so that team members can understand how the software will be used"
        ],
        correctAnswer: 3,
        explanation: "d) Is correct.",
        image: null
      },
      {
        text: "You have just started designing test cases for the following user story. As a customer, I want to be able to filter search results by price range, so that I can find products within my budget more easily. Acceptance criteria: 1. The filter should work for all versions of the application from version 3.0 upwards 2. The filter should allow the customer to set a price range with a minimum and a maximum price 3. The search results should update dynamically as the customer adjusts the price range filter In all test cases the precondition is as follows: there are only two products available, products A and B. Product A costs $100 and product B costs $110. Which of the following is the BEST example of a test case for this user story? a) Enter webpage and set filter to show prices between $90 and $100. Expected result: results show product A only. Set maximum price to $110. Expected result: results now include both products A and B b) Enter webpage. Expected result: the default minimum and maximum prices are $100 and $110 respectively. Add product C to stock, with price $120. Refresh the client’s webpage. Expected result: the default maximum price changes to $120 c) Enter webpage and set filter to show prices between $90 and $115. Expected result: results show both products A and B. Change currency from USD to EUR. Expected result: the filter range changes correctly to EUR values, according to the current exchange rate d) Enter webpage with three different browsers: Edge, Chrome and Opera. In each browser set filter between $90 and $110. Expected result: results include both products A and B and the results layout is the same in all three browsers",
        options: [
          "a) Enter webpage and set filter to show prices between $90 and $100. Expected result: results show product A only. Set maximum price to $110. Expected result: results now include both products A and B",
          "b) Enter webpage. Expected result: the default minimum and maximum prices are $100 and $110 respectively. Add product C to stock, with price $120. Refresh the client’s webpage. Expected result: the default maximum price changes to $120",
          "c) Enter webpage and set filter to show prices between $90 and $115. Expected result: results show both products A and B. Change currency from USD to EUR. Expected result: the filter range changes correctly to EUR values, according to the current exchange rate",
          "d) Enter webpage with three different browsers: Edge, Chrome and Opera. In each browser set filter between $90 and $110. Expected result: results include both products A and B and the results layout is the same in all three browsers"
        ],
        correctAnswer: 0,
        explanation: "a) Is correct.",
        image: null
      },
      {
        text: "Which of the following BEST define EXIT criteria in a testing project? a) The budget is approved b) Budget runs out c) Test basis is available d) All test analysts are ISTQB certified at the Foundation Level",
        options: [
          "a) The budget is approved",
          "b) Budget runs out",
          "c) Test basis is available",
          "d) All test analysts are ISTQB certified at the Foundation Level"
        ],
        correctAnswer: 1,
        explanation: "b) Is correct.",
        image: null
      },
      {
        text: "The team wants to estimate the time needed for one tester to execute four test cases for a software component. The team has gathered the following measures of the effort used to execute a single test case:  Best-case scenario: 1 hour  Worst-case scenario: 8 hours  Most likely scenario: 3 hours Given that the three-point estimation technique is being used, what is the final estimate of the time needed to execute all four test cases? a) 14 hours b) 3.5 hours c) 16 hours d) 12 hours Thus: a) Is correct. In this case, the estimate for executing a single test case is: E = (1h + 4*3h + 8h) / 6 = 3.5 hours So, the total time needed for the tester to execute 4 test cases is: 3.5h * 4 = 14 hours",
        options: [
          "a) 14 hours",
          "b) 3.5 hours",
          "c) 16 hours",
          "d) 12 hours"
        ],
        correctAnswer: 0,
        explanation: "a) Is correct.",
        image: null
      },
      {
        text: "The table shows the traceability matrix from test cases to requirements. “X” means that a given test case covers the corresponding requirement. You want to prioritize the test cases following the additional coverage prioritization technique. You execute all four test cases. Which test case should be executed as the LAST one? a) TC1 b) TC2 c) TC3 d) TC4 b) Is correct",
        options: [
          "a) TC1",
          "b) TC2",
          "c) TC3",
          "d) TC4"
        ],
        correctAnswer: 1,
        explanation: "b) Is correct.",
        image: null
      },
      {
        text: "How can the testing quadrants be beneficial for testing? a) They help in test planning by dividing the test process into four stages, corresponding to the four basic test levels: component, integration, system, and acceptance testing b) They help in assessing the high-level coverage (e.g., requirements coverage) based on low-level coverage (e.g., code coverage) c) They help non-technical stakeholders to understand the different types of tests and that some test types are more relevant to certain test levels than others d) They help agile teams to develop a communication strategy based on classifying people according to four basic psychological types, and on modelling the relations between them c) Is correct. Testing quadrants allow managers and other stakeholders to understand the relationships between test types, the activities they support (team support or product critique), and the viewpoint they are focused on (business- or technology-facing)",
        options: [
          "a) They help in test planning by dividing the test process into four stages, corresponding to the four basic test levels: component, integration, system, and acceptance testing",
          "b) They help in assessing the high-level coverage (e.g., requirements coverage) based on low-level coverage (e.g., code coverage)",
          "c) They help non-technical stakeholders to understand the different types of tests and that some test types are more relevant to certain test levels than others",
          "d) They help agile teams to develop a communication strategy based on classifying people according to four basic psychological types, and on modelling the relations between them"
        ],
        correctAnswer: 2,
        explanation: "c) Is correct.",
        image: null
      },
      {
        text: "For a given risk, its risk level is $1,000 and its risk likelihood is estimated as 50%. What is the risk impact? a) $500 b) $2,000 c) $50,000 d) $200 b) Is correct",
        options: [
          "a) $500",
          "b) $2,000",
          "c) $50,000",
          "d) $200"
        ],
        correctAnswer: 1,
        explanation: "b) Is correct.",
        image: null
      },
      {
        text: "Which of the following are product risks? a) Scope creep b) Poor architecture c) Cost-cutting d) Poor tool support b) Is correct. Poor architecture is an example of a product risk since it refers to a product characteristic",
        options: [
          "a) Scope creep",
          "b) Poor architecture",
          "c) Cost-cutting",
          "d) Poor tool support"
        ],
        correctAnswer: 1,
        explanation: "b) Is correct.",
        image: null
      },
      {
        text: "Which of the following is NOT a valid purpose for a test report? a) Tracking test progress and identifying areas that require further attention b) Providing information on the tests executed, their results, and any issues or defects found c) Providing information about each defect, such as the steps to reproduce it d) Providing information on testing planned for the next period c) Is correct. Providing information about defects is the purpose of a defect report, not a test report",
        options: [
          "a) Tracking test progress and identifying areas that require further attention",
          "b) Providing information on the tests executed, their results, and any issues or defects found",
          "c) Providing information about each defect, such as the steps to reproduce it",
          "d) Providing information on testing planned for the next period"
        ],
        correctAnswer: 2,
        explanation: "c) Is correct. Providing information about defects is the purpose of a defect report, not a test report",
        image: null
      },
      {
        text: "The user reported a software failure. An engineer from the support team asked the user for the software version number where the failure was observed. Based on the version number, the team reassembled all the files that made up the release. This later allowed a developer to perform analysis, find the defect, and fix it. Which of the following enabled the above activity to be performed by the team? a) Risk management b) Test monitoring and control c) Whole-team approach d) Configuration management d) Is correct. Configuration management provides a discipline for identifying, controlling, and tracking work products. Configuration management keeps a record of changed configuration items when a new baseline is created. Using configuration management, it is possible to revert to a previous baseline in order to reproduce previous test results",
        options: [
          "a) Risk management",
          "b) Test monitoring and control",
          "c) Whole-team approach",
          "d) Configuration management"
        ],
        correctAnswer: 3,
        explanation: "d) Is correct. Configuration management provides a discipline for identifying, controlling, and tracking work products. Configuration management keeps a record of changed configuration items when a new baseline is created. Using configuration management, it is possible to revert to a previous baseline in order to reproduce previous test results",
        image: null
      },
      {
        text: "Consider the following defect report for a Book Lending System. Severity: High | Priority: Defect ID: 001 | Title: Unable to Return a Book | | Environment: Windows 10, Google Chrome Description: When attempting to return a book using the Book Return feature, the system does not register the return and the book remains checked out to the user. Steps to Reproduce: Login to the Book Lending System as a user who has checked out a book. Click on the 'Book Return' button for the book that has been checked out. System does not register the return and the book remains checked out. Expected Result: The book should be returned and no longer appear as checked out to the user. Actual Result: The book remains checked out to the user and is not registered as returned in the system. Attachments: [empty list] Which of the following is MOST likely to help the developer reproduce the failure quickly? a) Adding information about which users and which books the issue affects to the 'Description' section b) Filling in the missing value for the 'Priority' field c) Adding memory dumps and database snapshots taken after each step described in the 'Steps to Reproduce' section to the 'Attachments' section. d) Repeating the same test case for different environments and writing defect reports for each of them separately a) Is correct. Adding this information allows the developer to use the same input data, so it is more likely they will be able to reproduce the failure quickly and so identify the defect faster",
        options: [
          "a) Adding information about which users and which books the issue affects to the 'Description' section",
          "b) Filling in the missing value for the 'Priority' field",
          "c) Adding memory dumps and database snapshots taken after each step described in the 'Steps to Reproduce' section to the 'Attachments' section.",
          "d) Repeating the same test case for different environments and writing defect reports for each of them separately"
        ],
        correctAnswer: 0,
        explanation: "a) Is correct. Adding this information allows the developer to use the same input data, so it is more likely they will be able to reproduce the failure quickly and so identify the defect faster",
        image: null
      },
      {
        text: "Given the following test tool categories: i. Collaboration tools ii. DevOps tools iii. Management tools iv. Non-functional testing tools v. Test design and implementation tools Tools from which of the categories are MOST likely to facilitate test execution? a) i, v b) ii, iv c) i, iii, v d) ii, iii, iv b) Is correct. Both DevOps tools (ii) and Non-functional testing tools (iv) facilitate test execution",
        options: [
          "a) i, v",
          "b) ii, iv",
          "c) i, iii, v",
          "d) ii, iii, iv"
        ],
        correctAnswer: 1,
        explanation: "b) Is correct. Both DevOps tools (ii) and Non-functional testing tools (iv) facilitate test execution",
        image: null
      },
      {
        text: "Which of the following is MOST likely to be a risk of test automation? a) The detection of additional high-severity defects b) Providing measures that are too complicated for humans to derive c) Incompatibility with the development platform d) Substantially reduced test execution times",
        options: [
          "a) The detection of additional high-severity defects",
          "b) Providing measures that are too complicated for humans to derive",
          "c) Incompatibility with the development platform",
          "d) Substantially reduced test execution times"
        ],
        correctAnswer: 2,
        explanation: "c) Is correct. If the test automation is incompatible with the development platform, then it will not be able to integrate them, and, for instance, pass test inputs to the test object and receive test results from the test object",
        image: null
      }

    ]
  },
];

export default quizData;
