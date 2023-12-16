let gridSize = 16;

function createGrid(gridSize) {
    const etchASketch = document.querySelector(`.etchASketch`);

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

const gridElements = document.querySelectorAll(`.gridCol`);

gridElements.forEach(function(square) {
    square.addEventListener(`mouseover`,function(){
        this.style.backgroundColor = `blue`;
    });
});

const resetButton = document.querySelector(`#resetButton`);
resetButton.addEventListener(`click`, clearAllSquares);

function clearAllSquares() {
    gridElements.forEach(function(square) {
        square.style.backgroundColor = `white`;
    });
};