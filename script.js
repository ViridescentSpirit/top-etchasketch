let gridSize = 16;
const etchASketch = document.querySelector(`.etchASketch`);

function createGrid(gridSize) {
    for (i = 0; i < gridSize; i++) {
        const newRow = document.createElement(`div`);
        newRow.classList = `gridRow`;

        for (j = 0; j < gridSize; j++) {
            const newCol = document.createElement(`div`);
            newCol.classList = `gridCol`;
            newRow.appendChild(newCol);
        }

        etchASketch.appendChild(newRow);
    } 
}

createGrid(gridSize);
activateSquares();


function activateSquares() {
    const gridElements = document.querySelectorAll(`.gridCol`);

    gridElements.forEach(function(square) {
        square.addEventListener(`mouseover`,function(){
            this.style.backgroundColor = `blue`;
        });
    });
}
const resetButton = document.querySelector(`#resetButton`);
resetButton.addEventListener(`click`, clearAllSquares);

function clearAllSquares() {
    const gridElements = document.querySelectorAll(`.gridCol`);

    gridElements.forEach(function(square) {
        square.style.backgroundColor = `white`;
    });
};

const sizeButton = document.querySelector(`#sizeButton`);
sizeButton.addEventListener(`click`, promptSize);

function promptSize() {
    gridSize = prompt(`Please enter desired number of rows and columns.`);

    if (gridSize > 100) {
        gridSize = 100;
        alert(`Maximum grid size is 100x100. Grid size set to 100x100!`);
    }
        
    clearSquares();
    createGrid(gridSize);
    activateSquares();
}

function clearSquares() {
    let child = etchASketch.lastElementChild;
    while (child) {
        etchASketch.removeChild(child);
        child = etchASketch.lastElementChild;
    }
}