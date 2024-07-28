
function ctf(){
    var c = prompt("Introduce degrees in celsius");
    if (isNaN(c)){
        alert("Not a number, try again.");
    }
    else{
        var fahrenheit = (c * (9/5)) + 32;
        alert("The temperature in F is " + fahrenheit + " degrees.");
    }

    if (c >= 40){
        document.getElementById('message').textContent = "It's hot outside, be sure to stay hydrated!🔥";  
        document.getElementById('emo1').textContent = "🔥";
        document.getElementById('emo2').textContent = "🥵";
        document.getElementById('emo3').textContent = "🌵";
        document.getElementById('temperature').textContent = fahrenheit + "F";

    }
    else if (c <= 10){
        document.getElementById('message').textContent = "Get your coat! It's chilly outside!❄️";
        document.getElementById('emo1').textContent = "❄️";
        document.getElementById('emo2').textContent = "🥶";
        document.getElementById('emo3').textContent = "☃️";
        document.getElementById('temperature').textContent = fahrenheit + "F";
    }
    else if (c > 10 || c < 40){
        document.getElementById('message').textContent = "Enjoy the weather! 🌈"; 
        document.getElementById('emo1').textContent = "🤸🏻‍♀️";
        document.getElementById('emo2').textContent = "😊";
        document.getElementById('emo3').textContent = "🌼"; 
        document.getElementById('temperature').textContent = fahrenheit + "F";
    }
    else{
        document.getElementById('message').textContent = "Beep Bop. Enter valid data 🤖";
        document.getElementById('temperature').textContent = "404";
    }
}
