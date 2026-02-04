function inspect(value) {
  return {
    type: value === null ? "null" : typeof value,
    isArray: Array.isArray(value),
    isNull: value === null,
    isNaN: typeof value === "number" && Number.isNaN(value),
  };
}

const values = [null, undefined, 0, NaN, "0", [], {}, () => {}, 42, true];

console.table(
  values.map((v) => ({
    value: v,
    ...inspect(v),
  })),
);
