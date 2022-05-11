/** @format */

//*Builds up the sort by gradually creating a larger left half which is
//*always sorted

const inserTionSort = (arr: number[]) => {
  for (let i = 1; i < arr.length; i++) {
    const element = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > element) {
        //swap
        arr[j + 1] = arr[j];
        arr[j] = element;
      }
    }
  }
  return arr;
};

console.log(inserTionSort([5, 4, 3, 2, 1]));
