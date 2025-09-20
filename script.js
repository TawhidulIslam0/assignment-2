// Track number of rows and columns
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
        newCell.style.backgroundColor = "white";
    }

    // If this is the very first row (no columns yet), add one cell
    if (numCols === 0) {
        const newCell = newRow.insertCell();
        newCell.style.backgroundColor = "white";
        numCols = 1;
    }

    numRows++;
}
