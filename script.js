function createTable() {
  // Prompt for rows
  const rn = prompt("Input number of rows");
  // Prompt for columns
  const cn = prompt("Input number of columns");

  // Validate numeric input
  const rows = parseInt(rn);
  const cols = parseInt(cn);

  if (isNaN(rows) || isNaN(cols)) {
    // Ignore invalid input — do nothing
    return;
  }

  if (rows <= 0 || cols <= 0) {
    alert("Number of rows and columns must be greater than 0");
    return;
  }

  // Get table element
  const table = document.getElementById("myTable");
  table.innerHTML = ""; // Clear previous table

  // Create table dynamically
  for (let i = 0; i < rows; i++) {
    const row = table.insertRow();

    for (let j = 0; j < cols; j++) {
      const cell = row.insertCell();
      cell.textContent = `Row-${i} Column-${j}`;
    }
  }
}
