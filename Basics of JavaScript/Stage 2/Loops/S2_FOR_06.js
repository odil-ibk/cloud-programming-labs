function sumNested(matrix) {
  let total = 0;
  for (const row of matrix) {
    for (const n of row) {
      total += n;
    }
  }
  return total;
}
