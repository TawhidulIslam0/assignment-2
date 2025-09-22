
// Track the number of rows and columns in the grid
let numRows = 0;
let numCols = 0;

// Store the currently selected color from the dropdown
let colorSelected = null;

// Add Row
function addR() {
  const table = document.getElementById('grid');
  const newRow = table.insertRow();

  if (numCols === 0) {
    // If no columns yet, create one cell in the new row
    const newCell = newRow.insertCell();
    initializeCell(newCell);
    numCols = 1;
  } else {
    // Add cells based on existing column count
    for (let i = 0; i < numCols; i++) {
      const newCell = newRow.insertCell();
      initializeCell(newCell);
    }
  }

  numRows++;
}


// Add Column
function addC() {
  const table = document.getElementById('grid');

  if (numRows === 0) {
    // If there are no rows, create the first row and cell
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

// Remove Row
function removeR() {
  const table = document.getElementById('grid');

  if (numRows > 0) {
    table.deleteRow(numRows - 1);
    numRows--;

    // Reset columns if no rows are left
    if (numRows === 0) {
      numCols = 0;
    }
  }
}


// Remove Column
function removeC() {
  const table = document.getElementById('grid');

  if (numCols > 0) {
    for (let i = 0; i < numRows; i++) {
      table.rows[i].deleteCell(numCols - 1);
    }

    numCols--;

    // If all columns are removed, also remove all rows
    if (numCols === 0) {
      while (numRows > 0) {
        table.deleteRow(numRows - 1);
        numRows--;
      }
    }
  }
}


// Select Color from Dropdown
function selectColor() {
  colorSelected = document.getElementById("selectedColorId").value;
}


// Initialize Cell
function initializeCell(cell) {
  cell.style.backgroundColor = "white";

  // Add click event to color the cell when selected
  cell.addEventListener("click", () => {
    if (colorSelected && colorSelected !== "SELECT") {
      cell.style.backgroundColor = colorSelected;
    }
  });
}


// Check if Cell is Uncolored
function isCellUncolored(cell) {
  const bg = window.getComputedStyle(cell).backgroundColor;
  return bg === "rgb(255, 255, 255)" || bg === "transparent" || bg === "";
}

// Fill All Uncolored Cells
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


// Fill All Cells
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

// Clear All Cells
function clearAll() {
  const table = document.getElementById('grid');

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      table.rows[i].cells[j].style.backgroundColor = "white";
    }
  }
}

