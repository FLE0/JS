let firstInput = document.getElementsByTagName('input')[0];

firstInput.addEventListener('keyup',event=>{

    if(event.key !== "Shift" && event.key !== "Control" && event.key !== "Alt" && event.key !== "AltGraph" && event.key !== "Backspace" && event.key !== "Enter" && event.key !== "Meta") {
        document.getElementById("display-firstname").append(document.createTextNode(event.key));
    }

});


let secondInput = document.getElementsByTagName('input')[1];











let select = document.getElementById("toggle-darkmode");

select.addEventListener('change', event=>{

    if(select.selectedIndex === 0 ){
        document.body.style.color = "white";
        document.body.style.backgroundColor = "black";
    }else{
        document.body.style.color = "black";
        document.body.style.backgroundColor = "white";
    }
});