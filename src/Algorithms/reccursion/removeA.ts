/** @format */

const removeA = (s: string) => {
  let arr = s.toLowerCase().split('');
  let answerArr: string[] = [];
  const helper = (newArr: string[], start: number) => {
    if (start >= newArr.length) {
      return;
    }
    if (newArr[start] !== 'a') {
      answerArr.push(newArr[start]);
    }
    helper(newArr, start + 1);
  };
  helper(arr, 0);
  return answerArr.join('');
};

console.log(removeA('baccad'));
