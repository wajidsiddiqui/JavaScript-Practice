const text = document.getElementById("text");
const characters = document.getElementById("characters");
const words = document.getElementById("words");
const spaces = document.getElementById("spaces");
const clearBtn = document.getElementById("clear");

text.addEventListener("input", () => {
    const value = text.value;

    characters.textContent = value.length;
    spaces.textContent = (value.match(/ /g) || []).length;

    const wordArray = value.trim().split(/\s+/);
    words.textContent = value.trim() === "" ? 0 : wordArray.length;
});

clearBtn.addEventListener("click", () => {
    text.value = "";
    characters.textContent = 0;
    words.textContent = 0;
    spaces.textContent = 0;
});


































































































// function User(name) {
//     this.name = name;
    
// }
// const user1 = new User("Abdul Wajid")

// console.log(user1);

// function User(name){
//     this.name = name
    
// }
// User.prototype.login = function() {//
//         console.log(`${this.name} logged in`);
        
//     }
// const user1 = new User("abs")
// const user2 = new User("abrf")

// user1.login();
// user2.login();

// console.log(user1.login == user2.login);


// function greet(){
//     console.log(`Hello ${this.name}`);
    
// }
// const user ={
//     name:"Abdul wajid"
// }
// greet.call(user)    //call()-->Run this function immediately and decide yourself what this should be.

// function introduce(city,email){
//     console.log(`Hi, I'm ${this.name} from ${city}and my mail is ${email}`);
    
// }
// const user1 ={
//     name:"Abdul Wajid",
    
// };
// const user2 = {
//     name:"Vamzi",
    
// };
// introduce.call(user1,"Hydrabd","fdomk@d")
// introduce.call(user2,"Kamareddy","fhdn@fj")


// function introduce(city,role){
    
//     console.log(`Hello iam ${this.name},${role} from ${city}`);
    
// }
// const user = {
//     name:"abdul wajid"
// };
// const details =[
//     "Hydrabad",
//     "Developer"
// ];

// introduce.apply(user,details)