let firstNumber = '';
let operator = '';
let secondNumber = '';
let displayValue = '0';

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return 'Error: Cannot divide by zero';
  }
  return a / b;
}

function operate(operator, a, b) {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      return 'Error: Invalid operator';
  }
}

function updateDisplay() {
  document.getElementById('display').innerText = displayValue;
}

function handleNumberPress(key) {
  if (operator === '') {
    firstNumber += key;
    displayValue = firstNumber;
  } else {
    secondNumber += key;
    displayValue = secondNumber;
  }
  updateDisplay();
}

function handleOperatorPress(key) {
  if (firstNumber !== '' && secondNumber !== '') {
    const result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
    displayValue = result.toString();
    updateDisplay();
    firstNumber = displayValue;
    secondNumber = '';
  }
  operator = key;
}

function handleEqualsPress() {
  if (firstNumber !== '' && operator !== '' && secondNumber !== '') {
    const result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
    displayValue = result.toString();
    updateDisplay();
    firstNumber = displayValue;
    operator = '';
    secondNumber = '';
  }
}

function handleClearPress() {
  firstNumber = '';
  operator = '';
  secondNumber = '';
  displayValue = '0';
  updateDisplay();
}

document.addEventListener('DOMContentLoaded', () => {
  const numberButtons = document.querySelectorAll('.number');
  const operatorButtons = document.querySelectorAll('.operator');
  const equalsButton = document.getElementById('equals');
  const clearButton = document.getElementById('clear');
  const decimalButton = document.getElementById('decimal');

  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      handleNumberPress(button.innerText);
    });
  });

  operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
      handleOperatorPress(button.innerText);
    });
  });

  equalsButton.addEventListener('click', handleEqualsPress);
  clearButton.addEventListener('click', handleClearPress);
});

document.addEventListener('keydown', (event) => {
  const key = event.key;

  if ((key >= '0' && key <= '9') || key === '.') {
    handleNumberPress(key);
  } else if (key === '+' || key === '-' || key === '*' || key === '/') {
    handleOperatorPress(key);
  } else if (key === 'Enter' || key === '=') {
    handleEqualsPress();
  } else if (key === 'Escape' || key === 'c') {
    handleClearPress();
  }
});
