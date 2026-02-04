function shippingCost(weightKg, isMember) {
  let cost = null;

  if (weightKg < 1) cost = 10;
  else if (weightKg <= 5) cost = 20;
  else cost = 30;

  if (isMember) cost *= 0.8;

  return cost;
}
