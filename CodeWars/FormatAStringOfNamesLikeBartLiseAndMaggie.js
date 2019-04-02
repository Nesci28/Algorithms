/* https://www.codewars.com/kata/53368a47e38700bd8300030d

Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

*/

function list(names){
  var arr = []
  for (var key in names) {
    arr.push(names[key].name)
  }
  arr = arr.filter(function(el) { return el; })
  return (arr.length > 1) ? arr.slice(0, -1).join(', ') + ' & ' + arr.slice(-1) : arr.join(' ')
}