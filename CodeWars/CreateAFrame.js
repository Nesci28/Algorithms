/* https://www.codewars.com/kata/5672f4e3404d0609ec00000a

*************************
*  Create a frame!      *
*           __     __   *
*          /  \~~~/  \  *
*    ,----(     ..    ) *
*   /      \__     __/  *
*  /|         (\  |(    *
* ^  \  /___\  /\ |     *
*    |__|   |__|-..     *
*************************
Given an array of strings and a character to be used as border, output the frame with the content inside.

Notes:

Always keep a space between the input string and the left and right borders.
The biggest string inside the array should always fit in the frame.
The input array is never empty.
Example
frame(['Create', 'a', 'frame'], '+')

Output:

++++++++++
+ Create +
+ a      +
+ frame  +
++++++++++

*/ 

function frame(text, char, maxLength = 0, str = '') {
  for (let i = 0; i < text.length; i++) {
    if (text[i].length > maxLength) maxLength = text[i].length
  }
  for (i = 0; i < text.length; i++) {
    str += char + ' ' + text[i] + ' '.repeat(maxLength-text[i].length+1) + char + '\n'
  }
  return char.repeat(maxLength+4)+'\n' + str + char.repeat(maxLength+4)
}