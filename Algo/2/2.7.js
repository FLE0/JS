const readlineSync = require("readline-sync");

let n = readlineSync.question("give a value to n");

let total = 0;

for (var i = 0; i < n; i++) {
    let number = readlineSync.questionInt("give me a number");
    (total += number);
  }

console.log(total);