
var img = document.querySelector('img')
var like = document.querySelector('i')
var likeTimer;

img.addEventListener('dblclick',()=>{
    like.style.opacity = 1;
    like.style.transform = "translate(-50%, -50%) scale(1)"

    clearTimeout(likeTimer); 

    likeTimer = setTimeout(()=>{
        like.style.opacity = 0;
        like.style.transform = "translate(-50%, -50%) scale(0)"
    }, 1000)
})