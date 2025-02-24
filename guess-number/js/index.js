import { GuessNumber } from "./GuessNumber.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const resetGameButton = document.querySelector(".resetButton");

  const guessNumber = new GuessNumber(document);

  form.addEventListener("submit", (event) => handleSubmit(event));
  resetGameButton.addEventListener("click", (event) => resetGame(event));

  const getUserInput = () => {
    const userInput = document.querySelector("input");
    const value = Number(userInput.value);
    userInput.value = "";

    return value;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = getUserInput();

    const result = guessNumber.submitGuess(value);
    updateResults(result);
    updateGuesses();

    if (result === "Success") {
      disableButton("completeGame");
    }
  };

  const updateResults = (result) => {
    let message = "";
    const resultElement = document.querySelector(".result");

    switch (result) {
      case "Success":
        message = "You got it! Congrats";
        break;

      case "High":
        message = "Too high";
        break;

      case "Low":
        message = "Too Low";
        break;

      default:
        message = "";
    }

    resultElement.textContent = message;
  };

  const updateGuesses = (gameStatus) => {
    const guessesElement = document.querySelector(".guesses");
    const guessesString = guessNumber.getGuesses();
    let message = gameStatus === "resetGame" ? "" : `Guesses ${guessesString}`;

    guessesElement.textContent = message;
  };

  const resetGame = (event) => {
    event.preventDefault();

    guessNumber.resetGame();
    updateGuesses("resetGame");
    updateResults();
    disableButton("resetGame");
  };

  const disableButton = (gameStatus) => {
    const resetGameButton = document.querySelector(".resetButton");
    const userInputSubmitButton = document.querySelector(".submitButton");

    if (gameStatus === "resetGame") {
      resetGameButton.disabled = true;
      userInputSubmitButton.disabled = false;
    } else if (gameStatus === "completeGame") {
      resetGameButton.disabled = false;
      userInputSubmitButton.disabled = true;
    }
  };
});
