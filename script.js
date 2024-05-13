let displayValue = '';

function appendToDisplay(value) {
  if (value === '00' && displayValue === '') {
    // Prevent adding '00' as the first input
    return;
  }
  displayValue += value;
  document.getElementById('calcu').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('calcu').value = '';
}

function backspace() {
  displayValue = displayValue.slice(0, -1);
  document.getElementById('calcu').value = displayValue;
}

function calculate() {
  try {
    const result = eval(displayValue);
    document.getElementById('calcu').value = result;
    displayValue = '';
  } catch (error) {
    document.getElementById('calcu').value = 'Error';
    displayValue = '';
  }
}
