function createTable() {
  const rn = prompt("Input number of rows");
  const cn = prompt("Input number of columns");

  // Validate numeric input
  if (rn === null || cn === null || isNaN(rn) || isNaN(cn)) {
    return; // do nothing for invalid input
  }

  const rows = parseInt(rn);
  const cols = parseInt(cn);

  // Validate positive values
  if (rows <= 0 || cols <= 0) {
    alert("Invalid input!");
    return;
  }

  const table = document.getElementById("myTable");

  // Clear previous table content
  table.innerHTML = "";

  // Build table
  for (let i = 0; i < rows; i++) {
    const tr = document.createElement("tr");

    for (let j = 0; j < cols; j++) {
      const td = document.createElement("td");
      td.textContent = `Row-${i} Column-${j}`;
      tr.appendChild(td);
    }

    table.appendChild(tr);
  }
}
