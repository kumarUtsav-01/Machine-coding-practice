import { Conversation } from "../conversation/Conversation";
import "./Item.css";

export class Item {
  #html = "";
  #messageList = [];
  #parentContainer = null;
  static selectedItemId = null;
  static openedConversation = null;

  constructor(imageSrc, details, date, messageList, parentContainer) {
    const container = document.createElement("div");
    const image = this.#getImage(imageSrc);
    const description = this.#getDescription(details);
    const orderDate = this.#getDate(date);

    this.#messageList = messageList;
    this.#parentContainer = parentContainer;

    container.classList.add("item_container");
    container.append(image, description, orderDate);
    container.addEventListener("click", () => {
      if (Item.openedConversation) {
        this.#hideChat();
      }

      if (Item.selectedItemId !== details.orderId) {
        this.#showChat();
        Item.selectedItemId = details.orderId;
      } else {
        Item.selectedItemId = null;
        return;
      }
    });

    this.#html = container;
  }

  #getImage(imageSrc) {
    const image = document.createElement("img");
    image.setAttribute("src", imageSrc);
    image.classList.add("item_image");

    return image;
  }

  #getDescription(details) {
    const description = document.createElement("div");

    description.classList.add("item_description");
    Object.values(details).forEach((detail) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = detail;
      description.appendChild(paragraph);
    });

    return description;
  }

  #getDate(date) {
    const orderDate = document.createElement("div");

    orderDate.textContent = new Date(date).toISOString();

    return orderDate;
  }

  get html() {
    return this.#html;
  }

  #showChat() {
    const container = document.createElement("div");
    const conversation = new Conversation(this.#messageList);

    container.classList.add("item_conversation_section");
    container.append(conversation.showConversations());

    Item.openedConversation = container;
    return this.#parentContainer.append(container);
  }

  #hideChat() {
    Item.openedConversation.remove();
  }
}
