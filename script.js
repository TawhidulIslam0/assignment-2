// Track number of rows, columns, and the selected color
let numRows = 0;
let numCols = 0;
let colorSelected = null;

// Update selected color from dropdown menu
function selectColor() {
    colorSelected = document.getElementById("selectedColorId").value;
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
