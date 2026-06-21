let h1 =document.getElementById('count')
let btn1 =document.getElementById('inc')
let  btn2=document.getElementById('dec')
let  btn3=document.getElementById('res')

let count =0
btn1.addEventListener('click', ()=>{
    count++
    h1.innerHTML = count
    
})
btn2.addEventListener('click', ()=>{
        count--
        h1.innerHTML = count
    })
btn3.addEventListener('click', ()=>{
    count = 0
    h1.innerHTML = count
})
