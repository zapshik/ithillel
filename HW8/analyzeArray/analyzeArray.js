const numbers = [1, 2, 3, 4, 5];

let sumNumbers = numbers.reduce(function(acc, num){
    return acc + num;
}, 0);
console.log(sumNumbers);

let averageNumbers = sumNumbers / numbers.length;

console.log(averageNumbers);

let minNumber = numbers.reduce(function(acc, min){
    return numbers.acc < numbers.min ? min : acc;
});
console.log(minNumber);

let maxNumber = numbers.reduce(function(acc, max){
    return numbers.max < numbers.acc ? acc : max;
});
console.log(maxNumber);

console.log(`Сума чисел в масиві: ${sumNumbers}, середнє: ${averageNumbers}, мінімальне: ${minNumber}, максимальне: ${maxNumber}`);