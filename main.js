let grid = document.querySelector("#container");

let input = document.querySelector(".gridSize");
input.addEventListener("click", () => {
  let resolution = window.prompt("Grid density:", 50);
  if (resolution > 0 && resolution < 101) {
    createGrid(resolution);
  } else {
    resolution = window.prompt("Try a number between 1 and 100!", 50);
  }
});

function createGrid(size) {
  document.querySelectorAll(".gridItem").forEach((item) => {
    item.remove();
  });
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

let erase = document.querySelector(".erase");
erase.addEventListener("click", () => {
  document.querySelectorAll(".gridItem").forEach((pixel) => {
    pixel.classList.remove("hover");
  });
});
