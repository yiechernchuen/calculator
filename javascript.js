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
        displayOutputValue = addition(number1, number2);
    } else if (operator === '-') {
        displayOutputValue = subtraction(number1, number2);
    } else if (operator === '*') {
        displayOutputValue = multiplication(number1, number2);
    } else if (operator === '/') {
        displayOutputValue = division(number1, number2);
    }
    display.textContent = displayOutputValue;
    operatorClicked = false;
    equalClicked = true;
    number1 = displayOutputValue;
    number2 = '';
    operator = '';
}

let number1 = '';
let number2 = '';
let operator = '';
let displayOutputValue = '0';

const display = document.querySelector('.display');
const buttonDigits = document.querySelectorAll('.digits');
const buttonOperator = document.querySelectorAll('.operator');
const buttonDelete = document.querySelector('.delete');
const buttonClear = document.querySelector('.clear');
const buttonDecimal = document.querySelector('.decimal');
const buttonEqual = document.querySelector('.equal');

let operatorClicked = false;
let equalClicked = false;

buttonDigits.forEach((digit1) => {
    digit1.addEventListener('click', (e) => {
        if (!(operatorClicked || equalClicked)) {
            number1 += e.target.innerText;
            display.textContent = number1;
        }
    });
});

buttonDigits.forEach((digit2) => {
    digit2.addEventListener('click', (e) => {
        if (operatorClicked) {
            number2 += e.target.innerText;
            display.textContent = `${number1} ${operator} ${number2}`;
        }
    });
});

buttonOperator.forEach((buttonOperator) => {
    buttonOperator.addEventListener('click', (e) => {
        operatorClicked = true;
        operator = e.target.innerText;
        display.textContent = `${number1} ${operator}`;
    });
});

buttonEqual.addEventListener('click', operate);
