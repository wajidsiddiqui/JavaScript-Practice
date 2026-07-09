let rain = document.querySelector('.rain')
let spotlight = document.querySelector('.spotlight');
let matrixContent = document.querySelector('#matrix-text');
let replayBtn = document.querySelector('#replay-button');

let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*"
let originalText = matrixContent.innerText;
let iteration = 0;
let totalColumns = 40;

    
document.addEventListener('mousemove',(e)=>{

    spotlight.style.left = e.clientX +'px'
    spotlight.style.top = e.clientY +'px'
    
});

function randomCharacter(){
    return str[Math.floor(Math.random() *str.length)];
    
}

function createRain(i){
    let column = document.createElement("div");
    column.classList.add('column');

    let characters = "";

    for (let j = 0; j<50 ;j++){
        characters += randomCharacter() + "\n";
    }

    column.innerText= characters
    column.style.left = i * 20 +'px'
    column.style.top = '0px'
    
    rain.appendChild(column);

    let topPosition = 0;
    setInterval(()=>{
        topPosition += 5;
        column.style.top =topPosition + "px"
    }, Math.random() *150 + 50)
    
    
}
for (let i =0; i < totalColumns; i++) {
    
    createRain(i);
}



function matrixText(){
    iteration=0;
        const interval = setInterval(() => {

        matrixContent.innerText = originalText
            .split("")
            .map((char, idx) => {

                if (idx < iteration) {
                    return originalText[idx];
                }

                return randomCharacter()

            })
            .join("");
    iteration += 0.5;
    if (iteration >= originalText.length) {
            clearInterval(interval);
            matrixContent.innerText = originalText;
        }

    }, 100);
    

}

matrixText();

// document.addEventListener("mousemove", matrixText);
replayBtn.addEventListener("click", matrixText);
    