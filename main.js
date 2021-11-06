
function calc(a, b, operator) {

  const isValidOperand = (typeof a === 'number' && typeof b === 'number' && a !== null && b !== null && !isNaN(a) && !isNaN(b))
  const operations = {
    sum: a + b,
    sub: a - b,
    mult: a * b,
    div: a / b,
  }
  const isValidOperator = operator in operations;

  if (isValidOperand && isValidOperator) {
    return operations[operator]

  } else if (!isValidOperator) {
    return 'unknown operation'

  } else {
    return 'Error'
  }
  
};

console.log(calc(3, 6, 'sum'));



