export default function(first, second, operator) {
  switch (operator) {
    case '=': return first == second; break
    case '!=': return first != second; break
    case '>': return first > second; break
    case '>=': return first >= second; break
    case '<': return first < second; break
    case '<=': return first <= second; break
  }

  throw Error('Unknown operator: ' + operator)
}