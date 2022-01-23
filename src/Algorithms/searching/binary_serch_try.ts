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

console.log(binarySearch([1, 2, 3, 4, 5, 6, 8, 9], 9));
