// Bubble sort O(n^2)
function bubbleSort(arr) {
    //start from the end to avoid repetition
    for (let i = arr.length; i >= 0; i--) {
        // this avoids touching the already arranged items
        for (let j = 0; j < i - 1; j++) {
            //side compairison
            if (arr[j] > arr[j + 1]) {
                //swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// console.log(bubbleSort([2, 4, 1, 7, 3, 6, 5, -5]));


//Best case is O(n) but generally O(n^2) descent for nearly sorted data structures
function optimizedBubbleSort(arr) {
    // this is the no swap condition detector
    let noSwaps;
    //start from the end to avoid repetition
    for (let i = arr.length; i >= 0; i--) {
        noSwaps = true;
        // this avoids touching the already arranged items
        for (let j = 0; j < i - 1; j++) {
            //side compairison
            if (arr[j] > arr[j + 1]) {
                //swap and change noSwaps to false
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps === true) {
            break;
        }
    }
    return arr;
}

// console.log(optimizedBubbleSort([1, 2, 3, 4, 9, 5, 6, 0]));