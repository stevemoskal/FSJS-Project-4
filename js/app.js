/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = null;
const startBtn = document.getElementById('btn__reset');
const keys = document.querySelectorAll('.key');

/**
* Add event listener for the start button, creates a new Game
*/


startBtn.addEventListener('click', (e) => {
  game = new Game();
  game.startGame();
});

/**
* Add event listener for the on-screen keyboard
*/



for (i = 0; i < keys.length; i++) {
  keys[i].addEventListener('click', (e) => {
    game.handleInteraction(e.target);
  });
}

/**
* Add event listener for keyboard use
* Checks if overlay is displayed, so keys cannot be pressed until the game has started
*/


window.addEventListener('keyup', (e) => {
  const overlay = document.getElementById('overlay');
  if (overlay.style.display === 'none') {
       const guessedLetter = e.key;
       let matchedBtn = null;
       for (let i = 0; i < keys.length; i++) {
         if (guessedLetter === keys[i].textContent) {
           matchedBtn = keys[i];
           break;
         }
       }
       if (matchedBtn !== null) {
         if (!game.isLetterGuessed(matchedBtn)) {
           game.handleInteraction(matchedBtn);
         }
       }
  }
});
