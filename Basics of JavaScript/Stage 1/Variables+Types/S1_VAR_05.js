function isArray(value) {
  return Array.isArray(value);
}

console.table([
  { value: [], isArray: isArray([]) },
  { value: [1, 2, 3], isArray: isArray([1, 2, 3]) },
  { value: {}, isArray: isArray({}) },
  { value: { length: 0 }, isArray: isArray({ length: 0 }) },
]);
