/** @format */

function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]; // This has a space complexity of O(1)
  }
  return total;
} // This has just two variable assignments so independent of n

function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]); // This function has a space complexity of O(n)
  }
  return newArr;
} // This takes more space as of the length of
// the array so more the length of an array then more is the space assignment
