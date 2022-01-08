/** @format */

const averagePair = (arr: number[], targetAvg: number) => {
  //initialte a pointer at both the extremes
  let left = 0;
  let right = arr.length - 1;
  //then start a while loop till left pointer is less than right pointer
  while (left < right) {
    const avg = (arr[left] + arr[right]) / 2;
    //check if the avg == the target
    if (avg === targetAvg) return true;
    //if avg is greater than target shift right to left
    else if (avg > targetAvg) right--;
    //else left to right
    else left++;
  }
  //return false becuase such an combination dne
  return false;
};

console.log(averagePair([1, 2, 4], 2.5));
