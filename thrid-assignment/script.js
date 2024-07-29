var temperature, option, result;

function getUserOption(){
    temperature = parseFloat(prompt("Introduce temperature"));
    document.getElementById("message").textContent = "F to C : 1. C to F : 2";
    option = Number(prompt("1 to convert Fahrenheit to Celsius. 2 to convert Celsius to Fahrenheit."));
    dataValidation(temperature, option);
}

function dataValidation(temperature, option){
    if (isNaN(temperature) || (option !== 1 && option !== 2)){
        alert("Invalid data, please try again.");
        return false;
    }
    else{
        convert(temperature, option);
        return true;
    }
}

function convert(temperature, option){
    if (option === 1){    
        result = (temperature - 32) * 5/9;
        alert(temperature + "F " + "Equals to " + result + "C");
        document.getElementById("tempF").textContent = temperature + "°F";
        document.getElementById("tempC").textContent = result + "°C";
    }
    else if (option === 2){
        result = (temperature * 9/5) + 32;
        alert(temperature + "C " + "Equals to " + result + "°F");
        document.getElementById("tempF").textContent = temperature + "°C";
        document.getElementById("tempC").textContent = result + "°F";
    }
    else{
        alert("Invalid option.");
    }
}
