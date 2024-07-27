function practice(){
    console.log("Practice");
    let num1 = 20;
    let num2 = 20;
    if (num1 > num2){
        console.log("num1 greater than num2")
    }
    else if (num1 < num2){
        console.log("Num2 greater than Num1");
    }
    else{
        console.log("Both numbers are equal");
    }
}


var age;
function driverLicense() {
    age = prompt("Introduce your age!");
    if (age >= 18) {
        alert("You can get your driving license");
    }
    else if (age < 18) {
        alert("Sorry, you are too young");
    }
    else {
        alert("Invalid or empty character");
    }
}



function guessGame(){
    var randomNumber = Math.floor((Math.random() * 10) + 1);
    var userNumber = prompt("Guess the secret magical number, from 1 to 10");
    if (userNumber == randomNumber){
        alert("You guessed it! You've earned my respect");
    }
    else {
        alert("You failed!, it was " + randomNumber);
    }
}

let admin = "admin";
let pass = "123";

function login(){
    let userName = prompt("Username: ");
    let password = prompt("Password: ");

    if (admin == userName && password == pass){
        document.getElementById("results").innerHTML="Welcome ADMIN"
    }
    else{
        document.getElementById("results").innerHTML="Wrong username or password."
    }
}