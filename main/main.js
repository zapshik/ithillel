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