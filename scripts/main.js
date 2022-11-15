/*=============================================
=    GLOBAL VARIABLES AND EVENT LISTENERS     =
=============================================*/

const startBtn = document.getElementById("startGame");
const countryText = document.getElementById("countryName");
const guessInputField = document.getElementById("countryGuess");
let answer;
const pointsDisplay = document.getElementById("score-counter");
let guess = document.getElementById("countryGuess");
let correctGuesses = 0;
let numberOfGuesses = 0;
let guessValue;

/*----------  EVENT LISTENERS  ----------*/

// START THE GAME BUTTON EVENT LISTENER
document.getElementById("startGame").addEventListener("click", () => {
  randomFlags();
  removeBtn();
  hideCountryName();
  showFlag();
});

// SUBMIT BUTTON EVENT LISTENER FOR CLICK AND ENTER BUTTON PRESS
document.getElementById("submitAnswer").addEventListener("click", () => {
  guessingGame();
});

document.getElementById('countryGuess').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    guessingGame();
  }
});

// RESET THE GAME BUTTON EVENT LISTENER
document.getElementById("startAgain").addEventListener("click", () => {
  resetGame();
  randomFlags();
});

/*=====  End of GLOBAL VARIABLES AND EVENT LISTENERS  ======*/

/*=============================================
=                 FUNCTIONS                   =
=============================================*/

/*----------  RANDOM FLAG GENERATOR  ----------*/

// GENERATES THE FLAGS AT RANDOM
function randomFlags() {
  // DECLARED THE FLAGS ARRAY TO STORE THE IMAGES OF THE FLAGS AND THE COUNTRY NAMES.
  const flags = [
    {
      text: "afghanistan",
      img: "images/flags/afghan.webp",
    },
    {
      text: "angola",
      img: "images/flags/angola.gif",
    },
    {
      text: "armenia",
      img: "images/flags/armenia.webp",
    },
    {
      text: "bangladesh",
      img: "images/flags/bangladesh.gif",
    },
    {
      text: "bulgaria",
      img: "images/flags/bulgaria.webp",
    },
    {
      text: "cameroon",
      img: "images/flags/cameroon.webp",
    },
    {
      text: "china",
      img: "images/flags/china.webp",
    },
    {
      text: "croatia",
      img: "images/flags/croatia.jpeg",
    },
    {
      text: "egypt",
      img: "images/flags/egypt.png",
    },
    {
      text: "finland",
      img: "images/flags/finland.webp",
    },
    {
      text: "ghana",
      img: "images/flags/ghana.png",
    },
    {
      text: "iceland",
      img: "images/flags/iceland.webp",
    },
    {
      text: "jamaica",
      img: "images/flags/jamaica.png",
    },
    {
      text: "laos",
      img: "images/flags/laos.svg",
    },
    {
      text: "malaysia",
      img: "images/flags/malaysia.png",
    },
    {
      text: "mexico",
      img: "images/flags/mexico.webp",
    },
    {
      text: "morocco",
      img: "images/flags/morocco.png",
    },
    {
      text: "nigeria",
      img: "images/flags/nigeria.png",
    },
    {
      text: "pakistan",
      img: "images/flags/pakistan.webp",
    },
    {
      text: "paraguay",
      img: "images/flags/paraguay.png",
    },
    {
      text: "romania",
      img: "images/flags/romania.webp",
    },
    {
      text: "saudi arabia",
      img: "images/flags/saudi_arabia.png",
    },
    {
      text: "seychelles",
      img: "images/flags/seychelles.png",
    },
    {
      text: "south africa",
      img: "images/flags/southAfrica.png",
    },
    {
      text: "spain",
      img: "images/flags/spain.webp",
    },
    {
      text: "thailand",
      img: "images/flags/thailand.webp",
    },
    {
      text: "tuvalu",
      img: "images/flags/tuvalu.webp",
    },
    {
      text: "uruguay",
      img: "images/flags/uruguay.png",
    },
    {
      text: "vietnam",
      img: "images/flags/vietnam.webp",
    },
    {
      text: "zimbabwe",
      img: "images/flags/zimbabwe.png",
    },
  ];
  // DECLARED A VARIABLE THAT WILL RANDOMLY SELECT A FLAG AND TEXT TO BE DISPLAYED.
  const flag = flags[Math.floor(Math.random() * flags.length)];
  // JS TO DISPLAY THE FLAG & TEXT ON THE PAGE.
  document.getElementById("countryName").innerHTML = "<p>" + flag.text + "</p>";
  document.getElementById("countryFlag").innerHTML =
    '<img src="' + flag.img + '">';
  answer = flag.text;
  let correctGuesses = 0;
}

/*----------  START GAME BUTTON REMOVAL  ----------*/
function removeBtn() {
  startBtn.style.display = "none";
}

/*----------  HIDES THE COUNTRY NAME IN THE DOM   ----------*/
function hideCountryName() {
  countryText.style.display = "none";
}

/*----------  CLEARS THE USER INPUT AFTER EACH TURN   ----------*/
function clearButtonInput() {
  guessInputField.value = "";
}

/*----------   UPDATES USER SCORE AFTER A CORRECT ANSWER   ----------*/
function updateScore() {
  document.getElementById("score-counter").innerHTML = correctGuesses;
}

/*----------  RESETS THE POINT COUNTER AND FLAG DISPLAY   ----------*/
function resetGame() {
  document.getElementById("score-counter").innerHTML = "";
  document.getElementById("countryFlag").style.display = "none";
  startBtn.style.display = "inline";
}

/*----------  DISPLAYS THE FLAG AFTER RESET   ----------*/
function showFlag() {
  document.getElementById("countryFlag").style.display = "inline";
}

/*----------  GUESS THE FLAG GAME   ----------*/
function guessingGame() {
  guessValue = guess.value;
  // Correct answers being tallied to end the game
  if (
    guessValue.toLowerCase() === answer.toLowerCase() &&
    numberOfGuesses < 10
  ) {
    correctGuesses = correctGuesses + 1;
    numberOfGuesses = numberOfGuesses + 1;
    updateScore();
    console.log(correctGuesses);
    console.log("You guessed correct");
    randomFlags();
    clearButtonInput();
    // Game over and number of points presented
  } else if (
    guessValue.toLowerCase() === answer.toLowerCase() &&
    numberOfGuesses === 10
  ) {
    console.log("Number of Guesses", numberOfGuesses);
    alert(`Game Over - Your scored ${correctGuesses} out of 10`);
    resetGame();
    // Incorrect answers being tallied to end the game
  } else if (
    guessValue.toLowerCase() !== answer.toLowerCase() &&
    numberOfGuesses < 10
  ) {
    numberOfGuesses = numberOfGuesses + 1;
    console.log("Number of Guesses", numberOfGuesses);
    console.log("correct Guesses", correctGuesses);
    console.log(`The answer is ${answer} & the guess is ${guess.value}`);
    alert(`Wrong answer. The correct answer was ${answer}`);
    randomFlags();
    clearButtonInput();
    // Game over and number of points presented
  } else if (
    guessValue.toLowerCase() !== answer.toLowerCase() &&
    numberOfGuesses === 10
  ) {
    alert(`Game Over - Your scored ${correctGuesses} out of 10`);
    console.log("Number of Guesses", numberOfGuesses);
    clearButtonInput();
    resetGame();
  }
}

/*=====  End of FUNCTIONS  ======*/
