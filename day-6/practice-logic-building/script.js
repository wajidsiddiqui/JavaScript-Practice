// var num = -5
// if (num > 0) {
//     console.log("Positive");
    
// }else {
// console.log("negitive");

// }

// var marks = 85
// if (marks >= 35) {
//     console.log('paas');

    
// }else{
//     console.log('fail');
    
// // }
// var marks = 85
// if(marks >= 90) {
//     console.log('A Grade');
    
// }else if(marks >= 75) {
//     console.log('B grade'); 

    
// }
// else if(marks >= 35) {
//     console.log("c Grade");
    
// }
// else {
//     console.log('Fail ');
    
// }

// var num = 0
// if (num > 0){
//     console.log('positive');

    
// }else if(num < 0){
//     console.log('negative');
    
// }else {
//     console.log('Zero');
    
// }

// var age = 20;
// var hasID = true
// if (age >= 18 && hasID){
//     console.log('entry allowed');
    
// }else{
//     console.log('denied');
    
// }

// var amount = 6000;
// var isMember = true;
// if (amount >= 5000 && isMember ){
//     console.log('Discount applied');

    
// }else{
//     console.log('no discount');
    
// }

// let isAdmin = false;
// let isOwner = true;
// if (isAdmin || isOwner) {
//     console.log('access Granted');
    
// }else{
//     console.log('denied');
    
// }

// let age = 22;
// let hasLicense = true;
// if (age >= 18 && hasLicense){
//     console.log('can drive');
    
// }else{
//     console.log('cant drive');
    
// }

// var marks = 85
// if(marks >= 90) {
//     console.log('A');
    
// }else if(marks >= 75) {
//     console.log('B '); 

    
// }
// else if(marks >= 35) {
//     console.log("c Grade");
    
// }
// else {
//     console.log('Fail ');
    
// }

// let username = "admin";
// let password = "1234";
// if (username === 'admin' && password === '1234'){
//     console.log('Login Success');
    
// }
// else{
//     console.log('Login Failed');
    
// }
// let isLoggedIn = true;
// let isPremium = false;
// if (isLoggedIn || isPremium ){
//     console.log("Access Video");
    
// }else{
//     console.log('Noo Access');
    
// }

// let i = 1;
// for(let i = 1 ; i<6; i++) {
//     console.log('i');
    
// }
// let i = 0;
// for (i = 5 ; i > 0; i--) {
//     console.log(i);
    
// }
// let i = 10;
// for(let i = 2; i < 11  ; i+=2){
//     console.log(i);
    
// }

// for (i = 1; i < 21; i++){
//     if(i % 3 === 0 && i % 5 ===0){
//         console.log('fizzbuzz');}
//     else if(i % 3 === 0 ){
//     console.log('fizz');
//     }
//     else if(i % 5 ===0){
//         console.log('buzz');
        
//     }
        
//     else{
//         console.log(i);
        
//     }

// }
// let arr = [10, 20, 30, 40, 50];
// for(let i = arr.length - 1; i >= 0; i--){
//     console.log(arr[i]);
    
// }

// let arr = [10, 20, 30, 40, 50];
// let sum = 0;
// for(let i = 0; i  < arr.length ; i++){
//     sum = sum + arr[i]
    
    
// }
// console.log(sum);

// let arr = [10, 20, 30, 40, 50];
// let max = arr[0]
// for(i = 1; i < arr.length; i++){


//     if(arr[i] > max){
//         max = arr[i];
        
        
//     }
// }

// console.log(max);


// let arr = [40, 5, 90, 12, 1];
// let min = arr[0]
// for (i = 1; i < arr.length; i++)
    
//     if (arr[i] < min) {
//         min = arr[i]
//     }
//     console.log(min);
    
// let arr = [10, 20, 30, 40, 50];
// let count = 0;
// for (let i = 0; i < arr.length; i++ ) {
//     count++
    
    

// }
// console.log(count);
// let arr = [10, 25, 30, 45, 50,60,8];
// let count = 0;
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] % 2 === 0) {
//         count++
//     }

// }
// console.log(count);

// let arr = [10, 25, 30, 45, 50];
// let total = 0
// for (let i = 1; i < arr.length; i++){
//     if (arr[i] % 2 === 1) {
//         total = total + arr[i]
//     }

// }
// console.log(total);


// let arr = [10, 25, 30, 45, 50];
// let found = false;
// for (let i = 0; i < arr.length; i++){

//     if(arr[i] === 30){
//         console.log("found");
//         break;
            
    
        
//     }
        
    
// }

// let arr = [10, 25, 30, 45, 50];
// let count = 0;
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] % 2 === 1) {
//         count++;
//     }

// }
// console.log(count);





// NESTED LOOP

// for (let i = 1; i <= 5; i++){
//     let str = "";
//     for(let j = 1; j <= i; j++ ){
//         str = str + "*"
//     }
//     console.log(str);
// }

// for (let i = 1; i <= 5; i++){
//     let str = "";
//     for(let j = 1; j <= 5; j++ ){
//         str = str + i
//     }
//     console.log(str);
// }

// for (let i = 1; i <= 5; i++){
//     let str = "";

//     for(let j = 1; j <= 5; j++ ){
//         str = str + j;
//     }

//     console.log(str);
// }

// for (let i = 1; i <= 5; i++){
//     let str = "";
//     for(let j = 1; j <= i; j++ ){
//         str = str + i
//     }
//     console.log(str);
// }


    
// for(let i = 5; i >= 1; i--){
//     let str = ""
//     for(let j = 1; j <= i; j++){
//         str = str + j
//     }
//     console.log(str);
    
// }

// for (let i = 1 ; i <= 5; i++){           //         i = row number
//     str = ""                             //         j = the number you want print in the row
//     for(let j = 5; j >= i; j--){
//         str = str + j
//     }
//     console.log(str);   
    
// }

