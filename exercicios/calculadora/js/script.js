var number_1 = null;
var number_2 = null;
var operation = null;
var displayHistoric = document.getElementById("displayHistoric")
var displayResult = document.getElementById("displayResult")

function setNumbers(number) {
    if (operation === null) {
        if (number_1 === null) {
            number_1 = number;
        } else {
            number_1 += number;
        }
        displayResult.innerText = number_1;
    }else {
        if (number_2 === null) {
            number_2 = number;
        } else {
            number_2 += number;
        }
        displayResult.innerText = `${number_1} ${operation} ${number_2}`;
    }
}

function setOperation(op) {
    if (number_1 !== null) {
        if (operation === null) {
            operation = op;
            displayResult.innerText = `${number_1} ${operation}`;
        }else if (number_2 !== null) {
            result = calculate(internalCalculate=true);
            number_1 = result;
            operation = op;
            displayResult.innerText = `${number_1} ${operation}`;
        }
    }
}

function calculate(internalCalculate=false) {
    if (number_1!== null && number_2!== null && operation!== null) {
        float_number_1 = Number(number_1);
        float_number_2 = Number(number_2);

        let result = null;
        switch (operation) {
            case "+":
                result = float_number_1 + float_number_2;
                break;
            case "-":
                result = float_number_1 - float_number_2;
                break;
            case "*":
                result = float_number_1 * float_number_2;
                break;
            case "/":
                result = float_number_1 / float_number_2;
                break;
        }

        displayResult.innerText = result;
        displayHistoric.innerText = `${number_1} ${operation} ${number_2} = ${result}`;
        number_1 = result;
        number_2 = null;
        operation = null;

        if (internalCalculate){
            return result;
        }
    }
}

function clearDisplay() {
    displayHistoric.innerText = '0';
    displayResult.innerText = '0';
    number_1 = null;
    number_2 = null;
    operation = null;
}