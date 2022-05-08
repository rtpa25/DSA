//divide and conquer
//first work on merge.
function merge(arr1, arr2) {
  //all input arrays are arranged in accending order.
  //timeComplexity is O(n+m) and spaceComplexity is O(n+m)
  let mergedArr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      mergedArr.push(arr1[i]);
      i++;
    } else {
      mergedArr.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    mergedArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    mergedArr.push(arr2[j]);
    j++;
  }
  return mergedArr;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let midPoint = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, midPoint));
  let right = mergeSort(arr.slice(midPoint));
  return merge(left, right);
}

console.log(mergeSort([10, 24, 7, 78, 20]));

//the time complexity in all cases is O(nlogn) which when broken down
//the process of breaking down the array into small pices has a time complexity of O(logn) where base is 2
//the process of merging them back is 0(m+n) but in the grand schema things it is O(n)
//So combining the time complexity is O(nlogn)
