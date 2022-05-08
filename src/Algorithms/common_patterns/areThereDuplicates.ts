/** @format */

function areThereDuplicates(...args: string[]) {
  let obj1: {
    [key: string]: number;
  } = {};
  for (let i = 0; i < args.length; i++) {
    if (obj1[args[i]] > 0) {
      obj1[args[i]]++;
    } else {
      obj1[args[i]] = 1;
    }
  }

  for (let key in obj1) {
    //means the letter is repeated
    if (obj1[key] > 1) {
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicates('a', 'b', 'c', 'd', 'e', 'a'));
