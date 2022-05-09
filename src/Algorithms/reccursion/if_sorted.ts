/** @format */

//*Find if the array is sorted in assending order or not

const isSortedItterative = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
};

const isSortedReccursive = (arr: number[]) => {
  let i = 0;
  const helper = (arr1: number[], index: number): boolean => {
    if (index === arr1.length - 1) return true;
    return arr1[index] < arr1[index + 1] && helper(arr, index + 1);
  };
  return helper(arr, i);
};

console.log(isSortedReccursive([1, 2, 4, 8, 9]));
