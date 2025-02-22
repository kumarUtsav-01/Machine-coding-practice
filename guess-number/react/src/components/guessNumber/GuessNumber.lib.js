const generateRandomNumber = (max) => {
  const number = Math.floor(Math.random() * max);
  return number;
};

const generateResult = (currentNumber, guessNumber) => {
  let message = "";
  const success = currentNumber === guessNumber;
  if (success) {
    message = "You got it! Congrats ";
  } else {
    if (currentNumber > guessNumber) {
      message = "Too high";
    } else {
      message = "Too low";
    }
  }

  return { success, message };
};

export { generateRandomNumber, generateResult };
