function sqr(x, cache) {
    let squaredValue = x * x;

    if (cache.has(squaredValue)) {
        return cache.get(squaredValue);
    } else {
        cache.set(squaredValue, squaredValue);
        return squaredValue;
    }
}

let cache = new Map();

console.log(sqr(5, cache));
console.log(sqr(5, cache));
console.log(sqr(4, cache));
console.log(sqr(8, cache));


console.log(cache);