/** @format */

//*Builds up the sort by gradually creating a larger left half which is
//*always sorted

const inserTionSort = (arr: number[]) => {
  for (let i = 1; i < arr.length; i++) {
    let element = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > element; j--) {
      arr[j + 1] = arr[j];
    }
  }
  return arr;
};

console.log(inserTionSort([5, 4, 3, 2, 1]));
