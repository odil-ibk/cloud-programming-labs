function sumUntil(nums, threshold) {
  let sum = 0;
  for (const n of nums) {
    if (sum + n > threshold) break;
    sum += n;
  }
  return sum;
}
