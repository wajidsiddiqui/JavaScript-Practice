// for (let i = 1; i<11; i++) {
//     console.log(i);

// }

// for(let i = 1; i<21; i++) {
//     if(i%2===0){
//         console.log(i)
//     }
// }

// for (let i = 5; i<10;  i++) {
//     console.log("yes");
// }

// for (let i = 1; i<11; i++) {
//     if (i % 2 === 0){
//         console.log(`${i} -Even`);
//     }else console.log(`${i} -Odd`);
// }

// let num = +prompt("Give Number");

// if (num === 12) {
//     console.log("It is 12");
// }
// else{
//     console.log("it is not 12");
// }
//jab bhi prompt se kuch mangoge toh soncho kya wo number he agar he toh convert karna padega 
//there are three types
// parseInt
// Number
// +prompt
// let num = +prompt("Give Number");
// if(num>=0) {
//     console.log("Positive");
// }
// else{
//     console.log("Negitive");
// }
// let age = +prompt("How Old You Are");
// if (age>=18) {
//     console.log("You Can Vote");
// }
// else {
//     console.log("You Can't Vote");
// }

// let age = prompt("Enter Your Age")
// if (age >= 18) {
//     console.log("Not Eligible")
// }
// else (
//     console.log("Eligible")
// )

// let userInput = prompt("please enter your Age:");
// let age = Number(userInput); this is only works in browser

// let age  = 19;
// if (isNaN(age)) {
//     console.log("Invalid input! Please enter a valid age.");
//     }
//     else if (age <= 0) {
//         console.log("Age cannot be zero or negitive!");

//     }
//     else if (age >= 18) {
//         console.log("your age:", age, "you can vote");

//     }
//     else {
//         let yearsLeft = 18 - age;
//         console.log("you are not eligible to vote.");
//         console.log("your age:", age);
//         console.log("you need to wait", yearsLeft, "more year(s).");
//     } this works in node js
 
// // 8 ans practice multiplication table
// for (let i = 1; i <= 10; i++) {
//     console.log("5 x" + i + " = " + (5 * i));
// }

// 9. PROGRAM: Count numbers between 1 and 15 that are greater than 8
// let count = 0;
// for (let i = 1; i <= 15; i++) {
//     if (i > 8) {
//         count++;
//         console.log(i + "is greater than 8 (count so far: " + count + ")");
        
//     }else {
//         console.log(i + "is not greater than 8");
//     }
// }
// console.log("------------------------");
// console.log("total number greater than 8:", count);

// 10.  PROGRAM: Ask user for password and print access status
// let correctPassword = "admin123";

// let userPassword = prompt("enter your password:");

// if (userPassword === correctPassword) {
//     console.log("Access Granted");

// }
// else{
//     console.log("Access Denied");

// }

// // 11.  PROGRAM: Allow only 3 password attempts

// let correctPassword = "admin123"

// let isLoggedIn = false;
// for (let attempt = 1; attempt <= 3; attempt++) {
//     let userPassword = prompt("Attempt " +  attempt  + "  of 3 \nEnter Your Password:");
//     if (userPassword === correctPassword) {
//         console.log("Access Granted");
//         isLoggedIn = true;
//         break;

//     } else {
//         console.log("wrong password");
//     }
// }
// if (!isLoggedIn) {
//     console.log("Account Locked");
// }

// 12. PROGRAM: Count how many times user types "yes"

// let yesCount = 0;

// let word = "";
// while (word !== "stop") {
//     word = prompt('enter a word (type "stop" to end):');
//     if (word === "yes") {
//         yesCount++;
//         console.log('"yes" found (count so far: ' +  yesCount + ')');
//     }
// }
// console.log("-------------------------------");
// console.log('total times user typed "yes":', yesCount);

// 13.  PROGRAM: Print numbers divisible by 7 from 1 to 50

// for (let i = 1; i <=50; i++) {
//     if (i % 7 === 0) {
//         console.log(i + "is divisable by 7");

//     } else {
//         console.log(i + "is not divisable by 7");
//     }
// }
// 14.  Sum of all odd numbers from 1 to 30

// let sum = 0;
// for (let i = 1; i <= 30; i++) {
//     if (i % 2 !==0) {
//         sum += i;
//         console.log(i + "is odd (sum so far: " + sum + ")");

//     } else {
//         console.log(i + "is even");
//     }
// }
// console.log("─────────────────────────────────");
// console.log("Final Sum of Odd Numbers:", sum);


// 15.  PROGRAM: Keep asking for a number until user enters an even number

let number = 1;
while (number % 2 !== 0) {
    number = Number(prompt("enter an EVEN number:"));
    if  (number % 2 !== 0) {
        console.log(number + " is odd Try Again");

    } else {
        console.log(number +" is even");
    }
}
console.log("---------------------------");
console.log("Even number entered.program stopped.");
