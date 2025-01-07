const number = +prompt('Введіть число: ');
    if (Number.isNaN(number)) {
        console.log('Введіть коректне значення');
    } else {
        for (let i = 1; i <= number; i++) {
            let sumOfDivisors = 0;
            
            for (let j = 1; j < i; j++) {
                if (i % j === 0) { 
                    sumOfDivisors += j;
                }
            }
        
            if (sumOfDivisors === i) {
                console.log(i + " - Совершенное число");
            }
    }
}


