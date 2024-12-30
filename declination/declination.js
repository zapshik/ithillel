
const yearDeclination = +prompt('Скільки вам років?');

if (Number.isNaN(yearDeclination)) {
    console.log('Введіть коректне значення');
} else {
    const lastNumber = yearDeclination % 10;
    const lastTwoNumbers = yearDeclination % 100;

    if (lastTwoNumbers === 11 || lastTwoNumbers === 12 || lastTwoNumbers === 13 || lastTwoNumbers === 14) {
        console.log(yearDeclination + ' років');
    } else if (lastNumber === 1) {
        console.log(yearDeclination + ' рік');
    } else if (lastNumber >= 2 && lastNumber <= 4) {
        console.log(yearDeclination + ' роки');
    } else {
        console.log(yearDeclination + ' років');
    }
}