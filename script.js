// Track number of rows, columns, and the selected color
let numRows = 0;
let numCols = 0;
let colorSelected = null;

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

// Add a new column to the grid
function addC() {
    const table = document.getElementById('grid');

    // If there are no rows yet, create first row and cell
    if (numRows === 0) {
        const newRow = table.insertRow();
        const newCell = newRow.insertCell();
        initializeCell(newCell);
        numRows = 1;
        numCols = 1;
        return;
    }

    // Add a new cell at the end of each existing row
    for (let i = 0; i < numRows; i++) {
        const row = table.rows[i];
        const newCell = row.insertCell();
        initializeCell(newCell);
    }

    numCols++;
}

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

// Update selected color from dropdown menu
function selectColor() {
    colorSelected = document.getElementById("selectedColorId").value;
}

// Initialize a table cell with white background and click handler to color it
function initializeCell(cell) {
    cell.style.backgroundColor = "white";
    cell.addEventListener("click", function () {
        if (colorSelected && colorSelected !== "SELECT") {
            cell.style.backgroundColor = colorSelected;
        }
    });
}

// Check if a cell is uncolored (white or transparent)
function isCellUncolored(cell) {
    const bg = window.getComputedStyle(cell).backgroundColor;
    return bg === "rgb(255, 255, 255)" || bg === "transparent" || bg === "";
}

// Fill all uncolored cells with the selected color
function fillU() {
    if (!colorSelected || colorSelected === "SELECT") {
        alert("Please select a color first.");
        return;
    }

    const table = document.getElementById('grid');
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            const cell = table.rows[i].cells[j];
            if (isCellUncolored(cell)) {
                cell.style.backgroundColor = colorSelected;
            }
        }
    }
}

// Fill all cells with the selected color
function fillAll() {
    if (!colorSelected || colorSelected === "SELECT") {
        alert("Please select a color first.");
        return;
    }

    const table = document.getElementById('grid');
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            table.rows[i].cells[j].style.backgroundColor = colorSelected;
        }
    }
}

// Clear all cells back to white
function clearAll() {
    const table = document.getElementById('grid');
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            table.rows[i].cells[j].style.backgroundColor = "white";
        }
    }
}
