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
  //function populatedcell(arr){
  //map = []
  //}
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
   ["delorean", "straight", "straight", "curve.southWest"],
   ["curve", "straight", "straight", "curve", "curve", "straight", "curve"],
   ["curve", "straight", "straight", "straight", "curve", "", "straight"],
   ["", "", "curve", "straight", "straight", "straight", "curve"],
   ["", "", "straight", "", "", "curve", "straight", "curve"],
   ["curve", "straight", "curve", "curve", "straight", "curve", "straight", "", "straight"],
   ["straight", "", "", "curve", "curve", "curve", "straight", "curve"],
   ["curve", "straight", "straight", "straight", "curve", "curve", "straight", "mcfly"],
 ];

function createMap() {
  map.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (!cell) {
        return;
      }
      cells[i * 8 + j].classList.add(cell);
    });
  });

  //   cells[0].classList.add("delorean");
  //   cells[1].classList.add("straight", "horizontal");
  //   cells[2].classList.add("straight", "horizontal");
  //   cells[3].classList.add("curve", "southWest");
  //   cells[8].classList.add("curve", "southWest");
  //   cells[9].classList.add("straight", "horizontal");
  //   cells[10].classList.add("straight", "horizontal");
  //   cells[11].classList.add("curve", "southWest");
  //   cells[12].classList.add("curve", "southWest");
  //   cells[13].classList.add("straight", "horizontal");
  //   cells[14].classList.add("curve", "southWest");
  //   cells[16].classList.add("curve", "southWest");
  //   cells[17].classList.add("straight", "horizontal");
  //   cells[18].classList.add("straight", "horizontal");
  //   cells[19].classList.add("straight", "horizontal");
  //   cells[20].classList.add("curve", "southWest");
  //   cells[22].classList.add("straight", "horizontal");
  //   cells[63].classList.add("mcfly");
  //   cells[62].classList.add("straight", "horizontal");
  //   cells[61].classList.add("curve", "southWest");
  //   cells[53].classList.add("curve", "southWest");
  //   cells[54].classList.add("straight", "horizontal");
  //   cells[55].classList.add("curve", "southWest");
  //   cells[47].classList.add("straight", "horizontal");
  //   cells[39].classList.add("curve", "southWest");
  //   cells[38].classList.add("straight", "horizontal");
  //   cells[37].classList.add("curve", "southWest");
  //   cells[45].classList.add("curve", "southWest");
  //   cells[44].classList.add("straight", "horizontal");
}