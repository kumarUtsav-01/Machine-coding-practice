import React, { useEffect, useState } from "react";
import { generateRandomNumber, generateResult } from "./GuessNumber.lib";

import "./GuessNumber.css";

const GuessNumber = () => {
  const [guesses, setGuesses] = useState([]);
  const [enteredNumber, setEnteredNumber] = useState("");
  const [guessNumber, setGuessNumber] = useState(0);
  const [result, setResult] = useState("");
  const [gameComplete, setGameComplete] = useState(false);
  const MAX = 100;

  useEffect(() => {
    const numberToGuess = generateRandomNumber(MAX);
    setGuessNumber(numberToGuess);
  }, []);

  const startGame = (event) => {
    event.preventDefault();
    const numberToGuess = generateRandomNumber(MAX);
    setGuessNumber(numberToGuess);
    setGuesses([]);
    setEnteredNumber("");
    setResult("");
    setGameComplete(false);
  };

  const showResults = (updatedGuesses) => {
    if (updatedGuesses.length > 0) {
      const { success, message } = generateResult(
        Number(enteredNumber),
        guessNumber
      );
      setGameComplete(success);
      return message;
    } else {
      setGameComplete(false);
      return "";
    }
  };

  const showGuesses = () => {
    if (guesses.length > 0) {
      return `Your guesses: ${guesses.join(", ")}`;
    }
  };

  const submitCurrentGuess = (event) => {
    event.preventDefault();

    const updatedGuesses = [...guesses, Number(enteredNumber)];
    setGuesses(updatedGuesses);
    setResult(showResults(updatedGuesses));
  };

  const handleInputChange = (event) => {
    const number = event.target.value;

    if (isNaN(number)) {
      setEnteredNumber("");
    } else {
      setEnteredNumber(number);
    }
  };

  return (
    <section className="guessNumber">
      <form onSubmit={submitCurrentGuess}>
        <label>
          Enter a guess between 0 to 100
          <input
            type='number'
            placeholder='Enter a number'
            value={enteredNumber}
            onChange={handleInputChange}
            required
          ></input>
        </label>
        <span>
          <button type='submit' disabled={gameComplete}>
            Submit
          </button>
          <button onClick={startGame} disabled={!gameComplete}>
            Start Game
          </button>
        </span>
      </form>
      <section>{result}</section>
      <section>{showGuesses()}</section>
    </section>
  );
};

export default GuessNumber;
