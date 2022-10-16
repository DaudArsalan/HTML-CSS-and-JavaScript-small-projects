const question = [
  {
    que: "Q1: JavaScript File Has An Extension of:",
    a: ".java",
    b: ".js",
    c: ".javascript",
    d: ".xml",
    correct: "b",
  },
  {
    que: "Q2: Inside which HTML element do we put the JavaScript?",
    a: "Js",
    b: "Javascript",
    c: "Script",
    d: "Scripting",
    correct: "c",
  },
  {
    que: "Q3: The Tag is used To Give Heading To The Table.",
    a: "Head",
    b: "Td",
    c: "Th",
    d: "Caption",
    correct: "d",
  },
  {
    que: "Q4: If Button is clicked .......Event Handler is invoked.",
    a: "OnSubmit()",
    b: "OnClick()",
    c: "OnLoad",
    d: "IsPostBack()",
    correct: "b",
  },
  {
    que: "Q5: Method Prompt() Contain ........Number of Parameters.",
    a: "One",
    b: "Two",
    c: "Three",
    d: "Four",
    correct: "a",
  },
];

let mainQuestion = document.getElementById("mainQuestion");
let options = document.querySelectorAll("input");

let index = 0;
let total = question.length;
let right = 0;
let wrong = 0;

// Get questions in DOM
function getQuestions() {
  if (index == question.length - 1) {
    submit.innerText = "Submit";
  }

  if (index == question.length) {
    return endQuiz();
  }

  reset();

  let data = question[index];
  mainQuestion.innerText = data?.que;

  options[0].nextElementSibling.innerText = data?.a;
  options[1].nextElementSibling.innerText = data?.b;
  options[2].nextElementSibling.innerText = data?.c;
  options[3].nextElementSibling.innerText = data?.d;
}

// onclick() Event to Submit the quiz
let submit = document.getElementById("submit");
submit.addEventListener("click", submitQuiz);

function submitQuiz(e) {
  let data = question[index];
  let ans = getAnswer();

  if (ans === data?.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  getQuestions();
  return;
}

// Get answers from users
function getAnswer() {
  let answer;

  options.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });

  return answer;
}

// Reset the mark value after every question
function reset() {
  options.forEach((input) => {
    input.checked = false;
  });
}

// Submit the Quiz
function endQuiz() {
  let container = document.querySelector(".container");
  container.classList.add("design");
  container.innerHTML = `<div>
      <h6>${right}/${total} are correct</h6>
      <h6>Thanks for playing the Quiz</h6>
      </div>`;
}

getQuestions();
