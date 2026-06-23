var tasksDiv = document.getElementById('tasks')

var btn = document.getElementById('addBtn')
var inp = document.getElementById('taskInput')

btn.addEventListener('click', ()=>{
    let taskInput = inp.value
    if (taskInput == ""){
        return
    }
    let newdiv = document.createElement('div')
    let delBtn= document.createElement('button')
    newdiv.textContent = taskInput
    delBtn.textContent = "   X"
    newdiv.appendChild(delBtn)
    tasksDiv.appendChild(newdiv)

    delBtn.addEventListener('click', ()=>{
        newdiv.remove()
    })
    inp.value = ""
    

})