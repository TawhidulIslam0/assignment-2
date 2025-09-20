// Track number of rows and columns
let numRows = 0;
let numCols = 0;

// Remove the last row from the grid
function removeR() {
    const table = document.getElementById('grid');

    if (numRows > 0) {
        table.deleteRow(numRows - 1);
        numRows--;

        // If no rows remain, reset columns to zero
        if (numRows === 0) {
            numCols = 0;
        }
    }
}
