var h5 = document.querySelector('h5')
var btn = document.querySelector('button')

btn.addEventListener('click',()=>{
    if(h5.textContent == "Stranger"){
        h5.textContent = "Friends"
        btn.textContent = "Remove"
        h5.style.color = "green"

        
    }else{
        h5.textContent = "Stranger"
        btn.textContent = "Add Friend"
        h5.style.color = "Crimson"


    }
})