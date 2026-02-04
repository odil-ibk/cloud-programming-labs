var myVar = "hello";
let myLet = 123;
const myConst = true;

console.table([
  { name: "myVar", value: myVar, typeof: typeof myVar },
  { name: "myLet", value: myLet, typeof: typeof myLet },
  { name: "myConst", value: myConst, typeof: typeof myConst },
]);
