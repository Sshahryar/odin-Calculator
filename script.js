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

document.querySelectorAll('.number').forEach(button => {
  button.addEventListener('click', () => {
    if (operator === '') {
      firstNumber += button.innerText;
      displayValue = firstNumber;
    } else {
      secondNumber += button.innerText;
      displayValue = secondNumber;
    }
    updateDisplay();
  });
});

document.querySelectorAll('.operator').forEach(button => {
  button.addEventListener('click', () => {
    if (firstNumber !== '' && secondNumber !== '') {
      const result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
      displayValue = result.toString();
      updateDisplay();
      firstNumber = displayValue;
      secondNumber = '';
    }
    operator = button.innerText;
  });
});

document.getElementById('equals').addEventListener('click', () => {
  if (firstNumber !== '' && operator !== '' && secondNumber !== '') {
    const result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
    displayValue = result.toString();
    updateDisplay();
    firstNumber = displayValue;
    operator = '';
    secondNumber = '';
  }
});

document.getElementById('clear').addEventListener('click', () => {
  firstNumber = '';
  operator = '';
  secondNumber = '';
  displayValue = '0';
  updateDisplay();
});




