let box = document.querySelector("#box");
let btn = document.querySelector("button");

function randomColor(){

    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);

    return `rgb(${r},${g},${b})`;
}

btn.addEventListener("click",function(){

    box.style.backgroundColor = randomColor();

});

box.addEventListener("mouseenter",function(){

    box.style.transform = "scale(1.1)";

});

box.addEventListener("mouseleave",function(){

    box.style.transform = "scale(1)";

});

box.addEventListener("dblclick",function(){

    box.style.backgroundColor = "red";

});