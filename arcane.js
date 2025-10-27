const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("result");
const submitButton = document.getElementById("submit");//these lines grab specific elements from html using their IDs
//this is an array of objects representing the quiz questions and  answers
const quizQuestions = [
  {
    question: "1,You witness something terrible happening to someone you love. Your first instinct is to:",
    answers: {
      A: "Charge in immediately - action is the only answer",
      B: "Freeze, overwhelmed by the shock and emotion",
      C: "Analyze the situation quickly for the smartest move",
      D:"Find someone in authority to handle it properly",
      E:"Assess how this affects your long-term goals",
      F:"Take control and direct others in the response",
      G:"Look for creative solutions no one else considered",
      H:"Observe and understand the underlying causes"
    }
  },
  {
    question: "2,You're working on a passion project that could change lives. You're most driven by:",
    answers: {
     A: "Proving your critics wrong and making your mark",
     B:"The sheer joy of creation and discovery",
     C:"The practical benefits it will bring to people",
     D:"Ensuring it's absolutely perfect before sharing it",
     E:"The recognition and impact it will create",
     F:"The power and influence it will give you",
     G:"The opportunity to help your community",
     H:"The pursuit of knowledge and understanding"
      
    }
  },
  {
    question: "3,To achieve something important, you might have to break some rules. You:",
    answers: {
    A:"Do what needs to be done - results matter most",
    B:"Struggle intensely with the decision",
    C:"Find a clever workaround that technically follows the rules",
    D: "Refuse there's always a right way to do things",
    E:"Weigh the benefits against the costs carefully",
    F:"See rules as obstacles to be strategically overcome",
    G:"Consider how it affects the people involved",
    H:"Question why those rules exist in the first place"
    }
  }
  ,
  {
    question:"4,When faced with harsh criticism, you tend to:",
    answers: {
    A:"Blame yourself endlessly, hearing criticism in your head",
    B:"Get angry and look for someone/something to fight",
    C:"Withdraw to rethink your entire approach",
    D:"Try to put on a brave face and move forward quickly",
    E:"Analyze what went wrong and plab your comeback",
    F:"Reassess your strategy and adopt your methods",
    G:"Learn from it and share those leassons with others",
    H:"See it as valuable data in your research"

    }   
  }
];//<--missing;close the quizQuestions array
//exiting code

//defines a resusable block of code to build the quiz interface
function buildQuiz() {
  const output = [];
  //loops through each question and its answers
  quizQuestions.forEach((currentQuestion, questionNumber) => {
    const answers = [];
    for (const letter in currentQuestion.answers) {
      answers.push(
        `<label>
           <input type="radio" name="question${questionNumber}" value="${letter}">
           ${letter}: ${currentQuestion.answers[letter]}
         </label><br>`
      );
    }

    output.push(
      `<div class="question">${currentQuestion.question}</div>
       <div class="answers">${answers.join("")}</div><hr>`
    );
  });
//to display the quiz in the HTML container
  quizContainer.innerHTML = output.join("");

  }
  if (submitButton) {
    submitButton.addEventListener("click", showResults);
  } else {
    console.warn("Submit button not found: #submit");
  }

function showResults() {
  const answerContainers = quizContainer.querySelectorAll(".answers");//grabs all the sets of answera.
  let counts = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, };//ocunts for each answer type

  quizQuestions.forEach((_, questionNumber) => {
    const selector = `input[name=question${questionNumber}]:checked`;//findds the selected radio button for each question
    const userAnswer = (answerContainers[questionNumber].querySelector(selector) || {}).value;
    if (userAnswer) counts[userAnswer]++;
  });

  const maxLetter = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);

  let archetype = "";
  switch (maxLetter) {
    case "A":
      archetype = "JINX";
      break;
    case "B":
      archetype = " VI";
      break;
    case "C":
      archetype = "EKKO";
      break;
    case "D":
      archetype = "CAITLYN ";
      break;
    case "E":
      archetype="JAYCE";
      break;
    case "F":
      archetype="SILCO";
      break;
    case "G":
      archetype="MEL";
      break;
    case "H":
      archetype="VIKTOR";
      bre
  }//switch statement checks which letter qas most frequent

  //displays the result in the result container
  resultContainer.innerHTML = `<strong>${archetype}</strong>`;
}

buildQuiz();
submitButton.addEventListener("click", showResults);
