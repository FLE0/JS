const readlineSync = require("readline-sync");

let x = readlineSync.question("give me a first decimal number");
let y = readlineSync.question("give me a seconde decimal number")
console.log(Math.trunc(x)*y);
