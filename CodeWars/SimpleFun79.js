/* https://www.codewars.com/kata/5894318275f2c75695000146

Task
Given an integer n, find the maximal number you can obtain by deleting exactly one digit of the given number.

Example
For n = 152, the output should be 52;

For n = 1001, the output should be 101.

Input/Output
[input] integer n

Constraints: 10 ≤ n ≤ 1000000.

[output] an integer

*/

function deleteDigit(n) {
  let res = 0
  n = n + ''
  for (let i = 0; i < n.length; i++) {
    let str = n.substr(0, i) + n.substr(i+1)
    if (str > res) {
      res = str
    }
  }
  return +res
}