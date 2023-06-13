function rand10(){
    let x = ((Math.random() * 10)+1);
    console.log(x)
}

rand10()


function rand10integer(){
    let x = ((Math.random() * 10)+1);
    console.log(Math.trunc(x))
}

rand10integer()

/*rand10 is using Math.random() to generate a random number 
*10 tell it to get the random number between 0 and 10
+1 tell it to get the random number between 1 and 10
rand10integer act the exact same way but we added a Math.trunc()
to it to get an integer*/