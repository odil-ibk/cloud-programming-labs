try {
  {
    let x = "I am let inside block";
    console.log("Inside block (let):", x);
  }
  console.log("Outside block (let):", x);
} catch (err) {
  console.log(
    "Friendly message:",
    "Can't access 'let' variable outside its block.",
  );
}

try {
  {
    var y = "I am var inside block";
    console.log("Inside block (var):", y);
  }
  console.log("Outside block (var):", y);
} catch (err) {
  console.log("Friendly message:", err.message);
}
