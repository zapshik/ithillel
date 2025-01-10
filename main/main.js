/* 
function output() {
    console.log('123');
}

output();
output();
output();

 */

/* function returnValue() {
    const part1 = 'String';
    const part2 = '123';
    return part1 + ' ' + part2;
}

const someValue = returnValue();
console.log(someValue); */

/* const globalMessage = 'Some message'; // global

function vars() {
    const greeting = 'I am'; // local

    console.log(greeting);
    console.log(globalMessage);
}

vars(); */

/* const a = 5;
const b = 6;
const result = a + b;

console.log(result); 
*/
/* 
function sum(a, b) {
    const result = a + b;

    return result;
}

const output = sum(5, 6);
console.log(output);
 */
/* 
function sayHello(userName) {
    const message = 'Привіт, ' + userName;

    return message;
}

sayHello('Roman');
sayHello('Vanya');
sayHello('Illya');

 */
/* 
function sum(first, second = 5) {

    return first + second;
}

const result = sum(3, 10);

console.log(result);

 */
/* 
function sumAll(...numbers) {
    let resultSum = 0;
    for (let i = 0; i < numbers.length; i++) {
        resultSum = resultSum + numbers[i];
    }
    console.log(numbers.length);
}

const result = sumAll(3, 6, 90, 12);

console.log(result);

 */
/* 
function isPositive(num) {

if (num > 0) {
    return '+';
    } else {
    return '-';
    }
}   

const result = isPositive(10 - 33);

console.log(result);
 */



// 'stroka' => 'akorta'

/* function reverseString(str) {
    for (let i = 0; i >= str.length; i++) {
        console.log(str[i]);
    }
}

const result = reverseString('str');
console.log(result);

 */

// 'oko' => 'oko'

function isOk(num, type) {
    if (type !== 'even' && type !== 'odd') {
        return 'Ошибка: неверный тип проверки';
    }
    if (type === 'even') {
        if (num % 2 === 0) {
            return true;
        }
            return false;
    }
    if (type === 'odd') {
        if (num % 2 !== 0) {
            return true;
        }
            return false;
    }
}

console.log(isOk(10, "even")); // true
console.log(isOk(11, "even")); // false
console.log(isOk(7, "odd"));   // true
console.log(isOk(8, "odd"));   // false
console.log(isOk(5, "prime"))