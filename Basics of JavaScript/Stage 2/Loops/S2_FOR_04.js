function countOccurrences(values) {
  const out = {};
  for (const v of values) {
    const key = String(v);
    out[key] = (out[key] || 0) + 1;
  }
  return out;
}
