function toNumberOrNull(x) {
  if (typeof x !== "string") return null;
  const n = +x;
  return Number.isNaN(n) ? null : n;
}

const tests = ["12", "12.5", " 12 ", "12x", ""];

console.table(
  tests.map((v) => ({
    input: JSON.stringify(v),
    output: toNumberOrNull(v),
  })),
);
