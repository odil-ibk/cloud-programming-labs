const normalizeString = pipe(
  (s) => String(s).trim(),
  (s) => s.toLowerCase(),
  (s) => s.replace(/\s+/g, " "),
);
