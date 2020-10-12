var square = document.getElementById("square");

square.addEventListener("mouseenter", changeBlue );
square.addEventListener("mousedown", changeRed );
square.addEventListener("mouseup", changeYellow );
square.addEventListener("dblclick", changeGreen );
square.addEventListener("wheel", changeOrange );

function changeBlue(){
    square.style.backgroundColor = "blue"
}
function changeRed (){
    square.style.backgroundColor = "red"
}
function changeYellow(){
    square.style.backgroundColor = "yellow"
}
function changeGreen(){
    square.style.backgroundColor = "green"
}
function changeOrange(){
    square.style.backgroundColor = "orange"
}


window.addEventListener("keypress", changeOnKey)
   
function changeOnKey(e){
    console.log( e.keyCode)
    if(e.keyCode == "98"){
         square.style.backgroundColor = "blue"
    }else if(e.keyCode == "114"){
        square.style.backgroundColor = "red"
    }else if(e.keyCode == "121"){
        square.style.backgroundColor = "yellow"
    }else if(e.keyCode == "103"){
        square.style.backgroundColor = "green"
    }else if(e.keyCode == "111"){
        square.style.backgroundColor = "orange"
    }
   
}


