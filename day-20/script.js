var img = document.querySelector('img')
var like = document.querySelector('i')

img.addEventListener('dblclick',()=>{
    like.style.opacity = 1;
    setTimeout(()=>{

        like.style.opacity = 0;
    }, 1000)
        
    
    
    
    
})