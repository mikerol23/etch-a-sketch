let grid = document.querySelector("#container");

let btn = document.querySelector(".gridSize");
btn.addEventListener("click", () => {
  let resolution = window.prompt("Grid density:", 50);
  while (resolution === NaN || resolution < 1 || resolution > 100) {
    resolution = window.prompt("Try a number between 1 and 100!", 50);
  }
  createGrid(resolution);

  // if (resolution == null) {
  //   return;
  // }
  // if (isNaN(resolution) == true) {
  //   window.prompt("Numbers only please!");
  // } else if (resolution > 100 || resolution < 1) {
  //   window.alert("Try a number between 1 and 100!");
  // } else {
  //   createGrid(resolution);
  // }
});

function createGrid(size) {
  let total = size * size;
  for (let i = 0; i < total; i++) {
    let div = document.createElement("div");
    div.classList.add("gridItem");
    grid.appendChild(div);
  }
  document.getElementById("container").style.gridTemplateColumns =
    "repeat(" + size + ", 1fr)";
  let pixels = document.querySelectorAll(".gridItem");
  pixels.forEach((pixel) => {
    pixel.addEventListener("mouseover", () => {
      pixel.classList.add("hover");
    });
  });
}
