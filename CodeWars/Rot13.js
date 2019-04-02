/* https://www.codewars.com/kata/530e15517bc88ac656000716

ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

*/

function rot13(message){
  var res = ''
  let code1 = 0
  for (let i = 0; i < message.length; i++) {
    if (message.charAt(i).match(/[a-zA-Z]/)) {
      let code = message.charCodeAt(i)
      if ((code >= 65 && code <= 77) || (code >= 97 && code <= 109)) {
        code1 = code + 13 
      }
      if ((code >= 78 && code <= 90) || (code >= 110 && code <= 122)) {
        code1 = code - 13
      }
      res += String.fromCharCode(code1)
    } else {
      res += message.charAt(i)
    }
  }
  return res
}