function flatten1(arr) {
  const out = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      for (const x of item) out.push(x);
    } else {
      out.push(item);
    }
  }
  return out;
}
