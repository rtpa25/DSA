/** @format */

var searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (nums[middle] !== target && start <= end) {
    if (nums[middle] > target) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (nums[middle] === target) {
    return middle;
  } else {
    if (nums[middle] < target) {
      return middle + 1;
    } else {
      if (middle - 1 < 0) {
        return 0;
      }
      return middle - 1;
    }
  }
};

console.log(searchInsert([1, 2, 3, 4], 0));
