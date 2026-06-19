var btn = document.querySelector('button')
var main = document.querySelector('main')

var arr = [
  "Keep learning every day",
  "Practice makes progress",
  "JavaScript is fun to learn",
  "Never stop improving",
  "Small steps lead to big results"
];

btn.addEventListener('click', ()=>{
    var h1 = document.createElement('h1')
    var x = Math.random()*80
    var y = Math.random()*80
    var rot = Math.random()*360
    var scl = Math.random()*3
    var a = Math.floor(Math.random()*arr.length)
    
    h1.innerHTML = arr[a]
    h1.style.position = 'absolute'
    h1.style.top = x+ '%'
    h1.style.left = y+ '%'
    h1.style.rotate = rot+ 'deg'
    h1.style.scl = scl
    main.appendChild(h1)
    
    
})