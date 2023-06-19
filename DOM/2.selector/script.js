const important = document.getElementsByClassName('important');

console.log(important);

for (const val of important){
    val.setAttribute('title', 'this is an important item');
};

const img = document.getElementsByTagName('img');

for (const val of img){
    if(val.className !== "important"){
        val.style.display = "none";
}};

const para = document.getElementsByTagName('p');

function randomColor(){
    return  '#'+Math.floor(Math.random()*16777215).toString(16);
}

for (var val of para){
    if (val.className !== "" && val.className !== null){
        console.log("class : " + val.className + ";" + val.innerText)
    }else{
        console.log(val.innerText)
        val.style.color = randomColor()
    }
}



