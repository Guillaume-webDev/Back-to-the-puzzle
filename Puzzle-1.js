const rulesButton = document.getElementById("rulesButton");
const gridWidth = 8;
const gridHeight = 8;
const startButton = document.getElementById("startButton");

startButton.addEventListener("click", () => {
  const section = document.querySelector(".grid");
  let sec = 30;
  let time = setInterval(myTimer, 1000);

  function myTimer() {
    
    document.getElementById("timer").innerHTML = sec + " sec left";
    sec--;
    if (sec == -1) {
      clearInterval(time);
      alert("GREAT SCOTT ! You loose");
    }
  }

  if (section.classList.contains("hidden")) {
    // this SHOWS the form
    section.classList.remove("hidden");
  } else {
    // this HIDES the form
    section.classList.add("hidden");
  }
  section.innerHTML = "";
  addCells();

  createMap();
});

rulesButton.addEventListener("click", () => {
  const form = document.querySelector(".popUp");

  if (form.style.display === "none") {
    // this SHOWS the form
    form.style.display = "block";
  } else {
    // this HIDES the form
    form.style.display = "none";
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
  for (let i = 0; i < gridWidth * gridHeight; i++) {
    createCell();
  }
}

grid.addEventListener("click", (event) => {
  event.target.classList.toggle("horizontal");
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
const currentMap = getMapFromCurrentGame ();
if (JSON.stringify(currentMap) == JSON.stringify(winMap)) {
  setTimeout(() => alert('You won !!'), 10);
}
});
const map = [
  ["delorean", "straight", "straight", "curve southWest"],
  [
    "curve southWest",
    "straight",
    "straight",
    "curve southWest",
    "curve southWest",
    "straight",
    "curve southWest",
  ],
  [
    "curve southWest",
    "straight",
    "straight",
    "straight",
    "curve southWest",
    "",
    "straight",
  ],
  [
    "",
    "",
    "curve southWest",
    "straight",
    "straight",
    "straight",
    "curve southWest",
  ],
  ["", "", "straight", ""],
  [
    "curve southWest",
    "straight",
    "curve southWest",
    "",
    "curve southWest",
    "straight",
    "straight",
    "curve southWest",
  ],
  [
    "straight",
    "",
    "",
    "",
    "straight",
    "curve southWest",
    "straight",
    "curve southWest",
  ],
  [
    "curve southWest",
    "straight",
    "straight",
    "straight",
    "curve southWest",
    "curve southWest",
    "straight",
    "mcfly",
  ],
];

function createMap() {
  map.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (!cell) {
        return;
      }
      const classes = cell.split(" ");
      //console.log(classes);
      cells[i * 8 + j].classList.add(...classes);
    });
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
  "cell curve horizontal southEast",
  "cell straight",
  "cell straight",
  "cell curve horizontal northWest",
  "cell curve horizontal southEast",
  "cell straight",
  "cell curve southWest",
  "cell",
  "cell curve northEast",
  "cell straight",
  "cell straight",
  "cell straight",
  "cell curve horizontal northWest",
  "cell",
  "cell straight horizontal",
  "cell",
  "cell",
  "cell",
  "cell curve horizontal southEast",
  "cell straight",
  "cell straight",
  "cell straight",
  "cell curve horizontal northWest",
  "cell",
  "cell",
  "cell",
  "cell straight horizontal",
  "cell",
  "cell",
  "cell",
  "cell",
  "cell",
  "cell curve horizontal southEast",
  "cell straight",
  "cell curve horizontal northWest",
  "cell",
  "cell curve horizontal southEast",
  "cell straight",
  "cell straight",
  "cell curve southWest",
  "cell straight horizontal",
  "cell",
  "cell",
  "cell",
  "cell straight horizontal",
  "cell curve horizontal southEast",
  "cell straight",
  "cell curve horizontal northWest",
  "cell curve northEast",
  "cell straight",
  "cell straight",
  "cell straight",
  "cell curve horizontal northWest",
  "cell curve northEast",
  "cell straight",
  "cell mcfly"
]

function getMapFromCurrentGame() {
  return cells.map(function (cell) {
    return Array.from(cell.classList).join(" ");
  });
}

function result () {
  if (winMap) {
    alert("You won!!")
  }
}

//iteration 2 and 3



// and add a restart/reset button
