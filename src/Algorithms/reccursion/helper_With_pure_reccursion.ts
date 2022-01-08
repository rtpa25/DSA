/** @format */
const collectOddPairswithoutHelper = (arr: number[]) => {
  let result: number[] = [];
  //base case when all the entries in the array are over
  if (arr.length === 0) return result;
  //check is the first entry is odd
  if (arr[0] % 2 !== 0) result.push(arr[0]);
  result = result.concat(
    collectOddPairswithoutHelper(arr.slice(1)) as number[]
  );
  return result;
};

console.log(collectOddPairswithoutHelper([1, 2, 3, 4, 5, 6, 7, 8, 9]));
