const readlineSync = require("readline-sync");

let x = readlineSync.question("give me a first integer");
let y = readlineSync.question("give me a seconde integer")
console.log(Math.trunc(x/y));