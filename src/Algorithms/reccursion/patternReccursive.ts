/** @format */

// * * * * for n=4 this is the pattern that we need to print
// * * *
// * *
// *
const printStartsItterative = (n: number) => {
  let string = '';
  for (let r = n; r > 0; r--) {
    for (let c = 0; c < r; c++) {
      string += '* ';
    }
    if (r != 1) string += '\n';
  }
  return string;
};

const printStarsReccursive = (n: number) => {
  let string = '';
  const helper = (r: number, c: number) => {
    if (r == 0) return;
    if (c < r) {
      string += '* ';
      helper(r, c + 1);
    } else {
      if (r != 1) string += '\n';
      helper(r - 1, 0);
    }
  };
  helper(n, 0);
  return string;
};

console.log(printStarsReccursive(8));
