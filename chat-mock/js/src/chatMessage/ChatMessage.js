import "./ChatMessage.css";

export class ChatMessage {
  #message = "";
  #sendingParty = "";

  constructor(message, sendingParty) {
    this.#message = message;
    this.#sendingParty = sendingParty;
  }

  #generateMessageBox() {
    const container = document.createElement("div");

    container.textContent = this.#message;
    container.classList.add(`${this.#sendingParty}_chat`);

    return container;
  }

  get message() {
    const messageBox = this.#generateMessageBox();
    return messageBox;
  }
}
