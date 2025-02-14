function summarize(num) {
    return function (value = 1) {
        return num + value;
    };
}

const addFive = summarize(5);
console.log(addFive(3));
console.log(addFive());