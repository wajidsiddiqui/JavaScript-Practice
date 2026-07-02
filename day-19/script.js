var keys = document.querySelectorAll('.key')
var sound = new Audio();


var keyMap ={
    a:"c",
    s:"d",
    d:"e",
    f:"f",
    g:"g",
    h:"a",
    j:"b"

}

keys.forEach((key)=>{
    key.addEventListener('click',()=>{
        var note = key.dataset.note

        sound.src=`Sounds/${note}.mp3`
        sound.play();
        

    })
});

    document.addEventListener('keydown',(e)=>{
        var note = keyMap[e.key];
        sound.src=`Sounds/${note}.mp3`
        sound.play();
    })
