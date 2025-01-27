let numbers = [3, 14, 90, 22, 11, 1, 67, 2, 3];
let primeNumbers = [];

function isPrime(num) {
    for (let i = 2; num > i; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  }

primeNumbers.push(numbers.filter(isPrime));


console.log(numbers);
console.log(primeNumbers);