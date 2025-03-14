export class Transformer {
  constructor() {
    this.string = "";
  }

  updateString(str) {
    this.string = str;
  }

  #generateLowerCase() {
    return this.string?.toLowerCase();
  }

  #generateUpperCase() {
    return this.string?.toUpperCase();
  }

  #generateCamelCase() {
    const words = this.string.split(" ");
    const wordsToTransform = words.slice(1);
    const transformedWords = wordsToTransform.map(
      (word) => (word[0] ? word[0].toUpperCase() : "") + word.slice(1)
    );
    const newSentence = words[0] + transformedWords.join("");

    return newSentence;
  }

  #generatePascalCase() {
    const words = this.string.split(" ");
    const transformedWords = words.map(
      (word) => (word[0] ? word[0].toUpperCase() : "") + word.slice(1)
    );
    const newSentence = transformedWords.join("");

    return newSentence;
  }

  #generateSnakeCase() {
    const words = this.string.split(" ");
    const newSentence = words.join("_");

    return newSentence;
  }

  #generateKebabCase() {
    const words = this.string.split(" ");
    const newSentence = words.join("-");

    return newSentence;
  }

  #generateTrim() {
    const words = this.string.split(" ");
    const newSentence = words.join("");

    return newSentence;
  }

  generateCase(type) {
    switch (type) {
      case "lowerCase":
        return this.#generateLowerCase();

      case "upperCase":
        return this.#generateUpperCase();

      case "camelCase":
        return this.#generateCamelCase();

      case "pascalCase":
        return this.#generatePascalCase();

      case "snakeCase":
        return this.#generateSnakeCase();

      case "kebabCase":
        return this.#generateKebabCase();

      case "trim":
        return this.#generateTrim();

      default:
        return this.string;
    }
  }
}
