const readlineSync = require("readline-sync");

let n = readlineSync.question("how much random number do you want in the array ?");

function rand10(){
    let x = ((Math.random() * 10)+1);
    console.log(x)
}


while (n >= 1){
rand10()
n-=1
}

/*
the rand10() function is add inside a while loop that replay as much time you ask it to run
*/