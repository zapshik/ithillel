function sequence(...funcs) {
    return function (initialValue) {
        return funcs.reduce((acc, fn) => fn(acc), initialValue);
    };
}

function double(num) {
    return num * 2;
}

function addThree(num) {
    return num + 3;
}

const transform = sequence(double, addThree);
console.log(transform(5));
