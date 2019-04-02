/* https://www.codewars.com/kata/54da5a58ea159efa38000836

Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

*/

function findOdd(A) {
  var counts = {};
  A.forEach(function(x) { 
    (counts[x] = (counts[x] || 0)+1 )
  })
  for (var key in counts) {
    if (counts[key] % 2 !== 0) {
      return Number(key)
    }
  }  
}