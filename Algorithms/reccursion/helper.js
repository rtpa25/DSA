function collectOddPairs(arr) {
    let result = [];

    function helper(helperInput) {
        if (helperInput.length === 0) {
            return;
        } else if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0]);
        }
        helper(helperInput.slice(1));
    }
    helper(arr);
    return result;
}

console.log(collectOddPairs([1, 2, 3, 4, 5, 6, 7, 8, 9]));