function omit(obj, keys) {
  const remove = {};
  for (const k of keys) remove[k] = true;

  const out = {};
  for (const k of Object.keys(obj)) {
    if (!remove[k]) out[k] = obj[k];
  }
  return out;
}
