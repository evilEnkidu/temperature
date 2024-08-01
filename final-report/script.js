function readTempRange(){
	var startingValue = parseFloat(prompt("Introduce a starting temperature"));
	var endValue = parseFloat(prompt("Introduce an ending value"));
	var scale = prompt("Introduce a scale, F for Fahrenheit, C for Celsius");
	validate(startingValue, endValue, scale);
}


function validate(startingValue, endValue, scale){
	if ((isNaN(startingValue) || isNaN(endValue)) || (scale !== "F" && scale !== "C")){
		alert("Invalid data, please try again.");
		return false;
		}
	else{
		convertTemperatureRange(startingValue, endValue, scale)
		return true;
	}
}


    function convertTemperatureRange(startingValue, endValue, scale) {
    let result = '';
    if (scale === 'F') {
        if (startingValue < endValue) {
            for (let i = startingValue; i <= endValue; i++) {
                result += `${i} degrees F equals ${parseFloat((i - 32) * 5 / 9).toFixed(2)} degrees C.\n`;
            }
        } else {
            for (let i = startingValue; i >= endValue; i--) {
                result += `${i} degrees F equals ${parseFloat((i - 32) * 5 / 9).toFixed(.2)} degrees C.\n`;
            }
        }
    } else if (scale === 'C') {
        if (startingValue < endValue) {
            for (let i = startingValue; i <= endValue; i++) {
                result += `${i} degrees C equals ${(i * 9 / 5) + 32} degrees F.\n`;
            }
        } else {
            for (let i = startingValue; i >= endValue; i--) {
                result += `${i} degrees C equals ${(i * 9 / 5) + 32} degrees F.\n`;
            }
     }
    } else {
        alert("Unexpected error while processing data. Double check your input and try again.");
    }
    document.getElementById('results').textContent = result;
}
