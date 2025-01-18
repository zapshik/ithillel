/* 
Задача: Расчет стоимости поездки
Напишите программу, которая:

Запрашивает у пользователя:

Расстояние поездки в километрах (distance).
Средний расход топлива автомобиля в литрах на 100 км (fuelConsumption).
Стоимость топлива за литр (fuelPrice).
Вычисляет:

Общее количество топлива, необходимого для поездки.
Общую стоимость топлива.
Проверяет:

Если стоимость поездки превышает 5000, выводит:
"Стоимость поездки: [стоимость]. Это дорого!"
В остальных случаях выводит:
"Стоимость поездки: [стоимость]. Это приемлемо."
 */
/* 
const distance = +prompt('Расстояние поездки в километрах');
const fuelConsumption = +prompt('Средний расход топлива автомобиля в литрах на 100 км');
const fuelPrice = +prompt('Стоимость топлива за литр');

const amountFuel = distance * (fuelConsumption / 100);
const amountFuelPrice = amountFuel * fuelPrice;

if (amountFuelPrice > 5000) {
    alert(`Стоимость поездки: ${amountFuelPrice}. Это дорого!`);
} else {
    alert(`Стоимость поездки: ${amountFuelPrice}. Это приемлемо.`);
}
 */
/* 
for (i = 0; i <= 10; i++) {
    console.log(i);
} */

/* let x = 10;
while (x >= 1) {
    console.log(x);
    x--;
}
 */
/* 
i = 2;

do {
    console.log('Цикл выполнен');
}
while (i > 2);
i++;
 */

// Напишите программу, которая:
// Выводит все чётные числа от 1 до 20.
// Используйте цикл for.


/* for (i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
} */


// Суммирует все числа от 1 до 10.
// Выводит результат.
// Используйте цикл while.

/* let x = 1;
let sum = 0;

while (x <= 10) {
    sum += x; // Накопление суммы
    x++;      // Увеличиваем x на 1
}

console.log(`Сумма чисел от 1 до 10: ${sum}`);
 */

/* const number = +prompt('Введите число');
let i = 1;
let sum = 0;
while(i <= number) {
    sum = sum + i;
    i++
}
console.log(sum);
 */

// Напишите программу, которая:
// Выводит "Привет, мир!" 5 раз.
// Используйте цикл do...while.

/* let i = 1;

do {
    console.log('123');
    i++; // Увеличиваем i перед continue
} while (i <= 5);
 */

// Запрашивает у пользователя ввод числа больше 10.
// Если пользователь ввёл число меньше или равно 10, программа повторяет запрос.
// Если введено число больше 10, программа выводит сообщение:
// "Спасибо, вы ввели число [число]".

// Создайте массив с именами трёх ваших любимых фильмов и выведите их по одному в консоль.
// Создайте массив с числами от 1 до 5. Увеличьте второй элемент на 10 и выведите массив в консоль.
/* 
const films = ['One', 'Two', 'Three'];

console.log(films[0]);
console.log(films[1]);
console.log(films[2]);

let numbers = [1, 2, 3, 4, 5];
numbers[1] = 12;
console.log(numbers);

Создайте массив с вашими любимыми книгами. Затем:

Добавьте ещё одну книгу в конец массива.
Удалите первую книгу из массива.
Выведите итоговый массив в консоль.
Создайте массив с числами от 10 до 20. Затем:

Удалите последнее число.
Добавьте число 5 в начало массива.
Выведите итоговый массив в консоль.
 */
/* 
const books = ['one', 'two', 'three', 'four'];
books.push('five');
books.shift();
console.log(books);

const numbers = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
numbers.pop();
numbers.unshift(5);
console.log(numbers);

let num = [1, 2, 3, 4, 5];
num[1] = 12;
console.log(num);

const fruits = ['banan', 'apple', 'orange'];

console.log(fruits.indexOf('banan'));
console.log(fruits.indexOf('cocos'));
 */

/* const films = ['one', 'two', 'three'];
for (i = 0; i < films.length; i++) {
    console.log(films[i]);
} */

/* const films = ['one', 'two', 'three'];
for (let film of films) {
    console.log(film);
}
 */

/* const numbers = [1, 2, 4, 90];
numbers.forEach(function(num) {
    console.log(num);
}); */

/* const numbers = [12, 23, 37, 42, 51];

numbers.forEach(function(num) {
    if (num % 2 !== 0) {
        num = num + 10;
    }
    console.log(num);
});
 */

/* Напишите программу, которая:

Создаёт массив цен на товары в магазине, например: [100, 250, 300, 400, 150].
Проходит по массиву и:
Уменьшает цену каждого товара на 20%, если цена больше 200.
Не изменяет цену, если она меньше или равна 200.
Создаёт новый массив с обновлёнными ценами.
Выводит:
Старый массив цен.
Новый массив цен.
Общую сумму старого и нового массива. */

/* 
const oldPrices = [1290, 150, 870, 190, 2800];
let newPrices = [];

for (let i = 0; i < oldPrices.length; i++) {
    if (oldPrices[i] > 200) {
        newPrices.push(oldPrices[i] * 0.8);
    } else {
        newPrices.push(oldPrices[i]); // Добавляем без изменения, если <= 200
    }
}
console.log('Старые цены:', oldPrices);
console.log('Новые цены:', newPrices);
 */
/* 
const numbers = [12, 7, 19, 24, 33, 4, 15];
const evenCount = []; // Массив для чётных чисел
const oddCount = [];  // Массив для нечётных чисел

numbers.forEach(function(num) {
    if (num % 2 === 0) {
        evenCount.push(num); // Добавляем в массив чётных чисел
    } else {
        oddCount.push(num);  // Добавляем в массив нечётных чисел
    }
});

// Вывод результата после обработки всех чисел
console.log(`Чётные числа: ${evenCount}, Количество: ${evenCount.length}`);
console.log(`Нечётные числа: ${oddCount}, Количество: ${oddCount.length}`); */

/* let numbers = [5, 15, 78, 9, 123];
let sum = numbers.map(function(num) {
    return num + 3;
});

console.log(sum);
 */

/* let numbers = [34, 56, 12, 11, 234, 1];
let minNum = numbers.filter(function(num){
    return num > 30;
});

console.log(minNum);
 */

/* let numbers = [2, 1, 1, 5, 9];
let sum = numbers.reduce(function(acc, num){
    return acc * num;
});

console.log(sum);
 */
// Шаг 1: Отфильтровать сотрудников с зарплатой выше 4000.
// Шаг 2: Увеличить зарплату этих сотрудников на 10%.
// Шаг 3: Подсчитать общую сумму зарплат сотрудников после увеличения.
// Вывод результата:

// Массив сотрудников с новой зарплатой.
// Общая сумма зарплат.



/* const employees = [
    { name: 'Anna', salary: 3200 },
    { name: 'John', salary: 4500 },
    { name: 'Mike', salary: 2800 },
    { name: 'Sara', salary: 5100 }
];

let bigSalary = employees.filter(function(employee){
    return employee.salary > 3000;
});

let bigSalaryUp = bigSalary.map(function(employee){
    return {
        name: employee.name,
        salary: employee.salary * 1.15
    }
});

let sumBigSalaryUp = bigSalaryUp.reduce(function(acc, employee){
    return acc + employee.salary;
}, 0);

console.log(bigSalary);
console.log(bigSalaryUp);
console.log(sumBigSalaryUp); */

/* 
const products = [
    { name: 'Laptop', price: 1200, quantity: 4 },
    { name: 'Phone', price: 800, quantity: 10 },
    { name: 'Tablet', price: 600, quantity: 15 },
    { name: 'Monitor', price: 300, quantity: 5 },
    { name: 'Keyboard', price: 100, quantity: 20 }
];

let highPrice = products.filter(function(product){
    return  product.price >= 600;
});

let highPriceUp = highPrice.map(function(product){
    return {
        name: product.name,
        price: product.price * 1.15,
        quantity: product.quantity
    }
});

let sum = highPriceUp.reduce(function(acc, product){
    return (acc + product.price) + (product.price * product.quantity);
}, 0);

console.log(highPrice);
console.log(highPriceUp);
console.log(sum);
 */

/* let newArr = Array(20).fill(0).map((_, index) => index +1);
console.log(newArr);

let secondArr = Array(10).fill(0).map(() => Math.floor(Math.random() * 100));
console.log(secondArr);

let thirdArr = Array(5).fill(0).map(() => Array(5).fill(0));
console.log(thirdArr);

let fourArr = Array(10).fill(0).map((_, index) => (index + 1) * 2);
console.log(fourArr);
 */

/* 
const arrStr = ['word1', 'word2', 'word3'];

const joinedArr = arrStr.join(' '); // separator

console.log(joinedArr);

const testString = 'Hello world';

const splitTest = testString.split('');

console.log(splitTest);

const arrStr1 = ['world', 'world', 'world'];
const arrStr2 = ['world2', 'world6', 'world1'];
const arrStr3 = ['world2', 'world4', 'worldc'];

const unitedArr = arrStr1.concat(arrStr2, arrStr3);

console.log(unitedArr);

const unitedArrSpread = [...arrStr1, ...arrStr2, ...arrStr3];

console.log(unitedArrSpread);


let arrNewFill = Array(10).fill(0).map((_, index) => index + 1);
console.log(arrNewFill);

const stockArr = [4, 56, 1, 90, 12, 45, 56];
stockArr.push(10, 22);
stockArr.pop();
stockArr.shift();
stockArr.unshift(10);

console.log(stockArr);

const sliceStockArr = stockArr.slice(2); 

console.log(sliceStockArr);

if (stockArr.indexOf(123) != -1) {
    console.log('Da');
} else {
    console.log('No');
}

const likeArrey = [
    [1, 3, 67, 67],
    [2, 4, 90, 98],
    [1, 1, 3]
];

for (i = 0; i < likeArrey.length; i++) {
    for (j = 0; j < likeArrey[i].length; j++) {
        console.log(likeArrey[i][j]);
    }
}

const flatLikeArrey = likeArrey // ??

const sourceArrey = [1, 4, 8, 9, 90];

const copyArrStr = [...arrStr];
console.log(copyArrStr);

const newArrey = [2, 4, 6, 9];

console.log(newArrey.reverse());  */

/* const students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 78 },
    { name: 'Dave', score: 95 },
    { name: 'Eva', score: 88 }
];

let maxScore = students.filter(function(student){
    return student.score > 90;
});
console.log(maxScore);

let maxScoreUp = maxScore.map(function(student){
    return {
        name: student.name,
        score: student.score * 1.05
    }
});
console.log(maxScoreUp);

let sumScore = maxScoreUp.reduce(function(acc, student){
    return acc + student.score;
}, 0);
console.log(sumScore);
 */
/* const students = [
    { name: 'Alice', score: 85, age: 20, faculty: 'Mathematics' },
    { name: 'Bob', score: 92, age: 23, faculty: 'Physics' },
    { name: 'Charlie', score: 78, age: 19, faculty: 'Mathematics' },
    { name: 'Dave', score: 95, age: 22, faculty: 'Physics' },
    { name: 'Eva', score: 88, age: 21, faculty: 'Mathematics' }
];

let maxScoreMath = students.filter(function(student){
    return student.score > 80 && student.faculty === 'Mathematics';
});
console.log(maxScoreMath);

let maxScoreMathName = maxScoreMath.map(function(student){
    return {
        name: student.name + ' (Honor)',
        score: student.score
    }
});
console.log(maxScoreMathName);

let sumScore = maxScoreMath.reduce(function(acc, student){
    return acc + student.score
}, 0);
console.log(sumScore);
 */

/* const courses = [
    { course: 'Math', students: [{ name: 'Alice', score: 85 }, { name: 'Bob', score: 92 }] },
    { course: 'Physics', students: [{ name: 'Charlie', score: 78 }, { name: 'Dave', score: 95 }] },
    { course: 'Chemistry', students: [{ name: 'Eva', score: 88 }, { name: 'Frank', score: 72 }] }
];

// 1. Суммируем баллы для каждого курса
let courseScores = courses.map(function(course) {
    let totalScore = course.students.reduce(function(acc, student) {
        return acc + student.score;
    }, 0);
    return { course: course.course, totalScore: totalScore };
});

// 2. Находим курс с максимальной суммой баллов
let maxCourse = courseScores.reduce(function(max, current) {
    return current.totalScore > max.totalScore ? current : max;
});

// 3. Извлекаем имена студентов курса с максимальной суммой баллов
let topStudents = courses
    .filter(course => course.course === maxCourse.course)[0]
    .students.map(student => student.name);

console.log("Суммы баллов по курсам:", courseScores);
console.log("Курс с максимальной суммой баллов:", maxCourse);
console.log("Студенты курса с максимальной суммой баллов:", topStudents);
 */

/* const numbers = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8, 9]
];

let sum = numbers.map(function(subArray){
    return subArray.reduce(function(acc, num){
        return acc + num;
    }, 0)
})

console.log(sum);
 */

/* const numbers = [
    [3, 5, 7],
    [2, 8],
    [10, 6, 12]
];

let maxNum = numbers.map(function(subArray){
    return subArray.reduce(function(max, current){
        return current > max ? current : max;
    });
});
console.log(maxNum);
 */

/* const nestedArray = [
    [1, 2],
    [3, 4],
    [5, 6, 7]
];

let newArray = nestedArray.map(function(subArray){
    return subArray.concat(nestedArray.subArray);
});
console.log(newArray); */

/* const numbers = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8]
];

numbers.forEach(function(subArray){
    subArray.forEach(function(num){
        console.log(num);
    });
});

let oneArray = numbers.flat();
console.log(oneArray);
 */
/* 
const sales = [
    ["Laptop", 1200, 3],
    ["Phone", 800, 5],
    ["Tablet", 600, 4],
    ["Monitor", 300, 6]
];

sales.forEach(function(subArray){
    return subArray.forEach(function(item){
    });
});

let totals = sales.map(function(item) {
    return { 
        product: item[0], 
        total: item[1] * item[2] 
    };
});
console.log(totals);

let totalSales = totals.reduce(function(acc, total){
    return acc + total.total;
}, 0);
console.log(totalSales);

let maxProduct = totals.reduce(function(max, current) {
    return current.total > max.total ? current : max;
});

console.log(maxProduct);

 */

