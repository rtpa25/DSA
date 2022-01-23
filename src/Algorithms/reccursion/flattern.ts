/** @format */

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

//*iterative approach
const flatten = (arr: any[]) => {
  const arrToWord = JSON.stringify(arr);
  const newArr = arrToWord.split('');
  const arrWithoutCommasAndBraces = [];
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] !== ']' && newArr[i] !== '[' && newArr[i] !== ',') {
      arrWithoutCommasAndBraces.push(newArr[i]);
    }
  }
  const flattenArray = arrWithoutCommasAndBraces.map((element) => {
    return parseInt(element);
  });
  console.log(flattenArray);
};

flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]);
