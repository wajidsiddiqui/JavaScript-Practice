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

replayBtn.addEventListener("click", matrixText);
    