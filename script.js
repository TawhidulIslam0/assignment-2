// Track number of rows and columns
let numRows = 0;
let numCols = 0;
// Remove the last column from the grid
function removeC() {
    const table = document.getElementById('grid');

    if (numCols > 0) {
        // Delete last cell in each row
        for (let i = 0; i < numRows; i++) {
            table.rows[i].deleteCell(numCols - 1);
        }

        numCols--;

        // If no columns remain, remove all rows
        if (numCols === 0) {
            while (numRows > 0) {
                table.deleteRow(numRows - 1);
                numRows--;
            }
        }
    }
}

