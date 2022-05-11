/** @format */

//swap helper fucntion that swaps numbers in array
function swap(arr: number[], i: number, j: number) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

//Like merge sort exploits the fact that that arrays of 0 or 1 elements are always sorted
//Working by selecting one element (called Pivot) and finding the index where the pivot should end up in the sorted array
//Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot.

//pivot helper fucntion
function pivotHelper(arr: number[], start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIndex = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
}

function quickSort(arr: number[], left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivotHelper(arr, left, right);
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));
