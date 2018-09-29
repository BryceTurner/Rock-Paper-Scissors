var iScore =0;
var cScore =0;

document.getElementById("iRock").addEventListener("click", function(){runGame(1);});
document.getElementById("iPaper").addEventListener("click", function(){runGame(2);});
document.getElementById("iScissors").addEventListener("click", function(){runGame(3);});
function runGame(choice) {
  if (iScore<5 && cScore<5){
    var com = compChoice();
    console.log (choice);
    console.log(com);
    var check= com*choice;
    console.log(check);
    if(check==6||check ==1){
      iScore++;
      userWins(iScore);
    }
    else if(check==2||check==9) {
      cScore++;
      comWins(cScore);
    }
    else{    }

  }
  if (iScore==5 || cScore==5){
    if(cScore>iScore){
      document.getElementById("Announcement").innerHTML = "You Lose!";
    }
    if(cScore<iScore){
      document.getElementById("Announcement").innerHTML = "You Win!";
    }
  }
}




function compChoice(){
    var x = Math.random();
    if (x<(1/3)){
      x=3;
      document.getElementById("cRock").style.backgroundColor = "red";
      document.getElementById("cPaper").style.backgroundColor = "black";
      document.getElementById("cScissors").style.backgroundColor = "black";
    }
    else if (x<(2/3)) {
      x=2;
      document.getElementById("cRock").style.backgroundColor = "black";
      document.getElementById("cPaper").style.backgroundColor = "red";
      document.getElementById("cScissors").style.backgroundColor = "black";
    }
    else {
      x=1;
      document.getElementById("cRock").style.backgroundColor = "black";
      document.getElementById("cPaper").style.backgroundColor = "black";
      document.getElementById("cScissors").style.backgroundColor = "red";
    }
    return(x);
}

function userWins(iScore){
    document.getElementById('playerScore').innerHTML = iScore;
}

function comWins(cScore){
    document.getElementById('compScore').innerHTML = cScore;
}

function reset(){
  iScore = 0;
  cScore = 0;
  document.getElementById('compScore').innerHTML = cScore;
  document.getElementById('playerScore').innerHTML = iScore;
  document.getElementById("cRock").style.backgroundColor = "black";
  document.getElementById("cPaper").style.backgroundColor = "black";
  document.getElementById("cScissors").style.backgroundColor = "Black";
  document.getElementById("Announcement").innerHTML = "";
}
