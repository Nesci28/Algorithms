/* https://www.codewars.com/kata/57f6051c3ff02f3b7300008b

So you've found a meeting room - phew! You arrive there ready to present, and find that someone has taken one or more of the chairs!! You need to find some quick.... check all the other meeting rooms to see if all of the chairs are in use.

Your meeting room can take up to 8 chairs. (need) will tell you how many have been taken. You need to find that many.

Find the spare chairs from the array of meeting rooms. Each meeting room array will have the number of occupants as a string. Each occupant is represented by 'X'. The room array will also have an integer telling you how many chairs there are in the room.

You should return an array of integers that shows how many chairs you take from each room in order, up until you have the required amount.

example: [['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX',2]] when you need 4 chairs:

result -- > [0, 1, 3] (no chairs free in room 0, take 1 from room 1, take 3 from room 2. No need to consider room 4 as you have your 4 chairs already.

If you need no chairs, return 'Game On'. If there aren't enough spare chairs available, return 'Not enough!'

More in this series:

The Office I - Outed
The Office II - Boredeom Score
The Office III - Broken Photocopier
The Office IV - Find a Meeting Room

*/

function meeting(x, need){
  if (need == 0) { return 'Game On' }
  var res = [], total = 0
  for (let i = 0; i < x.length; i++) {
    let chair = x[i][1] - x[i][0].length
    if (Math.sign(chair) == -1) { chair = 0 }
    if (chair <= need-total) { res.push(chair) }
    else { res.push(need-total) }
    total += chair    
    if (total >= need) { return res }
  }
  return 'Not enough!'
}