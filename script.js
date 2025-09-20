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
