/** @format */

const binarySearch = (
  arr: string[] | number[],
  find: string | number
): number | string => {
  //*assume the array is sorted
  // create a left pointer at 0 and right pointer at end
  let left = 0;
  let right = arr.length - 1;
  // while left pointer comes before right pointer
  while (left <= right) {
    //take average of both pointers and check if find is equal if equal return it
    const half = Math.floor((left + right) / 2);
    if (arr[half] === find) return half;
    //if find is greater than half point shift left to half+1
    if (find > arr[half]) left = half + 1;
    //if find is smaller than half point shif right to half-1
    else right = half - 1;
  }
  // still no access return -1
  return -1;
};

const binarySearchWithReccursion = (
  arr: string[] | number[],
  find: string | number
): boolean => {
  const helper = (
    arr: string[] | number[],
    find: string | number,
    start: number,
    end: number
  ): boolean => {
    if (start > end) return false;
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === find) return true;
    if (arr[mid] > find) return helper(arr, find, start, mid - 1);
    else return helper(arr, find, mid + 1, end);
  };
  return helper(arr, find, 0, arr.length - 1);
};

console.log(binarySearchWithReccursion([1, 2, 3, 4, 5, 6, 8, 9], 9));
