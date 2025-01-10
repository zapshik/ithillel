const someWord = prompt('Введіть слово або число');

function reverseString(str) {
    
    return str.split('').reverse().join('');
}

alert(reverseString(someWord));