function linear(arr, n) {
    for (var i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element === n) {
            return i;
        }
    }
    return -1;
}

console.log(linear([1, 2, 3, 4, 5], 7));