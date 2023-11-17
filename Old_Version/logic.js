let turn = true;

const b0_0 = document.querySelector('.b0-0')
const b0_1 = document.querySelector('.b0-1')
const b0_2 = document.querySelector('.b0-2')

const b1_0 = document.querySelector('.b1-0')
const b1_1 = document.querySelector('.b1-1')
const b1_2 = document.querySelector('.b1-2')

const b2_0 = document.querySelector('.b2-0')
const b2_1 = document.querySelector('.b2-1')
const b2_2 = document.querySelector('.b2-2')

const display = document.querySelector('.winner')

const player1 = document.querySelector('.player1')
const player2 = document.querySelector('.player2')


 b0_0.addEventListener('click',() => {Clicked(b0_0)})
 b0_1.addEventListener('click',() => {Clicked(b0_1)})
 b0_2.addEventListener('click',() => {Clicked(b0_2)})

 b1_0.addEventListener('click',() => {Clicked(b1_0)})
 b1_1.addEventListener('click',() => {Clicked(b1_1)})
 b1_2.addEventListener('click',() => {Clicked(b1_2)})

 b2_0.addEventListener('click',() => {Clicked(b2_0)})
 b2_1.addEventListener('click',() => {Clicked(b2_1)})
 b2_2.addEventListener('click',() => {Clicked(b2_2)})


 // Add this class to player 2
 player2.classList.add('now');

 //------------------------------------------------
 function Clicked(button){
  
  if(turn){
    button.innerHTML = 'X';
    turn = false;
    player1.classList.add('now');
    player2.classList.remove('now');

  } else {
    button.innerHTML = 'O';
    turn = true;
    player1.classList.remove('now');
    player2.classList.add('now');
  }

  button.classList.add('lock');
  Match()
 }

function Match(){

 if     (b0_0.innerText === b0_1.innerText &&  b0_0.innerText === b0_2.innerText && b0_0.innerText!= '')
 {WhoWin(b0_0,b0_1,b0_2)}

 else if(b1_0.innerText === b1_1.innerText &&  b1_0.innerText === b1_2.innerText && b1_0.innerText != '')
 {WhoWin(b1_0,b1_1,b1_2)}

 else if(b2_0.innerText === b2_1.innerText &&  b2_0.innerText === b2_2.innerText && b2_0.innerText != '')
 {WhoWin(b2_0,b2_1,b2_2)}

 else if(b0_0.innerText === b1_0.innerText &&  b0_0.innerText === b2_0.innerText && b0_0.innerText != '')
 {WhoWin(b0_0,b1_0,b2_0)}

 else if(b0_1.innerText === b1_1.innerText &&  b0_1.innerText === b2_1.innerText && b0_1.innerText != '')
 {WhoWin(b0_1,b1_1,b2_1)}

 else if(b0_2.innerText === b1_2.innerText &&  b0_2.innerText === b2_2.innerText && b0_2.innerText != '')
 {WhoWin(b0_2,b1_2,b2_2)}

 else if(b0_0.innerText === b1_1.innerText &&  b0_0.innerText === b2_2.innerText && b0_0.innerText != '')
 {WhoWin(b0_0,b1_1,b2_2)}

 else if(b0_2.innerText === b1_1.innerText &&  b0_2.innerText === b2_0.innerText && b0_2.innerText != '')
 {WhoWin(b0_2,b1_1,b2_0)}

 else if( 
    b0_0.innerText != '' &&
    b0_1.innerText != '' &&
    b0_2.innerText!= '' &&
    b1_0.innerText != '' &&
    b1_1.innerText != '' &&
    b1_2.innerText != '' &&
    b2_0.innerText != '' &&
    b2_1.innerText != '' &&
    b2_2.innerText != ''){Tie()}
}


function WhoWin(button1,button2,button3){
  if (button1.innerText === 'X'){
    display.innerText = 'Player 1\nWin';
  }else {
    display.innerText ='Player 2\nWin';
  }

  button1.classList.add('markRed');
  button2.classList.add('markRed');
  button3.classList.add('markRed');
  display.classList.add('appear')

  b0_0.classList.add('lock');
  b0_1.classList.add('lock');
  b0_2.classList.add('lock');
  b1_0.classList.add('lock');
  b1_1.classList.add('lock');
  b1_2.classList.add('lock');
  b2_0.classList.add('lock');
  b2_1.classList.add('lock');
  b2_2.classList.add('lock');

  setTimeout(()=>{Reset()},2000)
}

function Tie(){
  display.innerText = 'Tie\nNo one win'
  display.classList.add('appear')

  setTimeout(()=>{Reset()},2000)
}

function Reset(){
    //Make all value blank again
    b0_0.innerText = '';
    b0_1.innerText = '';
    b0_2.innerText = '';
    b1_0.innerText = '';
    b1_1.innerText = '';
    b1_2.innerText = '';
    b2_0.innerText = '';
    b2_1.innerText = '';
    b2_2.innerText = '';

    //Remove additional classes

    b0_0.classList.remove('markRed');
    b0_0.classList.remove('lock');

    b0_1.classList.remove('markRed');
    b0_1.classList.remove('lock');

    b0_2.classList.remove('markRed');
    b0_2.classList.remove('lock');

    b1_0.classList.remove('markRed');
    b1_0.classList.remove('lock');

    b1_1.classList.remove('markRed');
    b1_1.classList.remove('lock');

    b1_2.classList.remove('markRed');
    b1_2.classList.remove('lock');

    b2_0.classList.remove('markRed');
    b2_0.classList.remove('lock');

    b2_1.classList.remove('markRed');
    b2_1.classList.remove('lock');

    b2_2.classList.remove('markRed');
    b2_2.classList.remove('lock');

    //Make display result invisible agina
    display.classList.remove('appear')

    
}