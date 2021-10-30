/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = null;
const startBtn = document.getElementById('btn__reset');
const keys = document.querySelectorAll('.key');

startBtn.addEventListener('click', (e) => {
  game = new Game();
  game.startGame();
});

for (i = 0; i < keys.length; i++) {
  keys[i].addEventListener('click', (e) => {
    game.handleInteraction(e.target);
  });
}
