import { ChatMessage } from "../chatMessage/ChatMessage";
import "./Conversation.css";

export class Conversation {
  #messages = [];
  #chatList = [];

  constructor(messages) {
    this.#messages = messages;
  }

  #showMessages() {
    for (let message of this.#messages) {
      let chatMessage = new ChatMessage(message.message, message.sender);
      this.#chatList.unshift(chatMessage.message);
    }

    const container = document.createElement("div");

    container.classList.add("conversation_messages");
    container.append(...this.#chatList);

    return container;
  }

  #showNewChat() {
    const container = document.createElement("div");
    const input = document.createElement("input");

    input.setAttribute("placeholder", "type text here !!");

    container.classList.add("conversation_newChat");
    container.append(input);

    return container;
  }

  showConversations() {
    const container = document.createElement("div");

    container.classList.add("conversation_container");
    container.append(this.#showNewChat(), this.#showMessages());

    return container;
  }
}
