const user = { name: "Ala", tags: [] };

user.tags.push("js");
user.tags.push("basics");

console.log(user);

try {
  user = {};
} catch (err) {
  console.log(err.message);
}
