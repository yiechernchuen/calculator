function addition(number1, number2) {
    return Number(number1) + Number(number2);
}
function subtraction(number1, number2) {
    return number1 - number2;
}
function multiplication(number1, number2) {
    return number1 * number2;
}
function division(number1, number2) {
    return number1 / number2;
}
function operate() {
    if (operator === '+') {
        addition(number1, number2);
    } else if (operator === '-') {
        subtraction(number1, number2);
    } else if (operator === '*') {
        multiplication(number1, number2);
    } else if (operator === '/') {
        division(number1, number2);
    }
}

let number1 = '2';
let number2 = '2';
let operator = '/';
