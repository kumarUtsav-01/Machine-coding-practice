export const cases = [
  "lowerCase",
  "upperCase",
  "camelCase",
  "pascalCase",
  "snakeCase",
  "kebabCase",
  "trim",
];

export const caseTitlesMap = new Map([
  ["lowerCase", "Lower Case"],
  ["upperCase", "Upper Case"],
  ["camelCase", "Camel Case"],
  ["pascalCase", "Pascal Case"],
  ["snakeCase", "Snake Case"],
  ["kebabCase", "Kebab Case"],
  ["trim", "Trim"],
]);

const convertFirstLetterToCap = (word) => {
  let firstLetter = word.at(0).toUpperCase();
  return firstLetter + word.slice(1);
};

export const stringConverter = (string, stringCase) => {
  let words = string.split(" ");
  let wordsToConvert = [];

  switch (stringCase) {
    case "lowerCase":
      return string.toLowerCase();

    case "upperCase":
      return string.toUpperCase();

    case "camelCase":
      wordsToConvert = words.slice(1);
      if (wordsToConvert.length > 0) {
        wordsToConvert.forEach((word, index) => {
          if (word.length > 0) {
            wordsToConvert[index] = convertFirstLetterToCap(word);
          }
        });
        return [words[0], ...wordsToConvert].join("");
      } else {
        return string;
      }

    case "pascalCase":
      if (words.length > 0) {
        words.forEach((word, index) => {
          if (word.length > 0) {
            words[index] = convertFirstLetterToCap(word);
          }
        });
        return words.join("");
      } else {
        return string;
      }

    case "snakeCase":
      return words.join("_");

    case "kebabCase":
      return words.join("-");

    case "trim":
      return words.join("");

    default:
      return string;
  }
};
