/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = null;
const startBtn = document.getElementById('btn__reset');

startBtn.addEventListener('click', (e) => {
  game = new Game();
  game.startGame();
});
