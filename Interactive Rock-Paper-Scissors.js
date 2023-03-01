let playerName = prompt(" What Is Your Name Warrior? ");
let rpsArray = ["ROCK", "PAPER", "SCISSORS"];
function getComputerChoice() {
  /*    Here I chose to use the method math.floor because if I used math/round 
  sometimes the the math.random will give out 3 which in the index of the array is
  undefined. The way this const works is: math.random generates a decimal number
  between 0-1 that is timed by the rpsArray.length (which is 3) so I always get a 
  number between 0.0 - 2.9, then Math.floor gets it to an integer (whole number) 
  between 0 - 2. */
  const pcRandom = Math.floor(Math.random() * rpsArray.length);
  console.log(pcRandom); // this is to check what number comes out
  return rpsArray[pcRandom];
}
console.log(getComputerChoice());

/* In the following let called resultForComp I stored the result of the return from the 
function getComputerChoice. This is a must in order to hold the return in the memory - otherwise
the return will be produced and disappear because I didnt store it. And if it isnt stored then when 
I will try to pass getComputerChoice as an arugument in a different function or any other usage
the result will be the WHOLE function, not the return. */
let resultForComp = getComputerChoice();
//GLOBAL VARIABLES
let scoreForP1 = 0;
let scoreForComp = 0;
let resultElement = document.getElementById("results");
// this following dunction plays around and returns a message and a score

function playRound(getComputerChoice, getPersonChoice) {
  console.log(getComputerChoice + getPersonChoice); // to check arguments
  if (getComputerChoice == rpsArray[0] && getPersonChoice == rpsArray[2]) {
    scoreForComp++;
    return "Smashed by Rock! Computer Wins !!!  ";
  } else if (
    getComputerChoice == rpsArray[1] &&
    getPersonChoice == rpsArray[0]
  ) {
    scoreForComp++;
    return "Engolfed by Paper! Computer Wins !!!  ";
  } else if (
    getComputerChoice == rpsArray[2] &&
    getPersonChoice == rpsArray[1]
  ) {
    scoreForComp++;
    return "Cut to Shreds by Scissors! Computer Wins !!!  ";
  } else if (getComputerChoice == getPersonChoice) {
    return "Tie !!!  ";
  } else {
    scoreForP1++;
    /* the follwoing if statement is referring to the first prompt box
     where the user had to pick a name - if he didn't than the return will
     be null - I used this "if statement" to return "player 1" instead of null */
    if (playerName != null) {
      return " " + playerName + " Wins !!!  ";
    } else {
      return " Player 1 Wins !!! ";
    }
  }
}
// this function returns an alert with the current score afer each round has finished
function endRound(resultForComp, getPersonChoice) {
  if (
    (resultForComp == rpsArray[0] && getPersonChoice == rpsArray[2]) ||
    (resultForComp == rpsArray[1] && getPersonChoice == rpsArray[0]) ||
    (resultForComp == rpsArray[2] && getPersonChoice == rpsArray[1])
  ) {
    alert(
      scoreForComp +
        " |:| " +
        scoreForP1 +
        " COMPUTER Wins  - NEXT ROUND LETS GO!! "
    );
  } else if (resultForComp == getPersonChoice) {
    alert(" TIE!!!! ");
  } else {
    // the following if statement is again only to toggle Player name or Null
    if (playerName != null) {
      alert(
        scoreForComp +
          " |:| " +
          scoreForP1 +
          " " +
          playerName +
          " Wins!!! - NEXT ROUND  - LETS GO!! "
      );
    } else {
      alert(
        scoreForComp +
          " |:| " +
          scoreForP1 +
          "" +
          playerName +
          " Player One Wins  - NEXT ROUND  - LETS GO!! "
      );
    }
  }
}

/* this is the Main function of this code = it plays the function playRound 5
times - it also prompts the users choice and converts - once converted it can 
be matched and compared to the computers random choice in the function 
playRound - also here is the code for when the user puts the wrong input or 
cancels the game*/
function game() {
  for (i = 0; i < 5; i++) {
    // I have to keep calling a different result for P1
    let getPersonChoice;
    getPersonChoice = prompt("Enter Your Choice");
    if (getPersonChoice == undefined || null) {
      getPersonChoice = prompt(
        "Try Again: Please Pick Between 'Rock', 'Paper', or 'Scissors'"
      );
      //this reads the person's input and matches it with the array - if it is not
      // it prompts the user again. I can't put it above the previous if statement
      // because .toUpperCase cant pass 'null' - it stops the game with an error.
    } else if (!rpsArray.includes(getPersonChoice.toUpperCase())) {
      getPersonChoice = prompt(
        "Incorrect Choice: Please Pick Between 'Rock', 'Paper', or 'Scissors'"
      );
    }
    if (
      getPersonChoice.toUpperCase() == "ROCK" ||
      getPersonChoice.toUpperCase() == "SCISSORS" ||
      getPersonChoice.toUpperCase() == "PAPER"
    ) {
      // I have to keep calling a different result for Comp
      resultForComp = getComputerChoice();
      endRound(resultForComp, getPersonChoice.toUpperCase());
      document.write(playRound(resultForComp, getPersonChoice.toUpperCase()));
      resultElement.innerHTML = "And the final result is!!! ";
      endRound(resultForComp, getPersonChoice.toUpperCase());
    }
    if (i == 4) {
      // the following if statement is again only to toggle Player name or Null
      if (playerName != null) {
        document.write(
          "Final Score:  " +
            " Computer " +
            scoreForComp +
            " |:| " +
            playerName +
            scoreForP1
        );
      } else {
        document.write(
          "Final Score:  " +
            " Computer " +
            scoreForComp +
            " |:| " +
            "P1 " +
            scoreForP1
        );
      }
    }
  }
}
game();
