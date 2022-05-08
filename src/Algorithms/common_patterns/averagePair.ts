/** @format */

//the array is sorted
const averagePair = (arr: number[], targetAvg: number): boolean => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let avg = (arr[left] + arr[right]) / 2;
    //the numbers has to go down hence the right pointer has to reduce as arr is sorted
    if (avg > targetAvg) right--;
    //we found the avg
    else if (avg === targetAvg) return true;
    //the numbers has to go up hence left pointer ++ as arr is sorted
    else left++;
  }
  return false;
};

console.log(averagePair([1, 2, 4], 2.5));
