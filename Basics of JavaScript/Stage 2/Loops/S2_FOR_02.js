function findFirstEven(nums) {
  for (const n of nums) {
    if (n % 2 === 0) return n;
  }
  return null;
}
