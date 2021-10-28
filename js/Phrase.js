/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
   constructor(phrase){
     this.phrase = phrase.toLowerCase();
   }

   addPhraseToDisplay() {
     const div = document.getElementById('phrase');
     let displayPhrase = '';
     for (let i = 0; i < this.phrase.length; i++) {
        if (this.phrase.charAt(i) === ' ') {
          displayPhrase += `<li class="space"> </li><br>`;
        } else {
          displayPhrase += `<li class="hide letter ${this.phrase.charAt(i)}">${this.phrase.charAt(i)}</li>`
        }
     }
     div.firstElementChild.innerHTML = displayPhrase;
   }

   /**
   * Checks if passed letter is in phrase
   * @param (string) letter - Letter to check
   * returns a boolean value
   */

   checkLetter(letter) {
     return this.phrase.includes(letter);
   }

   /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter to display
   */

   showMatchedLetter(letter) {
     const div = document.getElementById('phrase');
     const listItems = div.getElementsByTagName('li');
     for (let i = 0; i < listItems.length; i++) {
        if ( listItems[i].textContent === letter) {
          listItems[i].classList.add('show');
        }
     }
   }

 }
