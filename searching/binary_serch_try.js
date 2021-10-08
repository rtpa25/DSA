// My approach
function binarySearch(arr, n) {
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((left + right) / 2);
    let found = false;
    while (found === false) {
        if (right - left <= 1) {
            found = true;
        } else {
            if (arr[left] === n) {
                found = true;
                return left;
            } else if (arr[right] === n) {
                found = true;
                return right;
            } else {
                middle = Math.floor((left + right) / 2);
                if (arr[middle] === n) {
                    found = true;
                    return middle;
                } else if (n > arr[middle]) {
                    left = middle;
                } else {
                    right = middle;
                }
            }
        }
    }
    return -1;
}

//colt's approach
function betterBinarySearch(arr, n) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    while (arr[middle] !== n && start <= end) {
        if (n < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if (arr[middle] === n) {
        return middle;
    }
    return -1;
}