let rain = document.querySelector('.rain')
let spotlight = document.querySelector('.spotlight');
let matrixContent = document.querySelector('#matrix-text');
let replayBtn = document.querySelector('#replay-button');

let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*"
let originalText = matrixContent.innerText;
let iteration = 0;


    
document.addEventListener('mousemove',(e)=>{

    spotlight.style.left = e.clientX +'px'
    spotlight.style.top = e.clientY +'px'
    
});

function createRain(){
    let column = document.createElement("div");
    column.classList.add('column');
    column.innerText= 'A'
    rain.appendChild(column);
    
    
}
createRain();
function matrixText(){
    iteration=0;
        const interval = setInterval(() => {

        matrixContent.innerText = originalText
            .split("")
            .map((char, idx) => {

                if (idx < iteration) {
                    return originalText[idx];
                }

                return str[Math.floor(Math.random() * str.length)];

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
    