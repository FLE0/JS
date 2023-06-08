const readlineSync = require("readline-sync");

let name = readlineSync.question("what's your name ?");
let firstname = readlineSync.question("what's your firstname ?");
let city = readlineSync.question("where do you live ?");

console.log ('Your name is ' + name +' ' + firstname + ' ' + 'and you live in ' + city)