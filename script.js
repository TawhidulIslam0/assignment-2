// Track number of rows and columns
let numRows = 0;
let numCols = 0;

// Add a new column to the grid
function addC() {
    const table = document.getElementById('grid');

    // If there are no rows yet, create first row and cell
    if (numRows === 0) {
        const newRow = table.insertRow();
        const newCell = newRow.insertCell();
        newCell.style.backgroundColor = "white";
        numRows = 1;
        numCols = 1;
        return;
    }

    // Add a new cell at the end of each existing row
    for (let i = 0; i < numRows; i++) {
        const row = table.rows[i];
        const newCell = row.insertCell();
        newCell.style.backgroundColor = "white";
    }

    numCols++;
}
