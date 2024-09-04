window.onload = function() {
    setTimeout(function() {
        document.getElementById('loading-screen').style.opacity = '0';
        setTimeout(function() {
            document.getElementById('loading-screen').style.display = 'none';
            document.getElementById('calculator').style.opacity = '1';
        }, 500);
    }, 1000); // Loading screen shows for 2 seconds
};

let equation = document.getElementById('equation');
let result = document.getElementById('result');
let currentOperation = '';
let currentNumber = '';

function appendNumber(number) {
    currentNumber += number;
    equation.value += number;
}

function clearDisplay() {
    currentOperation = '';
    currentNumber = '';
    equation.value = '';
    result.value = '';
}

function deleteLast() {
    if (equation.value.length > 0) {
        equation.value = equation.value.slice(0, -1);
        currentNumber = currentNumber.slice(0, -1);
    }
}

function performOperation(operation) {
    if (currentNumber === '' && operation !== '-') return;
    if (currentOperation !== '') {
        calculate();
    }
    currentOperation = operation;
    equation.value += ` ${operation} `;
    currentNumber = '';
}

function calculate() {
    try {
        let expression = equation.value.replace('×', '*').replace('÷', '/');
        let calcResult = eval(expression);
        result.value = calcResult;
    } catch (error) {
        result.value = 'Error';
    }
}