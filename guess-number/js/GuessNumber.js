export class GuessNumber {
  constructor() {
    this.MAX = 100;
    this.guessingNumber = null;
    this.guesses = [];

    this.generateGuessNumber();
  }

  generateGuessNumber() {
    this.guessingNumber = Math.floor(Math.random() * this.MAX);
  }

  submitGuess(value) {
    this.guesses.push(value);
    return this.getResult(value);
  }

  getResult(value) {
    const success = value === this.guessingNumber;

    if (success) {
      return "Success";
    } else {
      return value > this.guessingNumber ? "High" : "Low";
    }
  }

  resetGame() {
    this.guesses = [];
    this.generateGuessNumber();
  }

  getGuesses() {
    return this.guesses.join(", ");
  }
}
