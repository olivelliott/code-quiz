// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

var startButtonEl = document.querySelector("#btn-start");
var questionEl = document.querySelector("#question");
var options = document.querySelector("#choices");
var choiceA = document.querySelector("#option1");
var choiceB = document.querySelector("#option2");
var choiceC = document.querySelector("#option3");
var choiceD = document.querySelector("#option4");
var questions =  [
    {
        question: "What does DOM stand for?",
        choiceA: "I dont know",
        choiceB: "Yes",
        choiceC: "Why",
        choiceD: "Ok",
        correct: "A",
    },
    {
        question: "What dBLOOOtand for?",
        choiceA: "I dont know",
        choiceB: "Yes",
        choiceC: "Why",
        choiceD: "Ok",
        correct: "A",
    }
]
var lastQuestionIndex = questions.length -1;
var runningQuestionIndex = 0;
var timerEl = document.querySelector("#countdown");
var timeLeft = 60;

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
    }, 1000); console.log(countdown);
    renderQuestion();
  }

  function setCounterText() {
    timeLeft++;
  }

function renderQuestion() {
    var q = questions[runningQuestionIndex];
    questionEl.textContent = q.question
    choiceA.textContent = q.choiceA;
    choiceB.textContent = q.choiceB;
    choiceC.textContent = q.choiceC;;
    choiceD.textContent = q.choiceD;
}

function answerIsCorrect() {
    setCounterText();
}

function checkAnswer(answer) {
    if(questions[runningQuestionIndex].correct == answer) {
        timer++;
        answerIsCorrect();
    } else {
        answerIsWrong();
        timer--;
    }
    if (runningQuestionIndex < lastQuestionIndex) {
        count = 0;
        runningQuestionIndex++;
        renderQuestion();
    }
}

// var questionOneHandler = function() {
//     console.log(questions);
//     // for (var i = 0; i < questions.length; i++) {
//         console.log(questions[i]);
//     var q = questions[runningQuestionIndex];
//         var questions = document.createElement("p");
//         var optionA = document.createElement("p");
//         var optionB = document.createElement("p");
//         var optionC = document.createElement("p");
//         var optionD = document.createElement("p");

//         questions.textContent = q[0].question;
//         optionA.textContent = q[0].choiceA;
//         optionB.textContent = q[0].choiceB;
//         optionC.textContent = q[0].choiceC;
//         optionD.textContent = q[0].choiceD;

//         questionEl.appendChild(questions);
//         choiceA.appendChild(optionA);
//         choiceB.appendChild(optionB);
//         choiceC.appendChild(optionC);
//         choiceD.appendChild(optionD);

//     }


// var questionOneHandler = function() {
//     startButtonEl.textContent = "";
//     // startButtonEl.style = none;
//     var questionOne = document.createElement("p");
//     questionOne.textContent = "What does DOM stand for?"
//     questionOne.className = "question-element";
//     questionEl.appendChild(questionOne);

//     var optionOneEl = document.createElement("p");
//     optionOneEl.textContent = "Document Override Manuscript";
//     optionOneEl.className = "option-one-element";
//     choiceA.appendChild(optionOneEl);

//     var optionTwoEl = document.createElement("p")
//     optionTwoEl.textContent = "Document Object Model";
//     optionTwoEl.className = "option-two-element";
//     choiceB.appendChild(optionTwoEl);

//     var optionThreeEl = document.createElement("p")
//     optionThreeEl.textContent = "Data Override Module";
//     optionThreeEl.className = "option-three-element";
//     choiceC.appendChild(optionThreeEl);

//     var optionFourEl = document.createElement("p")
//     optionFourEl.textContent = "Data Options Manual";
//     optionFourEl.className = "option-four-element";
//     choiceD.appendChild(optionFourEl);
//     // choiceD = false;

//     if (choiceD === true) {
//         secondQuestionHandler();
//     }

//     choiceA.addEventListener("click", wrongAnswerHandler)
//     choiceB.addEventListener("click", secondQuestionHandler)
//     choiceC.addEventListener("click", wrongAnswerHandler)
//     // choiceD.addEventListener("click", wrongAnswerHandler)
// };

// var secondQuestionHandler = function() {
//     questionEl.textContent = "";
//     choiceA.textContent = "";
//     choiceB.textContent = "";
//     choiceC.textContent = "";
//     choiceD.textContent = "";

//     var questionTwo = document.createElement("p");
//     questionTwo.textContent = "What does the trim() function do in JavaScript?";
//     questionTwo.className = "question-element";
//     questionEl.appendChild(questionTwo);

//     var optionOneEl = document.createElement("p");
//     optionOneEl.textContent = "Trims off any unnecessary variables";
//     optionOneEl.className = "option-one-element";
//     choiceA.appendChild(optionOneEl);

//     var optionTwoEl = document.createElement("p")
//     optionTwoEl.textContent = "Deletes the HTML file";
//     optionTwoEl.className = "option-two-element";
//     choiceB.appendChild(optionTwoEl);

//     var optionThreeEl = document.createElement("p")
//     optionThreeEl.textContent = "Trims any unused whitespace";
//     optionThreeEl.className = "option-three-element";
//     choiceC.appendChild(optionThreeEl);

//     var optionFourEl = document.createElement("p")
//     optionFourEl.textContent = "Creates a new element called 'trim'";
//     optionFourEl.className = "option-four-element";
//     choiceD.appendChild(optionFourEl);

//     choiceA.addEventListener("click", wrongAnswerHandler)
//     choiceB.addEventListener("click", wrongAnswerHandler)
//     choiceC.addEventListener("click", thirdQuestionHandler)
//     choiceD.addEventListener("click", wrongAnswerHandler)
// }

// var thirdQuestionHandler = function() {
//     questionEl.textContent = "";
//     choiceA.textContent = "";
//     choiceB.textContent = "";
//     choiceC.textContent = "";
//     choiceD.textContent = "";

//     var questionThree = document.createElement("p");
//     questionThree.textContent = "How are objects defined in JavaScript?";
//     questionThree.className = "question-element";
//     questionEl.appendChild(questionThree);

//     var optionOneEl = document.createElement("p");
//     optionOneEl.textContent = "By a <div> element";
//     optionOneEl.className = "option-one-element";
//     choiceA.appendChild(optionOneEl);

//     var optionTwoEl = document.createElement("p")
//     optionTwoEl.textContent = "By an equals sign";
//     optionTwoEl.className = "option-two-element";
//     choiceB.appendChild(optionTwoEl);

//     var optionThreeEl = document.createElement("p")
//     optionThreeEl.textContent = "With a quotation";
//     optionThreeEl.className = "option-three-element";
//     choiceC.appendChild(optionThreeEl);

//     var optionFourEl = document.createElement("p")
//     optionFourEl.textContent = "With key value pairs";
//     optionFourEl.className = "option-four-element";
//     choiceD.appendChild(optionFourEl);

//     choiceA.addEventListener("click", wrongAnswerHandler)
//     choiceB.addEventListener("click", wrongAnswerHandler)
//     choiceC.addEventListener("click", wrongAnswerHandler)
//     choiceD.addEventListener("click", fourthQuestionHandler)
// }

// var fourthQuestionHandler = function() {
//     questionEl.textContent = "";
//     choiceA.textContent = "";
//     choiceB.textContent = "";
//     choiceC.textContent = "";
//     choiceD.textContent = "";

//     var questionFour = document.createElement("p");
//     questionFour.textContent = "What does CSS stand for?";
//     questionFour.className = "question-element";
//     questionEl.appendChild(questionFour);

//     var optionOneEl = document.createElement("p");
//     optionOneEl.textContent = "Choosing Style Sections";
//     optionOneEl.className = "option-one-element";
//     choiceA.appendChild(optionOneEl);

//     var optionTwoEl = document.createElement("p")
//     optionTwoEl.textContent = "Cascading Style Sheets";
//     optionTwoEl.className = "option-two-element";
//     choiceB.appendChild(optionTwoEl);

//     var optionThreeEl = document.createElement("p")
//     optionThreeEl.textContent = "Cross-platform Creative Styles";
//     optionThreeEl.className = "option-three-element";
//     choiceC.appendChild(optionThreeEl);

//     var optionFourEl = document.createElement("p")
//     optionFourEl.textContent = "Creative Style Sections";
//     optionFourEl.className = "option-four-element";
//     choiceD.appendChild(optionFourEl);

//     choiceA.addEventListener("click", wrongAnswerHandler)
//     choiceB.addEventListener("click", fifthQuestionHandler)
//     choiceC.addEventListener("click", wrongAnswerHandler)
//     choiceD.addEventListener("click", wrongAnswerHandler)
// }

// var fifthQuestionHandler = function() {
//     questionEl.textContent = "";
//     choiceA.textContent = "";
//     choiceB.textContent = "";
//     choiceC.textContent = "";
//     choiceD.textContent = "";

//     var questionFive = document.createElement("p");
//     questionFive.textContent = "Which of the following is not a programming language?";
//     questionFive.className = "question-element";
//     questionEl.appendChild(questionFive);

//     var optionOneEl = document.createElement("p");
//     optionOneEl.textContent = "Python";
//     optionOneEl.className = "option-one-element";
//     choiceA.appendChild(optionOneEl);

//     var optionTwoEl = document.createElement("p")
//     optionTwoEl.textContent = "Javascript";
//     optionTwoEl.className = "option-two-element";
//     choiceB.appendChild(optionTwoEl);

//     var optionThreeEl = document.createElement("p")
//     optionThreeEl.textContent = "TypeScript";
//     optionThreeEl.className = "option-three-element";
//     choiceC.appendChild(optionThreeEl);

//     var optionFourEl = document.createElement("p")
//     optionFourEl.textContent = "Anaconda";
//     optionFourEl.className = "option-four-element";
//     choiceD.appendChild(optionFourEl);

//     choiceA.addEventListener("click", wrongAnswerHandler)
//     choiceB.addEventListener("click", wrongAnswerHandler)
//     choiceC.addEventListener("click", wrongAnswerHandler)
//     choiceD.addEventListener("click", wrongAnswerHandler)
// }

// var wrongAnswerHandler = function() {
//     alert("wrong");
// }



startButtonEl.addEventListener("click", countdown);
// startButtonEl.addEventListener("click", function handleClick(event) {
//     box.remove();
// });
































// var quiz = function() {
// for (var i=0; i < questions.length; i++) {
//     var response = prompt(questions[i].prompt);
//     if (response == questions[i].answer) {
//         timer++;
//         alert("correct!");
//     } else {
//         alert("wrong!");
//     }
// }
// };

// // alert("you got " + timer + "points!")

// startBtn.addEventListener("click", function() {
//     quiz();
// })


// var count = 0;
// var time = 30;
// var marks = 0;
// var answer = [];
// var timerEl;

// $(document).ready(function() {
//     $("#finish").hide();
//     $("#result").hide();
//     function buttonManager() {
//         if (count > 0) {
//             $("#prev").show();
//             if (count === 4) {
//                 $("#next").hide();
//                 $("#finish").show();
//             } else {
//                 $("#next").show();
//             }
//         } else {
//             $("#prev").hide();
//         }
//     }

//     function addQuestions(data, i) {
//         $("#question").text(data[i.Quiz])
//         $("#option1").text(data[i].option1);
//         $("#option2").text(data[i].option2);
//         $("#option3").text(data[i].option3);
//         $("#option4").text(data[i].option4);
//         $("#number").text(Number(i+1))
//     }

//     // function selectedAnswer() {
//     //     for (var i = 0; i <4; i++) {
//     //         var a = document.getElementById("options").children;
//     //         if(a[i].innerHTML == answer[count]) {
//     //             $("#options").children("button")[i].classList.add("active");
//     //         } else {
//     //             $("#options").children("button")[i].classList.remove("active");
//     //         }
//     //     }
//     // }

//     function createResult(data) {
//         for (var i = 0; i < answer.length; i++) {
//             marks += 5;
//         }
//         $("#main").hide();
//         $("#marks").text(marks);
//         $("#correct-answer").text(marks / 5);
//         $("#correct-answer").text((marks / 25)* 100 + "%");
//         $("#result").show();
//     };
// });

//     // function countdown() {
//     //     var timeLeft = 30;
//     //     var timerEl = setInterval(function() {
//     //         if (timerEl > 1) {
//     //             timerEl.textContent = timeLeft
//     //             timeLeft--;
//     //         } else if (timeLeft === 1) {
//     //             timerEl.textContent = timeLeft;
//     //             timeLeft--;
//     //         } else {
//     //             timerEl.textContent = "";
//     //             clearInterval(timerEl);
//     //         }
//     //     }, 100000);
//     // }
//     function timerFunction() {
//         $("#time").text(time)
//         if (timer < 1) {
//             alert("You ran out of time!")
//             clearInterval(timer);
//             createResult(data);
//             $("#main").hide();
//             $("#result").show();
//         } 20000};
//     //     // time--;
//     //             if (timerEl > 1) {
//     //         timerEl.textContent = timeLeft
//     //         timeLeft--;
//     //     } else if (timeLeft === 1) {
//     //         timerEl.textContent = timeLeft;
//     //         timeLeft--;
//     //     } else {
//     //         timerEl.textContent = "";
//     //         clearInterval(timerEl);
//     //     }
//     // }, 20000);

//     $("#btn-start").click(function() {
//         timerFunction();
//     });

//     // $("#options").hide();

//     // fetch("data.json")
//     // .then(function (response) {
//     //     return response.json();
//     // }) .then(function (data)){
//     //     $("#btn").click(function() {
//     //         $("#options").show();
//     //         addQuestions(data.Questions.count);
//     //         $("#start-page").hide();
//     //         $("#prev").hide();

//     //         timer = setInterval(timerFunction, 1000)
//     //     });
//     // }