function validate(sum, validator) {
    return function (...args) {
        if (!args.every(validator)) {
            console.log('Помилка: число від/ємне');
        }
        return sum(...args);
    };
}

function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

function isPositive(num) {
    return num > 0;
}

const validatedSum = validate(sum, isPositive);

console.log(validatedSum(5, 10, 15));
console.log(validatedSum(1, 2, 3, 4));
console.log(validatedSum(-2, 4, 5));