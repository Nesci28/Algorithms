/* https://www.codewars.com/kata/583d704a70407fcb43000443

Alfred Pennyworth has created a robot to drop off Batman's leotards at the launderette, however he needs some help coding the robot's path-finding function through Gotham city.

The city of Gotham is layed out in a perfect one km by one km grid and is navigated by series' of north, east, south, and west (n, e, s ,w) commands, additionally there are two launderettes for the robot to choose from. Unfortunately, the robot can sometimes get lost.

Write a function that returns true if the robot's path will take it to a laundrette and false if the path does not.

Launderette location 1: e, n, e, e, n. Launderette location 2: w, n, w, n, w, w, n.

*/

function pathFinding(path, robot = [0, 0]) {
  for (let i in path) {
    if (path[i] == 'w') robot[0] -= 1
    if (path[i] == 'e') robot[0] += 1  
    if (path[i] == 's') robot[1] -= 1
    if (path[i] == 'n') robot[1] += 1
  }
  return robot.toString() == '3,2' || robot.toString() == '-4,3'
}