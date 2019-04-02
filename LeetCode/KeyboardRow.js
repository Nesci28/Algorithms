/* https://leetcode.com/problems/keyboard-row/

Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.

 



 
Example:

Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]
 

Note:

You may use one character in the keyboard more than once.
You may assume the input string will only contain letters of alphabet.

*/

var findWords = function(words) {
  const res = []
  words.forEach(word => {
    const wordSet = new Set()
    for (let letter of word.toLowerCase()) {
      wordSet.add(letter.replace(letter, obj[letter]))
    }
    if (wordSet.size == 1) res.push(word)
  })
  return res
};

const obj = {
  q: 1, w: 1, e: 1, r: 1, t: 1, y: 1, u: 1, i: 1, o: 1, p: 1,
  a: 2, s: 2, d: 2, f: 2, g: 2, h: 2, j: 2, k: 2, l: 2,
  z: 3, x: 3, c: 3, v: 3, b: 3, n: 3, m: 3
}