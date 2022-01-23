/** @format */

//unsorted data
function linear(arr: any[], n: any) {
  for (var i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element === n) {
      return i;
    }
  }
  return -1;
}

console.log(linear(['s', 'q', 'a', 'z'], 'z'));

//*BEST CASE: O(1)
//*WORST CASE: O(N)
//*SO O(N) is the average
