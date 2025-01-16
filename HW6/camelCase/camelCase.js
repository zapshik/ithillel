function camelCase(str, separator) {
    let words = str.split(separator);
    for (let i = 1; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join('');
}

console.log(camelCase('hello_world', '_'));
console.log(camelCase('make-it-happen', '-'));