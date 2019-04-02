/* https://www.codewars.com/kata/55c04b4cc56a697bb0000048

Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered
Input strings s1 and s2 are null terminated.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False

*/

function scramble(str1, str2) {
  let object = {}
  for (let i = 0; i < str1.length; i++) {
    object[str1[i]] = ++object[str1[i]] || 1
  }
  for (i = 0; i < str2.length; i++) {
    if (object[str2[i]]) {
      object[str2[i]]--
    } else {
      return false
    }
  }
  return true
}