var noteDiv = document.getElementById('notes')
var inp = document.getElementById('noteInput')
var btn  = document.getElementById('addBtn')


btn.addEventListener('click', ()=>{
    let noteText = noteInput.value
    if(noteText == ""){
        return
    }
    let newDiv = document.createElement('div')
    newDiv.textContent = noteText
    noteDiv.appendChild(newDiv)
    let delbtn = document.createElement('button')
    delbtn.textContent = "X"
    newDiv.appendChild(delbtn)

    
    delbtn.addEventListener('click',()=>{
        
        newDiv.remove()
        
    })
    noteInput.value = ""

})