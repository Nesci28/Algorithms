/* https://www.codewars.com/kata/576757b1df89ecf5bd00073b

Build Tower
Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

Python: return a list;
JavaScript: returns an Array;
C#: returns a string[];
PHP: returns an array;
C++: returns a vector<string>;
Haskell: returns a [String];
Ruby: returns an Array;
Have fun!

for example, a tower of 3 floors looks like below

[
  '  *  ', 
  ' *** ', 
  '*****'
]
and a tower of 6 floors looks like below

[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
]
Go challenge Build Tower Advanced once you have finished this :)

*/

function towerBuilder(nFloors) {
  let arr = []
  for (let i = 0; i < nFloors; i++) {
    if (i != nFloors - 1) {
      let maxSpace = ((nFloors+(Math.ceil(nFloors-(i+(i+1)))))/2)
      arr.push(' '.repeat(maxSpace) + '*'.repeat(i+(i+1)) + ' '.repeat(maxSpace))
    } else {
      arr.push('*'.repeat(i+(i+1)))
    }
  }
  return arr
}