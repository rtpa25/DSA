/** @format */

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

const isOdd = (val: number) => val % 2 !== 0;

//*iterative approach
const someRecursive = (
  numbers: number[],
  callBack: (val: number) => boolean
): boolean => {
  const results = numbers.map((n) => {
    return callBack(n);
  });
  if (results.includes(true)) return true;
  else return false;
};

console.log(someRecursive([1, 2, 3, 4], isOdd));

//*reccursive approach

const someReccursiveWithReccursion = (
  numbers: number[],
  callBack: (val: number) => boolean
): boolean => {
  let results: boolean[] = [];
  const helper = (arr: number[], func: (val: number) => boolean) => {
    if (arr.length === 0) return;
    results.push(func(arr[0]));
    arr.shift();
    helper(arr, func);
  };
  helper(numbers, callBack);
  if (results.includes(true)) return true;
  else return false;
};

console.log(someReccursiveWithReccursion([1, 2, 3, 4], isOdd));
