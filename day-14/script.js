let bookInput = document.querySelector("#bookName");
let authorInput = document.querySelector("#authorName");

let addBtn = document.querySelector("#addBook");

let library = document.querySelector("#library");

let count = document.querySelector("#count");

let totalBooks = 0;

addBtn.addEventListener("click",function(){

    if(bookInput.value.trim()=="" || authorInput.value.trim()==""){

        alert("Please fill all fields");

        return;

    }

    let bookCard = document.createElement("div");
    bookCard.classList.add("book");

    let title = document.createElement("h2");
    title.textContent = bookInput.value;

    let author = document.createElement("p");
    author.textContent = "Author : " + authorInput.value;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete");

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(deleteBtn);

    library.appendChild(bookCard);

    totalBooks++;

    count.textContent = totalBooks;

    bookInput.value="";
    authorInput.value="";

    deleteBtn.addEventListener("click",function(){

        bookCard.remove();

        totalBooks--;

        count.textContent = totalBooks;

    });

});