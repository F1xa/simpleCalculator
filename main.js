const num1 = +prompt('Введите первое чило', '');
const num2 = +prompt('Введите второе чило', '');
const operator = prompt('Введите оператор', '');


function calc() {
  if (num1 != null && num2 != null && num1 != '' && num2 != '' && !isNaN(num1) && !isNaN(num2)) {

    if (operator === '+' || operator === '-' || operator === '*' || operator === '/' || operator === '%' || operator === '**') {
      switch (operator) {
        case '+':
          alert(num1 + num2);
          break
        case '-':
          alert(num1 - num2);
          break
        case '*':
          alert(num1 * num2);
          break
        case '/':
          alert(num1 / num2);
          break;
        case '%':
          alert(num1 % num2);
          break;
        case '**':
          alert(num1 ** num2);
      }
    } else {
      alert('unknown operation');
    }

  } else {
    alert('Error');
  }
  
}

calc();