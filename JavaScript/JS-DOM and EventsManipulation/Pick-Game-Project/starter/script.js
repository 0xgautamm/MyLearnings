const playerEl0 = document.querySelector('.player--0')
const playerEl01 = document.querySelector('.player--1')
const score0El = document.querySelector('#score--0');
const  score01El = document.getElementById('score--1')
const current0El = document.getElementById('current--0')
const current01El = document.getElementById('current--1')
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHide = document.querySelector('.btn--hide');

score0El.textContent=0
score01El.textContent=0
diceEl.classList.add('hidden');

const score= [0,0];
let currentScore = 0;
let activePlayer= 0

// Rolling Dice Condition:
btnRoll.addEventListener('click', function(){
// 1-Generating a Random Dice Roll
const dice =Math.trunc( Math.random() * 6)+1;
console.log(dice);
// 2-Display Dice
diceEl.classList.remove('hidden');
diceEl.src= `dice-${dice}.png` 

// 3-Check for Roll 1: IF not then switch to 2nd Player
 if(dice !== 1){
    // if dice is not equal to 1, then add score to current score
  currentScore= currentScore=dice
  // currentScore += dice .....it is similar to above one
  document.getElementById(`current--${activePlayer}`).textConetent= currentScore
  current0El.textContent=currentScore

 } else{
  //  switch to 2nd Player

  document.getElementById(`current--${activePlayer}`).textConetent= 0;

activePlayer = activePlayer===1?0:0
currentScore= 0;
playerEl0.classList.toggle('player--active')
playerEl01.classList.toggle('player--active') 

}

})