/*
let board = [
  '', '', '',
  '', '', '',
  '', '', ''
];
*/

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
//Long way to add events to each square, we gotta find a simpler way.
const square1 = document.querySelector('div.C1R1');
const square2 = document.querySelector('div.C2R1');
const square3 = document.querySelector('div.C3R1');
const square4 = document.querySelector('div.C1R2');
const square5 = document.querySelector('div.C2R2');
const square6 = document.querySelector('div.C3R2');
const square7 = document.querySelector('div.C1R3');
const square8 = document.querySelector('div.C2R3');
const square9 = document.querySelector('div.C3R3');

/*
<script>
  function replaceImages() {
    let images = document.body.getElementsByTagName("img");
    for (let i = images.length - 1; i >= 0; i--) {
      let image = images[i];
      if (image.alt) {
        let text = document.createTextNode(image.alt);
        image.parentNode.replaceChild(text, image);
      }
    }
  }
</script>
*/

/*
square1.addEventListener("click", event => {
   alert("Next Player!");
   */
/*
  const h = document.createElement("H1");
  const t = document.createTextNode("Hello World");
  h.appendChild(t);
  document.body.appendChild(h);
}
 });
 */

 square1.addEventListener("click", function() {
   //document.body.style.backgroundColor= "red";
   const node = document.createElement("P");
   const textnode = document.createTextNode(players[player()]);
   node.appendChild(textnode);
   square1.appendChild(node);
   alert("Next Player!");
    });

square2.addEventListener("click", () => {
  const node = document.createElement("P");
  const textnode = document.createTextNode(players[player()]);
  node.appendChild(textnode);
  square2.appendChild(node);
    alert("Next Player!");
  });

square3.addEventListener("click", () => {
  const node = document.createElement("P");
  const textnode = document.createTextNode(players[player()]);
  node.appendChild(textnode);
  square3.appendChild(node);
     alert("Next Player!");
   });

square4.addEventListener("click", () => {
  const node = document.createElement("P");
  const textnode = document.createTextNode(players[player()]);
  node.appendChild(textnode);
  square4.appendChild(node);
      alert("Next Player!");
    });

square5.addEventListener("click", () => {
  const node = document.createElement("P");
  const textnode = document.createTextNode(players[player()]);
  node.appendChild(textnode);
  square5.appendChild(node);
       alert("Next Player!");
     });

square6.addEventListener("click", () => {
  const node = document.createElement("P");
  const textnode = document.createTextNode(players[player()]);
  node.appendChild(textnode);
  square6.appendChild(node);
        alert("Next Player!");
      });

square7.addEventListener("click", () => {
  const node = document.createElement("P");
  const textnode = document.createTextNode(players[player()]);
  node.appendChild(textnode);
  square7.appendChild(node);
         alert("Next Player!");
       });

square8.addEventListener("click", () => {
  const node = document.createElement("P");
  const textnode = document.createTextNode(players[player()]);
  node.appendChild(textnode);
  square8.appendChild(node);
          alert("Next Player!");
        });

square9.addEventListener("click", () => {
  const node = document.createElement("P");
  const textnode = document.createTextNode(players[player()]);
  node.appendChild(textnode);
  square9.appendChild(node);
           alert("Next Player!");
         });

//RAMDOMIZED THE GAME STARTER
const randomplayer = [0, 1];
const player = () => `${randomplayer[Math.floor(Math.random()* randomplayer.length)]}`;


//WHO TURN IT IS
const whoNext = document.getElementsByClassName('stateOfGame')
whoNext.textContent = "It's " + players[turn] + "'s turn";

//SEE THE RESULT
/*
const winning_sequences = [
                    [0,1,2],
                    [3,4,5],
                    [6,7,8],
                    [0,3,6],
                    [1,4,7],
                    [2,5,8],
                    [0,4,8],
                    [2,4,6]
                ],
                */
/*
alert("YOU WIN!")
*/

//RESET GAME
const playAgainButton = document.querySelector('button.playAgainButton');

playAgainButton.addEventListener("click", () => {
       window.location.reload();
     });

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

//I'm trying to have the users type their name so I can show their names in that box.
// Personalized welcome message code
let changeNameButton = document.getElementsByClassName('changebutton');
let thePlayers = document.getElementsByClassName('playerNameX');

function setPlayersName() {
  let myName = prompt('Player, please enter your name.');
  if(!myName || myName === null) {
    setPlayersName();
  } else {
    localStorage.setItem('name', myName);
    thePlayers.innerHTML = 'Player 1: ' + myName;
  }
}

changeNameButton.onclick = function() {
  setPlayersName();
};
