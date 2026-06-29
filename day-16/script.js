let textarea = document.querySelector("textarea");
let char = document.querySelector("#char");
let word = document.querySelector("#word");

textarea.addEventListener("input", function(){

let text = textarea.value;

char.textContent = text.length;

let words = text.trim();

if(words === ""){
word.textContent = 0;
}
else{
word.textContent = words.split(/\s+/).length;
}

if(text.length === 200){
textarea.style.borderColor = "red";
}
else{
textarea.style.borderColor = "#ccc";
}

});