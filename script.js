let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

const players = [`X`, `O`];

// SEE THE GRID

//CLICK SQUARE
const square1 = document.querySelector('div.C1R1');

square1.onclick = function() {
  alert("hello moto");
};



let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/emojis/hi-emoji.gif') {
    myImage.setAttribute ('src','images/emojis/stop-emoji.gif');
    alert('Ouch! Stop poking me!');
  }
  else {
    myImage.setAttribute ('src','images/emojis/hi-emoji.gif');
    alert('Come on...STOP!!!!');
  }
}

//RAMDOMIZED Game

//WHO TURN IT IS

//SEE THE result
/*
alert("YOU WIN!")
*/

//RESET GAME
