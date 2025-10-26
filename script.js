let emailAddress = document.querySelector(".email-address")
let emailAlert = document.querySelector(".email-alert")
let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let submitBtn = document.querySelector(".submit")
submitBtn.disabled = true;
emailAddress.addEventListener("blur", function () {
    let value = emailAddress.value
    if (value == "") {
        emailAlert.innerHTML = "Email Address is required."
        emailAddress.classList.add("border", "border-danger")
       
    }
    else if (pattern.test(emailAddress.value) == false) {
        emailAlert.innerHTML = "Email address is invalid"
        
    }
    else {
        emailAlert.innerHTML = ""
        emailAddress.classList.remove("border", "border-danger")
        submitBtn.disabled = false;
    }
})
let navLinks = document.querySelectorAll(".nav-link")

for (let index = 0; index < navLinks.length; index++) {
    navLinks[index].addEventListener("click" , function(){
  for (let j = 0; j < navLinks.length; j++) {
        navLinks[j].classList.remove("active")
    }
   
     navLinks[index].classList.add("active")
    })
  
}

//nameed function
// function sayHi(name){
//     console.log("say hi" , name);
// }
// sayHi("mohamed")

//annoynmus function
// let sayHi = function(name){
//     console.log("say hi" , name);
// }
// sayHi("ahmed")

//arrow function
let sayHi = name => console.log("say hi" , name);
sayHi("dina")

// setTimeout(() =>{
//     console.log(1);
// }, 5000
// )
// setTimeout(() =>{
//     console.log(2);
// }, 10000
// )
// setTimeout(() =>{
//     console.log(3);
// }, 2000
// )
// setTimeout(() =>{
//     console.log(4);
// }, 1000
// )

// setInterval(() => {
//     console.log(1);
    
// }, 5000);
// setInterval(() => {
//     console.log(2);
    
// }, 10000);
// setInterval(() => {
//     console.log(3);
    
// }, 2000);
// setInterval(() => {
//     console.log(4);
    
// }, 1000);