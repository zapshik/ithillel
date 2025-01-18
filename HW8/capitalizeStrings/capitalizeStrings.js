const words = ['apple', 'banaNA', 'kiWi', 'ORANGE'];

let capitalizeStrings = words.map(function(bigLetters){
    return bigLetters[0].toUpperCase() + bigLetters.slice(1).toLowerCase()
    
});
console.log(capitalizeStrings);