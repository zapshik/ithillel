const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

let findCommonElements = array1.filter(function(array1){
    return array2.includes(array1);
});

console.log(findCommonElements);
