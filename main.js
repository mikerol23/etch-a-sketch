let grid = document.querySelector(".container");

function createGrid() {
  for (let i = 0; i < 16; i++) {
    let div = document.createElement("div");
    grid.appendChild(div);
  }
}
