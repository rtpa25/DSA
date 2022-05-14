/** @format */

const permutation = (str: string) => {
  let result: string[] = [];
  const helper = (p: string, up: string) => {
    if (up.length === 0) {
      result.push(p);
      return;
    }
    let ch = up[0];
    for (let i = 0; i < p.length + 1; i++) {
      let f = p.substring(0, i);
      let s = p.substring(i);
      helper(f + ch + s, up.substring(1));
    }
  };
  helper('', str);
  return result;
};

console.log(permutation('abc'));
