function addRandomColor(box) {
  box.addEventListener("mouseenter", () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    box.style.backgroundColor = `rgba(${r}, ${g}, ${b})`;
  }, { once: true});
}

function addDarken(box) {
  box.style.opacity = 1.1;
  box.addEventListener("mouseenter", function x() {
    box.style.opacity -= 0.1;
    if (box.style.opacity <= 0) box.removeEventListener("mouseenter", x);
  });
}

function clearGrid() {
  container.innerHTML = "";
}

function getUserInput() {
  let userInput = +prompt("Specify grid size (1-100)");
  while (userInput <= 0 || userInput > 100 || Number.isNaN(userInput)) {
    userInput = +prompt("Invalid input. Specify grid size (1-100)");
  }
  return userInput;
}

function loadGrid() {
  if (initialLoad === false) {
    gridSize = getUserInput();
    clearGrid();
  }
  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < gridSize; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      addRandomColor(box);
      addDarken(box);
      row.appendChild(box);
    }
    container.appendChild(row);
  }
}

let initialLoad = true;
let gridSize = 16;
let prevGridSize = 0;
const container = document.querySelector(".container");
const gridButton = document.querySelector("button");
gridButton.addEventListener("click", loadGrid);
gridButton.click();
initialLoad = false;