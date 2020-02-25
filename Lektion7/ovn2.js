let table = '<table>';

for (let row = 1; row <= 10; row++) {
  table += '<tr>';
  for (let col = 1; col <= 10; col++) {
    table += '<td>' + (Number(row) * Number(col)) + '</td>';
  }
  table += '</tr>';
}

table += '</table>';

console.log(table);
