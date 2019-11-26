
let board = [
  '', '', '',
  '', '', '',
  '', '', ''
];

const players = ["X", "O"];
let turn;

// SEE THE GRID
//const gameGrid = document.querySelector('div.gameGrid');


//ADD CLICK EVENT TO SQUARES
//
const gameGrid = document.querySelector('div.gameGrid');
for (let element of Array.from(gameGrid)){
  element.addEventListener("click", function(event) {
    element.textContent = players[turn];
    if (turn === 0) {
      turn = 1;
    } else {
      turn = 0;
    }
  });
}
//
const square1 = document.querySelector('div.C1R1');
const square2 = document.querySelector('div.C2R1');
const square3 = document.querySelector('div.C3R1');
const square4 = document.querySelector('div.C1R2');
const square5 = document.querySelector('div.C2R2');
const square6 = document.querySelector('div.C3R2');
const square7 = document.querySelector('div.C1R3');
const square8 = document.querySelector('div.C2R3');
const square9 = document.querySelector('div.C3R3');

square1.onclick = function() {
  alert("Next Player!");
};

square2.onclick = function() {
  alert("Next Player!");
};

square3.onclick = function() {
  alert("Next Player!");
};

square4.onclick = function() {
  alert("Next Player!");
};

square5.onclick = function() {
  alert("Next Player!");
};

square6.onclick = function() {
  alert("Next Player!");
};

square7.onclick = function() {
  alert("Next Player!");
};

square8.onclick = function() {
  alert("Next Player!");
};

square9.onclick = function() {
  alert("Next Player!");
};

//RAMDOMIZED THE GAME STARTER
const randomPlayer = function ramdomPlayer() {
 const symbol = Math.random() * 100;
 if (symbol < 50) {
   turn = 0;
 } else {
   turn = 1;
 }
};
randomPlayer();

//WHO TURN IT IS
const whoNext = document.getElementsByClassName('stateOfGame')
whoNext.textContent = "It's " + players[turn] + "'s turn";

//SEE THE RESULT


/*
alert("YOU WIN!")
*/

//RESET GAME
const playAgainButton = document.querySelector('button.playAgainButton');

playAgainButton.onclick = function() {
  alert("Game Restarted!");
};


//EXTRA "COOL" STUFF
//MOVING TITTLE
  let gameTittle = document.querySelector("h1");
  let angle = Math.PI / 2;
  function animate(time, lastTime) {
    if (lastTime != null) {
      angle += (time - lastTime) * 0.003;
    }
    gameTittle.style.top = (Math.sin(angle) * 21) + "px";
    gameTittle.style.left = (Math.cos(angle) * 21) + "px";
    requestAnimationFrame(newTime => animate(newTime, time));
  }
  requestAnimationFrame(animate);
