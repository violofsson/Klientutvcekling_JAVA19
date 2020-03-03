const entryTable = document.getElementById("entries");

for (let i = 0; i < localStorage.length; i++) {
  let row = document.createElement("tr");
  let keyCell = document.createElement("td");
  let valueCell = document.createElement("td");

  let key = localStorage.key(i);
  keyCell.textContent = key;
  valueCell.textContent = localStorage.getItem(key);

  row.appendChild(keyCell);
  row.appendChild(valueCell);
  entryTable.appendChild(row);
}
