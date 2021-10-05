function checkOddPairs(arr) {
    let newArr = [];
    if (arr.length === 0) {
        return newArr;
    } else if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }
    newArr = newArr.concat(checkOddPairs(arr.slice(1)));
    return newArr;
}

console.log(checkOddPairs([1, 2, 3, 4, 5, 6]));