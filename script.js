const inputDisplay = document.getElementById('input-display');
const resultDisplay = document.getElementById('result-display');

// Append button value to input
function append(value) {
  inputDisplay.innerText += value;
}

// Clear both input and result
function clearDisplay() {
  inputDisplay.innerText = '';
  resultDisplay.innerText = '';
}

// Delete last character from input
function deleteLast() {
  inputDisplay.innerText = inputDisplay.innerText.slice(0, -1);
}

// Calculate and show result
function calculate() {
  try {
    let expr = inputDisplay.innerText;

    // Replace symbols with JavaScript-compatible Math functions
    expr = expr
      .replace(/π/g, 'Math.PI')
      .replace(/e/g, 'Math.E')
      .replace(/√/g, 'Math.sqrt')
      .replace(/abs/g, 'Math.abs')
      .replace(/log/g, 'Math.log10')
      .replace(/ln/g, 'Math.log')
      .replace(/sin/g, 'Math.sin')
      .replace(/cos/g, 'Math.cos')
      .replace(/tan/g, 'Math.tan')
      .replace(/asin/g, 'Math.asin')
      .replace(/acos/g, 'Math.acos')
      .replace(/atan/g, 'Math.atan')
      .replace(/\^/g, '**')
      .replace(/%/g, '/100');

    // Evaluate expression
    const result = eval(expr);

    // Check for invalid output
    if (isNaN(result) || result === Infinity || result === -Infinity) {
      resultDisplay.innerText = 'Math Error';
    } else {
      resultDisplay.innerText = result;
    }
  } catch (error) {
    resultDisplay.innerText = 'Syntax Error';
  }
}function sayNazish() {
  resultDisplay.innerText = "Hello from Nazish!";
}


