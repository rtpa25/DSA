//unlike bubble sort here we arrange the smallest first
function selectionSort(arr) {
  //if you are cautious about swapping then its better that bubble sort
  for (let i = 0; i < arr.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
      console.log(i, j);
      if (arr[j] < arr[smallest]) {
        smallest = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[smallest];
    arr[smallest] = temp;
  }
  return arr;
}

console.log(selectionSort([10, 2, 7, 5, 4, 9, 6, 3]));
