function typeLabel(value) {
  return value === null ? "null" : typeof value;
}

const tests = [null, undefined, 42, "42", true, {}, [], () => ({})];

console.table(
  tests.map((v) => ({
    value: v,
    typeLabel: typeLabel(v),
  })),
);
