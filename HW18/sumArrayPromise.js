
function sumArrayPromise(numbers) {
    return new Promise(resolve => {
        setTimeout(() => {
            const sum = numbers.reduce((acc, num) => acc + num, 0);
            resolve(sum);
        }, 3000);
    });
}


async function concurrentPromises(promises, maxConcurrent) {
    let results = [];
    let executing = [];

    for (const promise of promises) {
        const task = promise().then(result => {
            results.push(result);
            executing.splice(executing.indexOf(task), 1);
        });
        executing.push(task);
        if (executing.length >= maxConcurrent) {
            await Promise.race(executing);
        }
    }
    await Promise.all(executing);
    return results;
}


async function sequenceAsync(asyncFunctions) {
    let result = undefined;
    for (const asyncFunc of asyncFunctions) {
        result = await asyncFunc(result);
    }
    return result;
}


sumArrayPromise([1, 2, 3, 4, 5]).then(result => console.log("Сума: ", result));


const testPromises = [
    () => new Promise(res => setTimeout(() => res("Проміс 1"), 1000)),
    () => new Promise(res => setTimeout(() => res("Проміс 2"), 500)),
    () => new Promise(res => setTimeout(() => res("Проміс 3"), 2000)),
    () => new Promise(res => setTimeout(() => res("Проміс 4"), 1500))
];

concurrentPromises(testPromises, 2).then(results => console.log("Результати concurrentPromises: ", results));


const asyncFunctions = [
    async prev => prev ? prev + 1 : 1,
    async prev => prev * 2,
    async prev => prev - 3
];

sequenceAsync(asyncFunctions).then(result => console.log("Результат sequenceAsync: ", result));