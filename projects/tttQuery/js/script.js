/*-- Variables --*/

var p1;
var p2;
var turn;
var currentPl = '';
var winner = '';
var winCon = false;
var tie;
var $xO = $('#xo');
var resetBtn = $('#button');
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

clearBoard();
/*-- Function Definitions --*/
function start(){

  //reset button
  resetBtn.on('click', clearBoard);
}

//clean board or reset the board by initializing everything to defaults
function clearBoard(){
  p1 = '';
  p2 = '';
  turn = 1;
  winner = '';
  currentPl = '';
  $('td.input').text("");
  $xO.on('click',chooseSymbol);
  $('body').css({'background':"url(http://www.pixelstalk.net/wp-content/uploads/2016/10/Invader-Arcade-Classic-Space-Invaders-Wallpaper.jpg)","background-size":"contain","background-repeat":"no-repeat","background-position":" 225px bottom","background-color":"black"});
  $('table').css({"color":"white","border":"10px solid white"});
  $('tr,td').css({"color":"white","border":"1px solid white"})
  display("Player 1 choose x or o to start");
}//clearBoard()

//choose symbol
function chooseSymbol(event){
  if($(event.target).text() === 'x'){
   p1 = 'x';
   p2 = 'o';
   display("P1 = X P2 = O");
  }
  else{
    p1 = 'o';
    p2 = 'x';
   display("P1 = O P2 = X");
  }
  $('body').css({'background':"url(https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/0kjHIH6/old-video-game-arcade-interface-on-a-black-background_4y7gpoell__S0000.jpg)","background-size":"contain","background-repeat":"no-repeat","background-position":"top center","background-color":"black"});
  $xO.off('click', chooseSymbol);
  $('#full').on('click',boardFunc);
}//chooseSymbol()

//display cell
function display(message){
  $('#display').text(message);
}//display()

//choosing current player by turn
function currentPlayer(currentPlayer){
  currentPl = currentPlayer%2 === 0 ? p2 : p1;
}//currentPlayer()

//Game Board Events
function boardFunc(event){
  if($(event.target).text() === 'x' || $(event.target).text() === 'o'){
    return;
  }
  currentPlayer(turn);
  if(currentPl === p1){
    $(event.target).text(p1);
    display("Player X's turn")
    turn++;
  }
  else{
    $(event.target).text(p2);
    display("Player O's turn")
    turn++;
  }
  win();

}//boardFunc()

function check(a, b, c) {
  if($(a).text() === $(b).text() && $(b).text() === $(c).text() &&
    $(a).text() !== '' &&
    $(b).text() !== '' &&
    $(c).text() !== '') {
    winner = $(a).text();
    display(`The Winner is Player: ${winner}`);
    winCon = true;
    $('table,tr,td').css({"color":"transparent","border":"transparent"});
    $('body').css({'background':"url(http://images.akamai.steamusercontent.com/ugc/1099167284516554107/196E1151EC232DB1544577889956237AEB717661/?interpolation=lanczos-none&output-format=jpeg&output-quality=95&fit=inside%7C1024:576&composite-to%3D%2A%2C%2A%7C1024%3A576&background-color=black)","background-size":"contain","background-repeat":"no-repeat","background-position":"top center","background-color":"black"});
  }
  if(winCon === false && turn > 9){
    display("Tie! Reset to play again!")
    $('body').css({'background':"url(http://www.mobygames.com/images/shots/l/171589-the-tower-of-druaga-nes-screenshot-game-over-s.png)","background-size":"contain","background-repeat":"no-repeat","background-position":"top center","background-color":"black"});
  }
}

function win(){
  //horizontal
  check('#0','#1','#2');
  check('#3','#4','#5');
  check('#6','#7','#8');
  //vertical
  check('#0','#3','#6');
  check('#1','#4','#7');
  check('#2','#5','#8');
  //diagonal
  check('#0','#4','#8');
  check('#2','#4','#6');
}



/*-- Game Start--*/
start();
