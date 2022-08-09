const rulesButton = document.getElementById('rulesButton');
const gridWidth = 8
const gridHeight = 8
const startButton = document.getElementById('startButton');

startButton.addEventListener('click', () => {
     addCells()
    });
rulesButton.addEventListener('click', () => {
    const form = document.querySelector('.popUp');

    if (form.style.display === 'none') {
      // this SHOWS the form
      form.style.display = 'block';
    } else {
      // this HIDES the form
      form.style.display = 'none';
    }
  });
 const grid = document.querySelector('.grid')
 const cells = []

function createCell() {
  const cell = document.createElement('div')
  cell.classList.add('cell')
  grid.append(cell)

  cells.push(cell)
}

function addCells() {
  for (let i = 0; i < gridWidth * gridHeight; i++) {
    createCell()
  }
}

const inventory = {
    element: null,
    add() {
      // iteration 3
    }
}