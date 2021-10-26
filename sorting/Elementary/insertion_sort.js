//Build up the sort by gradually building a larger left half which is always sorted

//Steps
//start by picking the second element in the arrray
//Now compare the second element with the one before it and swap if necessary
//Continue to the next element and if it is incorrect order iterate through the sorted position to place the element in the correct place

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      console.log(i, j);
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSort([10, 2, 7, 5, 4, 9, 6]));

//worst case is O(n^2) but if the array is almost sorted it reduces the time complexity
//this works when data is coming kinda live or in a very fast pace
