function selectColor(e) {
  let blockIndex = Number(e.target.textContent) - 1;
  this.blocks[blockIndex].style["backgroundColor"] = this.selectedColor;

  if (checkIfAllSelected.call(this, this.selectedColor)) {
    if (this.selectedColor == "yellow") {
      this.selectedColor = "green";
    } else {
      this.selectedColor = "yellow";
    }

    resetColor.call(this, 0);
  }
}

function checkIfAllSelected(selectedColor) {
  for (let block of this.blocks) {
    if (block.style["backgroundColor"] !== selectedColor) {
      return false;
    }
  }

  return true;
}

function resetColor(index) {
  setTimeout(() => {
    this.blocks[index].style["backgroundColor"] = this.selectedColor;
    if (index < this.blocks.length - 1) {
      resetColor.call(this, index + 1);
    }
  }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  const gridElement = document.getElementsByClassName("grid")[0];
  let data = {
    blocks: Array.from(document.getElementsByClassName("grid")[0].children),
    selectedColor: "green",
  };

  gridElement.addEventListener("click", selectColor.bind(data));
});
