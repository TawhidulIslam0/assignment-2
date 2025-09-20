// Track number of rows and columns
let numRows = 0;
let numCols = 0;

// Clear all cells back to white
function clearAll() {
    const table = document.getElementById('grid');
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            table.rows[i].cells[j].style.backgroundColor = "white";
        }
    }
}
