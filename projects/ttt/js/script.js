/*-- Variables --*/

var p1;
var p2;
var turn;
var playerTurn;
var currentPl = '';
var winner = false;
var xO = document.getElementById('xo');
var resetBtn = document.getElementById('button');
/*-- Game Logic --*/

//Start Game.
//clean board
//p1 starts. p1 chooses x or o
//p1 clicks his 1st spot
//p1 symbol goes into that spot clicked.
//p2 goes, p2 is doesnt select because he gets left over symbol. wrecked.
//p2 clicks hit 1st spot
//p2 symbol goes into that spot clicked
//check winner


/*-- Function Definitions --*/

function start(){
  clearBoard();
  //reset button
  resetBtn.addEventListener('click', clearBoard);
  currentPlayer(turn);
  document.getElementById('full').addEventListener('click',boardFunc);
}

//clean board or reset the board by initializing everything to defaults
function clearBoard(){
  p1 = '';
  p2 = '';
  turn = 1;
  winner = false;
  currentPl = '';
  xO.addEventListener('click',chooseSymbol);
  console.log(document.getElementById('full'))
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
  currentPl = currentPlayer%2 === 0 ? p2 : p1;
  return currentPl;
}//currentPlayer()


//Game Board Events
function boardFunc(event){
  if(currentPl = p1){
    event.target.textContent = p1;
  }
  else{
    event.target.textContent = p2;
  }
}//boardFunc()
start();
