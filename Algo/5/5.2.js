const readlineSync = require("readline-sync");


function serieTV(){
    let name = readlineSync.question('name : ')
    let year = readlineSync.question('production year : ')
    let casting = readlineSync.question('how many people in the casting ?')
    let cast = []
    for (let i = 1 ; i <= casting ; i++){
        cast.push(readlineSync.question(i+") name : "))
    }

    return{
        name: name,
        year: year,
        cast: cast
    }
}



let serie = serieTV()

function randomizeCast(serie){

    let cast = Array.from(serie.cast);

    for (let i = cast.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = cast[i];
        cast[i] = cast[j];
        cast[j] = temp;
    }



    return cast;

}

console.log(randomizeCast(serie))