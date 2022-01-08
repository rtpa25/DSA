/** @format */

//*non recursive way

const reverse = (word: string): string => {
  const arr = word.split('');
  const revArr = arr.reverse();
  let reverseString = '';
  for (let i = 0; i < revArr.length; i++) {
    const element = revArr[i];
    reverseString += element;
  }
  return reverseString;
};

console.log(reverse('fero'));
