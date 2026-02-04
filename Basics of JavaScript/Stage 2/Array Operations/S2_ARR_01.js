function cleanNumbers(arr) {
  const out = [];
  for (const s of arr) {
    const n = +String(s).trim();
    if (!Number.isNaN(n)) out.push(n);
  }
  return out;
}
