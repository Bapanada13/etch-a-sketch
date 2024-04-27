function colorChange(box) {
  box.count = 0;
  box.addEventListener("mouseenter", function x() {
    if (box.count === 0) {
      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);
      box.style.backgroundColor = `rgba(${r}, ${g}, ${b})`;
      box.style.opacity = 1;
    }
    else {
      box.style.opacity -= 0.1;
      if (box.count === 10) box.removeEventListener("mouseenter", x);
    }
    box.count ++;
  });
}

function generateGrid() {
  if (initialGeneration === false) {
    gridSize = +prompt("Specify grid size (0-50)");
    while (gridSize <= 0 || gridSize > 50 || Number.isNaN(gridSize)) {
      gridSize = +prompt("Invalid input. Specify grid size (0-50)");
    }
  }
  while (container.hasChildNodes()) container.removeChild(container.firstChild);
  for (let i = 0; i < gridSize * gridSize; i++) {
    const box = document.createElement("div");
    const size = container.offsetHeight / gridSize;
    box.style.width = size + "px";
    box.style.height = size + "px";
    box.style.backgroundColor = "white";
    colorChange(box);
    container.appendChild(box);
  }
}

let initialGeneration = true;
let gridSize = 16;
const gridButton = document.querySelector("button");
gridButton.addEventListener("click", generateGrid);
const container = document.querySelector(".container");
container.style.width = window.innerHeight - gridButton.offsetHeight - 40 + "px";
container.style.height = window.innerHeight - gridButton.offsetHeight - 40 + "px";
container.style.backgroundColor = "black";
gridButton.click();
initialGeneration = false;