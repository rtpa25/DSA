/** @format */

const linearSearchItterative = (arr: number[], target: number) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
};

const linearSearchReccursive = (arr: number[], target: number): number[] => {
  let indices: number[] = [];
  const helper = (arr1: number[], index: number): number | undefined => {
    if (index >= arr1.length) {
      return;
    }
    if (arr1[index] === target) {
      indices.push(index);
    }
    return helper(arr1, index + 1);
  };
  helper(arr, 0);
  return indices;
};

//*Need to return all the indices where 4 occurs in an array
console.log(linearSearchReccursive([1, 2, 3, 4, 4, 5], 4));
