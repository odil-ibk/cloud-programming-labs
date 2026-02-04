function pipeSafe(...fns) {
  return (x) => {
    let v = x;
    try {
      for (const fn of fns) v = fn(v);
      return { ok: true, value: v };
    } catch (error) {
      return { ok: false, error };
    }
  };
}
