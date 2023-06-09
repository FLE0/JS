const readlineSync = require("readline-sync");

let x = readlineSync.question("give me a number between 1 and 7");

if(x==1){
    console.log("lundi")
} else if (x==2){
    console.log("mardi")
}else if (x==3){
    console.log("mercredi")
}else if (x==4){
    console.log("jeudi")
}else if (x==5){
    console.log("vendredi")
}else if (x==6){
    console.log("samedi")
}else if (x==7){
    console.log("dimanche")
}else {
    console.log("toi t'as encore tout compris champion")
}
