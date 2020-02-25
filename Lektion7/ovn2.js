let pseudoTable = "";

for (let row = 1; row <= 10; row++) {
  for (let col = 1; col <= 10; col++) {
    pseudoTable += Number(row) * Number(col) + " ";
  }
  pseudoTable += "\n";
}

console.log(pseudoTable);
