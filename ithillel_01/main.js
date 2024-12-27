
/*
let a = 5;
console.log(a);
a = 10;
console.log(a);
a = false;
console.log(a);

const b = 100;
console.log(b);

const x = 101;
console.log(x);

let y = 110;
console.log(y);

let z = 101;
console.log(z);

const x = 11000;
console.log(x);

const a = b = c = 10;
console.log(a, b, c);

const myName = "Sasha";
console.log(myName);

let randomNumber = 1000;
console.log(randomNumber);

let message = "Повідомлення";
console.log(message);

const newMessage = "Нове повідомлення";
console.log(newMessage);

const isFriday = true;
console.log(isFriday);


{
    const myLog = 22;
    console.log(myLog);
}

console.log(hoistingVar);

var hoistingVar = 170;
console.log(hoistingVar);


const myName = "Sasha";
const anotherName = "Illya";
console.log(myName, anotherName, 240, "Text");



const someNumber = 120;
console.log('someNumber >', someNumber);
const lessZeroMessage = 'число меньше нуля';
const biggerZeroMessage = 'число більше нуля';
const biggerHundred = 'число більше ста'

{
    if (someNumber > 0)
    {
        console.log('result >', biggerZeroMessage);
        if (someNumber > 100)
        {
            console.log('result >', biggerHundred);
        }
    } else
    {
        console.log('result >', lessZeroMessage)
    }
}

const testVar = prompt('Яка зараз температура?');
console.log(typeof +testVar);
console.log('Output >', +testVar);
*/
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