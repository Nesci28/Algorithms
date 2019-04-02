/* https://www.codewars.com/kata/5262119038c0985a5b00029f

Is Prime
Define a function isPrime/is_prime() that takes one integer argument and returns true/True or false/False depending on if the integer is a prime.

Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

Example
bool isPrime(5) = return true
mov edi, 1
call is_prime    ; EAX <- 0 (false)

mov edi, 2
call is_prime    ; EAX <- 1 (true)

mov edi, -1
call is_prime    ; EAX <- 0 (false)
Assumptions
You can assume you will be given an integer input.
You can not assume that the integer will be only positive. You may be given negative numbers as well (or 0).

*/

function isPrime(num) {
  if (num <= 1) {
    return false
  } else if (num == 2 || num == 3) {
    return true
  } else if (num % 2 == 0 || num % 3 == 0) {
    return false
  }
  let i = 5
  while (i * i <= num) {
    if (num % i == 0 || num % (i+2) == 0) {
      return false
    }
    i++
  }
  return true
}