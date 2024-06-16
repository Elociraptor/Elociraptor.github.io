//TIC TAC Toe:
function startGame(){
    belegung = ["","","","","","","","",""];
    td1.innerHTML ="";
    td2.innerHTML ="";
    td3.innerHTML ="";
    td4.innerHTML ="";
    td5.innerHTML ="";
    td6.innerHTML ="";
    td7.innerHTML ="";
    td8.innerHTML ="";
    td9.innerHTML ="";
    currentPlayer = "Spieler A";
    var running = true;
    document.getElementById("anzeige").innerText = "Jetzt ist " + currentPlayer + " dran";
    document.getElementById("button1").style.visibility='hidden';
    td1.addEventListener("click", fieldClicked);
    td2.addEventListener("click", fieldClicked);
    td3.addEventListener("click", fieldClicked);
    td4.addEventListener("click", fieldClicked);
    td5.addEventListener("click", fieldClicked);
    td6.addEventListener("click", fieldClicked);
    td7.addEventListener("click", fieldClicked);
    td8.addEventListener("click", fieldClicked);
    td9.addEventListener("click", fieldClicked); 
  } 
  var n = 0;
  function fieldClicked(e){
    var field = e.target;
    var fieldIndex = this.getAttribute("fieldindex");
    if (n % 2 == 0){
    	field.innerHTML ="<img src='pictures/x.png'>";
      	 belegung [fieldIndex] = "x";
        n++;
    }
    else {
        field.innerHTML ="<img src='pictures/o.png'>";
      	belegung [fieldIndex] = "o";
        n++;
    }
    field.removeEventListener("click", fieldClicked);
    changeText();
    checkGame();
  }
  var currentPlayer = "Spieler A";
  function changeText(){
    if (currentPlayer == "Spieler A"){
    document.getElementById("anzeige").innerText = "Jetzt ist Spieler B dran";
    }
    else {
      document.getElementById("anzeige").innerText = "Jetzt ist Spieler A dran";
    }
  } 
  function checkGame(){
    var won = false;
    for(var i = 0;i< winningCombinations.length; i++){
      var condition = winningCombinations[i];
      var cellA = belegung[condition[0]];
      var cellB= belegung[condition[1]];
      var cellC= belegung[condition[2]];
      
      if (cellA == ""|| cellB == ""|| cellC==""){
        continue;
      }
      if (cellA == cellB && cellB == cellC){
        won = true;
        break;
      }
    }
    if(won){
      document.getElementById("anzeige").innerText ="Glückwunsch "+ currentPlayer + " hat gewonnen";
      running = false;
      isGameActive();
    }
    else if(!belegung.includes("")){
      document.getElementById("anzeige").innerText = "Leider unentschieden";
      running = false;
      isGameActive();
    }
    else {
    changePlayer();
    } 
  }
  var belegung = ["","","","","","","","",""];
  var winningCombinations= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];
  function changePlayer(){
    if (currentPlayer =="Spieler A"){
      currentPlayer = "Spieler B";
    }
    else {
    currentPlayer = "Spieler A";
    }
  }
  function isGameActive(){
    if (running == false){
    resetGame();
    }
  }
  function resetGame(){
   	document.getElementById("button1").style.visibility='visible';
  }
  //...
  
