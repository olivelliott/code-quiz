var startButtonEl = document.querySelector("#btn-start");
var startPageEl = document.querySelector(".start-page")
var questionEl = document.querySelector("#question");
var quizContentEl = document.querySelector(".quiz-content")
var optionsEl = document.querySelector("#choices");
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
        choiceD: "Data optionsEl Manual",
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
];
var timerEl = document.querySelector("#countdown");
var scoreEl = document.querySelector("#score");
var saveNameInputEl = document.querySelector("#saveForm");
var submitButtonEl = document.querySelector("#submit-button");
var highScoreButtonEl = document.querySelector("#high-scores");
var highScoreFormEl = document.querySelector(".high-score-submission");
var highScorePageEl = document.querySelector(".high-score-page");
var tryAgainEl = document.querySelector("#try-again-button");
var timeLeft = 60;
var finalScore = 0;
var lastQuestionIndex = questions.length -1;
var runningQuestionIndex = 0;
var highScoreMemoryEl = [];

function startEl() {
    highScorePageEl.style.display = "none";
    startPageEl.style.display = "block";
    runningQuestionIndex = 0;
    finalScore = 0;
    timeLeft = 60;
    countdown();
}

function countdown() {
    quizContentEl.style.display = "block";
    // scoreContainer.style.display = "none";
    var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      }
      else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      }
      else if (timeLeft === 0) {
        scoreRender();
        timerEl.textContent = "";
        clearInterval(timeInterval);
      }
    }, 1000);
    renderQuestion();
  }

function renderQuestion() {
    startPageEl.style.display = "none";
    highScorePageEl.style.display = "none";

    var q = questions[runningQuestionIndex];
    questionEl.textContent = q.question
    choiceA.textContent = q.choiceA;
    choiceB.textContent = q.choiceB;
    choiceC.textContent = q.choiceC;;
    choiceD.textContent = q.choiceD;
}

function nextQuestionHandler() {
    if (runningQuestionIndex < lastQuestionIndex) {
    // count = 0;
    runningQuestionIndex++;
    renderQuestion();
} else {
    scoreRender();
}
}

function answerIsCorrect() {
    if (timeLeft = 60) {
        timeLeft = 60;
        finalScore++;
    } else if (timeLeft < 60) {
        timeLeft =+ 5;
        finalScore++;
    } else if (timeLeft = 0) {
        scoreRender();
    }
    return nextQuestionHandler();
}

function answerIsWrong() {
    if (timeLeft > 0) {
        timeLeft = timeLeft - 5;
        nextQuestionHandler();
    } else if (timeLeft = 0) {
        scoreRender();
    }
}

function checkAnswer(answer) {
    if(questions[runningQuestionIndex].correct == answer) {
        answerIsCorrect();
    } else {
        answerIsWrong();
    } }
// }
function scoreRender() {
    scoreContainer.style.display = "block";
    timerEl.style.display = "none";
    startPageEl.style.display = "none";
    quizContentEl.style.display = "none";
    var score = Math.max(100 * finalScore / questions.length);
    var testScore = document.createElement("p")
    testScore.textContent = "Congratulations! Your score was " + score + "%. "
     + "Would you like to save your score?";    
    scoreEl.appendChild(testScore);
    localStorage.setItem("testScore", score)
    // highScoreMemoryEl.push(score);
}

function highScorePage() {
    highScoreFormEl.style.display = "none";
    scoreContainer.style.display = "none";
    highScorePageEl.style.display = "block";
    var userInitialData = JSON.parse(localStorage.getItem("userInput"))
    var scoreData = JSON.parse(localStorage.getItem("testScore"))
    var highScoreList = document.createElement("ol");
    var highScoreNumber = document.createElement("li")
    var highScoreName = document.createElement("p")
    highScoreNumber.textContent = scoreData;
    highScoreName.textContent = userInitialData;
    highScoreNumber.appendChild(highScoreName);
    highScoreList.appendChild(highScoreNumber);
    highScorePageEl.appendChild(highScoreList);
    // highScoreMemoryEl.push(scoreData);

}

function resetQuiz () {
    highScorePageEl.style.display = "none";
    startPageEl.style.display = "block";
    runningQuestionIndex = 0;
    finalScore = 0;
    timeLeft = 60;
    countdown();
}

startButtonEl.addEventListener("click", startEl);
submitButtonEl.addEventListener("click", function(event){
    event.preventDefault();
    var userInput =  saveNameInputEl.value.trim();
    localStorage.setItem("userInput", JSON.stringify(userInput));
    highScoreMemoryEl.push(userInput);
    alert("Your score was saved!");
});
highScoreButtonEl.addEventListener("click", function(event) {
    event.preventDefault();
    highScorePage();
});
tryAgainEl.addEventListener("click", startEl);

