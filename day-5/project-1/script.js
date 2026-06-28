let inc =  document.querySelector('#inc')
let dec =  document.querySelector('#dec')
let h2 =  document.querySelector('h2')
var a = 0
inc.addEventListener('click', function(){
    a++
    h2.innerHTML = a
    console.log(a);
    
})
dec.addEventListener('click', function(){
    a--
    h2.innerHTML = a
    console.log(a);
})