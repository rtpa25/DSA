function sumRange(num) {
    if (num === 1) {
        return 1;
    }
    return num + sumRange(num - 1);
}

console.log(sumRange(3)); // 3+sumRange(2) = 3 + 2 + sumRange(1) = 3+2+1 = 6