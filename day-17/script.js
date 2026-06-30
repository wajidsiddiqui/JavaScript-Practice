const btn = document.querySelector("button");
const box = document.querySelector("#box");
const color = document.querySelector("#color");

btn.addEventListener("click", () => {

    const letters = "0123456789ABCDEF";

    let hex = "#";

    for(let i=0;i<6;i++){
        hex += letters[Math.floor(Math.random()*16)];
    }

    box.style.background = hex;
    color.textContent = hex;

});