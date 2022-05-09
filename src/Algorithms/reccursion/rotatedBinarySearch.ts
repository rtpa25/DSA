/** @format */
// Input  : arr[] = {5, 6, 7, 8, 9, 10, 1, 2, 3};
//          key = 3
// Output : Found at index 8
// All solutions provided here assume that all elements in the array are distinct.
// Basic Solution:

// Approach:

// The idea is to find the pivot point, divide the array in two sub-arrays and perform binary search.
// The main idea for finding pivot is – for a sorted (in increasing order) and pivoted array, pivot element is the only element for which next element to it is smaller than it.
// Using the above statement and binary search pivot can be found.
// After the pivot is found out divide the array in two sub-arrays.
// Now the individual sub – arrays are sorted so the element can be searched using Binary Search.

const binarySearchReccursive = (
  arr: number[],
  start: number,
  end: number,
  find: number
): number => {
  if (start > end) return -1;
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === find) return mid;
  if (arr[mid] > find) return binarySearchReccursive(arr, start, mid - 1, find);
  else return binarySearchReccursive(arr, mid + 1, end, find);
};

const pivotFinder = (arr: number[]): number => {
  const helper = (start: number, end: number): number => {
    if (start > end) return -1;
    if (start === end) return start; //base case
    let mid = Math.floor((start + end) / 2);
    if (mid < end && arr[mid] > arr[mid + 1]) return mid;
    if (mid > start && arr[mid] < arr[mid - 1]) return mid - 1;
    if (arr[start] >= arr[mid]) return helper(start, mid - 1);
    return helper(mid + 1, end);
  };
  return helper(0, arr.length - 1);
};

const pivotedBinarySearch = (arr: number[], target: number) => {
  let pivot = pivotFinder(arr);
  if (pivot === -1)
    return binarySearchReccursive(arr, 0, arr.length - 1, target);
  if (arr[pivot] === target) return pivot;
  if (arr[0] <= target)
    return binarySearchReccursive(arr, 0, pivot - 1, target);
  return binarySearchReccursive(arr, pivot + 1, arr.length - 1, target);
};

console.log(pivotedBinarySearch([5, 6, 7, 8, 9, 10, 1, 2, 3], 2));
