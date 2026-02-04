function pipe(...fns) {
  return (x) => {
    let v = x;
    for (const fn of fns) v = fn(v);
    return v;
  };
}
