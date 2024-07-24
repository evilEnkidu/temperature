function addNumbers{
    // read numbers

    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;

    // convert the values to numbers

    var number1 = parseFloat(num1);
    var number2 = parseFloat(num2);
    
    // Check if inputs are valid

    if (isNaN(number1) || isNaN(number2)) {
        document.getElementById('result').textContent = "PLEASE ENTER VALID NUMBERS!";
        
        return;
    }

    var result;

    // Perform operation

    switch(operation){
        case 'add':
            result = number1 + number2;
            break;
        case 'subtract':
            result = number1 - number2;
            break;
        case 'multiply':
            result = number1 * number2;
            break;
        case 'divide':
            if (number === 0) {
                document.getElementById('result').textContet = "CANNOT DIVIDE BY ZERO!"
                return;
            }
            result = number1 / number2;
            break;

        default:
            result = "UNKNOWN OPERATOR!";
    }

    // display result
    document.getElementById('result').textContent = "Result: " + result;
}