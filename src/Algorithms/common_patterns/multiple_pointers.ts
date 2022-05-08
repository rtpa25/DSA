/** @format */

//Write a fucntion called sumZero which accepts sorted array of integers.
// The function should return the first pair of integers that that has a sum of 0
// Return undefined if there are no such elements

//Naive approach O(N^2)

function sumZero(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    for (let j = 0; j < arr.length; j++) {
      const zero = arr[j];
      if (element + zero === 0 && element !== zero) {
        return [element, zero];
      }
    }
  }
}

// console.log(sumZero([-3, -2, 0, 1]));

//Sick approach O(N) and O(1) space

function sumZera(arr: number[]) {
  let left = 0;
  let right = arr.length - 1;
  //this technique is valid only in case of sorted arrays
  while (left < right) {
    if (arr[left] + arr[right] === 0) {
      return [arr[left], arr[right]];
    } else if (arr[left] + arr[right] > 0) {
      right--;
    } else {
      left++;
    }
  }
}

// console.log(sumZera([-3, -2, 0, 1]));

// Multiple Pointers - countUniqueValues
// Implement a function called countUniqueValues, which accepts a sorted array,
// and counts the unique values in the array.There can be negative numbers in the array,
// but it will always be sorted.

// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4
// Time Complexity - O(n)

// Space Complexity - O(n)

// Bonus

// You must do this with constant or O(1) space and O(n) time

function countUniqueValues(arr: number[]): number {
  let obj = convertNumberArrayToObj(arr); //space -- O(N)
  return Object.keys(obj).length; //time -- O(N)
}

const convertNumberArrayToObj = (
  w: number[]
): {
  [key: number]: number;
} => {
  let obj: {
    [key: string]: number;
  } = {};
  for (let i = 0; i < w.length; i++) {
    if (obj[w[i]] > 0) obj[w[i]]++;
    else obj[w[i]] = 1;
  }
  return obj;
};

function countUniqueValuePairs(arr: number[]): number {
  //HARD TO WRAP AROUND YOUR HEAD WHILE O(1) SPACE AND O(N) TIME
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValuePairs([1, 1, 2, 2, 3, 4, 5, 5, 6, 7, 7]));
