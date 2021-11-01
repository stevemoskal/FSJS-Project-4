# FSJS-Project-4
### OOP Game Show App

#### Description

 This repository was designed for the Treehouse TechDegree course, Project-4: OOP Game Show App

 This project is complete, and I am hoping to obtain an "Exceeds Expectations" grade based on the grading key provided.

 There are three different types of code contained in this repository: HTML, CSS and JavaScript. The HTML and CSS were provided by Treehouse, and it was my objective to complete the JavaScript code.

 The objective of this game ('Phrase Hunter') is to guess the active phrase by selecting letters one at a time, until you have guessed the phrase correctly, or ran out of lives (5). At the end, a game over screen will appear, letting the user know if the have won or lost the game, and displaying the active phrase.
 
#### Exceeds Expectations Explained

'keyup' Event listener -
An event listener was added to the app.js file so the user can use the keyboard to select the letters, and will prevent the removeLife() method from running if the selected key has already been chosen.

Style Changes -
There are a few subtle style changes made to the program. I have added in an image to the active breed at the end of the game, in case the user in unfamiliar with that breed. I have also included the correct phrase on the end game screen, whether the user guessed correctly or not. Finally, I adjusted the 'Start Game' button to read 'Start New Game' once the first game is complete. The CSS added for the breed image is as follows:

```
#breed-pic {
  display: none;
  margin: 0 auto;
  border-radius: 10%;
}
```

#### Outside Resources

The only outside resource accessed for this project was [Dog Time](https://dogtime.com/dog-breeds/profiles), which was used for all of the images shown at the end of the game. I also completed the '4 in a row' practice project from Treehouse before completing this project, which gave me the tools necessary to complete Project-4.

##### Frameworks used

This project was built using:
  - [Atom Text Editor](https://atom.io)
  - [Github Desktop](https://desktop.github.com)

Thank you for viewing my repository!

Steve Moskal
