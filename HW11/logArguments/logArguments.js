const price = 50;
const amount = 7;

function sum(price, amount) {
    return price * amount;
}

function sumDecorator(fn) {
    return function (...args) {
        console.log(`Ціна: ${args[0]}, кількість: ${args[1]}`);
        return fn(...args);
    }
};

const DecoratedSum = sumDecorator(sum);

console.log(DecoratedSum(price, amount));