var timer = document.querySelector("#timer");
var question = document.querySelector("#question");
var intro = document.querySelector("#intro-text");
var quizArea = document.querySelector("main");
var startBtn = document.querySelector("#start-quiz");
var buttonContainer = document.querySelector(".button-container");

var questions = [
    { q: 'The sky is blue.', a: 'fork'}
    // { q: 'There are 365 days in a year.', a: 't' },
    // { q: 'There are 42 ounces in a pound.', a: 'f' },
    // { q: 'The Declaration of Independence was created in 1745.', a: 'f' },
    // { q: 'Bananas are vegetables.', a: 'f' }
  ];

var answers = [
    {m1:'fork', m2:'spoon', m3:'pickle', m4:'hexagon'}
];

var timeCount = function(){
    // there is about a 1 sec delay for the set interval to start. Changing the timer to 75 and timeLeft to 74 hides the delay
    var timeLeft = 74;
    timer.textContent = 75;
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
    quizArea.style.justifyContent = "flex-start";
    quizArea.style.alignItems = "flex-start";
    for (var i = 0; i < questions.length; ++i) {
    // create qs
    question.textContent = questions[i].q
    var answer = questions[i].a;
    // create multiple choice
    
    var button1 = document.createElement("button");
    button1.className = "btn multi";
    button1.id ="button1"
    button1.textContent = answers[i].m1;
    var button2 = document.createElement("button");
    button2.className = "btn multi";
    button1.id ="button2"
    button2.textContent = answers[i].m2;
    var button3 = document.createElement("button");
    button3.className = "btn multi";
    button1.id ="button3"
    button3.textContent = answers[i].m3;
    var button4 = document.createElement("button");
    button4.className = "btn multi";
    button1.id ="button4"
    button4.textContent = answers[i].m4;
    buttonContainer.appendChild(button1);
    buttonContainer.appendChild(button2);
    buttonContainer.appendChild(button3);
    buttonContainer.appendChild(button4);
    
    // compares user input to answer
    var submitAndCompare = function(){
        var answerSubmission = event.target.textContent
        console.log(answerSubmission);
        if (answerSubmission === answer){
            console.log("Correct!")
        }
        else {
            console.log("Wrong!")
        }
    }

    button1.addEventListener("click", submitAndCompare); 
    button2.addEventListener("click", submitAndCompare); 
    button3.addEventListener("click", submitAndCompare); 
    button4.addEventListener("click", submitAndCompare); 
    
    
    
    }
    //start timer
    //start questions loop
    //start buttons
}
var startQuiz = function(){
    intro.remove();
    startBtn.remove();
    question.textContent = "";
    quiz();
    // set attributes to re-align quiz-text and buttons
    // call quiz(); function
};

// Need to set answer area as below buttons <h2> italic border top




startBtn.addEventListener("click", startQuiz);
