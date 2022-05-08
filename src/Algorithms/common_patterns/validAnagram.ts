/** @format */

function validAnagram(w1: string, w2: string): boolean {
  //if let's say the length of the two strings is not same return false
  if (w1.length !== w2.length) return false;
  //lets make an object where the key is the letter of the word and the value is basically the freq of that letter in that specific word
  let obj1 = convertStringToObj(w1);
  let obj2 = convertStringToObj(w2);
  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

const convertStringToObj = (
  w: string
): {
  [key: string]: number;
} => {
  let obj: {
    [key: string]: number;
  } = {};
  for (let i = 0; i < w.length; i++) {
    if (obj[w[i]] > 0) obj[w[i]]++;
    else obj[w[i]] = 1;
  }
  return obj;
};

// export default convertStringToObj;
console.log(validAnagram('serp', 'pers'));
