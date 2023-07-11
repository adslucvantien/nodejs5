const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/calculate', (req, res) => {
  const { num1, num2 } = req.body;

  const resultAdd = add(Number(num1), Number(num2));
  const resultSubtract = subtract(Number(num1), Number(num2));
  const resultMultiply = multiply(Number(num1), Number(num2));
  const resultDivide = divide(Number(num1), Number(num2));

  res.send(`
    <h1>Calculator Results:</h1>
    <p>Addition: ${resultAdd}</p>
    <p>Subtraction: ${resultSubtract}</p>
    <p>Multiplication: ${resultMultiply}</p>
    <p>Division: ${resultDivide}</p>
  `);
});

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
