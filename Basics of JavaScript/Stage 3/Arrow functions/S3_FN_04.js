function sumSquaresOfEvens(nums) {
  return nums
    .filter((n) => n % 2 === 0)
    .map((n) => n * n)
    .reduce((acc, n) => acc + n, 0);
}
