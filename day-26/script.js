class Student {
    constructor(name, rollNo, marks) {
        this.name = name;
        this.rollNo = rollNo;
        this.marks = marks;
    }

    result() {
        return this.marks >= 35 ? "Pass" : "Fail";
    }

    grade() {
        if (this.marks >= 90) return "A+";
        if (this.marks >= 75) return "A";
        if (this.marks >= 60) return "B";
        if (this.marks >= 35) return "C";
        return "F";
    }
}

class StudentManager {
    constructor() {
        this.addBtn = document.querySelector("#addBtn");
        this.studentList = document.querySelector("#studentList");

        this.total = document.querySelector("#total");
        this.pass = document.querySelector("#pass");
        this.fail = document.querySelector("#fail");

        this.totalStudents = 0;
        this.passStudents = 0;
        this.failStudents = 0;

        // bind() used here
        this.addBtn.addEventListener("click", this.addStudent.bind(this));
    }

    addStudent() {
        let name = document.querySelector("#name").value;
        let roll = document.querySelector("#roll").value;
        let marks = Number(document.querySelector("#marks").value);

        if (name === "" || roll === "" || isNaN(marks)) {
            alert("Fill all fields");
            return;
        }

        let student = new Student(name, roll, marks);

        let card = document.createElement("div");
        card.classList.add("card");

        if (student.result() === "Fail") {
            card.classList.add("fail");
        }

        card.innerHTML = `
            <h3>${student.name}</h3>
            <p><b>Roll No:</b> ${student.rollNo}</p>
            <p><b>Marks:</b> ${student.marks}</p>
            <p><b>Grade:</b> ${student.grade()}</p>
            <p><b>Result:</b> ${student.result()}</p>
            <button>Delete</button>
        `;

        this.studentList.appendChild(card);

        this.totalStudents++;

        if (student.result() === "Pass") {
            this.passStudents++;
        } else {
            this.failStudents++;
        }

        this.updateStats();

        card.querySelector("button").addEventListener(
            "click",
            this.deleteStudent.bind(this, card, student)
        );

        document.querySelector("#name").value = "";
        document.querySelector("#roll").value = "";
        document.querySelector("#marks").value = "";
    }

    deleteStudent(card, student) {
        card.remove();

        this.totalStudents--;

        if (student.result() === "Pass") {
            this.passStudents--;
        } else {
            this.failStudents--;
        }

        this.updateStats();
    }

    updateStats() {
        this.total.innerText = this.totalStudents;
        this.pass.innerText = this.passStudents;
        this.fail.innerText = this.failStudents;
    }
}

new StudentManager();