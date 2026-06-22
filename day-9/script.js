var btn = document.querySelector('button')
var main = document.querySelector('main')

btn.addEventListener("click", ()=>{
    let div = document.createElement('div')
    let c1 = Math.floor(Math.random()*256)
    let c2 = Math.floor(Math.random()*256)
    let c3 = Math.floor(Math.random()*256)
    let x = Math.random()*80
    let y = Math.random()*80
    
    main.appendChild(div)
    let color = `rgb(${c1},${c2},${c3})`

    div.style.width = '100px'
    div.style.height ='100px'

    div.style.position ='absolute'
    div.style.top = x + "%"
    div.style.left = y + "%"
    
    div.style.backgroundColor = color
    // div.innerHTML = color   **if you want the color code then use this**
})