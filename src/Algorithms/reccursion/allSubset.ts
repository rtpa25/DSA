/** @format */

const AllSubsetRecursive = (str: string) => {
  let result: string[] = [];
  const helper = (p: string, up: string) => {
    if (up.length === 0) {
      result.push(p);
      return;
    }
    let ch = up[0];
    helper(p + ch, up.substring(1)); //accept
    helper(p, up.substring(1)); //reject
  };
  helper('', str);
  return result;
};

console.log(AllSubsetRecursive('abc').length);

const AllSubsetItterative = (str: string) => {};
