/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
   constructor(){
     this.missed = 0;
     this.phrases = this.createPhrases();
     this.activePhrase = null;
     this.activePic = null;
   }

   /* Creates phrases for use in game
   * @return {array} An array of phrases that could be used in the game
   * images provided by https://dogtime.com/dog-breeds/profiles
   */

   createPhrases() {
     const newPhraseArray = [];
     const phrases =  [
            { breed: 'American Staffordshire Terrier', img: 'images/amstaff.jpg' },
            { breed: 'Alaskan Malamute', img: 'images/alaskmal.jpg' },
            { breed: 'Bernese Mountain Dog', img: 'images/bernese.jpg' },
            { breed: 'Cavalier King Charles Spaniel', img: 'images/cavalier-king.jpg' },
            { breed: 'English Cocker Spaniel', img: 'images/english-cocker.jpg' },
            { breed: 'French Bulldog', img: 'images/frenchie.jpg' },
            { breed: 'Labrador Retriever', img: 'images/labrador-retriever.jpg' },
            { breed: 'Poodle', img: 'images/poodle.jpg' },
            { breed: 'Puggle', img: 'images/puggle.jpg' },
            { breed: 'Newfoundland', img: 'images/newfoundland.jpg' },
            { breed: 'Saint Bernard', img: 'images/saint-bernard.jpg' },
            { breed: 'Siberian Husky', img: 'images/siberian-husky.jpg' },
            { breed: 'Yorkshire Terrier', img: 'images/yorkie.jpg' },
            { breed: 'Rottweiler', img: 'images/rottweiler.jpg' },
            { breed: 'German Shepherd', img: 'images/german-shepherd.jpg' },
            { breed: 'Shiba Inu', img: 'images/shiba.jpg' }
            ];
    phrases.forEach(object => newPhraseArray.push({breed: new Phrase(object.breed), img: object.img}));
    return newPhraseArray;
   }

   /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */

   getRandomPhrase() {
     let phraseIndex = Math.floor(Math.random() * this.phrases.length);
     this.activePic = this.phrases[phraseIndex].img;
     return this.phrases[phraseIndex].breed;
   }

   /**
   * Begins game by selecting a random phrase and displaying it to user
   *
   */

   startGame() {
     const div = document.getElementById('phrase');
     const overlay = document.getElementById('overlay');
     div.firstElementChild.innerHTML = '';
     overlay.style.display = 'none';
     const phrase = this.getRandomPhrase();
     this.activePhrase = phrase;
     phrase.addPhraseToDisplay(phrase);
   }

   /**
   * Checks if the letter has already been guessed (for keyup listener)
   */


   isLetterGuessed(button) {
     if (button.disabled) {
       return true;
     }
   }

   /**
   * Checks if the game has been Won by the user
   * @return true or false depending on outcome
   */


   checkForWin() {
     const div = document.getElementById('phrase');
     const listItems = div.getElementsByTagName('li');
     for (let i = 0; i < listItems.length; i++) {
        if ( listItems[i].className.includes('hide') ) {
          return false;
        }
   }
   return true;
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
      this.gameOver();
    }
  }

  /**
  * Displays game over message
  * Resets the game board for a new game
  */

  gameOver() {
    const overlay = document.getElementById('overlay');
    const scoreboard = document.getElementById('scoreboard');
    const listItems = scoreboard.getElementsByTagName('li');
    const message = document.getElementById('game-over-message');
    const img = document.getElementById('breed-pic');
    const startBtn = document.getElementById('btn__reset');

    overlay.className = 'start';
    img.style.display = 'inline-block';
    img.src = `${this.activePic}`

    if (this.checkForWin()) {
      message.textContent = `Great Work, You Won! The answer was ${this.activePhrase.phrase}!`;
      overlay.classList.replace('start', 'win');
    } else if (this.missed === 4) {
      message.textContent = `You're out of Lives, Better Luck Next Time! The answer was ${this.activePhrase.phrase}!`;
      overlay.classList.replace('start', 'lose');
    }
    startBtn.textContent = 'Start New Game';
    overlay.style.display = 'flex';

    for (let i = 0; i < keys.length; i++) {
      keys[i].disabled = false;
      keys[i].className = 'key';
    }
    for (let i = 0; i < listItems.length; i++) {
       listItems[i].firstElementChild.src = 'images/liveHeart.png';
    }
  }

  /**
  * Handles onscreen keyboard button clicks
  * @param (HTMLButtonElement) button - The clicked button element
  */

  handleInteraction(button) {
    const guessedLetter = button.textContent;
    const phrase = game.activePhrase;
    button.disabled = true;
    if (phrase.checkLetter(guessedLetter)) {
      button.classList.add('chosen');
      phrase.showMatchedLetter(guessedLetter);
      if (game.checkForWin()) {
          game.gameOver();
      }
    } else {
      button.classList.add('wrong');
      game.removeLife();
    }
  }
}
