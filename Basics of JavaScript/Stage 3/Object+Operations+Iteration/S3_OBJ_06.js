function groupBy(items, key) {
  const out = {};
  for (const item of items) {
    const v = item?.[key];
    const groupKey = String(v);
    if (!out[groupKey]) out[groupKey] = [];
    out[groupKey].push(item);
  }
  return out;
}
