let firstNumber = '';
let operator = '';
let secondNumber = '';

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

function updateDisplay(value) {
  document.getElementById('display').innerText = value;
}

document.querySelectorAll('.number').forEach(button => {
  button.addEventListener('click', () => {
    if (operator === '') {
      firstNumber += button.innerText;
      updateDisplay(firstNumber);
    } else {
      secondNumber += button.innerText;
      updateDisplay(secondNumber);
    }
  });
});

document.querySelectorAll('.operator').forEach(button => {
  button.addEventListener('click', () => {
    if (firstNumber !== '' && secondNumber !== '') {
      const result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
      updateDisplay(result);
      firstNumber = result.toString();
      secondNumber = '';
    }
    operator = button.innerText;
  });
});

document.getElementById('equals').addEventListener('click', () => {
  if (firstNumber !== '' && operator !== '' && secondNumber !== '') {
    const result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
    updateDisplay(result);
    firstNumber = result.toString();
    operator = '';
    secondNumber = '';
  }
});

document.getElementById('clear').addEventListener('click', () => {
  firstNumber = '';
  operator = '';
  secondNumber = '';
  updateDisplay('0');
});

function updateDisplay(value) {
  document.getElementById('display').innerText = value || '0';
}

