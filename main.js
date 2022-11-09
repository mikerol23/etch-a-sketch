let grid = document.querySelector(".container");

function createGrid() {
  for (let i = 0; i < 256; i++) {
    let div = document.createElement("div");
    div.classList.add("gridItem");
    grid.appendChild(div);
  }
}

let gridItem = document.querySelector(".gridItem");

gridItem.addEventListener("mouseover", (draw) => {
  gridItem.classList.add("hover");
});
