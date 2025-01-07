const numberDivision = +prompt('Введіть число');

if (Number.isNaN(numberDivision)) {
    console.log('Введіть коректне значення');
} else {
    if (numberDivision % 3 === 0 && numberDivision % 5 === 0) {
        console.log('FizzBuzz');
    } else if (numberDivision % 3 === 0) {
        console.log('Fizz');
    } else if (numberDivision % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log('Число не ділиться на 3 або 5');
    }
}