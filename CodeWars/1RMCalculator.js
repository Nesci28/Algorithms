/* https://www.codewars.com/kata/595bbea8a930ac0b91000130

You just got done with your set at the gym, and you are wondering how much weight you could lift if you did a single repetition. Thankfully, a few scholars have devised formulas for this purpose (from Wikipedia) :

Epley
<img src = 'https://wikimedia.org/api/rest_v1/media/math/render/svg/8a11c0ddd9121131f0996525ad49a03e8c7c2036'style="background-color:white">

McGlothin
<img src = 'https://wikimedia.org/api/rest_v1/media/math/render/svg/6996fd95bbce27d65b5ce8e5ff8c5f9400fc7aa5'style="background-color:white">

Lombardi
<img src = 'https://wikimedia.org/api/rest_v1/media/math/render/svg/19ab85455deba90d4cd83477d31d83ca302bd9e3'style="background-color:white">

Your function will receive a weight w and a number of repetitions r and must return your projected one repetition maximum. Since you are not sure which formula to use and you are feeling confident, your function will return the largest value from the three formulas shown above, rounded to the nearest integer. However, if the number of repetitions passed in is 1 (i.e., it is already a one rep max), your function must return w. Also, if the number of repetitions passed in is 0 (i.e., no repetitions were completed), your function must return 0.

*/

function calc(w, r, arr = []){
  arr.push(Math.round(w*(1+(r/30))))
  arr.push(Math.round(100*w/(101.3-2.67123*r)))
  arr.push(Math.round(w*r**0.10))
  return Math.max(...arr)
}
function calculate1RM(w, r){
  return (r == 1) ? w : (r == 0) ? 0 : calc(w, r)
}