const readlineSync = require("readline-sync");

let x = readlineSync.question("How old are you ?");

if(x>17){
    console.log("you are an adult")
} else{
    console.log("you are not yet an adult")
};