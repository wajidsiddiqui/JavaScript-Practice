const display = document.querySelector("#display");

const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");

let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let timer = null;

function updateDisplay(){

    let min = String(minutes).padStart(2,"0");
    let sec = String(seconds).padStart(2,"0");
    let ms = String(milliseconds).padStart(2,"0");

    display.textContent = `${min}:${sec}:${ms}`;

}

startBtn.addEventListener("click",function(){

    if(timer !== null) return;

    timer = setInterval(function(){

        milliseconds++;

        if(milliseconds === 100){
            milliseconds = 0;
            seconds++;
        }

        if(seconds === 60){
            seconds = 0;
            minutes++;
        }

        updateDisplay();

    },10);

});

stopBtn.addEventListener("click",function(){

    clearInterval(timer);
    timer = null;

});

resetBtn.addEventListener("click",function(){

    clearInterval(timer);

    timer = null;

    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    updateDisplay();

});

updateDisplay();