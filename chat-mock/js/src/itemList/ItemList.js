import { Item } from "../item/Item";
import "./ItemList.css";

export class ItemList {
  #itemList = [];
  #parentContainer;

  constructor() {
    this.#parentContainer = document.createElement("div");

    this.#parentContainer.classList.add("itemList");
  }

  async init() {
    await this.#getItems();
  }

  async #getOrders() {
    const response = await fetch(
      "https://my-json-server.typicode.com/codebuds-fk/chat/chats"
    );
    const data = await response.json();

    return data;
  }

  async #getItems() {
    if (this.#itemList.length === 0) {
      const data = await this.#getOrders();
      for (let order of data) {
        const item = new Item(
          order.imageURL,
          {
            orderId: order.orderId,
            title: order.title,
            message: order.messageList.at(-1)?.message,
          },
          order.latestMessageTimestamp ?? "",
          order.messageList,
          this.#parentContainer
        );

        this.#itemList.push(item.html);
      }
    }
  }

  get itemList() {
    const parentContainer = this.#parentContainer;
    const container = document.createElement("div");

    container.classList.add("itemList_orders");
    container.append(...this.#itemList);
    this.#parentContainer.append(container);

    return parentContainer;
  }
}
