export class TelephoneFormatter {
  telephoneNumber;

  constructor() {
    this.telephoneNumber = "";
  }

  getTelephoneNumber() {
    return this.telephoneNumber;
  }

  formatTelephoneNumber(number) {
    let digits = number.match(/[0-9]+/g, "")?.join("");

    if (digits.length <= 3) {
      this.telephoneNumber = digits;
    } else {
      digits = digits.slice(0, 10);

      const countryCode = digits.slice(0, 3);
      const phoneNumber = digits.slice(3);

      this.telephoneNumber = `+(${countryCode}) - ${phoneNumber}`;
    }
  }
}
