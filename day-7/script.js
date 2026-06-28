// var btn = document.querySelector('button')
// var h1 = document.querySelector('h1')

// btn.addEventListener('click', ()=>{
//     h1.innerHTML = "Assalamualaikum Abdul"
    
// })
// var arr = ['Assalamualaikum Abdul','Kaise ho Abdul?', 'JavaScript Seekh Rahe Ho','JavaScript Seekh Rahe Ho', 'DOM Mazedaar Hai']
// var btn = document.querySelector('button')
// var h1 = document.querySelector('h1')
// var index = 0
// btn.addEventListener('click',()=>{
//     h1.innerHTML = arr[index++]
//     if (index >= arr.length){
//         index = 0
//     }
    
    
// })
// var inp = document.querySelector('input')
// var btn = document.querySelector('button')
// var h1 = document.querySelector('h1')
// btn.addEventListener('click', ()=>{
//     var a = inp.value
//     h1.innerHTML = a
// })
// var btn = document.querySelector('button')
// var inp = document.querySelector('input')
// var h1 = document.querySelector('h1')
// btn.addEventListener('click', ()=>{
//     if(inp.value >= 18){
//         h1.innerHTML = 'Eligible'
        
//     }else{
//         h1.innerHTML = 'Not Eligible'
//     }
// })

var btn = document.querySelector('button')
var inp = document.querySelector('input')
var h1 = document.querySelector('h1')

btn.addEventListener('click',()=>{
    
    var str = ''
    if(inp.value !== ''){
        str = "welcome "+ inp.value

        h1.innerHTML = str
        console.log(str);
    }
    
    
})