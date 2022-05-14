/** @format */

function getDigit(num: number, i: number) {
  //abs is just in case we get negative numbers
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

//returns the number of digits in a number
function digitCount(num: number) {
  if (num === 0) {
    return 1;
  }
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

//returns the maximum number of digits in a number in the array given via parameter
function mostDigits(nums: number[]) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums: number[]) {
  let iterations = mostDigits(nums);
  for (let k = 0; k < iterations; k++) {
    let digitBuckets: any = Array.from({ length: 10 }, (): number[] => []); //[[], [], [] ... 10 times]
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

console.log(radixSort([23, 12, 9452, 5, 133]));
