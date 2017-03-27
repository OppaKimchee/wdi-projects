/*-- Variables --*/

var p1;
var p2;
var board;
var turn;
var playerTurn;
var currentPl = '';
var winner = false;
var xO = document.getElementById('xo');
var resetBtn = document.getElementById('button');
var sq1 = document.getElementById('1');
var sq2 = document.getElementById('2');
var sq3 = document.getElementById('3');
var sq4 = document.getElementById('4');
var sq5 = document.getElementById('5');
var sq6 = document.getElementById('6');
var sq7 = document.getElementById('7');
var sq8 = document.getElementById('8');
var sq9 = document.getElementById('9');
var sq;

/*-- Game Logic --*/

//Start Game.
//clean board
function start(){
  clearBoard();
  //reset button
  resetBtn.addEventListener('click', clearBoard);
  currentPlayer(turn);
  sq1.addEventListener('click', boardFunc);
  sq2.addEventListener('click', boardFunc);
  sq3.addEventListener('click', boardFunc);
  sq4.addEventListener('click', boardFunc);
  sq5.addEventListener('click', boardFunc);
  sq6.addEventListener('click', boardFunc);
  sq7.addEventListener('click', boardFunc);
  sq8.addEventListener('click', boardFunc);
  sq9.addEventListener('click', boardFunc);

}

start();
if(sq1 === sq2 && sq2 === sq3){

}
else if(sq1 === sq4 && sq4 === sq7){

}
else if(sq1 === sq5 && sq5 === sq9){

}
else if(sq2 === sq5 && sq5 === sq8){

}
else if(sq3 === sq6 && sq6 === sq9){

}
else{

}


//p1 starts. p1 chooses x or o
//p1 clicks his 1st spot

xO.addEventListener('click',chooseSymbol);

//p1 symbol goes into that spot clicked.
//p2 goes, p2 is doesnt select because he gets left over symbol. wrecked.
//p2 clicks hit 1st spot
//p2 symbol goes into that spot clicked


/*-- Function Definitions --*/

//clean board or reset the board by initializing everything to defaults
function clearBoard(){
  p1 = '';
  p2 = '';
  board = '';
  turn = 1;
  winner = false;
  currentPl = '';
  xO.addEventListener('click',chooseSymbol);
  display("Player 1 choose x or o to start");
}//clearBoard()

//choose symbol
function chooseSymbol(event){
  if(event.target.textContent === 'x'){
   p1 = 'x';
   p2 = 'o';
   display("P1 = X P2 = O");
  }
  else{
    p1 = 'o';
    p2 = 'x';
   display("P1 = O P2 = X");
  }
  xO.removeEventListener('click', chooseSymbol);
}//chooseSymbol()

//display cell
function display(message){
  document.getElementById('display').textContent = message;
}//display()

//choosing current player by turn
function currentPlayer(currentPlayer){
  if(currentPlayer%2 === 0 ){
    currentPl = p2;
  }
  else{
    currentPl = p1;
  }
  return currentPl;
}//currentPlayer()


//Game Board Events
function boardFunc(event){
  if(currentPl = p1){
    event.target.id.textContent = p1;
  }
  else{
    event.target.id.textContent = p2;
  }
}//boardFunc()
