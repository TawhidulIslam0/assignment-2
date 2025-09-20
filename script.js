function initializeCell(cell) {
  cell.style.backgroundColor = "white";

  cell.addEventListener("click", () => {
    if (colorSelected && colorSelected !== "SELECT") {
      cell.style.backgroundColor = colorSelected;
    }
  });
}
