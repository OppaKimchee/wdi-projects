/*--- variables ---*/
var input, op, result, firstNum;
var displayEl = document.getElementById('display');







/*--- event listeners ---*/

document.querySelector('table')
  .addEventListener('click', handleClick);





/*--- functions ---*/

function initialize(){

  input = "";
  op = result = firstNum = null;
}

function updateDisplay(){
  displayEl.textContent = input;
  if(result){
    displayEl.textContent = result;
    initialize();
  }
  else{
    displayEl.textContent = input ? input : '0';
  }
}

function handleClick(evt){
if(evt.target.id === 'display') return;

var text = evt.target.textContent;

  switch(text){

    case 'AC':
      console.log("AC Clicked")
      initialize();
      updateDisplay();
      break;

    case 'C':
      console.log("C Clicked")
      input = '';
      break;

    case '±':
      console.log("± Clicked")
      input = input.includes('-') ? '' : '-' + input;

    break;

    case '÷':
      console.log("÷ Clicked")
      setOp(div);
      break;

    case '×':
      console.log("× Clicked")
      setOp(mult);
      break;

    case '−':
      console.log("− Clicked")
      setOp(sub);
      break;

    case '+':
      console.log("+ Clicked")
      setOp(add);
      break;

    case '=':
      console.log("= Clicked")
      if(firstNum && op && input){
        result = op(firstNum, parseFloat(input));
        input = '';

      }
      break;

    case '.':
      console.log(". Clicked")
      input += input.includes('.') ? '' : '.'
      break;

    default:
      input += text;
      console.log(input)
  }
  updateDisplay();
}

function setOp(opFunc){
  if(!input){
    return;
  }
  firstNum = parseFloat(input);
  op = opFunc;
  input = '';

}

initialize();

/*--- operator functions ---*/

function add(n1,n2){
  return n1 + n2;
}

function sub(n1,n2){
  return n1 - n2;
}

function mult(n1,n2){
  return n1 * n2;
}

function div(n1,n2){
  return n1 / n2;
}
