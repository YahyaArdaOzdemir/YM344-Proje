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
      // Add more questions here...
    ]
  },
  
];

export default quizData;
