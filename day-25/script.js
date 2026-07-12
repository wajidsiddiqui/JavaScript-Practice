

class Student {
    constructor(name, rollNo, marks) {
        this.name = name;
        this.rollNo = rollNo;
        this.marks = marks;
    }

    introduce() {
        console.log(`Hi, I am ${this.name} (Roll No: ${this.rollNo})`);
    }

    showResult() {
        if (this.marks >= 35) {
            console.log("Result: Pass");
        } else {
            console.log("Result: Fail");
        }
    }

    grade() {
        if (this.marks >= 90) {
            console.log("Grade: A+");
        } else if (this.marks >= 75) {
            console.log("Grade: A");
        } else if (this.marks >= 60) {
            console.log("Grade: B");
        } else if (this.marks >= 35) {
            console.log("Grade: C");
        } else {
            console.log("Grade: F");
        }
    }
}

const student1 = new Student("Rahul", 101, 92);
const student2 = new Student("Ali", 102, 68);
const student3 = new Student("Sara", 103, 48);
const student4 = new Student("John", 104, 25);

student1.introduce();
student1.showResult();
student1.grade();

console.log("--------------------");

student2.introduce();
student2.showResult();
student2.grade();

console.log("--------------------");

student3.introduce();
student3.showResult();
student3.grade();

console.log("--------------------");

student4.introduce();
student4.showResult();
student4.grade();





































// PRACTICE

// const  user ={
// name: 'ans',
// email:'aghsdn@n',
// login(){
// console.log("user logged in");

// }
// }
// user.login();

// class User {
//     constructor(name,email) {
//         this.name=name;
//         this.email=email;
//     }
//     login(){
//         console.log(`${this.name} logged in`);
        
//     }
// }
// let user1 = new User('Abs','ajf@jnds')
// let user2 = new User('Aadscbs','fdasf@jnds')
// let user3 = new User('scas','svs@jnds')
// let user4 = new User('AbADF','vdvd@jnds')
// let user5 = new User('NJCKLC','vds@jnds')

// user5.login();

// const Product = {
//     name: 'curlz',
//     price: 50,
//     discount(value){
//         return this.price - (this.price*value)/100;

        
        
//     }
// }
// console.log(Product.discount(20));


// class Car {
//     constructor(brand,speed){
//         this.brand = brand;
//         this.speed = speed;

//     }
//     drive(){
//         console.log(`${this.brand} driving at ${this.speed} km/h`);
        
//     }
// }

// let car1 = new Car("BMW",240);
// let car2 = new Car("Audi",140);

// car1.drive();
// car2.drive();
// car1.speed = 300;

// console.log(car1.speed);
// console.log(car2.speed);


// class Student {
//     constructor(name,rollNo){
//         this.name =name;
//         this.rollNo=rollNo;

//     }
//     introduce(){
//         console.log(`Hi, I am ${this.name} and my roll number is ${this.rollNo}`);
        
//     }
// }

// let std1 = new Student('Rahul',101);
// let std2 = new Student('Rahil',102);
// std1.introduce();
// std2.introduce();

// const person = {
//     name : 'ahcs',

//     showNormal() {
//         console.log(this);
//     },
//     showArrow: () => {
//         console.log(this);
//     }
// }
// person.showNormal();
// person.showArrow();



