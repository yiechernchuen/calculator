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
        if (!number2 || number2 === '0' || number2 === '0.') {
            clear();
            display2.textContent = 'ERROR';
            return;
        }
        displayOutputValue = division(number1, number2);
    } else {
        return;
    }
    displayOutputValue = (Math.round(displayOutputValue * 100) / 100).toString();
    display1.textContent = '';
    display2.textContent = displayOutputValue;
    operatorClicked = false;
    equalClicked = true;
    decimalClicked = false;
    number1HasDecimal = false;
    number2HasDecimal = false;
    number1 = displayOutputValue;
    number2 = '';
    operator = '';
}
function remove() {
    if (number1 && operator && number2) {
        number2 = number2.slice(0, -1);
        number2HasDecimal = number2.includes('.');
        display2.textContent = number2;
        if (!number2 || number2 === '0') {
            number2 = '';
            display2.textContent = '0';
        }
    } else if (number1 && !operator && !equalClicked) {
        number1 = number1.slice(0, -1);
        number1HasDecimal = number1.includes('.');
        display2.textContent = number1;
        if (!number1 || number1 === '0') {
            number1 = '';
            display2.textContent = '0';
        }
    }
}
function clear() {
    number1 = '';
    number2 = '';
    operator = '';
    displayOutputValue = '0';
    operatorClicked = false;
    equalClicked = false;
    decimalClicked = false;
    number1HasDecimal = false;
    number2HasDecimal = false;
    display1.textContent = '';
    display2.textContent = displayOutputValue;
}

function decimal() {
    const number1Func = () => {
        display2.textContent = number1;
        number1HasDecimal = true;
    };
    const number2Func = () => {
        display1.textContent = `${number1} ${operator}`;
        display2.textContent = number2;
        number2HasDecimal = true;
    };
    decimalClicked = true;
    if (!number1 && !operatorClicked) {
        number1 = '0.';
        number1Func();
    } else if (number1 && !operatorClicked && !number1HasDecimal) {
        number1 += '.';
        number1Func();
    }
    if (!number2 && operatorClicked) {
        number2 = '0.';
        number2Func();
    } else if (number2 && operatorClicked && !number2HasDecimal) {
        number2 += '.';
        number2Func();
    }
    if (equalClicked) {
        clear();
        number1 = '0.';
        number1Func();
    }
}

let number1 = '';
let number2 = '';
let operator = '';
let displayOutputValue = '0';

const display1 = document.querySelector('.display1');
const display2 = document.querySelector('.display2');
const buttonDigits = document.querySelectorAll('.digits');
const buttonOperator = document.querySelectorAll('.operator');
const buttonDelete = document.querySelector('.delete');
const buttonClear = document.querySelector('.clear');
const buttonDecimal = document.querySelector('.decimal');
const buttonEqual = document.querySelector('.equal');

display2.textContent = displayOutputValue;

let operatorClicked = false;
let equalClicked = false;
let decimalClicked = false;
let number1HasDecimal = false;
let number2HasDecimal = false;

buttonDigits.forEach((digit1) => {
    digit1.addEventListener('click', (e) => {
        if (!(operatorClicked || equalClicked)) {
            number1 += e.target.innerText;
            if (number1 === '0') {
                number1 = '';
                display2.textContent = '0';
            } else {
                display2.textContent = number1;
            }
        }
        if (equalClicked && !number1HasDecimal) {
            clear();
            number1 += e.target.innerText;
            display2.textContent = number1;
        }
        if (equalClicked && number1HasDecimal) {
            number1 += e.target.innerText;
        }
    });
});
buttonOperator.forEach((buttonOperator) => {
    buttonOperator.addEventListener('click', (e) => {
        if (number1 && number2) operate();
        if (display2.textContent === 'ERROR') return;
        if (number1 === '') number1 = '0';
        equalClicked = false;
        decimalClicked = false;
        operatorClicked = true;
        operator = e.target.innerText;
        display1.textContent = `${number1} ${operator}`;
        display2.textContent = '0';
    });
});

buttonDigits.forEach((digit2) => {
    digit2.addEventListener('click', (e) => {
        if (operatorClicked) {
            number2 += e.target.innerText;
            if (number2 === '0') {
                number2 = '';
                display2.textContent = '0';
            } else {
                display1.textContent = `${number1} ${operator}`;
                display2.textContent = number2;
            }
        }
    });
});

buttonEqual.addEventListener('click', operate);
buttonDelete.addEventListener('click', remove);
buttonClear.addEventListener('click', clear);
buttonDecimal.addEventListener('click', decimal);
