/** @format */

function naiveStringSearch(longStr: string, shortStr: string) {
  let count = 0;
  for (let i = 0; i < longStr.length; i++) {
    for (let j = 0; j < shortStr.length; j++) {
      if (shortStr[j] !== longStr[i + j]) {
        break;
      }
      //which means the internal loop completed without breaking hecne all the charecters in the shortStr match with a set of chars in the largeStr
      if (j == shortStr.length - 1) {
        count++;
      }
    }
  }
  return count;
}

console.log(naiveStringSearch('lorie loled', 'lol'));
