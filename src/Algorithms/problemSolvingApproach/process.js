/** @format */

// Write a fucntion which takes in a string and returns counts of each charecter in the string

// {"h":1, "e":1, "l":2, "o":1}
// Just include alpha numberic charecters
//{"h":2} not case sensitive

function charCount(str) {
  // make an object
  let obj = {};
  // loop through the string that is given
  for (let char of str) {
    char = char.toLowerCase();
    // check for alpha-numeric chars
    if (/[a-z0-9]/.test(char)) {
      // if they are included in the obj then increment the value by 1
      if (obj[char] > 0) {
        obj[char]++;
      } // else add the char as a key in the obj and set the value to be 1
      else {
        obj[char] = 1;
      }
    }
  }

  // return the object
  return obj;
}

console.log(charCount('Hh'));
