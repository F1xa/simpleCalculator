// const num1 = +prompt('Введите первое чило', '');
// const num2 = +prompt('Введите второе чило', '');
// const operator = prompt('Введите оператор', '');
// console.log(num1)

// function calc() {

//   const isValid = (num1 !== null && num2 !== null && !isNaN(num1) && !isNaN(num2));
//   if (isValid) {
   
//     switch (operator) {
//         case '+':
//           alert(num1 + num2);
//           break
//         case '-':
//           alert(num1 - num2);
//           break
//         case '*':
//           alert(num1 * num2);
//           break
//         case '/':
//           alert(num1 / num2);
//           break;
//         case '%':
//           alert(num1 % num2);
//           break;
//         case '**':
//           alert(num1 ** num2);
//         default:
//           alert('unknown operation');
//       }

//   } else {
//       alert('Error');
//     }
// }
  
// calc();



function calc(a, b, operator) {

  const isValid = (typeof a === 'number' && typeof b === 'number' && a !== null && b !== null && !isNaN(a) && !isNaN(b))


  if (isValid) {
    
    switch (operator) {
      case 'sum':
        return a + b
        break
      case 'sub':
        return a - b
        break
      case 'mult':
          return a * b
          break
      case 'div':
          return a / b
          break
      default:
        return 'unknown operation'
    }
  } else {
    return 'Error'
  }
};

console.log(calc(3, 5, 'sub'));

