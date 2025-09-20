// Track selected color
let colorSelected = null;

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
