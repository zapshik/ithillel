const height = +prompt('Введіть число: ');
    if (Number.isNaN(height)) {
        console.log('Введіть коректне значення');
    } else {
        for (let i = 1; i <= height; i++) {
            let spaces = ' '.repeat(height - i);
            let stars = '*'.repeat(2 * i - 1);
            console.log(spaces + stars);
    }
}