/** @format */

const collectOddPairs = (arr: number[]) => {
  const result: number[] = [];
  const helper = (helperInputArray: number[]) => {
    //base-case if length 0 return
    if (helperInputArray.length === 0) return;
    //check if the first entry is odd append it to result
    if (helperInputArray[0] % 2 !== 0) result.push(helperInputArray[0]);
    //call the helper function after removing the first element of the input
    helper(helperInputArray.slice(1));
  };
  helper(arr);
  return result;
};

console.log(collectOddPairs([1, 2, 3, 4, 5, 6, 7, 8, 9]));
