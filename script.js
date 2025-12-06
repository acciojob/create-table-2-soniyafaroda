function createTable() {
  const rn = prompt("Input number of rows");
  const cn = prompt("Input number of columns");

  // Validate input
  if (rn === null || cn === null || isNaN(rn) || isNaN(cn)) {
    return;
  }

  const rows = parseInt(rn);
  const cols = parseInt(cn);

  if (rows <= 0 || cols <= 0) {
    alert("Invalid input!");
    return;
  }

  const table = document.getElementById("myTable");

  // Clear previous table
  table.innerHTML = "";

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
