/* https://www.codewars.com/kata/5426d7a2c2c7784365000783

Write a function which makes a list of strings representing all of the ways you can balance n pairs of parentheses

Examples
balancedParens(0) => [""]
balancedParens(1) => ["()"]
balancedParens(2) => ["()()","(())"]
balancedParens(3) => ["()()()","(())()","()(())","(()())","((()))"]

*/

function parens(left, right, str, all=[]) {
  if (left == 0) {
    str = str + ')'.repeat(right)
    all.push(str)
    return all
  } else if (right == 0) {
    return parens(left-1, right+1, str + '(')
  }
  return parens(left-1, right+1, str + '(') + parens(left, right-1, str + ')')
}

function balancedParens(n) {
  if (n == 0) return ['']
  let res = parens(n, 0, "")
  return (typeof res == 'object') ? res : res.match(new RegExp('.{1,' + n*2 + '}', 'g'));
}