const readline = require('readline-sync');

function askFavoriteNumber() {
  let favoriteNumber = readline.question("What is your favorite number? ");

  if (Number(favoriteNumber) != 42) {
    console.log("Are you sure?");
    askFavoriteNumber();
  }
}
askFavoriteNumber()