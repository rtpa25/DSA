function maxSubArray(arr, n) {
    if (arr.length < n) {
        return null;
    }
    let max = -Infinity;
    for (let i = 0; i < arr.length - n + 1; i++) {
        let temp = 0;
        for (let j = 0; j < n; j++) {
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}

console.log(maxSubArray([1, 2, 5, 8, 1, 5, 4], 4));