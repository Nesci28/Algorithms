/* https://leetcode.com/problems/shortest-distance-to-a-character/

Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.

Example 1:

Input: S = "loveleetcode", C = 'e'
Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
 

Note:

S string length is in [1, 10000].
C is a single character, and guaranteed to be in string S.
All letters in S and C are lowercase.

*/

function helper(S, C, i, back = Infinity, front = Infinity) {
  for (let j = i; j >= 0; j--) {
    if (S[j] == C) {
      back = i - j
      break
    }
  }
  for (j = i; j < S.length; j++) {
    if (S[j] == C) {
      front = j - i
      break
    }
  }
  return Math.min(back, front)
}

var shortestToChar = function(S, C) {
  const positions = []
  for (let i = 0; i < S.length; i++) {
    if (S[i] == C) {
      positions.push(0)
      continue
    } else {
      positions.push(helper(S, C, i))
    }
  }
  return positions
};