function getPermutations(arr) {
    if (arr.length === 1) return [arr];

    const permutations = [];
    
    for (let i = 0; i < arr.length; i++) {
        const currentElement = arr[i];
        const remainingElements = arr.slice(0, i).concat(arr.slice(i + 1));
        const remainingPermutations = getPermutations(remainingElements);

        for (const permutation of remainingPermutations) {
            permutations.push([currentElement, ...permutation]);
        }
    }
    
    return permutations;
}

console.log(getPermutations([1, 2, 3]));
