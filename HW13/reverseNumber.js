function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''), 10);
}

function findPalindrome(num, steps = 0) {
    if (num === reverseNumber(num)) {
        return { result: num, steps };
    }
    return findPalindrome(num + reverseNumber(num), steps + 1);
}

console.log(findPalindrome(96));
console.log(findPalindrome(89));
console.log(findPalindrome(196));
