var ta = document.getElementById('textInput')
var cp = document.getElementById('count')

ta.addEventListener('input',()=>{
    let textArea = ta.value
    
    cp.textContent = textArea.length
    
    if(textArea.length > 100){
        
        cp.style.color = 'red'

    }
    else{
        cp.style.color = 'white'
    }
cp.textContent = `Characters: ${textArea.length} / 100`
})