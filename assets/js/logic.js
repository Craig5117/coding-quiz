var timer = document.querySelector("#timer");
var question = document.querySelector("#quiz-text");
var intro = document.querySelector("#intro-text");
var quizArea = document.querySelector("main");
var startBtn = document.querySelector("#start-quiz");


var startQuiz = function(){
    console.log("Hey, you clicked me!");
    intro.remove();
    startBtn.remove();

};





startBtn.addEventListener("click", startQuiz);