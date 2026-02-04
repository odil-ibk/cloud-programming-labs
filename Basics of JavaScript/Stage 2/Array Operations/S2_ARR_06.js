function activeNames(users) {
  const names = [];
  for (const u of users) {
    if (u && u.active) names.push(String(u.name).toUpperCase());
  }
  names.sort();
  return names;
}
