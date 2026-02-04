function chunk(arr, size) {
  if (size <= 0) return null;
  const out = [];
  for (let i = 0; i < arr.length; i += size) {
    const part = [];
    for (let j = i; j < i + size && j < arr.length; j++) {
      part.push(arr[j]);
    }
    out.push(part);
  }
  return out;
}
