function doubleLetter(str) {
    let result = '';
    for (let char of str) {
        result += char + char;
    }
    return result;
}

console.log(doubleLetter('hello'));