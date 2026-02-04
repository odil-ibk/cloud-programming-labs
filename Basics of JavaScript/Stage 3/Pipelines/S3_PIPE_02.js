function compose(...fns) {
  return (x) => {
    let v = x;
    for (let i = fns.length - 1; i >= 0; i--) v = fns[i](v);
    return v;
  };
}
