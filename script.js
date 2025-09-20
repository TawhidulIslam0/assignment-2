// Track number of rows, columns, and the selected color
let numRows = 0;
let numCols = 0;
let colorSelected = null;

// Update selected color from dropdown menu
function selectColor() {
    colorSelected = document.getElementById("selectedColorId").value;
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
