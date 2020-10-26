var goBack = document.querySelector("#go-back")
var clearScores = document.querySelector("#clear-scores") 

var loadScores = function(){
    var highScores = JSON.parse(localStorage.getItem("highScores"));

    console.log (highScores);
    var scoreTable = document.querySelector("#score-table")
    if (highScores){
        for (var i = 0; i < highScores.length; i++){
            
            var trEl = document.createElement("tr")
            var nameTdEl = document.createElement("td")
            var scoreTdEl = document.createElement("td")
        
            nameTdEl.textContent = highScores[i].name
            scoreTdEl.textContent = highScores[i].score
        
            trEl.append(nameTdEl, scoreTdEl)
            scoreTable.append(trEl)
            
        }
    }
}

loadScores();

var reloadMain = function() { 
    return window.location.assign((href = "./index.html"))
}

var removeScores = function(){
    localStorage.removeItem("highScores");
    return window.location.assign((href = "./highscores.html"))
}

goBack.addEventListener("click", reloadMain);
clearScores.addEventListener("click", removeScores)