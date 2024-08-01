//let students=["Mike","Brett","Kevin","Ryan","Emilio","Juan"];
//for(let i=0;i<=5;i+=1){
//    document.write("<p>" + students[i]+"</p>");
//}

function multiTable(){
    for(let i = 1; i<11; i++)
        console.log(i + " x 5 = " + i*5);
}

function userTimesTable(){
    var n = Number(prompt("Introduce a number to obtain its times table"));
    for (let i = 1;  i < 12; i++){
        console.log(n + " * " + i + " = " + n*i);
    }
}
//FIX THIS FUNCTION
function userTimesInput(){
    var n = Number(prompt("Introduce a number to obtain its times table"));
    var f = Number(prompt("From?"));
    var u = Number(prompt("Until?"));

    for (let i = f; i <= u; i++){
        console.log(n + " * " + i + " = " + n * i);
    }
}

//create a loop that displays the numbers from 1 to 100
//user will enter number and the screen will write "I found it" instead of
// the number
function challenge(){
    let n = Number(prompt("Choose a number from 1 to 100"));
    for (let i = 1; i<101; i++){
        if (i != n){
            console.log(i);
        }
        else{
            console.log("I found it!");
        }
    }
}

var ages = [22, 35, 20, 43, 37, 33, 51, 27];

 
function displayAges() {
    let sum = 0;
    for(let i = 0; i < ages.length; i++){
        sum += ages[i];
        console.log(ages[i] + " added to " + sum);
    }
    console.log("Total sum of ages: " + sum);
    console.log("The average is " + sum / (ages.length));
    console.table(ages);
}

// display the sum of the ages