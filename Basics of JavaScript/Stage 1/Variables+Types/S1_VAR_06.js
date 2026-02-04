function classifyNumberLike(x) {
  if (typeof x === "number") {
    return Number.isNaN(x) ? "nan" : "number";
  }
  return "not-a-number";
}

const tests = [NaN, 0, "0", "abc", undefined];

console.table(
  tests.map((v) => ({
    value: v,
    typeof: typeof v,
    result: classifyNumberLike(v),
  })),
);
