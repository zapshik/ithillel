const yearGreat = +prompt('Введіть рік');

if (Number.isNaN(yearGreat)) {
    console.log('Введіть коректне значення');
} else {
    if (yearGreat % 100 === 0 && yearGreat % 400 !== 0)
        console.log('Це невисокосний рік');
    else if (yearGreat % 4 === 0) {
    console.log('Це високосний рік');
   }
   else
   console.log('Це невисокосний рік');
}