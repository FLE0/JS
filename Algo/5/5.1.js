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

serieTV()