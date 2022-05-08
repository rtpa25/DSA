/** @format */

const productOfArray = (arr: number[]): number => {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
};

console.log(productOfArray([1, 4]));
