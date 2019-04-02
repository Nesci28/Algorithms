/* https://www.codewars.com/kata/5a9a70cf5084d74ff90000f7

You are given two positive integers a and b (a < b <= 20000). Complete the function which returns a list of all those numbers in the interval [a, b) whose digits are made up of prime numbers (2, 3, 5, 7) but which are not primes themselves.

Be careful about your timing!

Good luck :)

*/

function isPrime(num) {
  var sqrtnum=Math.floor(Math.sqrt(num));
    var prime = num != 1;
    for(var i=2; i<sqrtnum+1; i++) { // sqrtnum+1
        if(num % i == 0) {
            prime = false;
            break;
        }
    }
    return prime;
}


function notPrimes(a,b){
  let res = []
  while (a < b) {
    a = a.toString()
    let loop = true
    for (let i = 0; i < a.length; i++) {
      if (a[i] != 2 && a[i] != 3 && a[i] != 5 && a[i] != 7) {
        loop = false
        break
      }
    }
    if (loop == true) {
      if (!isPrime(a)) res.push(+a)
    }
    a = Number(a) + 1
  }
  return res
}