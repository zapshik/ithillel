const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const uniqueValuesArray = uniqueValues(array1, array2);

function uniqueValues(array1, array2) {
    let combined = array1.concat(array2);
    return [...new Set(combined)];
}

console.log(uniqueValuesArray);