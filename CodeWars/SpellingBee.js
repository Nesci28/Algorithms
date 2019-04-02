/* https://www.codewars.com/kata/57d6b40fbfcdc5e9280002ee

How many bees are in the beehive?
bees can be facing UP, DOWN, LEFT, or RIGHT
bees can share parts of other bees
Examples
Ex1

bee.bee     
.e..e..
.b..eeb
Answer: 5

Ex2 ``` bee.bee e.e.e.e eeb.eeb ``` *Answer: 8*
Notes
The hive may be empty or null/None/nil/...
Python: the hive is passed as a list of lists (not a list of strings)

*/

howManyBees = function(hive) {
  if (hive == "" || hive == null) { return 0 }
  let total = 0
  for (let i = 0; i < hive.length; i++) {
    for (let j = 0; j < hive[i].length; j++) {
      if (hive[i][j] == "b") {
        if (j >= 2) {
          if (hive[i][j-1] == "e" && hive[i][j-2] == "e") {
            total++
          }
        }
        if (j <= hive[i].length-2) {
          if (hive[i][j+1] == "e" && hive[i][j+2] == "e") {
            total++
          }
        }
        if (i <= hive.length-3) {
          if (hive[i+1][j] == "e" && hive[i+2][j] == "e") {
            total++
          }
        }
        if (i >= 2) {
          if (hive[i-1][j] == "e" && hive[i-2][j] == "e") {
            total++
          }
        }
      }
    }
  }
  return total
}