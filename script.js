// Track number of rows, columns, and the selected color
let numRows = 0;
let numCols = 0;


// Add a new row to the grid
function addR() {
    const table = document.getElementById('grid');

    // Insert a new row at the end
    const newRow = table.insertRow();

    // Add cells to the new row based on current number of columns
    for (let i = 0; i < numCols; i++) {
        const newCell = newRow.insertCell();
        initializeCell(newCell);
    }

    // If this is the very first row (no columns yet), add one cell
    if (numCols === 0) {
        const newCell = newRow.insertCell();
        initializeCell(newCell);
        numCols = 1;
    }

    numRows++;
}
