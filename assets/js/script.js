// WHEN the game is over
// THEN I can save my initials and score

var startButtonEl = document.querySelector("#btn-start");
var questionEl = document.querySelector("#question");
var quiz = document.querySelector(".quiz-content")
var options = document.querySelector("#choices");
var choiceA = document.querySelector("#option1");
var choiceB = document.querySelector("#option2");
var choiceC = document.querySelector("#option3");
var choiceD = document.querySelector("#option4");
var questions =  [
    {
        question: "What does DOM stand for?",
        choiceA: "Document Override Manuscript",
        choiceB: "Document Object Model",
        choiceC: "Data Override Module",
        choiceD: "Data Options Manual",
        correct: "B",
    },
    {
        question: "What does the trim() function do in JavaScript?",
        choiceA: "Trims off any unused code",
        choiceB: "Deletes the HTML file",
        choiceC: "Trims any unused whitespace",
        choiceD: "Creates a new element called 'trim'",
        correct: "C",
    },
    {
        question: "How are objects defined in JavaScript?",
        choiceA: "By an equal sign",
        choiceB: "By a <div> element",
        choiceC: "With quotation marks",
        choiceD: "With key value pairs",
        correct: "D",
    },
    {
        question: "What does CSS stand for?",
        choiceA: "Choosing Style Sections",
        choiceB: "Cascading Style Sheets",
        choiceC: "Cross-platform Creative Styles",
        choiceD: "Creative Style Sections",
        correct: "B",
    },
    {
        question: "Which of the following is not a programming language?",
        choiceA: "Python",
        choiceB: "Javascript",
        choiceC: "TypeScript",
        choiceD: "Anaconda",
        correct: "D",
    }
]
var lastQuestionIndex = questions.length -1;
var runningQuestionIndex = 0;
var timerEl = document.querySelector("#countdown");
var timeLeft = 30;
var scoreEl = document.querySelector("#score")


var startEl = function() {
var startButtonEl = document.createElement("button")
startButtonEl.textContent = "Start The Quiz";
startButtonEl.className = "btn-start"
startButtonEl.appendChild(startEl);
countdown();
}

function countdown() {
    var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      }
      else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      }
      else {
        timerEl.textContent = "";
        clearInterval(timeInterval);
      }
    }, 1000);
    renderQuestion();
    quiz.style.display = "block";
  }

function answerIsCorrect() {
    timeLeft ++;
}

function answerIsWrong() {
    timeLeft--;
}

function renderQuestion() {
    var q = questions[runningQuestionIndex];
    questionEl.textContent = q.question
    choiceA.textContent = q.choiceA;
    choiceB.textContent = q.choiceB;
    choiceC.textContent = q.choiceC;;
    choiceD.textContent = q.choiceD;
}

function checkAnswer(answer) {
    if(questions[runningQuestionIndex].correct == answer) {
        timeLeft++;
        answerIsCorrect();
    } else {
        answerIsWrong();
        timer--;
    }
    if (runningQuestionIndex < lastQuestionIndex) {
        // count = 0;
        runningQuestionIndex++;
        renderQuestion();
    } else {
        scoreRender();
    }
}

function scoreRender() {
    scoreContainer.style.display = "block";
    timerEl.style.display = "none";
    quiz.style.display = "none";
    var finalScore = Math.round(100 * score / questions.length);
    scoreEl.appendChild(finalScore);
}

startButtonEl.addEventListener("click", countdown);