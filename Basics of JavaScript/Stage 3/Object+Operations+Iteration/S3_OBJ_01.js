function get(obj, path, fallback) {
  const parts = String(path).split(".");
  let cur = obj;

  for (const p of parts) {
    if (cur == null) return fallback;
    if (!Object.prototype.hasOwnProperty.call(cur, p)) return fallback;
    cur = cur[p];
  }

  return cur === undefined ? fallback : cur;
}
