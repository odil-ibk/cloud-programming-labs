function invert(obj) {
  const out = {};
  for (const k of Object.keys(obj)) {
    const v = String(obj[k]);
    if (!Object.prototype.hasOwnProperty.call(out, v)) {
      out[v] = k;
    } else if (Array.isArray(out[v])) {
      out[v].push(k);
    } else {
      out[v] = [out[v], k];
    }
  }
  return out;
}
