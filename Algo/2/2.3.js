

let i = 1;


function loop(){
  while (i <= 100) {
   if(i%2 == 0){
    console.log(i);
   }
   i += 1;
  }
}

loop();
loop();

for (let i = 1; i <= 100; i += 1) {
    if (i%2 == 0){
        console.log(i)
    }
  };