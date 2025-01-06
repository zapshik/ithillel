const number = +prompt('Введіть цифру: ');
    if (Number.isNaN(number)) {
        console.log('Введіть коректне значення');
    } else {
        if (number <= 1) {
            console.log(`Число ${number} не просте`);
        } else {
            let isPrime = true;
            for (let i = 2; i <= Math.sqrt(number); i++) {
                if (number % i === 0) { // Исправлено на i
                    isPrime = false;
                    break; // Можно выйти из цикла сразу, если нашли делитель
                }
            }
    
            if (isPrime) {
                console.log(`Число ${number} просте`);
            } else {
                console.log(`Число ${number} не просте`);
            }
        }
    }