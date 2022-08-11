const rulesButton = document.getElementById("rulesButton");
const gridWidth = 8;
const gridHeight = 8;
const startButton = document.getElementById("startButton");
const restartButton = document.getElementById("restartButton");
let sec = null;
let time = null;
const section = document.querySelector(".grid");

restartButton.addEventListener("click", () => {
  reset()
  startGame();
});

startButton.addEventListener("click", () => {
  startGame();
});

rulesButton.addEventListener("click", () => {
  const form = document.querySelector(".popUp");

  if (form.classList.contains("hidden")) {
    // this SHOWS the form
    form.classList.remove("hidden");
  } else {
    // this HIDES the form
    form.classList.add("hidden");
  }
});
const grid = document.querySelector(".grid");
const cells = [];

function createCell() {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  grid.append(cell);

  cells.push(cell);
}

function addCells() {
  cells.splice(0, cells.length);
  for (let i = 0; i < gridWidth * gridHeight; i++) {
    createCell();
  }
}

grid.addEventListener("click", (event) => {
  if (event.target.classList.contains("straight")) {
    event.target.classList.toggle("horizontal");
  }
  console.log(event.target.className);
  if (event.target.classList.contains("curve")) {
    if (event.target.classList.contains("southWest")) {
      event.target.classList.add("northWest");
      event.target.classList.remove("southWest");
    } else if (event.target.classList.contains("southEast")) {
      event.target.classList.add("southWest");
      event.target.classList.remove("southEast");
    } else if (event.target.classList.contains("northEast")) {
      event.target.classList.add("southEast");
      event.target.classList.remove("northEast");
    } else if (event.target.classList.contains("northWest")) {
      event.target.classList.add("northEast");
      event.target.classList.remove("northWest");
    }
  }
  // Turns a value into a string representation of the value in a standardised format.
  //It makes it easier to compare values like arrays or objects where we're interested
  // in seeing if the structure and contents are the same.
  const currentMap = getMapFromCurrentGame();
  if (JSON.stringify(currentMap) === JSON.stringify(winMap)) {
    setTimeout(() => alert("You won !!"), 10);
    reset();
  }
});

function reset() {
  clearInterval(time);
  time = null;
}

const map = [
  "cell delorean",
  "cell straight",
  "cell straight",
  "cell curve southWest",
  "cell",
  "cell",
  "cell",
  "cell",
  "cell curve southWest",
  "cell straight",
  "cell straight",
  "cell curve southWest",
  "cell curve southWest",
  "cell straight",
  "cell curve southWest",
  "cell",
  "cell curve southWest",
  "cell straight",
  "cell straight",
  "cell straight",
  "cell curve southWest",
  "cell",
  "cell straight",
  "cell",
  "cell",
  "cell",
  "cell curve southWest",
  "cell straight",
  "cell straight",
  "cell straight",
  "cell curve southWest",
  "cell",
  "cell",
  "cell",
  "cell straight",
  "cell",
  "cell",
  "cell",
  "cell",
  "cell",
  "cell curve southWest",
  "cell straight",
  "cell curve southWest",
  "cell",
  "cell curve southWest",
  "cell straight",
  "cell straight",
  "cell curve southWest",
  "cell straight",
  "cell",
  "cell",
  "cell",
  "cell straight",
  "cell curve southWest",
  "cell straight",
  "cell curve southWest",
  "cell curve southWest",
  "cell straight",
  "cell straight",
  "cell straight",
  "cell curve southWest",
  "cell curve southWest",
  "cell straight",
  "cell mcfly",
];

function createMap() {
  document.querySelectorAll(".cell").forEach((cell, index) => {
    cell.className = map[index];
  });
}

const winMap = [
  "cell delorean",
  "cell straight",
  "cell straight",
  "cell curve southWest",
  "cell",
  "cell",
  "cell",
  "cell",
  "cell curve southEast",
  "cell straight",
  "cell straight",
  "cell curve northWest",
  "cell curve southEast",
  "cell straight",
  "cell curve southWest",
  "cell",
  "cell curve northEast",
  "cell straight",
  "cell straight",
  "cell straight",
  "cell curve northWest",
  "cell",
  "cell straight horizontal",
  "cell",
  "cell",
  "cell",
  "cell curve southEast",
  "cell straight",
  "cell straight",
  "cell straight",
  "cell curve northWest",
  "cell",
  "cell",
  "cell",
  "cell straight horizontal",
  "cell",
  "cell",
  "cell",
  "cell",
  "cell",
  "cell curve southEast",
  "cell straight",
  "cell curve northWest",
  "cell",
  "cell curve southEast",
  "cell straight",
  "cell straight",
  "cell curve southWest",
  "cell straight horizontal",
  "cell",
  "cell",
  "cell",
  "cell straight horizontal",
  "cell curve southEast",
  "cell straight",
  "cell curve northWest",
  "cell curve northEast",
  "cell straight",
  "cell straight",
  "cell straight",
  "cell curve northWest",
  "cell curve northEast",
  "cell straight",
  "cell mcfly",
];

function getMapFromCurrentGame() {
  return cells.map(function (cell) {
    return Array.from(cell.classList).join(" ");
  });
}

function myTimer() {
  document.getElementById("timer").innerHTML = sec + " sec left";
  sec--;
  if (sec == -1) {
    reset()
    alert("GREAT SCOTT ! You loose");
  }
}

function startGame() {
  if (time) {
    return;
  }
  sec = 45;
  time = setInterval(myTimer, 1000);
  if (section.classList.contains("hidden")) {
    // this SHOWS the form
    section.classList.remove("hidden");
  }
  section.innerHTML = "";
  addCells();
  createMap();
}
