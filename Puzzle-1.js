const rulesButton = document.getElementById("rulesButton");
const gridWidth = 8;
const gridHeight = 8;
const startButton = document.getElementById("startButton");

startButton.addEventListener("click", () => {
  const section = document.querySelector(".grid");

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
  // cells[0].classList.add("delorean");
  // cells[1].classList.add("straight", "horizontal");
  // cells[2].classList.add("straight", "horizontal");
  // cells[3].classList.add("curve", "southWest");
  // cells[8].classList.add("curve", "southWest");
  // cells[9].classList.add("straight", "horizontal");
  // cells[10].classList.add("straight", "horizontal");
  // cells[11].classList.add("curve", "southWest");
  // cells[12].classList.add("curve", "southWest");
  // cells[13].classList.add("straight", "horizontal");
  // cells[14].classList.add("curve", "southWest");
  // cells[16].classList.add("curve", "southWest");
  // cells[17].classList.add("straight", "horizontal");
  // cells[18].classList.add("straight", "horizontal");
  // cells[19].classList.add("straight", "horizontal");
  // cells[20].classList.add("curve", "southWest");
  // cells[22].classList.add("straight", "horizontal");
  // cells[26].classList.add("curve", "southWest");
  // cells[27].classList.add("straight", "horizontal");
  // cells[28].classList.add("straight", "horizontal");
  // cells[29].classList.add("straight", "horizontal");
  // cells[30].classList.add("curve", "southWest");
  // cells[34].classList.add("straight", "horizontal");
  // cells[37].classList.add("curve", "southWest");
  // cells[38].classList.add("straight", "horizontal");
  // cells[39].classList.add("curve", "southWest");
  // cells[40].classList.add("curve", "southWest");
  // cells[41].classList.add("straight", "horizontal");
  // cells[42].classList.add("curve", "southWest");
  // cells[43].classList.add("curve", "southWest");
  // cells[44].classList.add("straight", "horizontal");
  // cells[45].classList.add("curve", "southWest");
  // cells[47].classList.add("straight", "horizontal");
  // cells[48].classList.add("straight", "horizontal");
  // cells[51].classList.add("curve", "southWest");
  // cells[52].classList.add("curve", "southWest");
  // cells[53].classList.add("curve", "southWest");
  // cells[54].classList.add("straight", "horizontal");
  // cells[55].classList.add("curve", "southWest");
  // cells[56].classList.add("curve", "southWest");
  // cells[57].classList.add("straight", "horizontal");
  // cells[58].classList.add("straight", "horizontal");
  // cells[59].classList.add("straight", "horizontal");
  // cells[60].classList.add("curve", "southWest");
  // cells[61].classList.add("curve", "southWest");
  // cells[62].classList.add("straight", "horizontal");
  // cells[63].classList.add("mcfly");
}

grid.addEventListener("click", (event) => {
  event.target.classList.toggle("horizontal");
console.log(event.target.className)
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
});
 const map = [
   ["delorean", "straight", "straight", "curve southWest"],
   ["curve southWest", "straight", "straight", "curve southWest", "curve southWest", "straight", "curve southWest"],
   ["curve southWest", "straight", "straight", "straight", "curve southWest", "", "straight"],
   ["", "", "curve southWest", "straight", "straight", "straight", "curve southWest"],
   ["", "", "straight", "", ],
   ["curve southWest", "straight", "curve southWest", "", "curve southWest", "straight", "straight", "curve southWest"],
   ["straight", "", "", "", "straight", "curve southWest", "straight", "curve southWest"],
   ["curve southWest", "straight", "straight", "straight", "curve southWest", "curve southWest", "straight", "mcfly"],
 ];

function createMap() {
  map.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (!cell) {
        return;
      }
      const classes = cell.split(' ')
      //console.log(classes);
      cells[i * 8 + j].classList.add(...classes);
    });
  });
}
