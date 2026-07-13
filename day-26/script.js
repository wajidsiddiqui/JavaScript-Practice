class Student {

    constructor(name, rollNo, marks){
        this.name = name;
        this.rollNo = rollNo;
        this.marks = marks;
    }

    result(){

        if(this.marks >= 35){
            return "Pass";
        }

        return "Fail";
    }

    grade(){

        if(this.marks >= 90) return "A+";
        if(this.marks >= 75) return "A";
        if(this.marks >= 60) return "B";
        if(this.marks >= 35) return "C";

        return "F";
    }

}

let addBtn = document.querySelector("#addBtn");
let studentList = document.querySelector("#studentList");

let total = document.querySelector("#total");
let pass = document.querySelector("#pass");
let fail = document.querySelector("#fail");

let totalStudents = 0;
let passStudents = 0;
let failStudents = 0;

addBtn.addEventListener("click",()=>{

    let name = document.querySelector("#name").value;
    let roll = document.querySelector("#roll").value;
    let marks = Number(document.querySelector("#marks").value);

    if(name==="" || roll==="" || marks===""){
        alert("Fill all fields");
        return;
    }

    let student = new Student(name,roll,marks);

    let card = document.createElement("div");
    card.classList.add("card");

    if(student.result()==="Fail"){
        card.classList.add("fail");
    }

    card.innerHTML=`

        <h3>${student.name}</h3>

        <p><b>Roll No:</b> ${student.rollNo}</p>

        <p><b>Marks:</b> ${student.marks}</p>

        <p><b>Grade:</b> ${student.grade()}</p>

        <p><b>Result:</b> ${student.result()}</p>

        <button>Delete</button>

    `;

    studentList.appendChild(card);

    totalStudents++;

    if(student.result()==="Pass"){
        passStudents++;
    }else{
        failStudents++;
    }

    total.innerText = totalStudents;
    pass.innerText = passStudents;
    fail.innerText = failStudents;

    card.querySelector("button").addEventListener("click",()=>{

        card.remove();

        totalStudents--;

        if(student.result()==="Pass"){
            passStudents--;
        }else{
            failStudents--;
        }

        total.innerText = totalStudents;
        pass.innerText = passStudents;
        fail.innerText = failStudents;

    });

    document.querySelector("#name").value="";
    document.querySelector("#roll").value="";
    document.querySelector("#marks").value="";

});