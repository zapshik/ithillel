function counter(startValue, step) {
    let currentValue = startValue;

    return {
        increment() {
            currentValue += step;
            return currentValue;
        },
        decrement() {
            currentValue -= step;
            return currentValue;
        },
        reset() {
            currentValue = startValue;
            return currentValue;
        },
        getValue() {
            return currentValue;
        }
    };
}

const myCounter = counter(10, 2);
console.log(myCounter.increment());
console.log(myCounter.increment());
console.log(myCounter.decrement());
console.log(myCounter.reset());
