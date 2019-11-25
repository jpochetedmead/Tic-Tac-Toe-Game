let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

const players = [`X`, `O`];

// SEE THE GRID
document.getElementsByClassName("game");

//CLICK SQUARE
const button = document.querySelector('div');


  document..addEventListener("click", event => {
    if (event.target.nodeName == "BUTTON") {
      console.log("Clicked", event.target.textContent);
    }
  });

//RAMDOMIZED Game

//WHO TURN IT IS

//SEE THE result
/*
alert("YOU WIN!")
*/

//RESET GAME
