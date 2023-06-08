const readlineSync = require("readline-sync");

let minAge = readlineSync.question("minimum age ?");
let maxAge = readlineSync.question("maximum age ?");

if (maxAge<minAge){
    console.log("toi t'as encore rien compris champion")
}else{
    let currentAge = readlineSync.question("How old are you ?");

if ((currentAge<maxAge)&&(currentAge>minAge)){
    console.log("j'ai pas compris ce que je dois afficher ici")
}};

