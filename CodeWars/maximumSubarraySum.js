 /* https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c
 
 The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
 
 */

function maxSequence(arr) {
  // Could be a lot simpler, but i decided to push the indexes limit of the subarray too 
  if (arr.length == 0 || arr.filter(num => num > 0).length == 0) return 0
  if (arr[0] > 0 || arr[0] > arr[1]) start = 0
  else if (arr[0] < arr[1]) start = 1
  let pair = [0, 0, arr[start]]
  for (let i = start; i < arr.length; i++) {
    if (arr[i] > pair[2]) pair = [i, 0, arr[i]]
    let res = arr[i]
    for (let j = i + 1; j < arr.length; j++) {
      res = res + arr[j]
      if (res > pair[2]) pair = [i, j, res]
    }
  }
  return pair[2]
}