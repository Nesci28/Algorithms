/* https://www.codewars.com/kata/520b9d2ad5c005041100000f

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/

function pigIt(str){
  var res = []
  str.split(' ').map((x, i) => {
    var temp = x.split('')
    temp = temp.concat(temp.splice(0,1))
    if (/^[a-zA-Z]+$/.test(x)) { temp.push("a", "y") }
    res.push(temp.join(''))
  })
  return res.join(' ')
}