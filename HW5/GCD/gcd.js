function findGCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Приклад використання:
console.log(findGCD(48, 18));
console.log(findGCD(100, 25));
console.log(findGCD(7, 1));