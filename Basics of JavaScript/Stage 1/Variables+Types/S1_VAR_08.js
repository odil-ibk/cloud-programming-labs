function safeAdd(a, b) {
  const bothInts =
    typeof a === "number" &&
    typeof b === "number" &&
    Number.isInteger(a) &&
    Number.isInteger(b);

  const mayOverflow =
    Math.abs(a) > Number.MAX_SAFE_INTEGER ||
    Math.abs(b) > Number.MAX_SAFE_INTEGER;

  if (bothInts && mayOverflow) {
    const result = BigInt(a) + BigInt(b);
    console.log(typeof result);
    return result;
  }

  const result = Number(a) + Number(b);
  console.log(typeof result);
  return result;
}

console.log(safeAdd(10, 20));
console.log(safeAdd(Number.MAX_SAFE_INTEGER + 10, 5));
