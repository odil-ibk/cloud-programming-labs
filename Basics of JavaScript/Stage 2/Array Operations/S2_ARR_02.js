function unique(values) {
  const out = [];
  for (const v of values) {
    let seen = false;
    for (let i = 0; i < out.length; i++) {
      if (out[i] === v) {
        seen = true;
        break;
      }
    }
    if (!seen) out.push(v);
  }
  return out;
}
