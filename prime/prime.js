const number = +prompt('Введіть число: ');
    if (Number.isNaN(number)) {
        console.log('Введіть коректне значення');
    } else {
        if (number <= 1) {
            console.log(`Число ${number} не просте`);
        } else {
            let isPrime = true;
            for (let i = 2; i <= Math.sqrt(number); i++) {
                if (number % i === 0) {
                    isPrime = false;
                    break;
                }
            }
    
            if (isPrime) {
                console.log(`Число ${number} просте`);
            } else {
                console.log(`Число ${number} не просте`);
            }
        }
    }