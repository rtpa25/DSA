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

//returns the index of the minimum number in the range from startindex and endIndex int the given array
const minIndex = (
  arr: number[],
  startIndex: number,
  endIndex: number
): number => {
  if (startIndex === endIndex) return startIndex;
  let k = minIndex(arr, startIndex + 1, endIndex);
  return arr[startIndex] < arr[k] ? startIndex : k;
};

const slectionSortReccursive = (arr: number[]) => {
  const selectionSortHelper = (index: number) => {
    if (index === arr.length) return;
    let k = minIndex(arr, index, arr.length - 1); //find the index of the minimum number in the current range
    //cement it into the first position of the array
    if (k !== index) {
      //swap
      let temp = arr[k];
      arr[k] = arr[index];
      arr[index] = temp;
    }
    //call the helper excluding the cemented sorted numbers
    selectionSortHelper(index + 1);
  };
  selectionSortHelper(0);
  return arr;
};

console.log(slectionSortReccursive([2, 4, 1, 3, 5]));
