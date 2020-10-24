var timer = document.querySelector("#timer");
var question = document.querySelector("#quiz-text");
var intro = document.querySelector("#intro-text");
var quizArea = document.querySelector("main");
var startBtn = document.querySelector("#start-quiz");

var timeCount = function(){
    var timeLeft = 75;
    
    var timeInterval = setInterval(function(){
        timer.textContent = timeLeft;
        if (timeLeft > 0) {
            timeLeft--;
        }
        else if (timeLeft === 0) { 
            clearInterval(timeInterval);
            console.log ("You are out of time :(")
        }
        

    }, 1000); 
}

// initialize quiz function
var quiz = function(){
    timeCount();
    var pickles = "pickles"
    console.log(pickles)
}
    //start timer
    //start questions loop
    //start buttons

var startQuiz = function(){
    console.log("Hey, you clicked me!");
    intro.remove();
    startBtn.remove();
    quiz();
    // set attributes to re-align quiz-text and buttons
    // call quiz(); function
};

// Need to set answer area as below buttons <h2> italic border top





startBtn.addEventListener("click", startQuiz);