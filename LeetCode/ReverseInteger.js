/* https://leetcode.com/problems/reverse-integer/

Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

*/

var reverse = function(x) {
  const sign = Math.sign(x)
  if (sign >= 0) {
    x = x.toString().split('').reverse()
  } else {
    x = x.toString().split('').reverse()
    x.unshift('-')
    const pop = x.pop()
  }
  const res = Number(x.join(''))
  return (res > 2147483647 || res < -2147483647) ? 0 : res
}