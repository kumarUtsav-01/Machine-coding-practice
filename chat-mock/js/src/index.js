import { ItemList } from "./itemList/ItemList";

window.onload = async function () {
  const container = document.createElement("div");

  const itemList = new ItemList();

  itemList.init().then(() => {
    container.appendChild(itemList.itemList);
  });

  document.body.append(container);
};
