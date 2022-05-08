/** @format */

//*similar to bubble sort, but instead of first placing large values at the end
//*it places all small values at the beggining

//?TIME COMPLEXITY = O(n^2) --> can be beneficial over bubble if the number of
//?swapping is needed to be minimized which is rare

const selectionSort = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallest]) {
        smallest = j;
      }
    }
    if (arr[i] !== arr[smallest]) {
      let temp = arr[i];
      arr[i] = arr[smallest];
      arr[smallest] = temp;
    }
  }
  return arr;
};

console.log(selectionSort([2, 4, 1, 3, 5]));
