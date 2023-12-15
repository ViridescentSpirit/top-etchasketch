let gridSize = 16;

function createGrid(gridSize) {
    const etchASketch = document.querySelector(`.etchASketch`);

    for (i = 0; i < gridSize; i++) {
        const newRow = document.createElement(`div`);
        newRow.classList = `gridRow`;

        for (j = 0; j < gridSize; j++) {
            const newCol = document.createElement(`div`);
            newCol.textContent = `hi`;
            newCol.classList = `gridCol`;
            newRow.appendChild(newCol);
        }

        etchASketch.appendChild(newRow);
    } 
}

createGrid(gridSize);