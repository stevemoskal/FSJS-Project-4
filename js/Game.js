/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
   constructor(){
     this.missed = 0;
     this.phrases = this.createPhrases();
     this.activePhrase = this.getRandomPhrase();
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
 }
