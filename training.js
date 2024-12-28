// Щось виводимо на сторінці
document.write('Hello JS');


// Різні види записів в консолі

console.log('log');
console.error('error');
console.warn('warning');
console.info('ingo');

// Виводимо запит і отримуємо результати в консолі

const currentTemp = +prompt('Скільки градусів?');

if (Number.isNaN(currentTemp)) {
    console.log('Температура не вірна');
} else {
    if (currentTemp >= 0) {
        console.log('На вулиці тепло:', currentTemp);
    } else {
        console.log('На вулиці холодно:', currentTemp);
    }
}