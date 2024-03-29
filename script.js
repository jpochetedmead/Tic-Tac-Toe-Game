let grid = ['', '', '', '', '', '', '', '', ''];

const players = ["X", "O"];

//RAMDOMIZE THE GAME STARTER
let turn = Math.round(Math.random())

// SEE THE GRID
const gameGrid = document.getElementsByClassName('gameGrid');
//Long way to define and select each square of the grid, we have to find a simpler way.
const square1 = document.querySelector('div.C1R1');
const square2 = document.querySelector('div.C2R1');
const square3 = document.querySelector('div.C3R1');
const square4 = document.querySelector('div.C1R2');
const square5 = document.querySelector('div.C2R2');
const square6 = document.querySelector('div.C3R2');
const square7 = document.querySelector('div.C1R3');
const square8 = document.querySelector('div.C2R3');
const square9 = document.querySelector('div.C3R3');

//KNOW WHO'S TURN IT IS
const person = document.getElementById('person');
person.textContent = `It's player ${players[turn]}'s turn.`

//ADD CLICK EVENTS TO SQUARES
square1.addEventListener("click", function() {
   const node = document.createElement("P");
   const textnode = document.createTextNode(players[turn]);
   node.appendChild(textnode);
   square1.appendChild(node);
   grid[0] = players[turn];
   if (win() === true) {
    person.textContent = `Player ${players[turn]} wins...Congrats!`
  } else {};

  if (turn === 0) {
    turn = 1;
  } else {
    turn = 0;
  }
  person.textContent = `It's player ${players[turn]}'s turn.`
});

square2.addEventListener("click", () => {
  const node = document.createElement("P");
  const textnode = document.createTextNode(players[turn]);
  node.appendChild(textnode);
  square2.appendChild(node);
  grid[1] = players[turn]
  if (turn === 0) {
    turn = 1;
  } else {
    turn = 0;
  }
  person.textContent = `It's player ${players[turn]}'s turn.`
});

square3.addEventListener("click", () => {
  const node = document.createElement("P");
  const textnode = document.createTextNode(players[turn]);
  node.appendChild(textnode);
  square3.appendChild(node);
  grid[2] = players[turn]
  if (turn === 0) {
    turn = 1;
  } else {
    turn = 0;
  }
    person.textContent = `It's player ${players[turn]}'s turn.`
  });

square4.addEventListener("click", () => {
  const node = document.createElement("P");
  const textnode = document.createTextNode(players[turn]);
  node.appendChild(textnode);
  square4.appendChild(node);
  grid[3] = players[turn]
  if (turn === 0) {
    turn = 1;
  } else {
    turn = 0;
  }
  person.textContent = `It's player ${players[turn]}'s turn.`
});

square5.addEventListener("click", () => {
  const node = document.createElement("P");
  const textnode = document.createTextNode(players[turn]);
  node.appendChild(textnode);
  square5.appendChild(node);
  grid[4] = players[turn]
  if (turn === 0) {
    turn = 1;
  } else {
    turn = 0;
  }
    person.textContent = `It's player ${players[turn]}'s turn.`
});

square6.addEventListener("click", () => {
  const node = document.createElement("P");
  const textnode = document.createTextNode(players[turn]);
  node.appendChild(textnode);
  square6.appendChild(node);
  grid[5] = players[turn]
  if (turn === 0) {
    turn = 1;
  } else {
    turn = 0;
  }
    person.textContent = `It's player ${players[turn]}'s turn.`
      });

square7.addEventListener("click", () => {
  const node = document.createElement("P");
  const textnode = document.createTextNode(players[turn]);
  node.appendChild(textnode);
  square7.appendChild(node);
  grid[6] = players[turn]
  if (turn === 0) {
    turn = 1;
  } else {
    turn = 0;
  }
    person.textContent = `It's player ${players[turn]}'s turn.`
       });

square8.addEventListener("click", () => {
  const node = document.createElement("P");
  const textnode = document.createTextNode(players[turn]);
  node.appendChild(textnode);
  square8.appendChild(node);
  grid[7] = players[turn]
  if (turn === 0) {
    turn = 1;
  } else {
    turn = 0;
  }
    person.textContent = `It's player ${players[turn]}'s turn.`
        });

square9.addEventListener("click", () => {
  const node = document.createElement("P");
  const textnode = document.createTextNode(players[turn]);
  node.appendChild(textnode);
  square9.appendChild(node);
  grid[8] = players[turn]
  if (turn === 0) {
    turn = 1;
  } else {
    turn = 0;
  }
    person.textContent = `It's player ${players[turn]}'s turn.`
         });

//SEE THE RESULT
function win() {
  if (((grid[0] === grid[1]) && (grid[0] === grid[2]))
  || ((grid[3] === grid[4]) && (grid[3] === grid[5]))
  || ((grid[6] === grid[7]) && (grid[6] === grid[8]))
  || ((grid[0] === grid[3]) && (grid[0] === grid[6]))
  || ((grid[1] === grid[4]) && (grid[1] === grid[7]))
  || ((grid[2] === grid[5]) && (grid[2] === grid[8]))
  || ((grid[0] === grid[4]) && (grid[0] === grid[8]))
  || ((grid[2] === grid[4]) && (grid[2] === grid[6]))) {
    return true;
  }
};

//RESET GAME (query and event)
const playAgainButton = document.querySelector('button.playAgainButton');
playAgainButton.addEventListener("click", () => {
       window.location.reload();
     });

//EXTRA "FUN" STUFF
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

//We may add this later on...
//I'm trying to have the users type their name so I can show their names in that Players div
// Personalized welcome message code
/*
let changeNameButton = document.getElementsByClassName('changebutton');
let thePlayers = document.getElementById('the1');

function setPlayersName() {
  let myName = prompt('Player, please enter your name.');
  if (!myName || myName === null) {
    setPlayersName();
  } else {
    localStorage.setItem('name', myName);
    thePlayers.textContent = `Player 1: ` + myName;
  }
}

changeNameButton.onclick = function() {
  setPlayersName();
};
*/
