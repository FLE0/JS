const readlineSync = require("readline-sync");


function calcsurface() {
let width = readlineSync.question("what's the width of your rectangle ?");
let length = readlineSync.question("what's the length of your rectangle ?");
console.log(width*length)
}

calcsurface();

/*calcsurface permet de messurer la surface d'un rectangle apres lui avoir fournis
longeur et largeur la fonction ressortira la surface du rectangle*/