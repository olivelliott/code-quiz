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

// var questions = [
//     {
//         prompt: "What is me\n (a) Blue\n\ (b) purple",
//         answer: "a"
//     }
// ]
// var timer = 10000
// var startBtn = $("#quiz-start-btn")


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


var count = 0;
var time = 30;
var marks = 0;
var answer = [];
var timer;

$(document).ready(function() {
    $("#finish").hide();
    $("#result").hide();
    function button_manager() {
        if (count > 0) {
            $("#prev").show();
            if (count === 4) {
                $("#next").hide();
                $("#finish").show();
            } else {
                $("#next").show();
            }
        } else {
            $("#prev").hide();
        }
    }

    function addQuestions(data, i) {
        $("#question").text(data[i.Quiz])
        $("#option1").text(data[i].option1);
        $("#option2").text(data[i].option2);
        $("#option3").text(data[i].option3);
        $("#option4").text(data[i].option4);
        $("#number").text(Number(i+1))
    }

    function selectedAnswer() {
        for (var i = 0; i <4; i++) {
            var a = document.getElementById("options").children;
            if(a[i].innerHTML == answer[count]) {
                $("#options").children("button")[i].classList.add("active");
            } else {
                $("#options").children("button")[i].classList.remove("active");
            }
        }
    }

    function createResult(data) {
        for (var i = 0; i < answer.length; i++) {
            marks += 5;
        }
        $("#main").hide();
        $("#marks").text(marks);
        $("#correct-answer").text(marks / 5);
        $("#correct-answer").text((marks / 25)* 100 + "%");
        $("#result").show();
    }
    $("#options").hide();

    // fetch("data.json")
    // .then(function (response) {
    //     return response.json();
    // }) .then(function (data)){
    //     $("#btn").click(function() {
    //         $("#options").show();
    //         addQuestions(data.Questions.count);
    //         $("#start-page").hide();
    //         $("#prev").hide();

    //         timer = setInterval(timerFunction, 1000)
    //     });
    // }
})