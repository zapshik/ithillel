const someWord = prompt('Введіть слово або число');

function isPalindrom(str) {
    if (str === str.split('').reverse().join('')) {
        return true;
    } else {
        return false;
    } 
}

console.log('Результат: ', isPalindrom(someWord));