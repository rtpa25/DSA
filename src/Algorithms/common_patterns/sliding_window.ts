/** @format */

function maxSubArray(arr: number[], n: number) {
  if (arr.length < n) {
    return null;
  }
  let max = -Infinity;
  for (let i = 0; i < arr.length - n + 1; i++) {
    let temp = 0;
    for (let j = 0; j < n; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp; //O(N^2)
    }
  }
  return max;
}

console.log(maxSubarraySum([1, 2, 5, 8, 1, 5, 4], 4));

function maxSubarraySum(arr: number[], n: number) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < n) {
    return null;
  }
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let j = n; j < arr.length; j++) {
    tempSum = tempSum - arr[j - n] + arr[j];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
