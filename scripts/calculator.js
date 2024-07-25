
var numberA, numberB, operation;

function readNumbers() {
    var numA = prompt("Introduce Number A");
    var numB = prompt("Introduce Number B");

    numberA = parseFloat(numA);
    numberB = parseFloat(numB);

    verifyInput();
}

function verifyInput() {
    if (isNaN(numberA) || isNaN(numberB)) {
        alert("Please enter valid numbers!");
        return;
    } else {
        readOperation();
    }
}

function readOperation() {
    operation = prompt("Options: 1. Addition 2. Subtraction 3. Division 4. Multiplication");

    if (operation == '1') {
        alert("The commutative property applies to addition, it is not necessary to choose an order");
        document.write("The sum of " + numberA + " and " + numberB + " is " + (numberA + numberB));
    } else if (operation == '2') {
        var order = prompt("1 To subtract A from B. 2 To subtract B from A");
        switch(order) {
            case '1':
                document.write(numberB + " Minus " + numberA + " = " + (numberB - numberA));
                break;
            case '2':
                document.write(numberA + " Minus " + numberB + " = " + (numberA - numberB));
                break;
            default:
                alert("Option out of scope, execute the script again and try not being so mean.");
        }
    } else if (operation == '3') {
        var order = prompt("1 to perform A / B. 2 to perform B / A");
        switch(order) {
            case '1':
                if (numberB != 0) {
                    document.write(numberA + " / " + numberB + " = " + (numberA / numberB));
                } else {
                    alert("You seriously tried an invalid division? FATAL PROGRAM ERROR DELETE COMPUTER END DIE RUN FIRE RED");
                }
                break;
            case '2':
                if (numberA != 0) {
                    document.write(numberB +" / " + numberA + " = " (numberB / numberA));
                } else {
                    alert("You seriously tried an invalid division? FATAL PROGRAM ERROR DELETE COMPUTER END DIE RUN FIRE RED");
                }
                break;
            default:
                alert("Invalid input sir. Refresh to try again.");
        }
    } else if (operation == '4') {
        alert("The commutative property applies to multiplication, it is not necessary to choose an order");
        document.write("The multiplication of " + numberA + " and " + numberB + " is " + (numberA * numberB));
    } else {
        alert("Invalid operation. Refresh to try again.");
    }
}

function startCalculator() {
    readNumbers();
}

