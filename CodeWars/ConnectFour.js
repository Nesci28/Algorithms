/* https://www.codewars.com/kata/56882731514ec3ec3d000009

Take a look at wiki description of Connect Four game:

Wiki Connect Four

The grid is 6 row by 7 columns, those being named from A to G.

You will receive a list of strings showing the order of the pieces which dropped in columns:

alt text

  piecesPositionList = ["A_Red",
                        "B_Yellow",
                        "A_Red",
                        "B_Yellow",
                        "A_Red",
                        "B_Yellow",
                        "G_Red",
                        "B_Yellow"]
The list may contain up to 42 moves and shows the order the players are playing.

The first player who connects four items of the same color is the winner.

You should return "Yellow", "Red" or "Draw" accordingly.

*/

function chkLine(a,b,c,d) {
  return ((a != 0) && (a ==b) && (a == c) && (a == d))
}

function chkWinner(bd) {
  for (r = 0; r < 3; r++)
    for (c = 0; c < 7; c++)
      if (chkLine(bd[r][c], bd[r+1][c], bd[r+2][c], bd[r+3][c]))
        return bd[r][c]
  for (r = 0; r < 6; r++)
    for (c = 0; c < 4; c++)
      if (chkLine(bd[r][c], bd[r][c+1], bd[r][c+2], bd[r][c+3]))
        return bd[r][c]
  for (r = 0; r < 3; r++)
    for (c = 0; c < 4; c++)
      if (chkLine(bd[r][c], bd[r+1][c+1], bd[r+2][c+2], bd[r+3][c+3]))
        return bd[r][c]
  for (r = 3; r < 6; r++)
    for (c = 0; c < 4; c++)
      if (chkLine(bd[r][c], bd[r-1][c+1], bd[r-2][c+2], bd[r-3][c+3]))
        return bd[r][c]
  return 0
}

function whoIsWinner(arr){
  var board = [
  ['0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0']]

  for (let j = 0; j < arr.length; j++) {
    let col = arr[j].substr(0, 1).charCodeAt() - 65
    for (let i = 0; i < board.length; i++) {
      if (board[5-i][col] == '0') {
        let color = arr[j].substr(2)
        if (color == "Red") color = "1"
        if (color == "Yellow") color = "2"
        board[5-i][col] = color
        var winner = chkWinner(board)
        if (winner == 2) j = Infinity
        if (winner == 1) j = Infinity
        break
      }
    }
  }
  return (winner == '2') ? 'Yellow' : (winner == '1') ? 'Red' : 'Draw'
}