/* https://www.codewars.com/kata/52774a314c2333f0a7000688

Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100

*/

function validParentheses(parens){
  let res = 0
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] == '(') { 
      res += 1 
    } else { 
      res -= 1
      if (res < 0) {
        return false
      }
    }
  }
  return (res == 0) ? true : false
}