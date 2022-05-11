/** @format */

//*A sorting algorithm where the largest value bubbles up to the to
//*top at the end of the every iteration
//*at the end of every iteration one element at the end is solidified so the number of
//*unsorted elements decreases by 1 that can be reflected in the external loop
//*tiny optimization check if all around the process did
//*we do a swap which means that the array is already sorted

//?TIME COMPLEXITY: best case when the data is very nearly sorted then O(n)
//?worst case which is mostly the case it's O(n^2)

const bubbleSortOptimized = (arr: number[]) => {
  //checks for swaps {optimization:short curcuits the process once the array is sorted}
  let noSwaps: boolean;
  // start at the end of the array are go back to 0 {i}
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    // start at the 0 and move to i-1 {j}
    //*as i goes down j goes down hence the number of comparisons
    for (let j = 0; j < i - 1; j++) {
      // check if arr[j] > arr[j+1] swap
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps === true) break;
  }
  // return the sorted array
  return arr;
};

const bubbleSortUnoptimized = (arr: number[]) => {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        //swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

// Base Case: If array size is 1, return.
// Do One Pass of normal Bubble Sort. This pass fixes last element of current subarray.
// Recur for all elements except last of current subarray.
const bubbleSortReccursive = (arr: number[]) => {
  const bubbleSortHelper = (index: number) => {
    if (index === 1) return;
    for (let i = 0; i < index - 1; i++) {
      if (arr[i + 1] < arr[i]) {
        //swap
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
      }
    }
    bubbleSortHelper(index - 1);
  };
  bubbleSortHelper(arr.length);
  return arr;
};

console.log(bubbleSortReccursive([2, 4, 1, 3, 5]));
