export default function(first, second, operator) {
  switch (operator) {
    case '=': return first == second;
    case '!=': return first != second;
    case '>': return first > second;
    case '>=': return first >= second;
    case '<': return first < second;
    case '<=': return first <= second;
  }

  throw Error('Unknown operator: ' + operator)
}