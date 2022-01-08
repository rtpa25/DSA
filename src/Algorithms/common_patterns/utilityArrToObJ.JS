/** @format */

const arrToObj = (arr) => {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    //case where element has a freq more than 0 in the arr
    if (obj[element] > 0) {
      obj[element]++;
    } else {
      obj[element] = 1;
    }
  }
  return obj;
};

module.exports = arrToObj;
