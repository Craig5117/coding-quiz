var i = 0;
var timer = document.querySelector("#timer");
var question = document.querySelector("#question");
var intro = document.querySelector("#intro-text");
var introTextArea = document.querySelector("#intro-text-area")
var quizArea = document.querySelector("main");
var startBtn = document.querySelector("#start-quiz");
var buttonContainer = document.querySelector(".button-container");
var result = document.querySelector("#result")
var resultsArea = document.querySelector("#results-area");
var scoreText = document.querySelector("#score");
var finalScoreDisplay = document.querySelector("#final-score");
var evaluate = "";
var answer = "";

var timeLeft = 74;
var score = 0;


// initializes elements to be appended
var button1 = document.createElement("button");
    button1.className = "btn multi";
    button1.id ="button1";    
var button2 = document.createElement("button");
    button2.className = "btn multi";
    button2.id ="button2";    
var button3 = document.createElement("button");
    button3.className = "btn multi";
    button3.id ="button3" ;  
var button4 = document.createElement("button");
    button4.className = "btn multi";
    button4.id ="button4";
var initialsEntry = document.createElement("form")
    initialsEntry.id = "score-form";
var scoreFormText = document.createElement("p")
    initialsEntry.appendChild(scoreFormText); 
var initialsInput = document.createElement("input")
    initialsInput.type = "text";
    initialsInput.className = "text-input";
    initialsInput.id = "initials";
    initialsInput.placeholder = "Your Initials";
    initialsEntry.appendChild(initialsInput);
var initSubmit = document.createElement("button")
    initSubmit.className = "btn";
    initSubmit.id = "init-submit";
    initSubmit.type = "submit";
    initSubmit.textContent = "Submit";
    initialsEntry.appendChild(initSubmit);

    
var questions = [
    { q: 'What is the method that can be used to run a function repeatedly for a set length of time?', a: 'setInterval()'},
    { q: 'What is the correct syntax to write a for loop?', a: 'for (var i = 0; i < variable.length; i++) {}' },
    { q: 'What does DOM stand for?', a: 'Document Object Model' },
    { q: 'An array can store what kind of information?', a: 'All of the above' },
    { q: 'Which of the following can be used for debugging JavaScript?', a: 'console.log' }
  ];
var answers = [
    {m1:'setInterval()', m2:'makeTimer()', m3:'setTimeout()', m4:'timeDelay()'},
    {m1:'for (10 times) {}', m2:'for (var i = 0; i < variable.length; i++) {}', m3: 'for (var i = 0, i < variable.length, i++)', m4:'for (i++; i < variable.length; i = 0)'},
    {m1:'Document Object Model', m2:'Domain Obligatory Management', m3:'Detailed Object Matrix', m4:'Data Obtainment Method'},
    {m1:'Other arrays', m2:'Booleans', m3:'Numbers and strings', m4:'All of the above'},
    {m1:'for loops', m2:'algorithms', m3:'console.log', m4:'booleans'}
];

console.log(localStorage.getItem("highScores"));

// increase score for correct answers
var incrementScore = function() {
	
	scoreText.textContent = score;
};

// end quiz and tally final score
var endQuiz = function(){
    button1.remove();
    button2.remove();
    button3.remove();
    button4.remove();
    console.log(timer.textContent);
    console.log(score);
    var finalScore = score + parseInt(timer.textContent);
    console.log(finalScore);
    
    question.textContent = "All Done!";
    scoreFormText.innerHTML = "Your final score: " + finalScore + "<br />Enter initials: ";
    introTextArea.appendChild(initialsEntry);
   
    // submit initials and store the scores
    var scoreSubmission = function (){
        var initials = document.querySelector("input[id='initials']").value
        event.preventDefault();
        console.log(initials)
        
        if (localStorage.getItem("highScores")) {
            oldScoreArr = localStorage.getItem("highScores");
            newScoreArr = [JSON.parse(oldScoreArr), {name: initials, score: finalScore}]
            console.log("newScoreArr: ", newScoreArr);
            localStorage.setItem("highScores", JSON.stringify(newScoreArr));
        }
        else {
            localStorage.setItem("highScores", JSON.stringify([{name: initials, score: finalScore}]))
        }
        initials.value = "";
        return window.location.assign((href = "./highscores.html"))
    }
    
    initialsEntry.addEventListener("submit", scoreSubmission);
    
    

}

var timeCount = function(){
    // there is about a 1 sec delay for the set interval to start. Changing the timer to 75 and timeLeft to 74 hides the delay
    
    timer.textContent = 75;
    var timeInterval = setInterval(function(){
        timer.textContent = timeLeft;
        if (i === 5) {
            clearInterval(timeInterval);
            return
        }
        else if (timeLeft > 0) {
            timeLeft--;
        }
        else if (timeLeft === 0) { 
            clearInterval(timeInterval);
            console.log ("You are out of time :(")
            endQuiz();
        }
        

    }, 1000);    
}

 // compares user input to answer
 var quizLoop = function(){
    if (i === 5) {
        button1.removeEventListener("click", submitAndCompare);
        button2.removeEventListener("click", submitAndCompare);
        button3.removeEventListener("click", submitAndCompare);
        button4.removeEventListener("click", submitAndCompare);
        return endQuiz();
        
    }
     
    // create qs
    question.textContent = questions[i].q
    answer = questions[i].a;
    // create multiple choice
    // start buttons
    button1.textContent = answers[i].m1;
    button2.textContent = answers[i].m2;
    button3.textContent = answers[i].m3;
    button4.textContent = answers[i].m4;           
} 
 
// compare user answer with correct answer and score
 var submitAndCompare = function(){
    var answerSubmission = event.target.textContent
    if (answerSubmission === answer){
        evaluate = "Correct!"
        score = score + 20;
        scoreText.textContent = score;
        
    }
    else {
        evaluate = "Wrong!";
        timeLeft = timeLeft - 10;
    }
    resultDisplay();
    ++i;
    quizLoop();
}
var resultDisplay = function() {
    var timeLeft = 1;
    result.textContent = evaluate
    resultsArea.style.borderTop = "3px solid lightslategray";
    var timeInterval = setInterval(function() {
        if (timeLeft > 0){           
            timeLeft--
        }
        
        else if (timeLeft === 0) {
            clearInterval(timeInterval);
            result.textContent = "";
            resultsArea.style.borderTop = "none";
        }
    }, 1000);
}

// initialize quiz function
var quiz = function(){
    //start timer
    timeCount();
    quizArea.style.justifyContent = "flex-start";
    quizArea.style.alignItems = "flex-start";
    
    buttonContainer.appendChild(button1);
    buttonContainer.appendChild(button2);
    buttonContainer.appendChild(button3);
    buttonContainer.appendChild(button4);
    //start questions loop
    quizLoop();
}

// starts quiz cycle
var startQuiz = function(){
    intro.textContent = "";
    startBtn.remove();
    question.textContent = "";
    quiz();
    
};

startBtn.addEventListener("click", startQuiz);
button1.addEventListener("click", submitAndCompare); 
button2.addEventListener("click", submitAndCompare); 
button3.addEventListener("click", submitAndCompare); 
button4.addEventListener("click", submitAndCompare); 