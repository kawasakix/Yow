



function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomOperator() {
  let operators = ["+", "-", "*", "/"];
  return operators[Math.floor(Math.random() * operators.length)];
}

function calculateAnswer(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "operator topil";
  }
}

function quiz() {
  let num1 = generateRandomNumber(1, 100);
  let num2 = generateRandomNumber(1, 100);
  let operator = generateRandomOperator();
  let answer = calculateAnswer(num1, num2, operator);

  let userAnswer = prompt(`Misolni yeching: ${num1} ${operator} ${num2} = ?`);

  if (parseInt(userAnswer) === answer) {
    alert(`Sizning javobingiz ${userAnswer} - Tog'ri! Tog'ri javob: ${answer}`);
  } else {
    alert(`Sizning javobingiz ${userAnswer} Noto'g'ri! To'g'ri javob: ${answer}`);
  }
}

let count = parseInt(prompt("Ishlamoqchi bo'lgan misollar sonini kiriting:"));

for (let i = 0; i < count; i++) {
  quiz();
}
