/* https://leetcode.com/problems/hamming-distance/

The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.

Example:

Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.

*/

function dec2bin(dec){
  return (dec >>> 0).toString(2);
}

var hammingDistance = function(x, y) {
  let xBin = dec2bin(x)
  let yBin = dec2bin(y)
  xBin = '0'.repeat(32 - xBin.length) + xBin
  yBin = '0'.repeat(32 - yBin.length) + yBin
  let counter = 0
  for (let i = 0; i < 32; i++) {
    if (xBin[i] !== yBin[i]) counter++
  }
  return counter
}