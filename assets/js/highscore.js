var loadScores = function(){
    var highScores = JSON.parse(localStorage.getItem("highScores"));
    console.log (highScores);
    var scoreTable = document.querySelector("#score-table")
    if (highScores){
        for (var i = 0; i < highScores.length; i++){
            var scoreInfo = highScores[i];
            var trEl = document.createElement("tr")
            var nameTdEl = document.createElement("td")
            var scoreTdEl = document.createElement("td")
        
            nameTdEl.textContent = scoreInfo.name
            scoreTdEl.textContent = scoreInfo.score
        
            trEl.append(nameTdEl, scoreTdEl)
            scoreTable.append(trEl)
        }
    }
}

loadScores();