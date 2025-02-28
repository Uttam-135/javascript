let randomNumber = parseInt(Math.random() * 100);
const userinput = document.querySelector("#guessField");
const submit = document.querySelector("#subt");
const guesSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const startOver = document.querySelector(".resultParas");
const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userinput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (guess === "") {
    alert("Enter a valid number");
    userinput.value = "";
  } else if (prevGuess.includes(guess)) {
    alert("Please guess another number");
    userinput.value = "";
  } else if (isNaN(guess)) {
    alert("Enter a valid number");
    userinput.value = "";
  } else if (guess < 0) {
    alert("Enter a number greater than 0");
    userinput.value = "";
  } else if (guess > 100) {
    alert("Enter a number less than 100");
    userinput.value = "";
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMessage(`game Over, random num was ${guess}`);
      endGame();
    } else {
      checkGuess(guess);
      displayGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage("You guess right number");
    newGame();
  } else if (guess < randomNumber) {
    displayMessage("Number is too low");
  } else if (guess > randomNumber) {
    displayMessage("Number is too high");
  }
}

function displayGuess(guess) {
  userinput.value = "";
  numGuess++;
  guesSlot.innerHTML += `${guess}, `;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userinput.value = "";
  userinput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id = newGame>Start new game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100);
    numGuess = 1;
    prevGuess.innerHTML = "";
    guesSlot.innerHTML = "";
    lowOrHi.innerHTML = "";
    prevGuess = [];
    startOver.removeChild(p);
    userinput.removeAttribute("disabled", "");
    playGame = true;
  });
}
