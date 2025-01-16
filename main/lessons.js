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
/* 
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

 */

/* 
const a = 5;
const b = 7;
const c = '23.45nb';
const word = 'hello';
const word2 = 'history';


console.log(Number.isFinite(34));
console.log(Number.isInteger(a));
console.log(Number.isNaN(23));

console.log(typeof a);
console.log(Number.parseInt(c));
console.log(Number.parseFloat(c));
console.log(word.length);
console.log(word.at(1));

const message = 'Hello Ukraine';

const resultStart = message.startsWith('He');
const resultEnd = message.endsWith('ne');

console.log(resultStart);
console.log(resultEnd);
console.log(message.indexOf('o'));
console.log(message.includes('Hello'));

const num = 33 + '';

console.log(num.padStart(5, '0'));

const stringToRepeat = '*';

console.log(stringToRepeat.repeat(10));

const randomChar = '*';

console.log(randomChar.repeat(8));

const greeting = 'Hello World';
const slicePart = greeting.slice(6, 10);
const splitted = greeting.split('');


console.log(slicePart);
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());
console.log(splitted);
 */


/* 
function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(23));



function reverseArray(arr) {
    return arr.reverse();  // Используем метод reverse для массива
}

console.log(reverseArray([1, 6, 90, 8]));

function multiplyArray(arr) {
    return arr.reduce((acc, curr) => acc * curr, 1); // Умножаем все элементы массива
}

console.log(multiplyArray([1, 5, 5, 9]));


function sumArray(arr) {
    let summ2 = 0;
    for (i = 0; i < arr.length; i ++) {
        summ2 += arr[i];
    }
    return summ2;
}
console.log(sumArray([5, 6, 2])); */

/* const num = 5;
const str = 'slovo';
 */

/* const student = {
    name: 'Den',
    secondName: 'Mith',
    age: 19,
    facultet: 'IT',
    isStudent: true,
    
    sayHello: function () {
        alert('Hello');
    }
};

const someObject = {};

const nestedObj = {
    name: 'Jon',
    secondName: 'Mult',
    age: 23,
    facultet: 'IT',

    adress: {
        city: 'Odesa',
        country: 'Ukraine',
    }
}; */

const student = {
    name: 'Den',
    secondName: 'Mith',
    age: 19,
    facultet: 'IT',
    isStudent: true,
    
    sayHello: function () {
        alert('Hello');
    },

    adress: {
        city: 'Odesa',
        country: 'Ukraine',
    }
};

console.log(student.name);

student.sayHello();

console.log(student.adress.city);

console.log(typeof student);

console.log('secondName' in student);

student.age = 21;
student.age = 33;

const averageAge = student.age;

delete student.isStudent;

const uniqueKey = Symbol(test);

alert(uniqueKey);

const { age, secondAge } = student;

const studentKeys = Object.keys(student);
const studentVals = Object.values(student);

// Масиви


const strArr = ['as', 'wer', '123', 'er5t'];

const students = [
    {
    name: 'Den',
    secondName: 'Mith',
    age: 19,
    facultet: 'IT',
    isStudent: true,
    },
    {
    name: 'Den',
    secondName: 'Mith',
    age: 19,
    facultet: 'IT',
    isStudent: true,
    },
    {
    name: 'Den',
    secondName: 'Mith',
    age: 19,
    facultet: 'IT',
    isStudent: true,
    }
];

const testArr = [1, 21, 34, 14, 5, 60, 37, 8];

alert(testArr[3]); // 34
alert(testArr.length); // довжина масива

const newArr = [1, 21, 34, 14, 5, 60, 37, 8];

alert(newArr);

alert(newArr[newArr.lastIndexOf]);
alert(newArr[newArr.length - 1]);

for (let i = 0; i < newArr.length; i++) {
    alert(newArr[i]);
}

newArr[newArr.length] = 90; // додав в масив елемент

const newArrNew = [];
newArrNew[newArrNew.length] = 2;
newArrNew[newArrNew.length] = 3;
newArrNew[newArrNew.length] = 4;

newArrNew[2] = null; // видаллення елемента



