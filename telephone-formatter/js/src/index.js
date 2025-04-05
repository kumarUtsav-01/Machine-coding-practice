import { TelephoneFormatter } from "./TelephoneFormatter.js";

document.addEventListener("DOMContentLoaded", function () {
  const telephoneNumber = new TelephoneFormatter();
  const telephoneInput = document.querySelector("input");

  telephoneInput.addEventListener("input", function (event) {
    const number = event.target.value;
    telephoneNumber.formatTelephoneNumber(number);
    telephoneInput.value = telephoneNumber.getTelephoneNumber();
  });
});
