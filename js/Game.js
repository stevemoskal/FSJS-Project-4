/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
   constructor(){
     this.missed = 0;
     this.phrases = this.createPhrases();
     this.activePhrase = null;
   }

   /* Creates phrases for use in game
   * @return {array} An array of phrases that could be used in the game
   */

   createPhrases() {
     const phrases =  ['American Staffordshire Terrier',
            'Alaskan Malamute',
            'Bernese Mountain Dog',
            'Cavalier King Charles Spaniel',
            'English Cocker Spaniel',
            'French Bulldog',
            'Labrador Retriever',
            'Poodle',
            'Puggle'];
    return phrases;
   }

   /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */

   getRandomPhrase() {
     let phraseIndex = Math.floor(Math.random() * this.phrases.length);
     return this.phrases[phraseIndex];
   }

   /**
   * Begins game by selecting a random phrase and displaying it to user
   */

   startGame() {
     const overlay = document.getElementById('overlay');
     overlay.style.display = 'none';
     const phrase = new Phrase(this.getRandomPhrase());
     this.activePhrase = phrase;
     phrase.addPhraseToDisplay(phrase);
   }

   checkForWin() {
     const div = document.getElementById('phrase');
     const listItems = div.getElementsByTagName('li');
     for (let i = 0; i < listItems.length; i++) {
        if ( listItems[i].classList.includes('hide') ) {
          return false;
          break;
        }
        return true;
   }
  }

  /**
  * Increases the value of the missed property
  * Removes a life from the scoreboard
  * Checks if player has remaining lives and ends game if player is out
  */

  removeLife() {
    const div = document.getElementById('scoreboard');
    const listItems = div.getElementsByTagName('li');
    if (this.missed === 0) {
      this.missed++;
      listItems[0].firstElementChild.src = 'images/lostHeart.png';
    } else if (this.missed === 1) {
      this.missed++;
      listItems[1].firstElementChild.src = 'images/lostHeart.png';
    } else if (this.missed === 2) {
      this.missed++;
      listItems[2].firstElementChild.src = 'images/lostHeart.png';
    } else if (this.missed === 3) {
      this.missed++;
      listItems[3].firstElementChild.src = 'images/lostHeart.png';
    } else if (this.missed === 4) {
      this.missed++;
      listItems[4].firstElementChild.src = 'images/lostHeart.png';
    } else if (this.missed === 5) {
      this.gameOver();
    }
  }

  /**
  * Displays game over message
  * @param {boolean} gameWon - Whether or not the user won the game
  */

  gameOver() {
    const overlay = document.getElementById('overlay');
    const message = document.getElementById('game-over-message');
    if (this.checkForWin()) {
      message.textContent = 'Great Work, You Won!';
      overlay.classList.replace('start', 'win');
    } else if (this.missed === 5) {
      message.textContent = 'Better Luck Next Time!';
      overlay.classList.replace('start', 'lose');
    }
    overlay.style.display = 'flex';
  }
}
