import { Transformer } from "./src/Transformer.js";

document.addEventListener("DOMContentLoaded", function () {
  const string = new Transformer();
  const inputBox = document.querySelector(".inputBox");
  const lowerCasePara = document.querySelector(".lowerCase").querySelector("p");
  const upperCasePara = document.querySelector(".upperCase").querySelector("p");
  const camelCasePara = document.querySelector(".camelCase").querySelector("p");
  const pascalCasePara = document
    .querySelector(".pascalCase")
    .querySelector("p");
  const snakeCasePara = document.querySelector(".snakeCase").querySelector("p");
  const kebabCasePara = document.querySelector(".kebabCase").querySelector("p");
  const trimPara = document.querySelector(".trim").querySelector("p");

  const transformMap = new Map([
    [lowerCasePara, "lowerCase"],
    [upperCasePara, "upperCase"],
    [camelCasePara, "camelCase"],
    [pascalCasePara, "pascalCase"],
    [snakeCasePara, "snakeCase"],
    [kebabCasePara, "kebabCase"],
    [trimPara, "trim"],
  ]);

  inputBox.oninput = function (event) {
    const newString = event.target.value;
    string.updateString(newString);

    transformMap.forEach((value, key) => {
      const transformedString = string.generateCase(value);
      key.innerHTML = transformedString;
    });
  };
});
