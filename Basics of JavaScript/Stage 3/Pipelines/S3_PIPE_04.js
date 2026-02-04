const processNumbers = pipe(
  (arr) =>
    arr.filter((x) => x !== null && x !== undefined && String(x).trim() !== ""),
  (arr) => arr.map((x) => +String(x).trim()),
  (arr) => arr.filter((n) => !Number.isNaN(n)),
  (arr) => arr.map((n) => n * 2),
  (arr) => arr.reduce((sum, n) => sum + n, 0),
);
