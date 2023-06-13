const readlineSync = require("readline-sync");

let n = readlineSync.question("how much random number do you want in the array ?");

let array = []
let x = 0


function rand10(){
    let x = ((Math.random() * 10)+1);
    array.push(Math.trunc(x))
}



while (n >= 1){
    rand10(array)
    n-=1
}

function average() {
   let ave = (array.reduce((a, b) => a + b, 0)/ array.length);
   return ave;
}

function min(){
    let small = Math.min(...array);
    return small;
}

function max(){
    let big = Math.max(...array);
    return big;
}


let small = min()
let big = max()
let ave = average()


console.log("the smallest value is " + small + " the higher value is " + big + " and the average is " + ave)
console.log(array)