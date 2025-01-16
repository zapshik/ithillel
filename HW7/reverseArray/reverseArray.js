const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);

function reverseArray(originalArray) {
    return originalArray.slice().reverse();
}

console.log(reversedArray);